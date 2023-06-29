import PropTypes from "prop-types";
import {urlCss} from "../../commpon_utilities/urlCss.js";
import {generateRandomId} from "../../commpon_utilities/randomId.js";

const skillsPropTypes = {
    tooltipText: PropTypes.string.isRequired,
    clickUrl: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    id: PropTypes.number,
};
export default function Skills({tooltipText, clickUrl, imgUrl, id}) {
    const elementNumericalId = id ?? generateRandomId();
    const elementId = `skill-${elementNumericalId}`;



    return (<>

        <div className="skill-thumbnail-box"
             id={elementId}
             data-tippy-content={tooltipText}>
            <a className="skill-link"
               href={clickUrl}
               target="_blank">
                <div style={{
                    "--img-url": urlCss(imgUrl),
                }}>
                </div>
            </a>
        </div>
    </>);
}
Skills.propTypes = skillsPropTypes;
