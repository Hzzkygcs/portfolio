export class ElementwiseArray{

    /**
     * @type {Array<number>} array
     */
    array;

    /**
     * @param {Array<number>} array
     * @constructor
     */
    constructor(array){
        this.array = array;
    }

    add(other){
        console.assert(other instanceof ElementwiseArray);
        return new ElementwiseArray(this.array.map(
            (el, i) => el + other.array[i]
        ));
    }

    substract(other){
        console.assert(other instanceof ElementwiseArray);
        return new ElementwiseArray(this.array.map(
            (el, i) => el - other.array[i]
        ));
    }

    mult(factor){
        return new ElementwiseArray(this.array.map(
            (el, i) => el * factor
        ));
    }

    div(divider){
        return new ElementwiseArray(this.array.map(
            (el, i) => el / divider
        ));
    }
}