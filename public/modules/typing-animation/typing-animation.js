
let loadedEpochMilliSeconds = Date.now();
$(document).ready(() => {
    $(".js-not-loaded").removeClass("js-not-loaded");

    const typingAnimationElements = $(".typing-animation");

    for (const typingAnimationElement of typingAnimationElements) {
        const typingAnimation = new TypingAnimation(typingAnimationElement);
        typingAnimation.onCurrentIterationStarted();

        window.typingAnimation = typingAnimation;
    }
});


function convert_an_to_a(){
    return new Promise((res, rej) => {
        $('#a-an').fadeOut(800);
        res();
    });
}
function convert_a_to_an(){
    return new Promise((res, rej) => {
        $('#a-an').fadeIn(800);
        res();
    });
}


function sortTypingAnimationByDataOrder(a, b){
    const orderA = $(a).attr("data-order");
    const orderB = $(b).attr("data-order");
    return parseInt(orderA) - parseInt(orderB);
}


class TypingAnimation{
    element;
    currentIndex;

    beforeHidingDelayDuration = 0; // ms
    afterHidingDelayDuration = 0; // ms
    poppingUpDurationForEachLetter = 80;  // ms
    hidingDurationForEachLetter = 50;

    constructor(element) {
        element = $(element);
        this.element = element;

        this.children = element.children();

        this.children.sort(sortTypingAnimationByDataOrder);
        this.currentIndex = 0;

        for (const child of this.children) {
            this.convertLettersToSpans(child);
        }
    }

    convertLettersToSpans(element){
        element = $(element);

        const text = element.text();
        element.empty();

        for (const char of text) {
            const span = $("<span></span>");
            span.text(char);
            span.hide();

            element.append(span);
        }
    }

    getCurrentElement(){
        return this.children[this.currentIndex];
    }
    incrementIndex(){
        this.currentIndex += 1;
        this.currentIndex %= this.children.length;
    }


    onCurrentIterationStarted(){
        const deferred = this.showElement(this.getCurrentElement());
        deferred.promise.then(() => {
            this.onCurrentIterationFinished();
        });

        const typingEventHandlerCode = $(this.getCurrentElement()).attr("ontypingthis");
        eval(typingEventHandlerCode);
    }
    onCurrentIterationDelayed(){
        const promise = sleep(this.beforeHidingDelayDuration);
        promise.then(() => {
            this.onCurrentIterationFinished();
        });
    }
    onCurrentIterationFinished(){
        const deferred = this.hideElement(this.getCurrentElement());

        deferred.promise.then(() => {
            this.incrementIndex();
            this.onCurrentIterationStarted();
        });
    }
    onCurrentIterationBeforeStartingDelay(){
        const promise = sleep(this.afterHidingDelayDuration);
        promise.then(() => {
            this.onCurrentIterationStarted();
        });
    }



    /**
     * Element should contain spans. Each span should only have one character.
     * @param element
     * @return {Deferred}
     */
    hideElement(element){
        element = $(element);
        const spans = element.children("span");

        let numberOfCompletedAnimation = 0;
        let deferred = new Deferred();

        for (let i = 0; i < spans.length; i++) {
            const span = spans[i];
            const duration = (spans.length - i) * this.hidingDurationForEachLetter;

            const hiding = () => {
                $(span).fadeOut(duration, () => {
                    numberOfCompletedAnimation++;
                    if (numberOfCompletedAnimation === spans.length)
                        deferred.resolve();
                });
            }
            // delayedCallback(duration/2, hiding);
            hiding();
        }
        return deferred;
    }

    /**
     * Element should contain spans. Each span should only have one character.
     * @param element
     * @return {Deferred}
     */
    showElement(element){
        element = $(element);
        const spans = element.children("span");

        let numberOfCompletedAnimation = 0;
        let deferred = new Deferred();

        for (let i = 0; i < spans.length; i++) {
            const span = spans[i];
            const duration = (i + 1) * this.poppingUpDurationForEachLetter;

            const showing = () => {
                $(span).fadeIn(duration*3/5, () => {
                    numberOfCompletedAnimation++;
                    if (numberOfCompletedAnimation === spans.length)
                        deferred.resolve();
                })
            }
            delayedCallback(duration*2/5, showing);
        }
        return deferred;
    }

}