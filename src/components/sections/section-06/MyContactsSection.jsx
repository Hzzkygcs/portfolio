import PropTypes from "prop-types";
import EmailContact from "./parts/EmailContact.jsx";
import OtherContacts from "./parts/OtherContacts.jsx";
import ReactMutable from "../../../core/ReactMutable.js";

const myContactsSectionPropTypes = {
    rowPos: PropTypes.number.isRequired,
};
export default function MyContactsSection({rowPos,}) {
    const array = [];
    const array2 = [];

    const a = ReactMutable.create(()=>{console.log("mutation notified")}, array);

    console.log(a.v);
    a.push(5);
    a.push(1);
    a.push(3);
    console.log(a);
    console.log(a.v);
    a.notifyMutation();


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

