const {IEjsElement} = require("./foundation/IEjsElement");
let id = 0;

class Carousel extends IEjsElement{
    /**
     * @param {string[]} classess
     * @param {(string|object)[]} slidesImagePathAndDetailText list of (string or {src, detailText})
     */
    constructor(classess, slidesImagePathAndDetailText) {
        super("sections/used-templates/carousel-template.ejs", {
            carouselId: `carousel-${id++}`,
            carouselClasses: classess,
            imgSources: null,
            detailTexts: null,
        });
        this._splitSlidesImagePathAndDetailText(slidesImagePathAndDetailText);
    }

    _splitSlidesImagePathAndDetailText(slidesImagePathAndDetailText){
        const imgSources = [];
        const detailTexts = [];
        for (const slideData of slidesImagePathAndDetailText) {
            if (typeof slideData === 'string' || slideData instanceof String){
                imgSources.push(slideData);
                detailTexts.push(null);
                continue;
            }
            imgSources.push(slideData['src']);
            detailTexts.push(slideData['detailText']);
        }
        this.setData('imgSources', imgSources);
        this.setData('detailTexts', detailTexts);
    }
}
module.exports.Carousel = Carousel;