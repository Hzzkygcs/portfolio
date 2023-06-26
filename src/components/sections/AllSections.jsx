import TypingAnimationWelcomeSection from "./section-01/TypingAnimationWelcomeSection.jsx";
import AboutMeSection from "./section-02/AboutMeSection.jsx";
import CvSection from "./section-03/CvSection.jsx";
import ExperienceSection from "./section-04/ExperienceSection.jsx";

const allSectionsPropTypes = {};
export default function AllSections({}) {

    return (<>
        <TypingAnimationWelcomeSection rowPos={1} />
        <AboutMeSection rowPos={2} />
        <CvSection rowPos={3} />
        <ExperienceSection rowPos={4} />
    </>);
}
AllSections.propTypes = allSectionsPropTypes;

