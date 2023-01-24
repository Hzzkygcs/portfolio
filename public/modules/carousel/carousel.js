const carouselMetadata = new ModuleMetadataManager("carousel");

const isAnimationRunningKey = "is-animation-running";
const onAnimationEndExecutionStackKey = "on-animation-end-execution-stack";

function initializeCarousel(carouselId){
    const carousel = $("#" + carouselId);
    const contents = $(carousel).find(".content-layer").children();

    carouselMetadata.setMetadata(carousel, currPageKey, 0);
    for (let content of contents) {
        content = $(content);

        carouselMetadata.setMetadata(content, onAnimationEndExecutionStackKey, []);
        carouselMetadata.setMetadata(content, isAnimationRunningKey, false);
        content.on("animationstart",
            () => carouselMetadata.setMetadata(content, isAnimationRunningKey, true));

        content.on("animationend", () => {
            console.log("animationend", getId(content));
            carouselMetadata.setMetadata(content, isAnimationRunningKey, false);

            const executionStack = getExecutionStackOnAnimationFinished(content);
            executeOnAnimationFinished(executionStack);
        });
    }
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
    let func = funcStack.pop();
    let immediateTriggerNextExecution = func();
    while (immediateTriggerNextExecution && funcStack.length > 0) {
        func = funcStack.pop();
        immediateTriggerNextExecution = func();
    }
}



const currPageKey = "curr-page";

const activeClass = "active";
const notAciveClass = "not-active";
const deactivatingClass = "deactivating";
const activatingClass = "activating";
const leftClass = "left";
const rightClass = "right";


function carouselChangeSlide(carouselId, goToNext=true){
    const carousel = document.getElementById(carouselId);
    const contents = $(carousel).find(".content-layer").children();

    const pageIncrement = goToNext? 1 : -1;
    const currPage = carouselMetadata.getMetadata(carousel, "curr-page");
    const nextPage = (currPage + pageIncrement) % contents.length;
    carouselMetadata.setMetadata(carousel, currPageKey, nextPage);

    const slideDirectionClass = goToNext ? leftClass : rightClass;
    const currPageEl = contents.eq(currPage);
    const nextPageEl = contents.eq(nextPage);

    addCodeExecutionStackOnAnimationFinished(currPageEl,
        () => nextState(currPageEl, slideDirectionClass));  // from active to deactivating
    addCodeExecutionStackOnAnimationFinished(currPageEl,
        () => {nextState(currPageEl, slideDirectionClass); return true;});  // from deactivating to not-active

    addCodeExecutionStackOnAnimationFinished(nextPageEl,
        () => nextState(nextPageEl, slideDirectionClass));  // from not-active to activating
    addCodeExecutionStackOnAnimationFinished(nextPageEl,
        () => {nextState(nextPageEl, slideDirectionClass); return true;});  // from activating to active
}



function nextState(el, direction){
    el = $(el);
    if (el.hasClass(activatingClass))
        return changeStateFromActivatingToActive(el);
    else if (el.hasClass(activeClass))
        return changeStateFromActiveToDeactivating(el, direction);
    else if (el.hasClass(deactivatingClass))
        return changeStateFromDeactivatingToNotActive(el);
    else if (el.hasClass(notAciveClass))
        return changeStateFromNotActiveToActivating(el, direction);
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

function changeStateFromDeactivatingToNotActive(el){
    el = $(el);
    debug(`Deactivating to not-active ` + getId(el));
    console.assert(el.hasClass(deactivatingClass));
    removeDirectionClass(el);
    removeAndAddClasses(el, [deactivatingClass], [notAciveClass]);
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