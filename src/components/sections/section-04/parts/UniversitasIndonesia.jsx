import {AsdosExperience} from "../components/AsdosExperience.jsx";


UniversitasIndonesia.propTypes = {};

export function UniversitasIndonesia({}) {
    return (<>
        <div className="p-2 pt-0">
            <div className="experience-detail-table cols-2-fit-content">
                <span>Job Type</span>
                <span>Part-time</span>
                <span>Role</span>
                <span>Teaching Assistant</span>
            </div>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-evenly">
                <AsdosExperience startingMonthYear="Jan 2023" endingMonthYear="Present"
                                 courseName="Advanced Programming" courseTerm="2 - 2022/2023" />
                <AsdosExperience startingMonthYear="Aug 2022" endingMonthYear="Jan 2023"
                                 courseName="Data Structures and Algorithms" courseTerm="1 - 2022/2023" />
                <AsdosExperience startingMonthYear="Jan 2022" endingMonthYear="Jun 2022"
                                 courseName="Programming Foundations 2" courseTerm="2 - 2021/2022" />
                <AsdosExperience startingMonthYear="Jul 2021" endingMonthYear="Jan 2022"
                                 courseName="Programming Foundations 1" courseTerm="1 - 2021/2022" />
            </div>
        </div>
    </>);
}


