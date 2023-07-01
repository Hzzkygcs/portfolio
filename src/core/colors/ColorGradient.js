import {ElementwiseArray} from "./ElementwiseArray.js";


export function generateColorGradientAsHex(startingColor, endingColor, numberOfReturnedArrayElement){
    const result = generateColorGradient(startingColor, endingColor, numberOfReturnedArrayElement);
    const ret = [];

    for (const colorRgb of result) {
        ret.push(rgbToHex(...colorRgb));
    }
    console.log(ret)
    return ret;
}


/**
 * @param {Array<number>} startingColor
 * @param {Array<number>} endingColor
 * @param {number} numberOfReturnedArrayElement
 * @return {Array<Array<number>>}
 */
export function generateColorGradient(startingColor, endingColor, numberOfReturnedArrayElement){
    console.assert(numberOfReturnedArrayElement > 0)
    if (numberOfReturnedArrayElement === 1)
        return [startingColor];

    const startingColorVector = new ElementwiseArray(startingColor);
    const endingColorVector = new ElementwiseArray(endingColor);

    const totalDifference = endingColorVector.substract(startingColorVector);
    const totalNumberOfIncremental = numberOfReturnedArrayElement - 1;
    const incremental = totalDifference.div(totalNumberOfIncremental);

    const ret = [];
    for (let i = 0; i < numberOfReturnedArrayElement; i++) {
        const generatedColor = startingColorVector.add(incremental.mult(i));
        ret.push(
            generatedColor.array.map(number => Math.round(number))
        );
    }
    return ret;
}




function VBColorToHEX(i) {
    var bbggrr =  ("000000" + i.toString(16)).slice(-6);
    var rrggbb = bbggrr.substr(4, 2) + bbggrr.substr(2, 2) + bbggrr.substr(0, 2);
    return "#" + rrggbb;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
