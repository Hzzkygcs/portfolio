import PropTypes from "prop-types";

const cvSectionPropTypes = {
    rowPos: PropTypes.number.isRequired,
};
export default function CvSection({rowPos,}) {
    return (<>
        <div id="my-cv"
             className="min-h-[15rem] content-section-container flex flex-col items-center justify-center"
             style={{gridRow: rowPos}}>

            <h1 className="text-4xl">
                CV
            </h1>

            <a target="_blank"
               href="https://docs.google.com/document/d/1EZs_P-6ambL_914v7y9I08K3JlVgIRwz9Y5OWgO6MtM/edit?usp=sharing"
               className="inline-block m-10">
                <div className="open-my-cv-btn cv-thumbnail-box">
                    <div className="cv-thumbnail-box">

                    </div>
                    <div className="text-center flex items-center ml-2">
                        Open my latest CV
                    </div>
                </div>
            </a>
        </div>
    </>);
}
CvSection.propTypes = cvSectionPropTypes;

