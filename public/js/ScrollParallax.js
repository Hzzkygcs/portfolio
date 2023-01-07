
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

function scrollParallax(sceneElement){
    sceneElement = $(sceneElement);

    const parallaxElements = sceneElement.children("*[data-depth]");
    parallaxElements.addClass("fixed-pos-for-mobile");


    function updateEvent(currYScroll){
        // const currYScroll = $(window).scrollTop();
        console.log("Scroll " + currYScroll);

        for (let element of parallaxElements) {
            element = $(element);

            const dataDepth = element.attr("data-depth");
            const translateY = currYScroll * (1 - 2*dataDepth);
            setTranslate3d(element, 0, translateY);

        }
    }

    const hammer = new Hammer(document.getElementsByTagName("body")[0]);
    hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL, threshold: 0 });

    let prevScrollY = 0;
    hammer.on('panmove', (e) => {
        const currScrollY = Math.max(0, prevScrollY - e.deltaY);
        console.log();
        updateEvent(-currScrollY)

        // $(document).scrollTop(currScrollY);
        setTranslate3d($(".content"), 0, -currScrollY);
    });
    hammer.on('panend', (e) => {
        prevScrollY -= e.deltaY;
        prevScrollY = Math.max(0, prevScrollY);
    });




    document.addEventListener('gesturechange', function() {});
}