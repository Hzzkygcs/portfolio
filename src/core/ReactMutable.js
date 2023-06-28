let numberOfReactWrapMutableObjects = 0;

// Pros:
// more-visible everytime re-rendered due to state changes/mutation, which is important to prevent confusion
//      -> It is more visible because we need to explicitly call notifyMutation()
// More efficient, compared to deep-cloning entire object everytime we do some mutation
// Cons:
// less-cleaner due to more boilerplate code (we need to call notifyMutation() everytime new state changes)
class ReactMutable {
    #idReactMutable;
    #setStateFunction;
    #mutableValue;

    get v(){ // get value
        return this.#mutableValue;
    }

    constructor(setStateFunction, mutableValue) {
        this.#idReactMutable = numberOfReactWrapMutableObjects++;
        this.#setStateFunction = setStateFunction;
        this.#mutableValue = mutableValue;
    }

    getNewMutationVersion(){
        return new ReactMutable(this.#setStateFunction, this.#mutableValue);
    }

    notifyMutation(){
        this.#setStateFunction(this.getNewMutationVersion())
    }

    __globalGetter(target, name){
        // if try to access a property/method that ReactMutable does not have,
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
        return ret;
    }
}

function create(setStateFunction, mutableValue) {
    const instance = new ReactMutable(setStateFunction, mutableValue);

    return new Proxy(instance, {
        get(target, name) {
            return instance.__globalGetter(target, name)
        }
    });
}

function typeofFunction(value) {
    return typeof value === 'function';
}

export default {
    create: create,
};