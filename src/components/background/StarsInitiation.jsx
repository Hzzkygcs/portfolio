import PropTypes from "prop-types";
import ReactMutable from "../../core/ReactMutable.js";
import {useState} from "react";
import {getDataDepth, MAX_Z, Star} from "./Star.jsx";
import {getRandomInt, roundToNearestNumber} from "../../core/NumbersUtility.js";
import {runOnMobileAndTablet} from "../../core/DeviceUtility.js";
import {getStructuredId} from "../sections/commpon_utilities/structuredId.js";
import {sum} from "lodash";


/*
Special stars = tend to be more bigger and closer. Hard coded number of stars
Ordinary stars = can be big and can be small. The number of stars depends on the area of the monitor
 */
StarBackground.propTypes = {
    numberOfOrdinaryStars: PropTypes.number,
    numberOfSpecialStars: PropTypes.number,
};

export function StarBackground({numberOfOrdinaryStars=null, numberOfSpecialStars=100}) {

    // const { height, width } = useWindowDimensions();
    const [ordinaryStars, setOrdinaryStars] = useState(ReactMutable.create(
        (x) => setOrdinaryStars(x), {}
    ));
    const [specialStars, setSpecialStars] = useState(ReactMutable.create(
        (x) => setSpecialStars(x), {}
    ));
    generateOverallStars();


    function generateOverallStars() {
        numberOfOrdinaryStars = numberOfOrdinaryStars ?? getRecommendedNumberOfOrdinaryStars();

        const additionalSpecialStars = numberOfSpecialStars - getNumberOfStars(specialStars.v);
        generateStars(additionalSpecialStars, 100, 400, specialStars);

        const additionalOrdinaryStars = numberOfOrdinaryStars - getNumberOfStars(ordinaryStars.v);
        generateStars(additionalOrdinaryStars, 200, MAX_Z, ordinaryStars);
        console.log("total number of stars: ", getNumberOfStars(specialStars.v) + getNumberOfStars(ordinaryStars.v));
    }
    function generateStars(additionalNumberOfStars, minZ, maxZ, array) {
        for (let i = 0; i < additionalNumberOfStars; i++) {
            const {z, element} = getStar(minZ, maxZ);
            if (array[z] === undefined)
                array[z] = [];
            array[z].push(element);
        }
        if (additionalNumberOfStars > 0)
            array.notifyMutation();
    }


    return (<>
        <svg className="star-effect-svg scene">
            {unpackTheDictionaryOfStars(ordinaryStars.v)}
            {unpackTheDictionaryOfStars(specialStars.v)}
        </svg>
    </>);
}

function getNumberOfStars(dictionary) {
    const arrayOfLengths = Object.values(dictionary).map(arr => arr.length);
    return sum(arrayOfLengths);
}

function unpackTheDictionaryOfStars(dictionary) {
    const zValues = Object.keys(dictionary);

    const ret = [];

    for (const zValue of zValues) {
        // for (const star of dictionary[zValue]) {
        //     ret.push(star);
        // }


        const {dataDepth} = getDataDepth(zValue);
        const elements = dictionary[zValue];
        ret.push(<g className="inner-inner"> {/* responsible for star's rotation (orbit) */}

            {/* responsible for star's position slightly to the right. combined to the
                    rotation above, this will create circular-motion to the star. */}
            <g className={'inner-3th'}
               key={getStructuredId()}
               style={{'--data-depth': dataDepth}}>
                {elements}
            </g>
        </g>)
    }
    return ret;
}


function getRecommendedNumberOfOrdinaryStars() {
    let numberOfOrdinaryStars = Math.ceil(getDocumentArea() / 12500);

    if (runOnMobileAndTablet())
        return Math.min(200, numberOfOrdinaryStars);
    const maximumNumberOfOrdinaryStars = 500;
    numberOfOrdinaryStars = Math.min(maximumNumberOfOrdinaryStars, numberOfOrdinaryStars);
    return numberOfOrdinaryStars;
}


/**
 * @deprecated I think it's not perfectly working on react
 * @returns {number}
 */
function getDocumentArea() {
    console.log('w', document.documentElement.scrollWidth, 'h', document.documentElement.scrollHeight)
    return document.documentElement.scrollWidth * document.documentElement.scrollHeight;
}


function getStar(minRandomZ, maxRandomZ) {
    let z = getRandomInt(minRandomZ, maxRandomZ);
    z = roundToNearestNumber(z, 50);
    // console.log('z', z)
    return {
        z,
        'element': <Star z={z}
                         key={getStructuredId()} />
    }
}