import PropTypes from "prop-types";
import {gradientSpreadPercentage} from "../../configuration/style.js";

const overallBackgroundPropTypes = {
    colorsForEachSection: PropTypes.array.isRequired,
};
export default function OverallBackground({colorsForEachSection,}) {

    const backgroundElements = [];

    for (var i=0; i < colorsForEachSection.length; i++){
        const colorMain = colorsForEachSection[i];
        const colorStart = (i-1 < 0)? colorMain : colorsForEachSection[i-1];
        const colorEnd = (i+1 >= colorsForEachSection.length)? colorMain : colorsForEachSection[i+1];

        const colorStartPosition     = - gradientSpreadPercentage;
        const colorMainUpperPosition = + gradientSpreadPercentage;
        const colorMainLowerPosition = 100 - gradientSpreadPercentage;
        const colorEndLowerPosition  = 100 + gradientSpreadPercentage;

        const backgroundCssCode = getLinearGradientBackground({
                start: {
                    color: colorStart,
                    position: colorStartPosition,
                },
                main: {
                    color: colorMain,
                    upperPosition: colorMainUpperPosition,
                    lowerPosition: colorMainLowerPosition,
                },
                end: {
                    color: colorEnd,
                    position: colorEndLowerPosition,
                },
            });

        backgroundElements.push(
            <div className="section-gradient-effect col-start-1"
                 key={i}
                 style={{
                     gridRow: i+1,
                     background: backgroundCssCode,
                 }}
            />
        );
    }
    
    
    return (<>
        {backgroundElements}
    </>);
}
OverallBackground.propTypes = overallBackgroundPropTypes;

function getLinearGradientBackground({start, main, end}) {
    const {color: startingColor, position: gradientStartPosition} = start;
    const {color: mainColor, upperPosition: colorMainUpperPosition, lowerPosition: gradientMainLowerPosition} = main;
    const {color: endingColor, position: gradientEndLowerPosition} = end;

    return `linear-gradient(180deg,
                ${startingColor} ${gradientStartPosition},
                ${mainColor} ${colorMainUpperPosition},
                ${mainColor} ${gradientMainLowerPosition},
                ${endingColor} ${gradientEndLowerPosition}
                )`.replaceAll(/\s/g, "");
}