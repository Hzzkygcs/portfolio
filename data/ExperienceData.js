const {Experience} = require("../models/Experience");


const workExperiences = [
    new Experience(
        '/img/fexb.png',
        'FExB FEB UI',
        'Backend Engineer'
    ),
    new Experience(
        '/img/fasilkom ui.png',
        'Universitas Indonesia',
        'Teaching Asistant \n Computer Science UI'
    ),
];
const organizationExperiences = [
    new Experience(
        '/img/ristek.jpg',
        'Ristek',
        'Member and Lead of Competitive Programming'
    ),

];


module.exports.experienceGroups = {
    "Work Experiences": workExperiences,
    "Organization": organizationExperiences,
};