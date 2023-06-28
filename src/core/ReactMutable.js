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
    get mutationId(){
        return this.#idReactMutable;
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
        const newMutationVersion = this.getNewMutationVersion();
        this.#setStateFunction(newMutationVersion)
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

    __globalSetter(target, name, value){
        console.assert(Object.is(target, this));
        if (name in this){
            this[name] = value;
            return true;
        }
        this.v[name] = value;
        return true;
    }
    __globalDeleter(target, name){
        console.assert(Object.is(target, this));
        if (name in this){
            delete this[name];
            return true;
        }
        delete this.v[name];
        return true;
    }
}

/**
 * @template T
 * @param setStateFunction
 * @param {T} mutableValue
 * @returns {ReactMutable|T}
 */
function create(setStateFunction, mutableValue) {
    const instance = new ReactMutable(setStateFunction, mutableValue);

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
    create: create,
};