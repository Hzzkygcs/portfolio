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
        "#263345",
        "#1C1F2F",
        "#263345",
        "#1C1F2F",
    ];
    const gradient3 = [
        "#1C1F2F",
        "#23273B",
        "#282C42",
        "#2C314A",
        "#313652",
    ];
    const gradient4 = [
        "#192429",
        "#1d292f",
        "#212e36",
        "#25343c",
        "#293942",
    ];

    res.render("portofolio.ejs", {
        "experienceGroups": experienceGroups,
        "skillGroups": skillGroups,
        "myContacts": myContacts,
        "colorsForEachSection": gradient4,
    });
});

app.listen(8080, () => console.log("Listening"));
