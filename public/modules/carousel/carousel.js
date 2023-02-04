const carouselMetadata = new ModuleMetadataManager("carousel");

const isAnimationRunningKey = "is-animation-running";
const onAnimationEndExecutionStackKey = "on-animation-end-execution-stack";

const currPageKey = "curr-page";
const detailTextElementsKey = "detail-text-elements";
const contentTemplate = "content-template";

function initializeCarousel(carousel_carouselId){
    let carousel = $(carousel_carouselId);
    if (typeof carousel_carouselId === 'string' || carousel_carouselId instanceof String)
        carousel = $("#" + carousel_carouselId);

    carouselMetadata.setMetadata(carousel, currPageKey, 0);
    carouselMetadata.setMetadata(carousel, contentTemplate,
        $(carousel.find(".content-template").html()).filter("img")
    );

    const newPage = carouselDeployNewSlide(carousel, 0);
    carouselAnimateSlideAnimation([], newPage, leftClass);
    carouselInitializeDetailTexts(carousel);
    carouselSetDetailText(carousel, 0);
    carouselAddNoDetailClassIfAllDetailsAreNull(carousel);

    carousel.find(".prev-next-container.prev").click(
        () => carouselChangeSlide(carousel, false));
    carousel.find(".prev-next-container.next").click(
        () => carouselChangeSlide(carousel, true));
}
function carouselInitializeDetailTexts(carousel) {
    const details = carouselGetDetailTextsArray(carousel);
    const detailContainer = $(carousel).find(".detail");
    const detailElements = [];

    for (const detail of details) {
        const span = $("<span />");
        if (detail != null) {
            span.text(detail);
        }
        span.css('opacity', 0);
        span.addClass("stack-item");

        detailElements.push(span[0]);
        detailContainer.append(span);
    }
    carouselMetadata.setMetadata(carousel, detailTextElementsKey, $(detailElements));
}
function carouselAddNoDetailClassIfAllDetailsAreNull(carousel){
    const details = carouselGetDetailTextsArray(carousel);
    for (const detail of details) {
        if (detail != null)
            return;
    }
    $(carousel).addClass("no-detail");
}

function carouselGetDetailTextsArray(carousel){
    return JSON.parse(
        carousel.find(".detail-text-template").html()
    );
}




const activeClass = "active";
const notAciveClass = "not-active";
const deactivatingClass = "deactivating";
const activatingClass = "activating";
const leftClass = "left";
const rightClass = "right";



function carouselChangeSlide(carousel_carouselId, goToNext = true) {
    let carousel = jqueryToNormalObject(carousel_carouselId);
    if (typeof carousel_carouselId === 'string' || carousel_carouselId instanceof String)
        carousel = document.getElementById(carousel_carouselId);

    const pageTemplate = carouselMetadata.getMetadata(carousel, contentTemplate);
    const currPage = carouselMetadata.getMetadata(carousel, "curr-page");
    const pageIncrement = goToNext? 1 : -1;
    let nextPage = (currPage + pageIncrement) % pageTemplate.length;
    nextPage = (pageTemplate.length + nextPage) % pageTemplate.length;  // handle negative number modulo by positive
    carouselMetadata.setMetadata(carousel, currPageKey, nextPage);
    carouselSetDetailText(carousel, nextPage);

    const contentLayer = $(carousel).find(".content-layer");
    const currentPages = contentLayer.children();
    const nextPageEl = carouselDeployNewSlide(carousel, nextPage)
    const slideDirectionClass = goToNext ? leftClass : rightClass;
    carouselAnimateSlideAnimation([getLastItem(currentPages)], nextPageEl, slideDirectionClass)
}
function getLastItem(arr){
    return arr[arr.length - 1];
}

function carouselSetDetailText(carousel, page) {
    carousel = $(carousel);

    const detailTextElements = carouselMetadata.getMetadata(carousel, detailTextElementsKey);
    const currDetailText = $(detailTextElements[page]);
    const animationDuration = 120;

    detailTextElements.animate({opacity: 0}, animationDuration, () => {
        currDetailText.animate({opacity: 1}, animationDuration, () => {
            detailTextElements.not(currDetailText).css('opacity', 0);
        });
    })
}

function carouselSetUpSlide(slideEl){
    slideEl = $(slideEl);

    carouselMetadata.setMetadata(slideEl, onAnimationEndExecutionStackKey, []);
    carouselMetadata.setMetadata(slideEl, isAnimationRunningKey, false);
    slideEl.on("animationstart",
        () => carouselMetadata.setMetadata(slideEl, isAnimationRunningKey, true));

    slideEl.on("animationend", () => {
        console.log("animationend", getId(slideEl));
        carouselMetadata.setMetadata(slideEl, isAnimationRunningKey, false);

        const executionStack = getExecutionStackOnAnimationFinished(slideEl);
        executeOnAnimationFinished(executionStack);
    });
}

