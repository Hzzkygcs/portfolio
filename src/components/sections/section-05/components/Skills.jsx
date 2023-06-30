import PropTypes from "prop-types";
import {urlCss} from "../../commpon_utilities/urlCss.js";
import {generateRandomId} from "../../commpon_utilities/randomId.js";

const skillsPropTypes = {
    tooltipText: PropTypes.string.isRequired,
    clickUrl: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    id: PropTypes.number,
};
export default function Skills({tooltipText, clickUrl=null, imgUrl, id}) {
    const elementNumericalId = id ?? generateRandomId();
    const elementId = `skill-${elementNumericalId}`;

    const image = (
        <div style={{
            "--img-url": urlCss(imgUrl),
        }} />
    );
    let imageWithOrWithoutHref = image;
    if (clickUrl != null){
        imageWithOrWithoutHref = (
            <a className="skill-link"
               href={clickUrl}
               target="_blank">
                {image}
            </a>
        );
    }
    return (<>

        <div className="skill-thumbnail-box"
             id={elementId}
             data-tippy-content={tooltipText}
             style={{cursor: clickUrl == null? "default":"pointer"}}>
            {imageWithOrWithoutHref}
        </div>
    </>);
}
Skills.propTypes = skillsPropTypes;
