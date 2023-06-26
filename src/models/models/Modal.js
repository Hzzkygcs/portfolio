
export default class Modal{
    /**
     * @param {string} title
     * @param {IElement[]} modalContent
     */
    constructor(title, modalContent=[]) {
        this.title = title;
        this.modalContent = modalContent;
        this.debugMode = false;  // debugMode true means the modal dialog will automatically be opened on page load
    }

    toString(){
        console.log("call tostring");
        const ret = [];
        for (const content of this.modalContent) {
            ret.push(content.toString());
        }
        return ret.join("")
    }

    debugModeOn(){
        this.debugMode = true;
        return this;
    }

    static fromEjs(title, ejsTemplatePath, ejsData={}){
        return new Modal(title, [
            new IEjsElement(ejsTemplatePath, ejsData)
        ]);
    }
}
