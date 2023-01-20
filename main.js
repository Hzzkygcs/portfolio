const express = require("express");
const {experienceGroups} = require("./data/ExperienceData");
const {skillGroups} = require("./data/SkillData");
const {myContacts} = require("./data/MyContactsData");

const app = express();

app.set('views', __dirname + '\\templates');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.get("/", (req, res) => {

    res.render("portofolio.ejs", {
        "experienceGroups": experienceGroups,
        "skillGroups": skillGroups,
        "myContacts": myContacts,
    });
});

app.listen(8080, () => console.log("Listening"));
