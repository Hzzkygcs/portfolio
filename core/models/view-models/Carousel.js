const {IEjsElement} = require("./foundation/IEjsElement");
let id = 0;

class Carousel extends IEjsElement{

    /**
     * @param {string[]} classess
     * @param {(string|object)[]} slidesImagePathAndExplanation list of (string or {src, explanation})
     */
    constructor(classess, slidesImagePathAndExplanation) {
        super("sections/used-templates/carousel-template.ejs", {
            carouselId: `carousel-${id++}`,
            carouselClasses: classess,
            imgSources: null,
            explanations: null,
        });
        this._splitSlidesImagePathAndExplanation(slidesImagePathAndExplanation);
    }

    _splitSlidesImagePathAndExplanation(slidesImagePathAndExplanation){
        const imgSources = [];
        const explanations = [];
        for (const slideData of slidesImagePathAndExplanation) {
            if (typeof slideData === 'string' || slideData instanceof String){
                imgSources.push(slideData);
                explanations.push(null);
                continue;
            }
            imgSources.push(slideData['src']);
            explanations.push(slideData['explanation']);
        }
        this.data.imgSources = imgSources;
        this.data.explanations = explanations;
    }
}
module.exports.Carousel = Carousel;