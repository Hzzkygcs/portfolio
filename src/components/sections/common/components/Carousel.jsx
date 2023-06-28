import PropTypes from "prop-types";
import getSpecificElementValidator from "../../commpon_utilities/specificElementValidation.jsx";
import {CarouselImage} from "./CarouselImage.jsx";
import {useEffect, useState} from "react";


Carousel.propTypes = {
    classes: PropTypes.array,
    children: getSpecificElementValidator(CarouselImage),
};

let carouselCounter = 0;
let carouselItemCounter = 10;

export function Carousel({classes=[], children=[],}) {
    if (!(children instanceof Array))
        children = [children];

    const carouselFinalClasses = ['carousel'].concat(classes);
    const [_carouselId, _setCarouselId] = useState(carouselCounter++);
    const carouselId = `carousel-${_carouselId}`;

    const carouselData = children.map(el => el.props);
    const carouselImages = carouselData.map(prop => prop.imagePath)
    const carouselDescriptions = carouselData.map(prop => prop.descriptionText ?? "");

    useEffect(function () {

    }, [])

    return (<>
        <div className={carouselFinalClasses.join(' ')} id={carouselId}>
            <div className="carousel-stack">
                <div className="prev-next-container prev">
                    <span className="prev-icon"></span>
                </div>
                <div className="prev-next-container next">
                    <span className="next-icon"></span>
                </div>
                <div className="detail stack-layout pt-1 pb-1">
                    {/*
                        descriptions on the template.detail-text-template element will be placed here when activated.
                    */}
                </div>
                <div className="carousel-stacked content-layer full-w">
                    {/*
                        images on the template.content-template element will be placed here when activated.
                    */}
                </div>
                <template className="content-template">
                    {carouselImages.map(
                        imgSrc => <img key={carouselItemCounter++} className="content" src={imgSrc} />)}
                </template>
                <template className="detail-text-template">
                    {carouselDescriptions.map(
                        description => <span key={carouselItemCounter++} className={"stack-item"}>{description}</span>)}
                </template>
            </div>
        </div>
    </>);
}


