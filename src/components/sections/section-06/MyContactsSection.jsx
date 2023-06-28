import PropTypes from "prop-types";
import EmailContact from "./parts/EmailContact.jsx";
import OtherContacts from "./parts/OtherContacts.jsx";

const myContactsSectionPropTypes = {
    rowPos: PropTypes.number.isRequired,
};
export default function MyContactsSection({rowPos,}) {

    return (<>
        <div id="connect-with-me"
             className="content-section-container ending-section flex flex-col justify-start items-stretch
                min-h-[50vh]"
             style={{
                 gridRow: rowPos,
             }}>

            <div className="flex flex-col flex-grow justify-center items-center w-full mt-8">
                <h2 className="text-4xl mb-16">Reach Me</h2>

                <EmailContact email={'immanuel.nuel02@gmail.com'} />
                <OtherContacts />
            </div>
        </div>

    </>);
}
MyContactsSection.propTypes = myContactsSectionPropTypes;

