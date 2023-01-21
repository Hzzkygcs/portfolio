const express = require("express");
const {experienceGroups} = require("./data/ExperienceData");
const {skillGroups} = require("./data/SkillData");
const {myContacts} = require("./data/MyContactsData");

const app = express();

app.set('views', __dirname + '\\templates');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.get("/", (req, res) => {

    const gradient1 = [
        "#2C4057",
        "#1B2735",
        "#2C4057",
        "#1B2735",
        "#2C4057",
    ];
    const gradient2 = [
        "#1C1F2F",
        "#090A0F",
        "#1C1F2F",
        "#090A0F",
        "#1C1F2F",
    ];

    res.render("portofolio.ejs", {
        "experienceGroups": experienceGroups,
        "skillGroups": skillGroups,
        "myContacts": myContacts,
        "colorsForEachSection": gradient2,
    });
});

app.listen(8080, () => console.log("Listening"));
