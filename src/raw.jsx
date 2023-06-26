// import {useEffect} from "react";
//
// const rawBodyPropTypes = {};
// export default function RawBody({}) {
//
//     useEffect(function () {
//         (() => {
//             let carouselId = "carousel-0";
//
//             $(document).ready(() => {
//                 initializeCarousel(carouselId);
//             });
//         })();
//         $(document).ready(() => {
//             const urlHashId = "experience-fexb-feb-ui"
//             const onBtnClick = () => {
//                 showModal("FExB FEB UI", [
//                     $("#experience-modal-356749").prop('content').cloneNode(true)
//                 ], [], null, urlHashId);
//             };
//
//             $("#experience-356749").find(".more-details-btn").click(onBtnClick);
//
//             if (urlHashId === getUrlHashValue())
//                 onBtnClick();
//         });
//         $(document).ready(() => {
//             const urlHashId = "experience-universitas-indonesia"
//             const onBtnClick = () => {
//                 showModal("Computer Science UI", [
//                     $("#experience-modal-577254").prop('content').cloneNode(true)
//                 ], [], null, urlHashId);
//             };
//
//             $("#experience-577254").find(".more-details-btn").click(onBtnClick);
//
//             if (urlHashId === getUrlHashValue())
//                 onBtnClick();
//         });
//         (() => {
//             let carouselId = "carousel-1";
//
//             $(document).ready(() => {
//                 initializeCarousel(carouselId);
//             });
//         })();
//         tippy('[data-tippy-content]');
//     }, []);
//
//     return (<>
//         <div className="content-section-container first-section h-screen flex flex-col justify-center"
//              style="grid-row: 1;">
//             <h1 className="text-6xl m-5 font-white text-center">
//                 Hello!
//             </h1>
//             <div className="min-height text-4xl sm:text-5xl text-center"
//                  style="margin: 0.1rem;">
//         <span className="font-white my-auto inline-block set-equal-text-vertical-position">
//             I'm Nuel,
//
//             and I'm a
//             <br className="inline lg:hidden" />
//         </span>
//
//                 <span className="typing-animation not-ready font-tosca
//                     text-center md:text-left
//                     set-equal-text-vertical-position">
//                 <span data-order="2" className="hidden-on-js-not-loaded">
//                     web developer
//                 </span>
//                 <span data-order="3" className="display-none-at-the-end max-sm:text-3xl hidden-on-js-not-loaded">
//                     student of Universitas Indonesia
//                 </span>
//                  <span data-order="1" className="default">
//                      software engineer
//                 </span>
//
//
//         </span>
//             </div>
//         </div>
//         <div className="content-section-container flex flex-col justify-center items-center min-h-screen"
//              style="grid-row: 2;">
//             <h2 id="about-me"
//                 className="text-4xl sm:text-5xl text-center inline-block">
//                 About Me
//             </h2>
//             <div className="side-by-side-if-wide-enough">
//                 <div className="flex justify-center items-center">
//                     <img className="m-10
//                                 w-36 sm:w-48
//                                 h-36 sm:h-48
//                                 rounded-full border-2
//                                 shadow-1px-1px shadow-white"
//                          src="../img/foto.png" alt="my photo" />
//                 </div>
//
//                 <div className="flex items-center justify-center">
//                     <p className="m-3 max-w-3xl text-center md:text-justify">
//                         Hello! I'm Immanuel, and you can call me Nuel. 😃
//                         I'm a computer science student at Universitas Indonesia.
//                         I enjoy programming and creating software, especially ones that come from my ideas or ones
//                         that may solve problems around me. I'm currently looking for challenges!
//                         So if you have any challenges for me in developing websites, mobile apps, or desktop apps,
//                         please feel free to contact me! 😁
//                     </p>
//                 </div>
//             </div>
//         </div>
//         <div id="my-cv"
//              className="min-h-[15rem] content-section-container flex flex-col items-center justify-center"
//              style="grid-row: 3;">
//
//             <h1 className="text-4xl">
//                 CV
//             </h1>
//
//
//             <a target="_blank"
//                href="https://docs.google.com/document/d/1EZs_P-6ambL_914v7y9I08K3JlVgIRwz9Y5OWgO6MtM/edit?usp=sharing"
//                className="inline-block m-10">
//                 <div className="open-my-cv-btn cv-thumbnail-box">
//                     <div className="cv-thumbnail-box">
//
//                     </div>
//                     <div className="text-center flex items-center ml-2">
//                         Open my latest CV
//                     </div>
//                 </div>
//             </a>
//         </div>
//         <div id="experiences"
//              className="content-section-container flex flex-col items-center"
//              style="grid-row: 4;">
//             <h1 className="text-4xl">
//                 Experiences
//             </h1>
//
//
//             <div className="flex flex-col items-center mt-5">
//                 <h2 className="text-2xl mb-3">
//                     Work Experiences
//                 </h2>
//
//
//                 <div className="experiences-container">
//
//
//                     <div className="experience-div" id="experience-356749">
//                         <div className="title-photo-and-details-container">
//                             <div>
//                                 <div className="thumbnail-box"
//                                      style="--img-url: url('/img/fexb.png');">
//                                 </div>
//                             </div>
//                             <div className="title-and-details-container">
//                                 <h3 className="title">FExB FEB UI</h3>
//                                 <p className="detail">
//                                     Backend Engineer
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="more-details-btn noselect">
//                             More Details
//                         </div>
//
//
//                         <template id="experience-modal-356749">
//
//
//                             <div className="carousel experience-carousels" id="carousel-0">
//                                 <div className="carousel-stack">
//                                     <div className="prev-next-container prev">
//                                         <span className="prev-icon"></span>
//                                     </div>
//                                     <div className="prev-next-container next">
//                                         <span className="next-icon"></span>
//                                     </div>
//                                     <div className="detail stack-layout pt-1 pb-1">
//                                     </div>
//
//                                     <div className="carousel-stacked content-layer full-w">
//                                     </div>
//                                     <template className="content-template">
//                                         <img className="content"
//                                              src="/img/experiences/fexb/main-page-1.png" />
//
//                                             <img className="content"
//                                                  src="/img/experiences/fexb/main-page-2.png" />
//
//                                                 <img className="content"
//                                                      src="/img/experiences/fexb/tickets.png" />
//
//                                     </template>
//                                     <template className="detail-text-template">
//                                         [null,null,null]
//                                     </template>
//
//                                 </div>
//                             </div>
//
//
//
//                             <div className="p-2 pt-5">
//                                 <div className="experience-detail-table cols-2-fit-content">
//         <span>
//             Website link
//         </span>
//                                     <span>
//             <a href="https://www.fexbfebui.site/"
//                target="_blank"
//                className="link">https://www.fexbfebui.site/</a>
//         </span>
//
//
//                                     <span>
//             Job Type
//         </span>
//                                     <span>
//             Freelance
//         </span>
//
//
//                                     <span>
//             Role
//         </span>
//                                     <span>
//             Backend developer
//         </span>
//
//
//                                     <span>
//             Technology
//         </span>
//                                     <span>
//             NodeJS
//         </span>
//
//                                     <span>
//             Duration
//         </span>
//                                     <span>
//             <span className="highlighted">Aug 2022</span><pre className="inline"> - </pre>
//             <span className="highlighted">Dec 2022</span>
//         </span>
//
//
//                                     <span>
//             Event
//         </span>
//                                     <span>
//             <span className="highlighted"> Faculty Exhibition </span>
//             by Faculty of Economics and Business Universitas Indonesia
//         </span>
//                                 </div>
//
//                                 <ul className="list-disc p-5">
//                                     <li>
//                                         A ticketing app for FExB
//                                     </li>
//                                     <li>
//                                         Built by a team consisting of 4 people:
//                                         2 frontend developers
//                                         and
//                                         2 backend developers
//                                     </li>
//                                     <li>
//                                         Some frameworks and libraries used in this project are
//                                         <span className="highlighted">Express</span> and
//                                         <span className="highlighted">Prisma</span>
//                                     </li>
//                                 </ul>
//                             </div>
//
//                         </template>
//                     </div>
//
//
//                     <div className="experience-div" id="experience-577254">
//                         <div className="title-photo-and-details-container">
//                             <div>
//                                 <div className="thumbnail-box"
//                                      style="--img-url: url('/img/fasilkom ui.png');">
//                                 </div>
//                             </div>
//                             <div className="title-and-details-container">
//                                 <h3 className="title">Universitas Indonesia</h3>
//                                 <p className="detail">
//                                     Teaching Assistant <br /> Computer Science UI
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="more-details-btn noselect">
//                             More Details
//                         </div>
//
//
//                         <template id="experience-modal-577254">
//                             <div className="p-2 pt-0">
//                                 <div className="experience-detail-table cols-2-fit-content">
//         <span>
//             Job Type
//         </span>
//                                     <span>
//             Part-time
//         </span>
//
//
//                                     <span>
//             Role
//         </span>
//                                     <span>
//             Teaching Assistant
//         </span>
//                                 </div>
//
//                                 <br />
//
//
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 justify-evenly">
//
//                                         <div className="pb-5 w-fit">
//             <span className="text-xl highlighted bold">
//                 Advanced Programming
//             </span>
//
//                                             <div className="experience-detail-table cols-2-fit-content p
//                         t-1 pl-5">
//                 <span>
//                     Term
//                 </span>
//                                                 <span>
//                     2 - 2022/2023
//                 </span>
//
//
//                                                 <span>
//                     Start
//                 </span>
//                                                 <span>
//                     Jan 2023
//                 </span>
//
//
//                                                 <span>
//                     End
//                 </span>
//                                                 <span>
//                     Present
//                 </span>
//                                             </div>
//                                         </div>
//
//
//                                         <div className="pb-5 w-fit">
//             <span className="text-xl highlighted bold">
//                 Data Structures and Algorithms
//             </span>
//
//                                             <div className="experience-detail-table cols-2-fit-content p
//                         t-1 pl-5">
//                 <span>
//                     Term
//                 </span>
//                                                 <span>
//                     1 - 2022/2023
//                 </span>
//
//
//                                                 <span>
//                     Start
//                 </span>
//                                                 <span>
//                     Aug 2022
//                 </span>
//
//
//                                                 <span>
//                     End
//                 </span>
//                                                 <span>
//                     Jan 2023
//                 </span>
//                                             </div>
//                                         </div>
//
//
//                                         <div className="pb-5 w-fit">
//             <span className="text-xl highlighted bold">
//                 Programming Foundations 2
//             </span>
//
//                                             <div className="experience-detail-table cols-2-fit-content p
//                         t-1 pl-5">
//                 <span>
//                     Term
//                 </span>
//                                                 <span>
//                     2 - 2021/2022
//                 </span>
//
//
//                                                 <span>
//                     Start
//                 </span>
//                                                 <span>
//                     Jan 2022
//                 </span>
//
//
//                                                 <span>
//                     End
//                 </span>
//                                                 <span>
//                     Jun 2022
//                 </span>
//                                             </div>
//                                         </div>
//
//
//                                         <div className="pb-5 w-fit">
//             <span className="text-xl highlighted bold">
//                 Programming Foundations 1
//             </span>
//
//                                             <div className="experience-detail-table cols-2-fit-content p
//                         t-1 pl-5">
//                 <span>
//                     Term
//                 </span>
//                                                 <span>
//                     1 - 2021/2022
//                 </span>
//
//
//                                                 <span>
//                     Start
//                 </span>
//                                                 <span>
//                     Jul 2021
//                 </span>
//
//
//                                                 <span>
//                     End
//                 </span>
//                                                 <span>
//                     Jan 2022
//                 </span>
//                                             </div>
//                                         </div>
//
//
//                                     </div>
//                             </div>
//
//                         </template>
//                     </div>
//
//
//                 </div>
//             </div>
//
//
//             <div className="flex flex-col items-center mt-5">
//                 <h2 className="text-2xl mb-3">
//                     Organization
//                 </h2>
//
//
//                 <div className="experiences-container">
//
//
//                     <div className="experience-div" id="experience-391426">
//                         <div className="title-photo-and-details-container">
//                             <div>
//                                 <div className="thumbnail-box"
//                                      style="--img-url: url('/img/ristek.jpg');">
//                                 </div>
//                             </div>
//                             <div className="title-and-details-container">
//                                 <h3 className="title">Ristek</h3>
//                                 <p className="detail">
//                                     Member and Lead of Competitive Programming
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="more-details-btn noselect">
//                             More Details
//                         </div>
//
//
//                         <template id="experience-modal-391426">
//
//
//                             <div className="carousel experience-carousels" id="carousel-1">
//                                 <div className="carousel-stack">
//                                     <div className="prev-next-container prev">
//                                         <span className="prev-icon"></span>
//                                     </div>
//                                     <div className="prev-next-container next">
//                                         <span className="next-icon"></span>
//                                     </div>
//                                     <div className="detail stack-layout pt-1 pb-1">
//                                     </div>
//
//                                     <div className="carousel-stacked content-layer full-w">
//                                     </div>
//                                     <template className="content-template">
//
//                                         <img className="content"
//                                              src="/img/experiences/ristek/about-cp.png" />
//
//                                             <img className="content"
//                                                  src="/img/experiences/ristek/team-cp.png" />
//
//                                                 <img className="content"
//                                                      src="/img/experiences/ristek/lomba-compfest.jpg" />
//
//                                     </template>
//                                     <template className="detail-text-template">
//                                         [null,null,"SCPC Compfest finalist - one of several competitions participated by
//                                         Ristek "]
//                                     </template>
//
//                                 </div>
//                             </div>
//
//                             <div className="p-2 pt-5
//             grid grid-cols-1 sm:grid-cols-2 justify-evenly">
//                                 <div className="pb-5 w-fit">
//         <span className="text-xl highlighted bold">
//             Competitive Programming 2022
//         </span>
//
//                                     <div className="experience-detail-table cols-2-fit-content p
//                     t-1 pl-5">
//                                         <span> Position </span><span> Lead </span>
//                                         <span> Division </span><span> Competitive Programming </span>
//                                         <span> Start </span><span> Mar 2022 </span>
//                                         <span> End </span><span> Jan 2023 </span>
//                                     </div>
//                                 </div>
//
//                                 <div className="pb-5 w-fit">
//         <span className="text-xl highlighted bold">
//             Competitive Programming 2021
//         </span>
//
//                                     <div className="experience-detail-table cols-2-fit-content p
//                         t-1 pl-5">
//                                         <span> Position </span><span> Member </span>
//                                         <span> Division </span><span> Competitive Programming </span>
//                                         <span> Start </span><span> Mar 2021 </span>
//                                         <span> End </span><span> Jan 2022 </span>
//                                     </div>
//                                 </div>
//                             </div>
//
//                         </template>
//
//
//                     </div>
//
//
//                 </div>
//             </div>
//
//         </div>
//         <div id="skills"
//              className="content-section-container flex flex-col items-center min-h-[20rem]"
//              style="grid-row: 5;">
//             <h1 className="text-4xl">
//                 Skills
//             </h1>
//             <div className="skill-table mt-5">
//
//
//                 <div className="skill-group-name">
//                     <div>
//                         Programming <br /> Languages
//                     </div>
//                 </div>
//                 <div className="flex flex-row flex-wrap items-center justify-left">
//
//                     <div>
//                         <div className="skill-thumbnail-box">
//                             <div style="--img-url: url('/img/skills/python.png');">
//                             </div>
//                         </div>
//
//                         <template className="skill-tip-content">
//                             Python
//                         </template>
//                         <a className="skill-link"
//                            href="https://python.org/"
//                            target="_blank"></a>
//
//                     </div>
//
//                     <div>
//                         <div className="skill-thumbnail-box">
//                             <div style="--img-url: url('/img/skills/java.png');">
//                             </div>
//                         </div>
//
//                         <template className="skill-tip-content">
//                             Java
//                         </template>
//                         <a className="skill-link"
//                            href="https://www.java.com/en/"
//                            target="_blank"></a>
//
//                     </div>
//
//                     <div>
//                         <div className="skill-thumbnail-box">
//                             <div style="--img-url: url('/img/skills/c-sharp.png');">
//                             </div>
//                         </div>
//
//                         <template className="skill-tip-content">
//                             C Sharp
//                         </template>
//                         <a className="skill-link"
//                            href="https://learn.microsoft.com/en-us/dotnet/csharp/"
//                            target="_blank"></a>
//
//                     </div>
//
//                     <div>
//                         <div className="skill-thumbnail-box">
//                             <div style="--img-url: url('/img/skills/javascript.png');">
//                             </div>
//                         </div>
//
//                         <template className="skill-tip-content">
//                             Javascript
//                         </template>
//                         <a className="skill-link"
//                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
//                            target="_blank"></a>
//                     </div>
//
//                     <div>
//                         <div className="skill-thumbnail-box">
//                             <div style="--img-url: url('/img/skills/kotlin.png');">
//                             </div>
//                         </div>
//
//                         <template className="skill-tip-content">
//                             Kotlin
//                         </template>
//                         <a className="skill-link"
//                            href="https://kotlinlang.org/"
//                            target="_blank"></a>
//                     </div>
//
//                 </div>
//
//
//                 <div className="skill-group-name">
//                     <div>
//                         Frameworks
//                     </div>
//                 </div>
//                 <div className="flex flex-row flex-wrap items-center justify-left">
//
//                     <div>
//                         <div className="skill-thumbnail-box">
//                             <div style="--img-url: url('/img/skills/node-js.png');">
//                             </div>
//                         </div>
//
//                         <template className="skill-tip-content">
//                             Node JS - Javascript
//                         </template>
//                         <a className="skill-link"
//                            href="https://nodejs.org/en/about/"
//                            target="_blank"></a>
//                     </div>
//
//                     <div>
//                         <div className="skill-thumbnail-box">
//                             <div style="--img-url: url('/img/skills/django.svg');">
//                             </div>
//                         </div>
//
//                         <template className="skill-tip-content">
//                             Django - Python
//                         </template>
//                         <a className="skill-link"
//                            href="https://www.djangoproject.com/"
//                            target="_blank"></a>
//                     </div>
//
//                     <div>
//                         <div className="skill-thumbnail-box">
//                             <div style="--img-url: url('/img/skills/spring-boot.svg');">
//                             </div>
//                         </div>
//
//                         <template className="skill-tip-content">
//                             Spring Boot - Java
//                         </template>
//                         <a className="skill-link"
//                            href="https://spring.io/projects/spring-boot"
//                            target="_blank"></a>
//                     </div>
//
//                     <div>
//                         <div className="skill-thumbnail-box">
//                             <div style="--img-url: url('/img/skills/xamarin.png');">
//                             </div>
//                         </div>
//
//                         <template className="skill-tip-content">
//                             Xamarin - C#
//                         </template>
//                         <a className="skill-link"
//                            href="https://dotnet.microsoft.com/en-us/apps/xamarin"
//                            target="_blank"></a>
//                     </div>
//
//                     <div>
//                         <div className="skill-thumbnail-box">
//                             <div style="--img-url: url('/img/skills/flutter.png');">
//                             </div>
//                         </div>
//
//                         <template className="skill-tip-content">
//                             Flutter - Dart
//                         </template>
//                         <a className="skill-link"
//                            href="https://flutter.dev/"
//                            target="_blank"></a>
//                     </div>
//
//                 </div>
//
//             </div>
//         </div>
//
//         <div id="connect-with-me"
//              className="content-section-container ending-section flex flex-col justify-start items-stretch
//             min-h-[50vh]"
//              style="grid-row: 6;">
//
//
//             <div className="flex flex-col flex-grow justify-center items-center w-full mt-8">
//                 <h2 className="text-4xl mb-16">Reach Me</h2>
//
//                 <div className="p-2">
//                     <a className="cursor-pointer"
//                        data-tippy-content="click to copy this email to clipboard"
//                        onClick="navigator.clipboard.writeText('immanuel.nuel02@gmail.com');
//                         showToast({
//                             toastMessage: 'Email copied',
//                             toastIconSrc: '/img/misc/copy-svgrepo-com.svg',
//                             additionalClass: ['copied-notification-toast'],
//                         });">
//                         <div>
//                             <img src="/img/social-media/gmail.png" className="inline-block w-10 h-10 ml-4 mr-4" />
//
//                     <span className="text-xl font-thin align-middle">
//                         immanuel.nuel02@gmail.com
//                     </span>
//                         </div>
//                     </a>
//                 </div>
//                 <div className="flex flex-row justify-center items-center p-2">
//                     <a target="_blank" href="https://www.linkedin.com/in/immanuel-/"
//                        data-tippy-content="Linked in">
//                         <img src="/img/social-media/linked-in.svg"
//                              className="social-media-icon" />
//                     </a>
//                     <a target="_blank" href="https://gitlab.com/immanuel.nuel02"
//                        data-tippy-content="Gitlab">
//                         <img src="/img/social-media/gitlab.png"
//                              className="social-media-icon" />
//                     </a>
//                     <a target="_blank" href="https://github.com/Hzzkygcs"
//                        data-tippy-content="Github">
//                         <img src="/img/social-media/github.svg"
//                              className="social-media-icon" />
//                     </a>
//                     <a target="_blank" href="https://stackoverflow.com/users/7069108/hzzkygcs"
//                        data-tippy-content="Stackoverflow">
//                         <img src="/img/social-media/stackoverflow.png"
//                              className="social-media-icon" />
//                     </a>
//                     <a target="_blank" href="https://www.instagram.com/immanuel_312/"
//                        data-tippy-content="Instagram">
//                         <img src="/img/social-media/instagram.svg"
//                              className="instagram social-media-icon" />
//                     </a>
//                 </div>
//             </div>
//         </div>
//         {/*for eager loading/caching*/}
//         <img src="/img/misc/copy-svgrepo-com.svg" className="hidden" />
//     </>);
// }
// RawBody.propTypes = rawBodyPropTypes;
//
