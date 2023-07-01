import PropTypes from "prop-types";
import {SectionContentContainer} from "../common/SectionContentContainer.jsx";

const typingAnimationWelcomeSectionPropTypes = {
    rowPos: PropTypes.number.isRequired,
};
export default function TypingAnimationWelcomeSection({rowPos}) {

    return (<>
        <SectionContentContainer elementId={'welcome'} rowPos={rowPos} title={null}
                                 additionalClass={['first-section', 'h-screen', 'justify-center']}>
            <h1 className="text-6xl m-5 font-white text-center">
                Hello!
            </h1>
            <div className="min-height text-4xl sm:text-5xl text-center" style={{margin: "0.1rem"}}>
                <span className="font-white my-auto inline-block set-equal-text-vertical-position">
                    I'm Nuel, and I'm a
                    <br className="inline lg:hidden" />
                </span>
                &nbsp;
                <span className="typing-animation not-ready font-tosca
                    text-center md:text-left
                    set-equal-text-vertical-position">

                    <span data-order="2" className="hidden-on-js-not-loaded">
                        web developer
                    </span>
                    <span data-order="3" className="display-none-at-the-end max-sm:text-3xl hidden-on-js-not-loaded">
                        student of Universitas Indonesia
                    </span>
                     <span data-order="1" className="default">
                        {/*
                        Note, you can add this attribute to the span: ontypingthis="something();"
                        if you wish to handle "I'm a..." vs "I'm an..." situation.
                        */}software engineer
                    </span>
                </span>
            </div>
        </SectionContentContainer>
    </>);
}
TypingAnimationWelcomeSection.propTypes = typingAnimationWelcomeSectionPropTypes;

