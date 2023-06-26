import PropTypes from "prop-types";

const experiencesPropTypes = {
    children: PropTypes.any,
    experienceGroupName: PropTypes.string.isRequired,
};
export default function ExperienceGroup({children, experienceGroupName}) {
    return (<>
        <div className="experiences-container">
            <div className="flex flex-col items-center mt-5">
                <h2 className="text-2xl mb-3">{experienceGroupName}</h2>
                {children}
            </div>
        </div>
    </>);
}
ExperienceGroup.propTypes = experiencesPropTypes;
