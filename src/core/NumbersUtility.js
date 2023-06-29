/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function gaussianRandom(mean=0, stdev=1) {
    // credit: https://stackoverflow.com/a/36481059/7069108

    let u = 1 - Math.random(); //Converting [0,1) to (0,1)
    let v = Math.random();
    let z = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
}


export function getUrlHashValue(){
    const locationHash = location.hash;  // #blabla?query1=value1&query2=value2
    const hashtagSymbolRemoved = locationHash.substring(1);
    return hashtagSymbolRemoved.split("?")[0];  // remove url queries
}


export function minimumAbsolute(x, y){
    return Math.min(
        Math.abs(x),
        Math.abs(y),
    );
}

