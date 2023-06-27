import PropTypes from "prop-types";
import React from "react";
import {replaceNewLineWithBrTag} from "../../commpon_utilities/replaceStringWithElements.jsx";
import {urlCss} from "../../commpon_utilities/urlCss.js";
import {generateRandomId} from "../../commpon_utilities/randomId.js";

const experienceBoxPropTypes = {
    givenId: PropTypes.number,
    img_src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
};
export default function ExperienceBox({givenId, img_src, title, detail}) {
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
            <div className="more-details-btn noselect">
                More Details
            </div>


            <template id={`experience-modal-${id}`}>
                {/*    experience.modalOnClick.toString() TODO */}
            </template>
        </div>
    </>);
}
ExperienceBox.propTypes = experienceBoxPropTypes;




