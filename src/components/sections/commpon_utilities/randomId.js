export function generateRandomId() {
    return getRandomInt(1, 1000_000);
}


export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
}
