const {Experience} = require("../../models/Experience");
const {Modal} = require("../../models/Modal");
const {Carousel} = require("../../models/view-models/Carousel");
const {IHtmlElement} = require("../../models/view-models/foundation/IHtmlElement");
const {TextElement} = require("../../models/view-models/foundation/TextElement");
const {AsdosExperience} = require("../AsdosExperience");


const experienceCarouselsClass = "experience-carousels";

const workExperiences = [
    new Experience(
        '/img/fexb.png',
        'FExB FEB UI',
        'Backend Engineer',
        Modal.fromEjs(
            "FExB FEB UI", "fexb-feb-ui.ejs", {
                carousel: new Carousel([experienceCarouselsClass], [
                    "/img/experiences/fexb/main-page-1.png",
                    "/img/experiences/fexb/main-page-2.png",
                    "/img/experiences/fexb/tickets.png",
                ]),
            }),
    ),
    new Experience(
        '/img/fasilkom ui.png',
        'Universitas Indonesia',
        'Teaching Assistant \n Computer Science UI',
        Modal.fromEjs(
            "Teaching Assistant at CS UI", "universitas-indonesia.ejs",
            {
                asdosExperiences: [
                    new AsdosExperience("Jul 2021", "Jan 2022",
                        "Programming Foundations 1", "1 - 2021/2022"),
                    new AsdosExperience("Jan 2022", "Jun 2022",
                        "Programming Foundations 2", "2 - 2021/2022"),
                    new AsdosExperience("Aug 2022", "Jan 2023",
                        "Data Structures and Algorithms", "1 - 2022/2023"),
                    new AsdosExperience("Jan 2023", "Present",
                        "Advanced Programming", "2 - 2022/2023"),
                ].reverse()
            }),
    ),
];
const organizationExperiences = [
    new Experience(
        '/img/ristek.jpg',
        'Ristek',
        'Member and Lead of Competitive Programming',
        Modal.fromEjs("Ristek", "ristek-experience-modal.ejs", {
            carousel: new Carousel([experienceCarouselsClass], [
                "/img/experiences/ristek/about-cp.png",
                "/img/experiences/ristek/team-cp.png",
            ]),
        }).debugModeOn(),
    ),

];


module.exports.experienceGroups = {
    "Work Experiences": workExperiences,
    "Organization": organizationExperiences,
};