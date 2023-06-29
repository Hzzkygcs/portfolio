import PropTypes from "prop-types";
import {getRandomInt} from "../../core/NumbersUtility.js";
import {runOnMobileAndTablet} from "../../core/DeviceUtility.js";
import "../../../public/css/star.css";

export const MIN_Z = 100;
export const MAX_Z = 601;

export const Z_OPTIONS = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];


Star.propTypes = {
    z: PropTypes.number.isRequired,  // z-coordinate (how far the stars from the observer)
};

export function Star({z}) {
    const {x, y, dataDepth, radius, color} = getRandomStarMetadata(z);

    // these stars will orbit/move in circular motion
    return (<>
            <g style={{ /* responsible for star's center position of-the-circle orbit */
                'transform': translateCssCode(x, y),
                '--data-depth': dataDepth,
            }}>
                <circle className="normal-star-path"
                        r={radius} fill={color} />
            </g>
    </>);
}


function getRandomStarMetadata(z) {
    // -10 to keep it from overflow
    const starsPadding = 25;
    const maxX = document.documentElement.scrollWidth - starsPadding;
    const maxY = document.documentElement.scrollHeight - starsPadding;

    const x = getRandomInt(starsPadding, maxX);
    const y = getRandomInt(starsPadding, maxY);

    return {
        x, y,
        ...getDataDepth(z),
        "color": "bisque",
    };
}

export function getDataDepth(z) {
    // let's say z is the star's distance
    const minZ = MIN_Z;
    const maxZ = MAX_Z;
    const sizeForMinZ = 2.5;
    console.assert(minZ <= z && z <= maxZ, z);

    let dataDepthForMinZ = 0.4;
    if (runOnMobileAndTablet()){
        dataDepthForMinZ = 0.5;
    }
    let dataDepth = dataDepthForMinZ * (minZ / z) ** 1.5 ;
    const radius = sizeForMinZ * (minZ / z);

    dataDepth = dataDepth * getRandomInt(100, 105) / getRandomInt(100, 105);
    return {
        dataDepth, radius
    }
}

function translateCssCode(x, y) {
    return `translate(${x}px, ${y}px)`;
}