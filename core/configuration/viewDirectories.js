const {rootFolderPath} = require("./rootFolderPath");
const Path = require("path");


const viewDirectories = [
    Path.join(rootFolderPath, 'templates'),
    Path.join(rootFolderPath, 'core/data/experience-data/modal'),
];

module.exports.viewDirectories = viewDirectories;