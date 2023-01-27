const {htmlEncode} = require("./util");

class IHtmlElement{
    tag_name;
    attributes;

    /**
     * @param {string} tag_name
     * @param {string[]} classes
     * @param {Object} attributes
     * @param {IElement[]} children
     * @param {string} openingLeftSymbol
     * @param {string} openingRightSymbol
     * @param {string|null} endingLeftSymbol
     */
    constructor(tag_name, classes=[], attributes={}, children=[],
                openingLeftSymbol='<', openingRightSymbol='>', endingLeftSymbol='</'
    ) {
        this.tag_name = tag_name;
        this.attributes = attributes;
        this.children = children;

        this.openingLeftSymbol = openingLeftSymbol;
        this.openingRightSymbol = openingRightSymbol;
        this.endingLeftSymbol = endingLeftSymbol;

        if (!('class' in this.attributes))
            this.attributes['class'] = "";
        this.attributes['class'] += ' ';
        this.attributes['class'] += `${classes.join(' ')}`;
    }

    toString(){
        const open = this.openingToString();
        const body = this.bodyToString();
        const close = this.closingToString();
        return `${open}${body}${close}`;
    }


    openingToString(){
        const leftSymbol = this.openingLeftSymbol;
        const tag_name = this.tag_name;
        const attributes = this.attributesToString();
        const rightSymbol = this.openingRightSymbol;
        return `${leftSymbol}${tag_name} ${attributes}${rightSymbol}`;
    }


    attributesToString(){
        const ret = [];
        for (const attr of Object.keys(this.attributes)) {
            ret.push(this.attributeToString(attr));
        }
        return ret.join(' ');
    }


    attributeToString(attr){
        const attrKey = attr;
        const attrVal = this.attributes[attr];
        const attrValEncoded = htmlEncode(attrVal);

        return `${attrKey}="${attrValEncoded}"`;
    }

    bodyToString(){
        const ret = [];
        for (const child of this.children) {
            ret.push(child.toString());
        }
        return ret.join("");
    }

    closingToString(){
        if (this.endingLeftSymbol == null)
            return "";

        const leftSymbol = this.endingLeftSymbol;
        const tag_name = this.tag_name;
        const rightSymbol = this.openingRightSymbol;
        return `${leftSymbol}${tag_name}${rightSymbol}`;
    }
}
module.exports.IHtmlElement = IHtmlElement;