let nextZIndex = 1;
function carouselDeployNewSlide(carousel, index) {
    const contents = carouselMetadata.getMetadata(carousel, contentTemplate);
    const contentLayer = $(carousel).find(".content-layer");

    const nextPageEl = $(contents[index].outerHTML);
    nextPageEl.addClass("not-active");
    nextPageEl.css('position', 'relative');
    nextPageEl.css('z-index', nextZIndex++);
    contentLayer.append(nextPageEl);

    carouselMetadata.setMetadata(nextPageEl, isAnimationRunningKey, false);
    carouselMetadata.setMetadata(nextPageEl, onAnimationEndExecutionStackKey, []);
    carouselSetUpSlide(nextPageEl);
    return nextPageEl;
}

function carouselAnimateSlideAnimation(currentPages, nextPageEl, slideDirectionClass){
    for (const currPageEl of currentPages){
        addCodeExecutionStackOnAnimationFinished(currPageEl,
            () => nextState(currPageEl, slideDirectionClass));  // from active to deactivating
        addCodeExecutionStackOnAnimationFinished(currPageEl,
            () => {nextState(currPageEl, slideDirectionClass); return true;});  // from deactivating to removal
    }

    addCodeExecutionStackOnAnimationFinished(nextPageEl,
        () => nextState(nextPageEl, slideDirectionClass));  // from not-active to activating
    addCodeExecutionStackOnAnimationFinished(nextPageEl,
        () => {nextState(nextPageEl, slideDirectionClass); return true;});  // from activating to active
}




function getExecutionStackOnAnimationFinished(element){
    return carouselMetadata.getMetadata(element, onAnimationEndExecutionStackKey);
}


/**
 * @param element
 * @param func return true if the function did not trigger css animation to the `element`
 * @param immediatelyExecuteIfNoAnimation
 * @param immediatelySetElementAsRunningAnAnimation
 */
function addCodeExecutionStackOnAnimationFinished(
    element, func, immediatelyExecuteIfNoAnimation=true,
    immediatelySetElementAsRunningAnAnimation=true)
{
    const executionStack = getExecutionStackOnAnimationFinished(element);
    executionStack.push(func);

    if (!immediatelyExecuteIfNoAnimation)
        return;

    const isAnimationRunning = carouselMetadata.getMetadata(element, isAnimationRunningKey);
    if (!isAnimationRunning) {
        executeOnAnimationFinished(executionStack);
        if (immediatelySetElementAsRunningAnAnimation)
            carouselMetadata.setMetadata(element, isAnimationRunningKey, true)
    }
}
function executeOnAnimationFinished(funcStack){
    if (funcStack.length === 0)
        return;

    let func = funcStack.pop();
    let immediateTriggerNextExecution = func();
    while (immediateTriggerNextExecution && funcStack.length > 0) {
        func = funcStack.pop();
        immediateTriggerNextExecution = func();
    }
}



function nextState(el, direction){
    el = $(el);

    if (el.hasClass(notAciveClass))
        return changeStateFromNotActiveToActivating(el, direction);
    else if (el.hasClass(activatingClass))
        return changeStateFromActivatingToActive(el);
    else if (el.hasClass(activeClass))
        return changeStateFromActiveToDeactivating(el, direction);
    else if (el.hasClass(deactivatingClass))
        return changeStateFromDeactivatingToVoid(el);
}

function changeStateFromActivatingToActive(el){
    el = $(el);
    debug(`Activating to active ` + getId(el));
    console.assert(el.hasClass(activatingClass));
    removeDirectionClass(el);
    removeAndAddClasses(el, [activatingClass], [activeClass]);
}

function changeStateFromActiveToDeactivating(el, direction) {
    el = $(el);
    debug(`Active to deactivating ` + getId(el));
    console.assert(el.hasClass(activeClass));
    assertDirectionValid(direction);
    removeAndAddClasses(el, [activeClass], [deactivatingClass, direction]);
}

function changeStateFromDeactivatingToVoid(el){
    el = $(el);
    debug(`Deactivating to not-active ` + getId(el));
    console.assert(el.hasClass(deactivatingClass));
    el.remove();
}

function changeStateFromNotActiveToActivating(el, direction){
    el = $(el);
    debug(`not active to activating ` + getId(el));
    console.assert(el.hasClass(notAciveClass));
    assertDirectionValid(direction);
    removeAndAddClasses(el, [notAciveClass], [activatingClass, direction]);
}





function removeAndAddClasses(el, removeClasses = [], addClasses = []){
    el = $(el);
    for (const class_ of removeClasses) {
        el.removeClass(class_);
    }
    for (const class_ of addClasses) {
        el.addClass(class_);
    }
}

function removeDirectionClass(el) {
    el = $(el);
    removeAndAddClasses(el, [leftClass, rightClass], []);
}

function assertDirectionValid(direction) {
    console.assert(direction === leftClass || direction === rightClass);
}


function debug(msg){
    console.log(msg);
}