import PropTypes from "prop-types";
import ReactMutable from "../../core/ReactMutable.js";
import {useState} from "react";
import {MAX_Z, Star} from "./Star.jsx";
import {getRandomInt} from "../../core/NumbersUtility.js";
import {runOnMobileAndTablet} from "../../core/DeviceUtility.js";
import {getStructuredId} from "../sections/commpon_utilities/structuredId.js";


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
        (x) => setOrdinaryStars(x), []
    ));
    const [specialStars, setSpecialStars] = useState(ReactMutable.create(
        (x) => setSpecialStars(x), []
    ));
    generateTheStars();


    function generateTheStars() {
        numberOfOrdinaryStars = numberOfOrdinaryStars ?? getRecommendedNumberOfOrdinaryStars();

        const additionalSpecialStars = numberOfSpecialStars - specialStars.length;
        for (let i = 0; i < additionalSpecialStars; i++) {
            specialStars.push(getStar(100, 400));
        }
        if (additionalSpecialStars > 0)
            specialStars.notifyMutation();

        const additionalOrdinaryStars = numberOfOrdinaryStars - ordinaryStars.length;
        for (let i = 0; i < additionalOrdinaryStars; i++) {
            ordinaryStars.push(getStar(200, MAX_Z));
        }
        if (additionalOrdinaryStars > 0)
            ordinaryStars.notifyMutation();

        console.log("total number of stars: ", specialStars.length + ordinaryStars.length);
    }


    return (<>
        <svg className="star-effect-svg scene">
            {ordinaryStars.v}
            {specialStars.v}
        </svg>
    </>);
}


function getRecommendedNumberOfOrdinaryStars() {
    let numberOfOrdinaryStars = Math.ceil(getDocumentArea() / 9500);

    if (runOnMobileAndTablet())
        return Math.min(200, numberOfOrdinaryStars);
    if (numberOfOrdinaryStars > 800)
        numberOfOrdinaryStars = 800;
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
    return <Star z={getRandomInt(minRandomZ, maxRandomZ)}
                 key={getStructuredId()} />
}