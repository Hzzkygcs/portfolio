import {CarouselImage} from "../../common/components/CarouselImage.jsx";
import {Carousel} from "../../common/components/Carousel.jsx";


RistekExperience.propTypes = {};

export function RistekExperience({}) {
    return (<>
        <Carousel>
            <CarouselImage imagePath={"/img/experiences/ristek/about-cp.png"} />
            <CarouselImage imagePath={"/img/experiences/ristek/team-cp.png"} />
            <CarouselImage imagePath={"/img/experiences/ristek/lomba-compfest.jpg"}
                           descriptionText={"SCPC Compfest finalist - one of several competitions participated by Ristek"}/>
        </Carousel>

        <div className="p-2 pt-5
            grid grid-cols-1 sm:grid-cols-2 justify-evenly">
            <div className="pb-5 w-fit">
        <span className="text-xl highlighted bold">
            Competitive Programming 2022
        </span>

                <div className="experience-detail-table cols-2-fit-content p
                    t-1 pl-5">
                    <span> Position </span><span> Lead </span>
                    <span> Division </span><span> Competitive Programming </span>
                    <span> Start </span><span> Mar 2022 </span>
                    <span> End </span><span> Jan 2023 </span>
                </div>
            </div>

            <div className="pb-5 w-fit">
        <span className="text-xl highlighted bold">
            Competitive Programming 2021
        </span>

                <div className="experience-detail-table cols-2-fit-content p
                        t-1 pl-5">
                    <span> Position </span><span> Member </span>
                    <span> Division </span><span> Competitive Programming </span>
                    <span> Start </span><span> Mar 2021 </span>
                    <span> End </span><span> Jan 2022 </span>
                </div>
            </div>
        </div>
    </>);
}


