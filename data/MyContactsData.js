const {MyContacts} = require("../models/MyContacts");

const myContacts = new MyContacts(
    "immanuel.nuel02@gmail.com",
    "https://www.linkedin.com/in/immanuel-/",
    "https://github.com/Hzzkygcs",
    "https://gitlab.com/immanuel.nuel02",
    "https://www.instagram.com/immanuel_312/",
    "https://stackoverflow.com/users/7069108/hzzkygcs",
);
module.exports.myContacts = myContacts;