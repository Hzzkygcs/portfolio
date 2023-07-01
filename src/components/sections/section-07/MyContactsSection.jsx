import PropTypes from "prop-types";
import EmailContact from "./parts/EmailContact.jsx";
import OtherContacts from "./parts/OtherContacts.jsx";
import {SectionContentContainer} from "../common/SectionContentContainer.jsx";

const myContactsSectionPropTypes = {
    rowPos: PropTypes.number.isRequired,
};
export default function MyContactsSection({rowPos,}) {

    return (<>
        <SectionContentContainer elementId={"connect-with-me"} rowPos={rowPos} title={"Reach Me"}
                                 additionalClass={['ending-section", "justify-start", "min-h-[50vh]']}>
            <EmailContact email={'immanuel.nuel02@gmail.com'} />
            <OtherContacts />
        </SectionContentContainer>

    </>);
}
MyContactsSection.propTypes = myContactsSectionPropTypes;

