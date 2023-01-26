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
}

module.exports.Modal = Modal;