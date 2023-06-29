// Pros:
// more-visible everytime re-rendered due to state changes/mutation, which is important to prevent confusion
//      -> It is more visible because we need to explicitly call notifyMutation()
// More efficient, compared to deep-cloning entire object everytime we do some mutation
// Cons:
// less-cleaner due to more boilerplate code (we need to call notifyMutation() everytime new state changes)
import {getStructuredId} from "../components/sections/commpon_utilities/structuredId.js";
import _ from "lodash";

class ReactMutationCloner {
    #idReactMutationCloner;
    #setStateFunction;
    #mutableValue;

    get v(){ // get value
        return this.#mutableValue;
    }
    get mutationId(){
        return this.#idReactMutationCloner;
    }

    constructor(setStateFunction, mutableValue) {
        this.#idReactMutationCloner = getStructuredId();
        this.#setStateFunction = setStateFunction;
        this.#mutableValue = mutableValue;
    }

    performMutation(mutatorFunction){
        const targetMutableValue = _.cloneDeep(this.#mutableValue);
        mutatorFunction(targetMutableValue);

        const newVersion = create(this.#setStateFunction, targetMutableValue);
        this.#setStateFunction(newVersion);
    }

    __globalGetter(target, name){
        // if try to access a property/method that ReactMutationCloner does not have,
        // then forward it to this.mutableValue
        console.assert(Object.is(target, this));

        let ret;
        let bindingContext;

        if (name in this){
            bindingContext = this;
            ret = this[name];
        } else {
            bindingContext = this.#mutableValue;
            ret = this.#mutableValue[name];
        }
        if (typeofFunction(ret)) {
            return ret.bind(bindingContext);
        }
        return Object.freeze(ret);
    }

    __globalSetter(target, name, value){
        this.performMutation((object) => object[name] = value);
        return true;
    }
    __globalDeleter(target, name){
        this.performMutation((object) => delete object[name]);
        return true;
    }
}

/**
 * @template T
 * @param setStateFunction
 * @param {T} mutableValue
 * @returns {ReactMutationCloner|T}
 */
function create(setStateFunction, mutableValue) {
    console.warn("ReactMutationCloner is not yet tested");
    const instance = new ReactMutationCloner(setStateFunction, mutableValue);

    return new Proxy(instance, {
        get(target, name) {
            return instance.__globalGetter(target, name)
        },
        deleteProperty(target, name) {
            return instance.__globalDeleter(target, name)
        },
        set(target, name, value) {
            return instance.__globalSetter(target, name, value)
        }
    });
}

function typeofFunction(value) {
    return typeof value === 'function';
}



export default {
    create,
};