const {urlencoded} = require("express");

class Experience{
    img_src;
    title;
    detail;

    /**
     * @param {string} imgSrc
     * @param {string} title
     * @param {string} detail
     * @param {Modal} modalOnClick
     */
    constructor(imgSrc, title, detail, modalOnClick) {
        this.img_src = imgSrc;
        this.title = title;
        this.detail = detail.replace("\n", "<br>");
        this.modalOnClick = modalOnClick;
    }

    getUrlHashId(){
        const partiallyEncodedTitle = this.title.replaceAll(" ", '-').toLowerCase();
        return encodeURIComponent(partiallyEncodedTitle);
    }
}

module.exports.Experience = Experience;