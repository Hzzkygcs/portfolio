const ejs = require("ejs");
const fs = require("fs");
const {IElement} = require("./IElement");
const {join} = require("path");
const {viewDirectories} = require("../../../configuration/viewDirectories");

const rootFolderPath = require.main.path;

class IEjsElement extends IElement{
    constructor(ejsFileName, data={}, ejsViewDirectories=null) {
        super();

        if (ejsViewDirectories == null)
            ejsViewDirectories = viewDirectories;

        this.ejsFileName = ejsFileName;
        this.data = data;
        this.ejsViewDirectories = ejsViewDirectories;
    }

    toString() {
        const filePath = getEjsFilePath(this.ejsFileName, this.ejsViewDirectories)
        const file = fs.readFileSync(filePath, 'ascii');
        return ejs.render(file, this.data);
    }
}

module.exports.IEjsElement = IEjsElement;


/**
 * Throw if multiple file with the same file-name is found
 * @param ejsFileName
 * @param viewDirectories
 */
function getEjsFilePath(ejsFileName, viewDirectories) {
    const ret = [];
    for (const viewDirectory of viewDirectories) {
        const ejsTemplatePath = join(viewDirectory, ejsFileName);

        if (fs.existsSync(ejsTemplatePath))
            ret.push(ejsTemplatePath);
    }

    console.assert(ret.length === 1);  // assert unique
    return ret[0];
}