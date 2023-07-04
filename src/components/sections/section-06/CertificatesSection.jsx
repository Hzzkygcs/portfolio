import PropTypes from "prop-types";
import {SectionContentContainer} from "../common/SectionContentContainer.jsx";
import {Certificate} from "./components/Certificate.jsx";

import diveIntoRefactoring from "./certificates-img/dive-into-refactoring.png";
import expressJsNodeJs from "./certificates-img/codewithmosh-expressjs.png";
import xamarin from "./certificates-img/xamarin.jpg";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow, FreeMode, Navigation, Pagination} from "swiper";
import useWindowDimensions from "../../../core/WindowDimensionUtility.js";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

CertificatesSection.propTypes = {
    rowPos: PropTypes.number.isRequired,
};

export function CertificatesSection({rowPos,}) {
    const { _height, width } = useWindowDimensions();

    const overallSwiperMaxWidthPercentage = 90;
    const currentSwiperMaxWidth = width * overallSwiperMaxWidthPercentage / 100;

    const estimateWidthForEachSlide = 400;
    const estimateSpaceBetweenSlide = 20;

    const slidesPerView = clamp(1,
        Math.round(currentSwiperMaxWidth / estimateWidthForEachSlide),
        3);
    const tempCarouselSwiperWidth = slidesPerView * (estimateWidthForEachSlide + estimateSpaceBetweenSlide);
    const carouselSwiperWidth = Math.min(currentSwiperMaxWidth, tempCarouselSwiperWidth);

    console.log("slidesPerView", slidesPerView);


    return (<>
        <SectionContentContainer elementId={"certificates"} rowPos={rowPos} title={"Certificates"}>
            <div style={{
                width: `${carouselSwiperWidth}px`,
                marginTop: "3rem"
            }}>
                <Swiper style={{
                            "--swiper-navigation-size": "3.5rem",
                        }}
                        rewind={true}
                        navigation={true}
                        autoplay={{
                            delay: 1500,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: true,
                            waitForTransition: true,
                        }}


                        speed={500}
                        slidesPerView={slidesPerView}
                        modules={[Autoplay, Pagination, Navigation, FreeMode, EffectCoverflow]}>

                    {getSwiperSlide(
                        <Certificate name={'Clean Code: Dive Into Refactoring\nRefactoring.Guru'}
                                     clickUrl={'https://refactoring.guru/cert/r/MTMxODEx'}
                                     imageUrl={diveIntoRefactoring} />
                    )}
                    {getSwiperSlide(
                        <Certificate name={'NodeJS & ExpressJS\nCodeWithMosh.com'}
                                     clickUrl={'/certificates/certificate-of-completion-for-the-complete-node-js-course.pdf'}
                                     imageUrl={expressJsNodeJs} />
                    )}
                    {getSwiperSlide(
                        <Certificate name={'Xamarin\nUdemy.com'}
                                     clickUrl={'https://www.udemy.com/certificate/UC-b231effe-8dc7-4b75-937b-188a4c54cd4e/'}
                                     imageUrl={xamarin} />
                    )}
                </Swiper>
            </div>
        </SectionContentContainer>
    </>);
}


function getSwiperSlide(child) {
    return <SwiperSlide style={{height: "auto",}}>
        {child}
    </SwiperSlide>;
}

function clamp(minValue, value, maxValue) {
    const upperBoundedValue = Math.min(maxValue, value);
    return Math.max(minValue, upperBoundedValue)
}