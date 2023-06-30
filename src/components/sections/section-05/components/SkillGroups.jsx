import PropTypes from "prop-types";
import {replaceNewLineWithBrTag} from "../../commpon_utilities/replaceStringWithElements.jsx";
import './SkillGroup.css'
import styled from "styled-components";


const VerticallyCenteredDiv = styled.div`
  margin: var(--skill-thumbnail-box-margin) 0;
  min-height: var(--skill-thumbnail-box-size);
  display: flex;
  align-items: center;
`;


const skillGroupsPropTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any,
};
export default function SkillGroups({title, children, }) {
    return (<>
        <div className="skill-group-name">
            <VerticallyCenteredDiv>
                {replaceNewLineWithBrTag(title, 'br-skill-group')}
            </VerticallyCenteredDiv>
        </div>
        <div className="skills-container flex flex-row flex-wrap items-center justify-left">
            {children}
        </div>
    </>);
}
SkillGroups.propTypes = skillGroupsPropTypes;

