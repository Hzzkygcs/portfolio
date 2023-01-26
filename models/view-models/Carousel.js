const {IEjsElement} = require("./IEjsElement");
let id = 0;

class Carousel extends IEjsElement{
    constructor(imgSources) {
        super("templates/sections/used-templates/carousel-template.ejs", {
            carouselId: `carousel-${id++}`,
            imgSources: imgSources
        });
    }
}
module.exports.Carousel = Carousel;