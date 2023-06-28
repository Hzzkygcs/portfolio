import PropTypes from "prop-types";
import getSpecificElementValidator from "../../commpon_utilities/specificElementValidation.jsx";
import {CarouselImage} from "./CarouselImage.jsx";

import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/effect-flip";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";
import {
    EffectCards,
    EffectCoverflow,
    EffectCreative,
    EffectCube,
    EffectFade,
    EffectFlip,
    Navigation,
    Pagination
} from "swiper";
import styled, {css} from "styled-components";


let carouselCounter = 0;
let carouselItemCounter = 10;


const StackCss = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;
const StackedElementCss = css`
  grid-column: 1;
  grid-row: 1;
`;
const CarouselDescriptionContainer = styled.div`
  ${StackCss}
`;
const CarouselDescription = styled.span`
  grid-row: 3;
  grid-column: 1/-1;
  text-align: center;

  min-height: 1.5rem;

  /*-webkit-text-stroke: 5px black;*/
  text-shadow: 0 0 0.5rem #000000;

  z-index: 1000;

  ${StackedElementCss}
`;


/*
Note:
    dulu pernah punya carousel bikinan sendiri di portofolio versi non-react.
    Tapi belum pernah nyoba pindahin ke react.
    Lihat commit: b177f82d9c4eeeb9a0a9a69988c4c90b5a36670d
 */
Carousel.propTypes = {
    classes: PropTypes.array,
    children: getSpecificElementValidator(CarouselImage),
};
export function Carousel({classes=[], children=[],}) {
    if (!(children instanceof Array))
        children = [children];

    const carouselFinalClasses = ['carousel'].concat(classes);
    const [_carouselId, _setCarouselId] = useState(carouselCounter++);
    const carouselId = `carousel-${_carouselId}`;

    const carouselData = children.map(el => el.props);
    const carouselImages = carouselData.map(prop => prop.imagePath)
    const carouselDescriptions = carouselData.map(prop => prop.descriptionText ?? "");

    const carouselTransitionEffect = getQueryParameter("effect", "flip");
    console.log(carouselTransitionEffect);


    function descriptionContainer() {
        return $(`#${carouselId} .detail`);
    }

    useEffect(function () {
        const descriptionElements = $(`#${carouselId} .detail-text-template`).children();
        fadeOutWithoutDisplayNone(descriptionElements, 0,
            limitToOnlyOnetimeFunctionCall(() => {
                descriptionContainer().append(descriptionElements);
                changeActiveDescription(0);
            })
        );
    }, []);

    function onSlideChange(e) {
        const currentIndex = e.realIndex;  // do not use activeIndex for loop=true.
        changeActiveDescription(currentIndex);
    }
    function changeActiveDescription(newActiveDescriptionIndex) {
        const fadeDuration = 500;
        const descriptionElements = descriptionContainer().children();

        const currentActiveDescription = descriptionElements.filter(".active");
        fadeOutWithoutDisplayNone(
            currentActiveDescription.removeClass("active"),
            fadeDuration);
        const newActiveDescription = descriptionElements.eq(newActiveDescriptionIndex);
        fadeInWithoutDisplayNone(
            newActiveDescription.addClass("active"),
            fadeDuration);
    }


    return (<>
        <div className={carouselFinalClasses.join(' ')} id={carouselId}>
            <div className="" style={{
                maxWidth: "100%",
            }}>
                {swiperElement(carouselId, onSlideChange, carouselTransitionEffect, carouselImages)}
            </div>

            <CarouselDescriptionContainer className="detail pt-1 pb-1" />

            <template className="detail-text-template">
                {carouselDescriptions.map(
                    description => <CarouselDescription key={carouselItemCounter++} className={"stack-item"}>
                        {description}
                    </CarouselDescription>)}
            </template>
        </div>
    </>);
}

function fadeInWithoutDisplayNone(element, duration, onComplete=()=>{}){
    fadeWithoutDisplayNone(element, 1, duration, onComplete);
}
function fadeOutWithoutDisplayNone(element, duration, onComplete=()=>{}){
    fadeWithoutDisplayNone(element, 0, duration, onComplete);
}
function fadeWithoutDisplayNone(element, targetOpacity, duration, onComplete=()=>{}) {
    cancelAllOngoingAnimation(element);
    $(element).animate({ opacity: targetOpacity }, duration, onComplete)
}
function cancelAllOngoingAnimation(element) {
    $(element).stop(true);
}

function limitToOnlyOnetimeFunctionCall(func) {
    let hasBeenCalled = false;

    return function (...args) {
        if (hasBeenCalled)
            return null;
        hasBeenCalled = true;
        func(...args);
    }
}

const ImageContent = styled.img`
  margin: 0;
  padding: 0;
`;

function swiperElement(carouselId, onSlideChange, carouselTransitionEffect, carouselImages) {
    return <Swiper className="mySwiper"
                   pagination={true}
                   navigation={true}
                   loop={true}
                   grabCursor={true}
                   speed={500}
                   onSlideChangeTransitionStart={onSlideChange}

                   effect={carouselTransitionEffect}
                   fadeEffect={{
                       crossFade: false,
                   }}
                   cardsEffect={{
                       perSlideOffset: 15,
                       perSlideRotate: 3,
                   }}
                   modules={[Pagination, Navigation,
                       EffectCards, EffectFlip, EffectCoverflow, EffectCube, EffectFade, EffectCreative,]}
    >
        {carouselImages.map(
            imgSrc => <SwiperSlide key={carouselItemCounter++}>
                <ImageContent src={imgSrc}
                              style={{userSelect: "none"}}
                />
            </SwiperSlide>)}
    </Swiper>;
}


function getQueryParameter(queryParamVarName, defaultValue) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(queryParamVarName) ?? defaultValue;
}
