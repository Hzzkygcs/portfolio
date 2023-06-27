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

function addOnHoldEvent(el, holdEventHandler,
                        clickEventHandler, timeout=600,
                        disableRightClickSimulation=true,
                        disableImmediateHandle=true){
    el = $(el);

    let startPress;
    let timeoutId;
    let startPressCoordinate;
    let currPressCoordinate;  // NOSONAR
    const onHold = (e) => {
        const distance = 0;
        console.log("dist", distance);
        if (distance > 10)
            return;

        const endPress = e.timeStamp;
        const duration = endPress - startPress;
        if (duration < timeout){
            console.log("dur", duration);
            clickEventHandler(e);
            return;
        }
        holdEventHandler(el, duration);
    };
    el.on("pointerdown", (e) => {
        console.log("down");
        startPressCoordinate = [e.originalEvent.clientX, e.originalEvent.clientY];  // NOSONAR
        if (e.pointerType === "mouse")
            return;
        startPress = e.timeStamp;
        if (!disableImmediateHandle) {
            timeoutId = setTimeout(() => onHold(
                Object.assign(e, {
                    timeStamp: startPress + timeout + 5,  // + 5 is arbitrary to keep it a bit greater than threshold
                })
            ), timeout);
        }
    });
    el.on('pointermove', (e) => {
        console.log("move");
        currPressCoordinate = [e.originalEvent.clientX, e.originalEvent.clientY];  // NOSONAR
    });
    el.on("pointerup", function (e){
        console.log("up");
        currPressCoordinate = [e.originalEvent.clientX, e.originalEvent.clientY];  // NOSONAR
        if (e.pointerType === "mouse")
            return;
        onHold(e);
        clearTimeout(timeoutId);
    })
    if (disableRightClickSimulation)
        el.on("contextmenu", (e) => {
            e.preventDefault();
        });
}