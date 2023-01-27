let skillId = 0;
class Skill{
    id;
    img_src;
    url;
    tooltip_text;

    constructor(img_src, click_url, tooltip_text) {
        this.id = skillId++;
        this.img_src = img_src;
        this.click_url = click_url;
        this.tooltip_text = tooltip_text;
    }
}

module.exports.Skill = Skill;