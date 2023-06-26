import PropTypes from "prop-types";

const aboutMeSectionPropTypes = {
    rowPos: PropTypes.number.isRequired,
};
export default function AboutMeSection({rowPos,}) {
    return (<>
        <div className="content-section-container flex flex-col justify-center items-center min-h-screen"
             style={{ gridRow: rowPos }}>
            <h2 id="about-me"
                className="text-4xl sm:text-5xl text-center inline-block">
                About Me
            </h2>
            <div className="side-by-side-if-wide-enough">
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
                        I enjoy programming and creating software, especially ones that come from my ideas or ones
                        that may solve problems around me. I'm currently looking for challenges!
                        So if you have any challenges for me in developing websites, mobile apps, or desktop apps,
                        please feel free to contact me! 😁
                    </p>
                </div>
            </div>
        </div>
    </>);
}
AboutMeSection.propTypes = aboutMeSectionPropTypes;

