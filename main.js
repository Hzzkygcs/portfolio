const express = require("express");

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile("public/portofolio.html", {root: __dirname });
});

app.listen(8080, () => console.log("Listening"));
