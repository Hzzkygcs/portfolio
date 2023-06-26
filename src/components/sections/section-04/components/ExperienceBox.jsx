import PropTypes from "prop-types";
import React from "react";

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



function generateRandomId() {
    return getRandomInt(1, 1000_000);
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
}

function urlCss(content) {
    return `url('${content}')`
}

function replaceNewLineWithBrTag(sourceString) {
    return replaceStringWithElement(sourceString, "\n", <br />);
}

function replaceStringWithElement(sourceString, targetString, element) {
    const splitted = sourceString.split(targetString);
    const ret = [];

    for (let i = 0; i < splitted.length-1; i++) {
        const evenId = 2 * i;
        const oddId = evenId + 1;

        ret.push(<React.Fragment key={evenId}>{splitted[i]}</React.Fragment>);
        ret.push(React.cloneElement(element, {
            key: oddId,
        }));
    }
    const lastSplitted = splitted[splitted.length - 1]
    ret.push(lastSplitted);

    return ret;
}