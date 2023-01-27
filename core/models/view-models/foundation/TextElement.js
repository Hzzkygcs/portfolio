const {IElement} = require("./IElement");
const {htmlEncode} = require("./util");

class TextElement extends IElement{
    constructor(text) {
        super();
        this.text = text;
    }

    toString() {
        return htmlEncode(this.text);
    }
}

module.exports.TextElement = TextElement;