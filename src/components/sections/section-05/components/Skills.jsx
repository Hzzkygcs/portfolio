import PropTypes from "prop-types";
import {urlCss} from "../../commpon_utilities/urlCss.js";
import {useEffect} from "react";
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

    useEffect(function () {
        const currentContainer = $(elementId).parent();
        const element = currentContainer.find(".skill-thumbnail-box").get(0);

        let goToLink = () => {
            currentContainer.find(".skill-link").get(0).click();
        }
        addOnHoldEvent(element, goToLink,  (e) => {
            console.log("click")
            element.dispatchEvent(new Event("mouseenter"));
        });
    }, []);

    const onPointerUp = (e) => {
        if (e.pointerType !== "mouse")
            return;
        goToLink();
    };


    return (<>
        <div>
            <div className="skill-thumbnail-box"
                 id={elementId}
                 data-tippy-content={tooltipText}
                 onPointerUp={onPointerUp}>
                <div style={{
                    "--img-url": urlCss(imgUrl),
                }}>
                </div>
            </div>

            <a className="skill-link"
               href={clickUrl}
               target="_blank"></a>
            {/*
            TODO
            <script>
                ((scriptTagElement) => {
                const currentContainer = $(scriptTagElement).parent();
                const element = currentContainer.find(".skill-thumbnail-box").get(0);

                tippy(element, {
                content: currentContainer.find(".skill-tip-content").html(),
            });

                let goToLink = () => {
                currentContainer.find(".skill-link").get(0).click();
            }
                addOnHoldEvent(element, goToLink,  (e) => {
                element.dispatchEvent(new Event("mouseenter"));
            });
                $(element).on('pointerup', (e) => {
                if (e.pointerType !== "mouse")
                return;
                goToLink();
            });
            })(document.currentScript);
            </script>*/}
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