import PropTypes from "prop-types";
import React from "react";
import {replaceNewLineWithBrTag} from "../../commpon_utilities/replaceStringWithElements.jsx";
import {urlCss} from "../../commpon_utilities/urlCss.js";
import {generateRandomId} from "../../commpon_utilities/randomId.js";

ExperienceBox.propTypes = {
    givenId: PropTypes.number,
    img_src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    children: PropTypes.any,
    onClick: PropTypes.func,
};
export default function ExperienceBox({givenId, img_src, title, detail, children, onClick=()=>{}}) {
    const id = givenId ?? generateRandomId();

    return (<>
        <div className="experience-div" id={`experience-${id}`}>
            <div className="title-photo-and-details-container">
                <div>
                    <div className="thumbnail-box"
                         style={{
                             backgroundImage: urlCss(img_src),
                         }}>
                    </div>
                </div>
                <div className="title-and-details-container">
                    <h3 className="title">
                        {title}
                    </h3>
                    <p className="detail">
                        {replaceNewLineWithBrTag(detail)}
                    </p>
                </div>
            </div>
            <div className="more-details-btn noselect" onClick={onClick}>
                More Details
            </div>

            {children}
        </div>
    </>);
}





