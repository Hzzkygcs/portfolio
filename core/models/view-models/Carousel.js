const {IEjsElement} = require("./foundation/IEjsElement");
let id = 0;

class Carousel extends IEjsElement{
    constructor(classess=[], imgSources) {
        super("sections/used-templates/carousel-template.ejs", {
            carouselId: `carousel-${id++}`,
            imgSources: imgSources,
            carouselClasses: classess,
        });
    }
}
module.exports.Carousel = Carousel;