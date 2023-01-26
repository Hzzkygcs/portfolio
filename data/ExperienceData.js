const {Experience} = require("../models/Experience");
const {Modal} = require("../models/Modal");
const {Carousel} = require("../models/view-models/Carousel");
const {IHtmlElement} = require("../models/view-models/IHtmlElement");


const workExperiences = [
    new Experience(
        '/img/fexb.png',
        'FExB FEB UI',
        'Backend Engineer',
        new Modal("FExB FEB UI", [
            new Carousel([
                "/img/experiences/fexb/main-page-1.png",
                "/img/experiences/fexb/main-page-2.png",
                "/img/experiences/fexb/tickets.png",
            ])
        ]),
    ),
    new Experience(
        '/img/fasilkom ui.png',
        'Universitas Indonesia',
        'Teaching Asistant \n Computer Science UI',
        new Modal("Universitas Indonesia", [
            new Carousel([
                "/img/experiences/ristek/about-cp.png",
                "/img/experiences/ristek/team-cp.png",
            ]),
            new IHtmlElement("div", ['a', 'b'], {'data-c': 'd', 'data-e': 'f'},
                [])
        ]),
    ),
];
const organizationExperiences = [
    new Experience(
        '/img/ristek.jpg',
        'Ristek',
        'Member and Lead of Competitive Programming',
        new Modal("Ristek", [
                new Carousel([
                    "/img/experiences/ristek/about-cp.png",
                    "/img/experiences/ristek/team-cp.png",
                ])
        ]),
    ),

];


module.exports.experienceGroups = {
    "Work Experiences": workExperiences,
    "Organization": organizationExperiences,
};