import TypingAnimationWelcomeSection from "./section-01/TypingAnimationWelcomeSection.jsx";
import AboutMeSection from "./section-02/AboutMeSection.jsx";
import CvSection from "./section-03/CvSection.jsx";

const allSectionsPropTypes = {};
export default function AllSections({}) {

    return (<>
        <TypingAnimationWelcomeSection rowPos={1} />
        <AboutMeSection rowPos={2} />
        <CvSection rowPos={3} />
    </>);
}
AllSections.propTypes = allSectionsPropTypes;

