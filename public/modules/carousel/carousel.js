const carouselMetadata = new ModuleMetadataManager("carousel");

const isAnimationRunningKey = "is-animation-running";
const onAnimationEndExecutionStackKey = "on-animation-end-execution-stack";

const currPageKey = "curr-page";
const contentTemplate = "content-template";

function initializeCarousel(carouselId){
    const carousel = $("#" + carouselId);

    carouselMetadata.setMetadata(carousel, currPageKey, 0);
    carouselMetadata.setMetadata(carousel, contentTemplate,
        $(carousel.find(".content-template").html()).filter("img")
    );
    const newPage = carouselDeployNewSlide(carousel, 0);
    carouselAnimateSlideAnimation([], newPage, leftClass);
}





const activeClass = "active";
const notAciveClass = "not-active";
const deactivatingClass = "deactivating";
const activatingClass = "activating";
const leftClass = "left";
const rightClass = "right";



function carouselChangeSlide(carouselId, goToNext = true) {
    const carousel = document.getElementById(carouselId);
    const contentLayer = $(carousel).find(".content-layer");
    const currentPages = contentLayer.children();
    const pageTemplate = carouselMetadata.getMetadata(carousel, contentTemplate);
    const slideDirectionClass = goToNext ? leftClass : rightClass;

    const pageIncrement = goToNext? 1 : -1;
    const currPage = carouselMetadata.getMetadata(carousel, "curr-page");
    let nextPage = (currPage + pageIncrement) % pageTemplate.length;
    nextPage = (pageTemplate.length + nextPage) % pageTemplate.length;  // handle negative number modulo by positive
    carouselMetadata.setMetadata(carousel, currPageKey, nextPage);

    const nextPageEl = carouselDeployNewSlide(carousel, nextPage)
    carouselAnimateSlideAnimation([getLastItem(currentPages)], nextPageEl, slideDirectionClass)
}
function getLastItem(arr){
    return arr[arr.length - 1];
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
    if (funcStack.length == 0)
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