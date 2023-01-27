const {IEjsElement} = require("./view-models/foundation/IEjsElement");

class Modal{
    /**
     * @param {string} title
     * @param {IElement[]} modalContent
     */
    constructor(title, modalContent=[]) {
        this.title = title;
        this.modalContent = modalContent;
    }

    toString(){
        console.log("call tostring");
        const ret = [];
        for (const content of this.modalContent) {
            ret.push(content.toString());
        }
        return ret.join("")
    }

    static fromEjs(title, ejsTemplatePath, ejsData={}){
        return new Modal(title, [
            new IEjsElement(ejsTemplatePath, ejsData)
        ]);
    }
}

module.exports.Modal = Modal;