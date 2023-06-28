import PropTypes from "prop-types";


AsdosExperience.propTypes = {
    startingMonthYear: PropTypes.string.isRequired,
    endingMonthYear: PropTypes.string.isRequired,
    courseName: PropTypes.string.isRequired,
    courseTerm: PropTypes.string.isRequired,
};

export function AsdosExperience({startingMonthYear, endingMonthYear, courseName, courseTerm,}) {
    return (<>
        <div className="pb-5 w-fit">
            <span className="text-xl highlighted bold">{courseName}</span>

            <div className="experience-detail-table cols-2-fit-content pt-1 pl-5">
                <span>Term</span>
                <span>{courseTerm}</span>

                <span>Start</span>
                <span>{startingMonthYear}</span>

                <span>End</span>
                <span>{endingMonthYear}</span>
            </div>
        </div>
    </>);
}


