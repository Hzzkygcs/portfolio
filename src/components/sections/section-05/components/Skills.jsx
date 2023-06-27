import PropTypes from "prop-types";
import {urlCss} from "../../commpon_utilities/urlCss.js";

const skillsPropTypes = {
    tooltipText: PropTypes.string.isRequired,
    clickUrl: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
};
export default function Skills({tooltipText, clickUrl, imgUrl}) {

    return (<>
        <div>
            <div className="skill-thumbnail-box">
                <div style={{
                    "--img-url": urlCss(imgUrl),
                }}>
                </div>
            </div>

            <template className="skill-tip-content">
                {tooltipText}
            </template>
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

