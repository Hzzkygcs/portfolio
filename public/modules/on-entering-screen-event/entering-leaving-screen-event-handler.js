
// on-entire-visibility-changed
// on-partial-visibility-changed

// each has:
// previous visibility: null (on page load), ABOVE_VIEWPORT, BELOW_VIEWPORT, VISIBLE
// current visibility: ABOVE_VIEWPORT, BELOW_VIEWPORT, VISIBLE
// element: element


const VISIBILITY = {
    ABOVE_VIEWPORT: -10,
    VISIBLE: 1,
    BELOW_VIEWPORT: 10,
};


// event name
const ENTIRE_VISIBILITY_CHANGED = "entire-visibility-changed";
const PARTIAL_VISIBILITY_CHANGED = "partial-visibility-changed";

// html attributes name
const ON_ENTIRE_VISIBILITY_CHANGED = "onEntireVisibilityChanged";
const ON_PARTIAL_VISIBIITY_CHANGED = "onPartialVisibilityChanged";

let metadataManager = new ModuleMetadataManager("on-entering-screen-event");
let watchedElements = [];

$(document).ready(() => {
    let elementsToBeWatched;


    elementsToBeWatched = document.querySelectorAll(`*[${ON_PARTIAL_VISIBIITY_CHANGED}]`);
    for (const element of elementsToBeWatched) {
        watchedElements.push(element);

        const attributeHandlerCode = element.getAttribute(ON_PARTIAL_VISIBIITY_CHANGED);
        element.addEventListener(PARTIAL_VISIBILITY_CHANGED, (event) => {
            eval(attributeHandlerCode);
        });
    }

    elementsToBeWatched = document.querySelectorAll(`*[${ON_ENTIRE_VISIBILITY_CHANGED}]`);
    for (const element of elementsToBeWatched) {
        watchedElements.push(element);

        const attributeHandlerCode = element.getAttribute(ON_ENTIRE_VISIBILITY_CHANGED);
        element.addEventListener(ENTIRE_VISIBILITY_CHANGED, (event) => {
            eval(attributeHandlerCode);
        });
    }

    watchedElements = uniqBy(watchedElements, (el) => {
        return getId(el);
    });
});

function fireEvents(){
    for (const element of watchedElements) {
        fireEventSpecificElement(element);
    }
}
$(document).scroll(fireEvents);




/**
 * Including padding and border width
 * @param element non jquery element
 * @return {number} VISIBILITY constants
 */
function fireEventSpecificElement(element){
    firePartialVisibilityEventForSpecificElement(element);
    fireEntireVisibilityEventForSpecificElement(element);
}

function firePartialVisibilityEventForSpecificElement(element){
    let prevPartialVisibility = metadataManager.getMetadata(element, "prev-partial-visibility");
    if (prevPartialVisibility == null)
        prevPartialVisibility = null;
    const currPartialVisibility = getPartialVisibility(element);
    metadataManager.setMetadata(element, "prev-partial-visibility", currPartialVisibility);

    if (prevPartialVisibility !== currPartialVisibility){
        dispatchEventVisibility(PARTIAL_VISIBILITY_CHANGED,
            element, prevPartialVisibility, currPartialVisibility);
    }
}
function fireEntireVisibilityEventForSpecificElement(element){
    let prevEntireVisibility  = metadataManager.getMetadata(element, "prev-entire-visibility");
    if (prevEntireVisibility == null)
        prevEntireVisibility = null;
    const currEntireVisibility = getEntireVisibility(element);
    metadataManager.setMetadata(element, "prev-entire-visibility", currEntireVisibility);

    if (prevEntireVisibility !== currEntireVisibility){
        dispatchEventVisibility(ENTIRE_VISIBILITY_CHANGED,
            element, prevEntireVisibility, currEntireVisibility);
    }
}



function dispatchEventVisibility(eventName, element, previousVisibility, currentVisibility){
    const details = {
        element: element,
        previousVisibility: previousVisibility,
        currentVisibility: currentVisibility,
    };

    element.dispatchEvent(
        new CustomEvent(eventName, {
            detail: details
        }),
    );
}





/**
 * Including padding and border width
 * @param element non jquery element
 * @return {number} VISIBILITY constants
 */
function getEntireVisibility(element) {
    // get x, y, bottom, and right-most position relative to viewport (current screen position)
    const elementRect = element.getBoundingClientRect();

    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const belowScreenUpperbound = (elementRect.y >= 0);
    const aboveScreenLowerbound = (elementRect.bottom <= viewHeight);
    const visible = (belowScreenUpperbound && aboveScreenLowerbound);
    if (visible)
        return VISIBILITY.VISIBLE;
    if (belowScreenUpperbound)
        return VISIBILITY.BELOW_VIEWPORT;
    console.assert(aboveScreenLowerbound);
    return VISIBILITY.ABOVE_VIEWPORT;
}



/**
 * return true if viewport and the element intersects
 * Including padding and border width.
 * @param element non jquery element
 * @return {number} VISIBILITY constants
 */
function getPartialVisibility(element) {
    // get x, y, bottom, and right-most position relative to viewport (current screen position)
    const elementRect = element.getBoundingClientRect();

    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const viewportRect = {  // relative to the viewport itself
        y: 0,
        bottom: viewHeight,
        height: viewHeight,
    };


    const viewportBottomsideIsBelowElementsUpperside = elementRect.y < viewportRect.bottom;
    const viewportUppersideIsAboveElementBottomside = viewportRect.y < elementRect.bottom;
    const theyIntersects = (
        viewportBottomsideIsBelowElementsUpperside
        && viewportUppersideIsAboveElementBottomside
    );
    if (theyIntersects)
        return VISIBILITY.VISIBLE;
    if (elementRect.bottom <= 0)
        return VISIBILITY.ABOVE_VIEWPORT;
    console.assert(elementRect.y >= viewHeight)
    return VISIBILITY.BELOW_VIEWPORT;
}

