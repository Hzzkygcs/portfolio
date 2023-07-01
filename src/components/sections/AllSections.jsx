import TypingAnimationWelcomeSection from "./section-01/TypingAnimationWelcomeSection.jsx";
import AboutMeSection from "./section-02/AboutMeSection.jsx";
import CvSection from "./section-03/CvSection.jsx";
import ExperienceSection from "./section-04/ExperienceSection.jsx";
import SkillsSection from "./section-05/SkillsSection.jsx";
import MyContactsSection from "./section-07/MyContactsSection.jsx";
import {useEffect} from "react";

const allSectionsPropTypes = {};
export default function AllSections({}) {

    useEffect(function () {
        tippy('[data-tippy-content]');
    }, [])

    return (<>
        <TypingAnimationWelcomeSection rowPos={1} />
        <AboutMeSection rowPos={2} />
        <CvSection rowPos={3} />
        <ExperienceSection rowPos={4} />
        <SkillsSection rowPos={5} />
        <MyContactsSection rowPos={6} />
    </>);
}
AllSections.propTypes = allSectionsPropTypes;

