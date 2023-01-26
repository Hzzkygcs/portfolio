const ejs = require("ejs");
const fs = require("fs");
const {IElement} = require("./IElement");
const {join} = require("path");

const rootFolderPath = require.main.path;

class IEjsElement extends IElement{
    constructor(templatePath, data={}) {
        super();
        this.templatePath = templatePath;
        this.data = data;
    }

    toString() {
        const file = fs.readFileSync(join(rootFolderPath, this.templatePath), 'ascii');
        return ejs.render(file, this.data);
    }
}

module.exports.IEjsElement = IEjsElement;