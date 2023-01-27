const express = require("express");
const {experienceGroups} = require("./core/data/experience-data/ExperienceData");
const {skillGroups} = require("./core/data/SkillData");
const {myContacts} = require("./core/data/MyContactsData");
const {gradients, gradientSpreadPercentage} = require("./core/configuration/style");
const {viewDirectories} = require("./core/configuration/viewDirectories");

const app = express();

app.set('views', viewDirectories);
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.get("/", (req, res) => {

    res.render("portofolio.ejs", {
        "experienceGroups": experienceGroups,
        "skillGroups": skillGroups,
        "myContacts": myContacts,
        "colorsForEachSection": gradients.gradient4,
        "gradientSpreadPercentage": gradientSpreadPercentage,
    });
});

app.listen(8080, () => console.log("Listening"));
