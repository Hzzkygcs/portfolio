import ExperienceBox from "./components/ExperienceBox.jsx";
import ExperienceGroup from "./components/ExperienceGroup.jsx";
import PropTypes from "prop-types";

const experienceSectionPropTypes = {
    rowPos: PropTypes.number.isRequired,
};
export default function ExperienceSection({rowPos}) {

    return (<>
        <div id="experiences"
             className="content-section-container flex flex-col items-center"
             style={{gridRow: rowPos}}>
            <h1 className="text-4xl">
                Experiences
            </h1>

            <ExperienceGroup experienceGroupName={'Work Experiences'}>
                <ExperienceBox img_src='/img/fexb.png'
                               title='FExB FEB UI'
                               detail='Backend Engineer'
                />
                <ExperienceBox img_src='/img/fasilkom ui.png'
                               title='Universitas Indonesia'
                               detail={'Teaching Assistant \n Computer Science UI'}
                />
            </ExperienceGroup>
            <ExperienceGroup experienceGroupName={'Organization'}>
                <ExperienceBox img_src='/img/ristek.jpg'
                               title='Ristek'
                               detail='Member and Lead of Competitive Programming'
                />
            </ExperienceGroup>
        </div>
    </>);
}
ExperienceSection.propTypes = experienceSectionPropTypes;

