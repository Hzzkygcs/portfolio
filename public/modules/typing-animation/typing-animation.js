
$(document).ready(() => {
    const typingAnimationElements = $(".typing-animation");
    typingAnimationElements.addClass("inline-stack-layout");
    typingAnimationElements.children().addClass("stack-item");

    for (const typingAnimationElement of typingAnimationElements) {
        const typingAnimation = new TypingAnimation(typingAnimationElement);
        typingAnimation.onCurrentIterationStarted();

        window.typingAnimation = typingAnimation;
    }
    typingAnimationElements.removeClass("not-ready");
});




function sortTypingAnimationByDataOrder(a, b){
    const orderA = $(a).attr("data-order");
    const orderB = $(b).attr("data-order");
    return parseInt(orderA) - parseInt(orderB);
}


class TypingAnimation{
    element;
    currentIndex;

    beforeHidingDelayDuration = 1500; // ms
    afterHidingDelayDuration = 100; // ms
    poppingUpDurationForEachLetter = 120;  // ms
    hidingDurationForEachLetter = 80;

    constructor(element) {
        element = $(element);
        this.element = element;

        this.children = element.children("*:not(.excluded-from-animation)");

        this.children.sort(sortTypingAnimationByDataOrder);
        this.currentIndex = 0;

        for (const child of this.children) {
            this.convertLettersToSpans(child);
        }
    }

    convertLettersToSpans(element){
        element = $(element);

        const text = element.text().trim();
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
        const {promise} = this.showElement(this.getCurrentElement());
        promise.promise.then(() => {
            this.onCurrentIterationDelayed();
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
        const {promise} = this.hideElement(this.getCurrentElement());
        promise.promise.then(() => {
            this.incrementIndex();
            this.onCurrentIterationDelayedBeforeStarting();
        });
    }
    onCurrentIterationDelayedBeforeStarting(){
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

        let duration;
        for (let i = 0; i < spans.length; i++) {
            const span = spans[i];
            duration = (spans.length - i) * this.hidingDurationForEachLetter;

            const hiding = () => {
                this._playFadeOutAnimation(span, duration, "swing", () => {
                    numberOfCompletedAnimation++;
                    if (numberOfCompletedAnimation === spans.length)
                        deferred.resolve();
                });
            }
            hiding();
        }
        return {
            promise: deferred,
            durationEstimation: duration
        };
    }
    _playFadeOutAnimation(element, duration, ease, callback){
        element = $(element);
        const animation = {opacity: 0};
        const parent = element.parent();

        element.animate(animation, duration, ease, () => {
            if (parent.hasClass("display-none-at-the-end"))
                element.css('display', 'none');
            callback();
        });
    }


    /**
     * Element should contain spans. Each span should only have one character.
     * @param element
     * @return Object
     */
    showElement(element){
        element = $(element);
        const spans = element.children("span");

        let numberOfCompletedAnimation = 0;
        let deferred = new Deferred();

        let duration;
        for (let i = 0; i < spans.length; i++) {
            const span = spans[i];
            duration = (i + 1) * this.poppingUpDurationForEachLetter;

            const showing = () => {
                this._playFadeInAnimation(span, duration*3/5, "swing", () => {
                    numberOfCompletedAnimation++;
                    if (numberOfCompletedAnimation === spans.length)
                        deferred.resolve();
                });
            }
            delayedCallback(duration*2/5, showing);
        }
        return {
            promise: deferred,
            durationEstimation: duration,
        };
    }

    _playFadeInAnimation(element, duration, ease, callback){
        $(element).css('opacity', 0);
        $(element).css('display', 'initial');
        $(element).animate({opacity: 1, display: "default"}, duration, ease, callback);
    }

}