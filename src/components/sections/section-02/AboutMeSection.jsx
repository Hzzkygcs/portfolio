import PropTypes from "prop-types";
import {SectionContentContainer} from "../common/SectionContentContainer.jsx";

const aboutMeSectionPropTypes = {
    rowPos: PropTypes.number.isRequired,
};
export default function AboutMeSection({rowPos,}) {
    return (<>
        <SectionContentContainer elementId={'about-me'} rowPos={rowPos} title={'About Me'}
                                 additionalClass={['justify-center min-h-screen']}>
            <div className="side-by-side-if-wide-enough" style={{padding: "1rem"}}>
                <div className="flex justify-center items-center">
                    <img className="m-10
                                w-36 sm:w-48
                                h-36 sm:h-48
                                rounded-full border-2
                                shadow-1px-1px shadow-white"
                         src="/img/foto.png" alt="my photo" />
                </div>

                <div className="flex items-center justify-center">
                    <p className="m-3 max-w-3xl text-center md:text-justify">
                        Hello! I'm Immanuel, and you can call me Nuel. 😃
                        I'm a computer science student at Universitas Indonesia.

                        I've enjoyed programming since I was 13,
                        especially ones that come from my ideas or ones
                        that may solve problems around me.

                        I'm currently looking for challenges!
                        So if you have any challenges for me in developing websites, mobile apps, or desktop apps,
                        please feel free to contact me! 😁
                    </p>
                </div>
            </div>
        </SectionContentContainer>
    </>);
}
AboutMeSection.propTypes = aboutMeSectionPropTypes;

