import SkillGroups from "./components/SkillGroups.jsx";
import Skills from "./components/Skills.jsx";
import PropTypes from "prop-types";

const skillsSectionPropTypes = {
    rowPos: PropTypes.number.isRequired,
};
export default function SkillsSection({rowPos}) {

    return (<>
        <div id="skills"
             className="content-section-container flex flex-col items-center min-h-[20rem]"
             style={{
                 gridRow: rowPos
             }}>
            <h1 className="text-4xl">
                Skills
            </h1>

            <div className="skill-table mt-5">
                <SkillGroups title={'Programming\nLanguages'}>
                    <Skills imgUrl={'/img/skills/python.png'}
                            tooltipText={'Python'}
                            clickUrl={'https://python.org/'} />
                    <Skills imgUrl="/img/skills/java.png"
                            clickUrl="https://www.java.com/en/"
                            tooltipText="Java" />
                    <Skills imgUrl="/img/skills/c-sharp.png"
                            clickUrl="https://learn.microsoft.com/en-us/dotnet/csharp/"
                            tooltipText="C Sharp" />
                    <Skills imgUrl="/img/skills/javascript.png"
                            clickUrl="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            tooltipText="Javascript" />
                    <Skills imgUrl="/img/skills/kotlin.png"
                            clickUrl="https://kotlinlang.org/"
                            tooltipText="Kotlin" />
                </SkillGroups>
                <SkillGroups title={'Frameworks'}>
                    <Skills
                        imgUrl="/img/skills/node-js.png"
                        clickUrl="https://nodejs.org/en/about/"
                        tooltipText="Node JS - Javascript" />
                    <Skills
                        imgUrl="/img/skills/django.svg"
                        clickUrl="https://www.djangoproject.com/"
                        tooltipText="Django - Python" />
                    <Skills
                        imgUrl="/img/skills/spring-boot.svg"
                        clickUrl="https://spring.io/projects/spring-boot"
                        tooltipText="Spring Boot - Java" />
                    <Skills
                        imgUrl="/img/skills/xamarin.png"
                        clickUrl="https://dotnet.microsoft.com/en-us/apps/xamarin"
                        tooltipText="Xamarin - C#" />
                    <Skills
                        imgUrl="/img/skills/flutter.png"
                        clickUrl="https://flutter.dev/"
                        tooltipText="Flutter - Dart" />
                </SkillGroups>

            </div>
        </div>
    </>);
}
SkillsSection.propTypes = skillsSectionPropTypes;

