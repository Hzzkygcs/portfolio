import PropTypes from "prop-types";
import {SectionContentContainer} from "../common/SectionContentContainer.jsx";


CertificatesSection.propTypes = {
    rowPos: PropTypes.number.isRequired,
};

export function CertificatesSection({rowPos,}) {
    return (<>
        <SectionContentContainer elementId={"certificates"} rowPos={rowPos} title={"Certificates"}>


        </SectionContentContainer>
    </>);
}


