
class Experience{
    img_src;
    title;
    detail;

    constructor(img_src, title, detail) {
        this.img_src = img_src;
        this.title = title;
        this.detail = detail.replace("\n", "<br>");
    }
}

module.exports.Experience = Experience;