import TypingAnimationWelcomeSection from "./section-01/TypingAnimationWelcomeSection.jsx";
import AboutMeSection from "./section-02/AboutMeSection.jsx";
import CvSection from "./section-03/CvSection.jsx";
import ExperienceSection from "./section-04/ExperienceSection.jsx";
import SkillsSection from "./section-05/SkillsSection.jsx";
import MyContactsSection from "./section-07/MyContactsSection.jsx";
import {useEffect} from "react";
import PropTypes from "prop-types";
import {CertificatesSection} from "./section-06/CertificatesSection.jsx";

const allSectionsPropTypes = {
    totalNumberOfSections: PropTypes.number,
    setTotalNumberOfSections: PropTypes.func,
};
export default function AllSections({totalNumberOfSections=null, setTotalNumberOfSections=null}) {
    let currentNumberOfSections = 1;

    useEffect(function () {
        tippy('[data-tippy-content]');
    }, [])

    const ret = (<>
        <TypingAnimationWelcomeSection rowPos={currentNumberOfSections++} />
        <AboutMeSection rowPos={currentNumberOfSections++} />
        <CvSection rowPos={currentNumberOfSections++} />
        <ExperienceSection rowPos={currentNumberOfSections++} />
        <SkillsSection rowPos={currentNumberOfSections++} />
        <CertificatesSection rowPos={currentNumberOfSections++} />
        <MyContactsSection rowPos={currentNumberOfSections++} />
    </>);

    if (totalNumberOfSections == null)
        return ret;
    if (setTotalNumberOfSections == null)
        return ret;
    if (totalNumberOfSections === currentNumberOfSections)
        return ret;
    setTotalNumberOfSections(currentNumberOfSections);
    return ret;
}
AllSections.propTypes = allSectionsPropTypes;

