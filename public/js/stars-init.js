
$(document).ready(() => {
    const documentArea = document.documentElement.scrollWidth * document.documentElement.scrollHeight;
    const scene = document.getElementsByClassName('scene')[0];

    let starsCount = Math.ceil(documentArea / 6500);  // exclude special stars
    starsCount = Math.min(900, starsCount);  // mencegah terlalu banyak bintang nanti jadi ngelag
    console.log("Number of stars:", starsCount);

    if (runOnMobileAndTablet())
        starsCount = 200;

    for (let i = 0; i < 95; i++) {
        createRandomNormalStar(getRandomInt(120, 500), scene);
    }

    for (let i = 0; i < starsCount; i++) {
        createRandomNormalStar(getRandomInt(200, MAX_Z), scene);
    }

    const allStars = $(scene).find("*[data-depth]");
    for (const star of allStars) {
        const jqueryStar = $(star);
        jqueryStar.css("--data-depth", jqueryStar.attr("data-depth"));
    }

});


function parseSVG(s) {
    // credit: https://stackoverflow.com/a/3642265/7069108

    let div= document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
    div.innerHTML= '<svg xmlns="http://www.w3.org/2000/svg">'+s+'</svg>';
    let frag= document.createDocumentFragment();
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


const MIN_Z = 100;
const MAX_Z = 1500;

function createRandomNormalStar(z, scene){
    // -10 to keep it from overflow
    const maxX = document.documentElement.scrollWidth - 10;
    const maxY = document.documentElement.scrollHeight - 10;

    // let's say z is the star's distance
    const minZ = MIN_Z;
    const maxZ = MAX_Z;
    let dataDepthForMinZ = 0.4;
    if (runOnMobileAndTablet()){
        dataDepthForMinZ = 0.5;
    }
    const sizeForMinZ = 2.5;
    console.assert(minZ <= z && z <= maxZ);


    const x = getRandomInt(0, maxX);
    const y = getRandomInt(0, maxY);

    const size = sizeForMinZ * (minZ / z);
    let dataDepth = dataDepthForMinZ * (minZ / z) ** 1.5 ;
    dataDepth = dataDepth * getRandomInt(100, 105) / getRandomInt(100, 105);

    createNewNormalStar(x, y, dataDepth, size, "bisque", scene);
}


