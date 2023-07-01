import SkillGroups from "./components/SkillGroups.jsx";
import Skills from "./components/Skills.jsx";
import PropTypes from "prop-types";
import {SectionContentContainer} from "../common/SectionContentContainer.jsx";

const skillsSectionPropTypes = {
    rowPos: PropTypes.number.isRequired,
};
export default function SkillsSection({rowPos}) {

    return (<>
        <SectionContentContainer elementId={'skills'} rowPos={rowPos}
                                 additionalClass={['min-h-[20rem]']} title={'Skills'}>
            <div className="skill-table mt-5">
                <SkillGroups title={'Programming\nLanguages'}>
                    <Skills imgUrl="/img/skills/javascript.png"
                            tooltipText="Javascript" />
                    <Skills imgUrl={'/img/skills/python.png'}
                            tooltipText={'Python'}/>
                    <Skills imgUrl="/img/skills/java.png"
                            tooltipText="Java" />
                    <Skills imgUrl="/img/skills/c-sharp.png"
                            tooltipText="C Sharp" />

                    <Skills imgUrl="/img/skills/dart.png"
                            tooltipText="Dart" />
                    <Skills imgUrl="/img/skills/kotlin.png"
                            tooltipText="Kotlin" />

                </SkillGroups>
                <SkillGroups title={'Frameworks'}>
                    <Skills
                        imgUrl="/img/skills/node-js.png"
                        tooltipText="Node JS - Javascript" />
                    <Skills
                        imgUrl="/img/skills/django.svg"
                        tooltipText="Django - Python" />
                    <Skills
                        imgUrl="/img/skills/spring-boot.svg"
                        tooltipText="Spring Boot - Java" />
                    <Skills
                        imgUrl="/img/skills/xamarin.png"
                        tooltipText="Xamarin - C#" />
                    <Skills
                        imgUrl="/img/skills/flutter.png"
                        tooltipText="Flutter - Dart" />
                    <Skills
                        imgUrl="/img/skills/react.png"
                        tooltipText="React - NodeJs" />


                </SkillGroups>
                {/*<SkillGroups title={'Other'}>*/}
                {/*    <Skills*/}
                {/*        imgUrl="/img/skills/refactoring-guru.png"*/}
                {/*        clickUrl="https://refactoring.guru/cert/r/MTMxODEx"*/}
                {/*        tooltipText="Clean Code: Dive Into Refactoring - Refactoring Guru" />*/}
                {/*</SkillGroups>*/}
            </div>
        </SectionContentContainer>
    </>);
}
SkillsSection.propTypes = skillsSectionPropTypes;

