import ExperienceGroup from "./components/ExperienceGroup.jsx";
import PropTypes from "prop-types";
import React from "react";
import ExperienceBoxAndModal from "./components/ExperienceBoxAndModal.jsx";
import {UniversitasIndonesia} from "./parts/UniversitasIndonesia.jsx";
import {FexbFebUi} from "./parts/FexbFebUi.jsx";
import {RistekExperience} from "./parts/RistekExperience.jsx";

const experienceSectionPropTypes = {
    rowPos: PropTypes.number.isRequired,
};
export default function ExperienceSection({rowPos}) {

    return (<>
        <div id="experiences"
             className="content-section-container flex flex-col items-center"
             style={{gridRow: rowPos}}>
            <h1 className="text-4xl">
                Experiences
            </h1>

            <ExperienceGroup experienceGroupName={'Work Experiences'}>
                <ExperienceBoxAndModal img_src='/img/fexb.png'
                                       title='FExB FEB UI'
                                       detail='Backend Engineer'>
                    <FexbFebUi />
                </ExperienceBoxAndModal>
                <ExperienceBoxAndModal img_src='/img/fasilkom ui.png'
                                       title='Universitas Indonesia'
                                       modalTitle={'Computer Science UI'}
                                       detail={'Teaching Assistant \n Computer Science UI'}>
                    <UniversitasIndonesia />
                </ExperienceBoxAndModal>
            </ExperienceGroup>

            <ExperienceGroup experienceGroupName={'Organization'}>
                <ExperienceBoxAndModal img_src='/img/ristek.jpg'
                                       title='Ristek'
                                       modalTitle={'Ristek Universitas Indonesia'}
                                       detail='Member and Lead of Competitive Programming' >
                    <RistekExperience />
                </ExperienceBoxAndModal>
            </ExperienceGroup>
        </div>
    </>);
}
ExperienceSection.propTypes = experienceSectionPropTypes;


