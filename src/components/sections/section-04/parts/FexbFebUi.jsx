import {CarouselImage} from "../../common/components/CarouselImage.jsx";
import {Carousel} from "../../common/components/Carousel.jsx";


FexbFebUi.propTypes = {};

export function FexbFebUi({}) {
    return (<>
        <Carousel>
            <CarouselImage imagePath={"/img/experiences/fexb/main-page-1.png"} />
            <CarouselImage imagePath={"/img/experiences/fexb/main-page-2.png"} />
            <CarouselImage imagePath={"/img/experiences/fexb/tickets.png"} />
        </Carousel>
        <div className="p-2 pt-5">
            <div className="experience-detail-table cols-2-fit-content">
                <span>
                    Website link
                </span>
                <span>
                    <a href="https://www.fexbfebui.site/"
                       target="_blank"
                       className="link">https://www.fexbfebui.site/</a>
                </span>

                <span>Job Type</span>
                <span>Freelance</span>

                <span>Role</span>
                <span>Backend developer</span>

                <span>Technology</span>
                <span>NodeJS</span>

                <span>Duration</span>
                <span>
                    <span className="highlighted">Aug 2022</span><pre className="inline"> - </pre>
                    <span className="highlighted">Dec 2022</span>
                </span>

                <span>
                    Event
                </span>
                <span>
                    <span className="highlighted"> Faculty Exhibition </span>
                    by Faculty of Economics and Business Universitas Indonesia
                </span>
            </div>

            <ul className="list-disc p-5">
                <li>
                    A ticketing app for FExB
                </li>
                <li>
                    Built by a team consisting of 4 people:
                    2 frontend developers
                    and
                    2 backend developers
                </li>
                <li>
                    Some frameworks and libraries used in this project are
                    <span className="highlighted">&nbsp;Express</span> and
                    <span className="highlighted">&nbsp;Prisma</span>
                </li>
            </ul>
        </div>
    </>);
}


