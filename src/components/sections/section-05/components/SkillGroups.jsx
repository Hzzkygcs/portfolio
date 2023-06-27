import PropTypes from "prop-types";
import {replaceNewLineWithBrTag} from "../../commpon_utilities/replaceStringWithElements.jsx";

const skillGroupsPropTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any,
};
export default function SkillGroups({title, children, }) {


    return (<>
        <div className="skill-group-name">
            <div>
                {replaceNewLineWithBrTag(title)}
            </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-left">
            {children}
        </div>
    </>);
}
SkillGroups.propTypes = skillGroupsPropTypes;

