import PropTypes from "prop-types";
import {getRandomInt} from "../../core/NumbersUtility.js";
import {runOnMobileAndTablet} from "../../core/DeviceUtility.js";
import "../../../public/css/star.css";

export const MIN_Z = 100;
export const MAX_Z = 1200;


Star.propTypes = {
    z: PropTypes.number.isRequired,  // z-coordinate (how far the stars from the observer)
};

export function Star({z}) {
    const {x, y, dataDepth, radius, color} = getRandomStarMetadata(z);

    return (<>
        <g className="outer" data-depth={dataDepth} style={{'--data-depth': dataDepth}}>
            <g className="inner star-container" style={{
                'transform': translateCssCode(x, y)
            }}>
                <circle className="normal-star-path"
                        r={radius} fill={color} />
            </g>
        </g>
    </>);
}


function getRandomStarMetadata(z) {
    // -10 to keep it from overflow
    const starsPadding = 25;
    const maxX = document.documentElement.scrollWidth - starsPadding;
    const maxY = document.documentElement.scrollHeight - starsPadding;

    // let's say z is the star's distance
    const minZ = MIN_Z;
    const maxZ = MAX_Z;
    let dataDepthForMinZ = 0.4;
    if (runOnMobileAndTablet()){
        dataDepthForMinZ = 0.5;
    }
    const sizeForMinZ = 2.5;
    console.assert(minZ <= z && z <= maxZ);


    const x = getRandomInt(starsPadding, maxX);
    const y = getRandomInt(starsPadding, maxY);

    const size = sizeForMinZ * (minZ / z);
    let dataDepth = dataDepthForMinZ * (minZ / z) ** 1.5 ;
    dataDepth = dataDepth * getRandomInt(100, 105) / getRandomInt(100, 105);
    return {
        x, y,
        dataDepth, radius: size,
        "color": "bisque",
    };
}

function translateCssCode(x, y) {
    return `translate(${x}px, ${y}px)`;
}