
function setTranslate3d(element, x, y, z=0){
    element = $(element);
    element.css("transform", translate3d(x, y, z));
    element.attr("data-trans-x", x);
    element.attr("data-trans-y", y);
    element.attr("data-trans-z", z);
}

function getTranslate3d(element){
    element = $(element);
    return {
        "x": element.attr("data-trans-x"),
        "y": element.attr("data-trans-y"),
        "z": element.attr("data-trans-z"),
    }
}


function translate3d(x, y, z=0){
    return `translate3d(${x}px, ${y}px, ${z}px)`;
}



function simulateParallaxMouseMove(parallaxInstance, clientX, clientY){
    console.log("simulate", clientX, clientY);
    const event = $.Event('mousemove');

    event.clientX = clientX;
    event.clientY = clientY;

    // trigger event
    parallaxInstance.onMouseMove(event);
}

function scrollParallax(parallaxInstance){
    const hammer = new Hammer(document.getElementsByTagName("body")[0], {
        touchAction: 'auto',
    });
    hammer.get("pan").set({ direction: Hammer.DIRECTION_ALL, threshold: 0 });
    hammer.get('swipe').set({ enable: false });




    let scrollX = 0;
    let scrollY = 0;
    hammer.on('panmove', (e) => {
        console.log(e.isFinal);
        scrollX -= e.deltaX*4;
        scrollY -= e.deltaY*4;

        simulateParallaxMouseMove(parallaxInstance, scrollX, scrollY);
    });
    hammer.on('panend', (e) => {
        console.log("pan end");
        simulateParallaxMouseMove(parallaxInstance, scrollX, scrollY);
    });




    document.addEventListener('gesturechange', function() {});
}