class Deferred {
    static PENDING = 0;
    static RESOLVED = 1;
    static REJECTED = 2;

    constructor() {
        this.promise = new Promise((resolve, reject)=> {
            this.state = Deferred.PENDING;

            this.reject = (val) => {
                if (this.state === Deferred.PENDING) {
                    this.state = Deferred.REJECTED;
                    reject(val);
                }
            }

            this.resolve = (val) => {
                if (this.state === Deferred.PENDING){
                    this.state = Deferred.RESOLVED;
                    resolve(val);
                }
            }
        })
    }

    static any(arrOfPromise){
        const ret = new Deferred();

        (async () => {
            try{
                const res = await Promise.any(arrOfPromise);
                ret.resolve(res);
            }catch (e){
                ret.reject(e);
            }
        })();

        return ret;
    }

    static getResolvedDeferred(value){
        const ret = new Deferred();
        ret.resolve(value);
        return ret;
    }
}

function sleep(ms) {
    if (ms <= 0)
        return Promise.resolve();
    return new Promise(resolve => setTimeout(resolve, ms));
}

function delayedCallback(ms, callback){
    if (ms <= 0)
        return callback();
    sleep(ms).then(callback);
}