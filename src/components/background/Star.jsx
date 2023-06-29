import PropTypes from "prop-types";
import {getRandomInt} from "../../core/NumbersUtility.js";
import {runOnMobileAndTablet} from "../../core/DeviceUtility.js";
import "../../../public/css/star.css";

export const MIN_Z = 100;
export const MAX_Z = 1000;


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
                <g className="inner-inner"> {/* responsible for star's rotation (orbit) */}

                    {/* responsible for star's position slightly to the right. combined to the
                    rotation above, this will create circular-motion to the star. */}
                    <g className={'inner-3th'}
                       style={{'--data-depth': dataDepth}}>

                        <circle className="normal-star-path"
                                r={radius} fill={color} />
                    </g>
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