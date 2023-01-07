
function parseSVG(s) {
    // credit: https://stackoverflow.com/a/3642265/7069108

    var div= document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
    div.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg">'+s+'</svg>';
    var frag= document.createDocumentFragment();
    while (div.firstChild.firstChild)
        frag.appendChild(div.firstChild.firstChild);
    return frag;
}


function createNewFourPointStar(x, y, data_depth, scaleX, scaleY, color, parent=null){
    const template = $("#four-point-star");

    const newElement = $(parseSVG(template.html()));

    const outerStarContainer = newElement.find(".outer");
    outerStarContainer.attr("data-depth", data_depth);

    const innerStarContainer = newElement.find(".inner");
    const translate = `translate(${x}px, ${y}px)`;
    innerStarContainer.css("transform", translate);

    const starPath = newElement.find(".four-point-star-path");
    const scale = `scale(${scaleX}%, ${scaleY}%)`;
    starPath.css("transform", scale);
    starPath.css("fill", color);

    if (parent != null)
        $(parent).append(newElement);

    return newElement;
}



function createNewNormalStar(x, y, data_depth, radius, color, parent=null){
    const template = $("#normal-star");

    const newElement = $(parseSVG(template.html()));

    const outerStarContainer = newElement.find(".outer");
    outerStarContainer.attr("data-depth", data_depth);

    const innerStarContainer = newElement.find(".inner");
    const translate = `translate(${x}px, ${y}px)`;
    innerStarContainer.css("transform", translate);

    const starPath = newElement.find(".normal-star-path");
    starPath.attr("r", radius);
    starPath.css("fill", color);

    if (parent != null)
        $(parent).append(newElement);

    return newElement;
}


function rgba(r, g, b, a){
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function createRandomNormalStar(z, scene){
    // -10 to keep it from overflow
    const maxX = document.documentElement.scrollWidth - 10;
    const maxY = document.documentElement.scrollHeight - 10;

    // let's say z is the star's distance
    const minZ = 100;
    const maxZ = 3500;
    const dataDepthForMinZ = 0.3;
    const sizeForMinZ = 2.5;
    console.assert(minZ <= z && z <= maxZ);


    const x = getRandomInt(0, maxX);
    const y = getRandomInt(0, maxY);

    const size = sizeForMinZ * (minZ / z);
    const dataDepth = dataDepthForMinZ * (minZ / z) ** 1.5;

    createNewNormalStar(x, y, dataDepth, size, "bisque", scene);
}


$(document).ready(() => {
    const scene = document.getElementsByClassName('scene')[0];

    for (let i = 0; i < 50; i++) {
        createRandomNormalStar(getRandomInt(120, 500), scene);
    }

    for (let i = 0; i < 1000; i++) {
        createRandomNormalStar(getRandomInt(200, 3500), scene);
    }

    // createNewNormalStar(100, 200, 0.5, 0.5, "bisque", scene);
    // createNewNormalStar(150, 200, 0.5, 1, "bisque", scene);
    // createNewNormalStar(200, 200, 0.5, 2, "bisque", scene);

    // createNewNormalStar(300, 200, 0.5, 3, "white", scene);
    // createNewNormalStar(350, 200, 0.5, 3, rgba(255, 0, 0, 0.3), scene);

    // createNewFourPointStar(100, 200, 0.1, 200, 200, "bisque", scene);
    // createNewFourPointStar(200, 200, 0.1, 200, 200, "white", scene);


    // const parallaxInstance = new Parallax(scene, {
    //     relativeInput: true
    // });
    scrollParallax(scene);

});