import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import HanwhaTechwinBg from "../images/HanwhaTechwinBgPic.png";
import HanwhaTechwinDiscoveryPic from "../images/HanwhaTechwinDiscoveryPic.png"
import HanwahTechwinInterview from "../images/HanwahTechwinInterview.png"



function HangwhaTechwin() {
    return (
        <div className="project-wrapper">
            <div className="project-info-header">
                <div className="project-header">
                    <div classNames="col-md-12 container text-center project-head-heght">
                        <h1 className="project-h1">Self check in/out services by using image data from CCTV (PoC)</h1>
                    </div>
                    <figure className="col-md-12 project-head-heght"><img className="featurette-image img-fluid mx-auto project-img" aria-label="HanwhaTechwinBg: 1232x275" preserveAspectRatio="xMidYMid slice" focusable="false" src={HanwhaTechwinBg} alt="HanwhaTechwinBg"></img></figure>
                </div>
                <div className="project-info ">
                    <div className="project-contents">
                        <div className="row featurette projectModules">
                            <div className="col-md-5">
                                <h2 className="project-h2">Hanwha Techwin</h2>
                            </div>
                            <div className="col-md-7">
                                <p className="project-p">
                                    <a className="projectCompanyLinks" href="https://www.hanwha-security.com/en/" >Hanwha Techwin</a> is a video surveillance company and a subsidiary of Hanwha Group. The techwin team wanted to confirm that image data could be used for self check in/out processes and improve services for Hanwha hotels and resorts.</p>
                            </div>
                        </div>
                        <div className="row featurette projectModules">
                            <div className="col-md-7">
                                <h2 className="project-h2">Workshops</h2>
                                <p className="project-p">We had workshops to know Hanwha techwin’s business contexts and their objectives as well as success critera for this project. We found out that the key of this project is to understand current CCTV technologies and what kinds of image data we could get. Besides, it is important to know what kinds of scenarios we can use the data for.</p>
                            </div>
                            <div className="col-md-5 discovery-imgs">
                                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="HanwhTechwin_discovery: 456x272" preserveAspectRatio="xMidYMid slice" focusable="false" src={HanwhaTechwinDiscoveryPic} alt="HanwhaTechwin_discovery"></img></figure>

                            </div>
                        </div>
                        <div className="row featurette projectModules">
                            <div className="col-md-7">
                                <h2 className="project-h2">User Interviews</h2>
                                <p className="project-p">We visited one of the hanwha hotels in Gangwon province in South korea and this hotel is executing self check in/out services. We conducted interviews with 6 staff from 3 different departments(front desk, maintenance team and housekeeping).  With sessions, we understand how they are currently using image data and uncover problems on self services. </p>
                            </div>
                            <div className="col-md-5 discovery-imgs">
                                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="HanwahTechwinInterview: 360x270" preserveAspectRatio="xMidYMid slice" focusable="false" src={HanwahTechwinInterview} alt="HanwahTechwinInterview"></img></figure>
                            </div>
                        </div>
                        <div className="row featurette projectModules">
                            <div className="col-md-5">
                                <h2 className="project-h2">Discovery Results</h2>
                            </div>
                            <div className="col-md-7">
                                <p className="project-p">After close collaborations with Techwin CCTV team, we understand their technical possibilities to detect guests. Therefore, we decided to focus on 3 scenarios and refine the image data by the development team.</p>
                                <p className="project-p">Moreover, 95% of staff & user pain points on self-check in/out services were caused by UI Design and interaction flows from self-kiosks. Unfortunately, they rarely use image data from CCTV since there are too many CCTVs to monitor. Also, there aren’t any notification systems when they get urgent situations and events from guests.</p>
                                <p className="project-p">As a result, for design, we set up new personas who are using the image data. For Hanwha Techwin’s business objectives, this project is not to revamp Kiosk’s UI design so we decided to run this project with 2 tracks:</p>
                                <ol>
                                    <li>Development Track: proving image data usage and refine the data. Finally built simple dashboard to show data.</li>
                                    <li>Marketing Track: create wireframe and high-fidelity mock-up for a fancy dashboard and image data visualization pages  with new personas and this design will be for marketing purposes to Hanwha Hotels and resorts.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="row featurette projectModules">
                            <div className="col-md-5">
                                <h2 className="project-h2">Ideation and Design</h2>
                            </div>
                            <div className="col-md-7">
                                <p className="project-p">Since the image data should be reflected on the design, Design team had to collaborate closely. Our developers are not in Korea so we conduct an ideation session remotely through Google Jamboard. Design team also researched other PMS systems to get more ideas. After we created wireframes and prototypes, we had several discuss session with Techwin team and eventually came up with final design that had notification function, image data visualization and tables.</p>
                            </div>
                        </div>
                        <div className="row featurette projectModules">
                            <div className="col-md-5">
                                <h2 className="project-h2">Testing lab and Development</h2>
                            </div>
                            <div className="col-md-7">
                                <p className="project-p">We set the testing lab through the scenarios and get the image data and metadata. After refining data, we showed it in graphs and tables on the dashboard. Eventually, we could detect loitering, check-in/out events and we were able to send notifications to follow up the events.</p>
                            </div>
                        </div>
                        <div className="row featurette projectModules">
                            <div className="col-md-5">
                                <h2 className="project-h2">Contribution</h2>
                            </div>
                            <div className="col-md-7">
                                <p className="project-p">My early career in the hotel industry was helpful and supportive to understand problems and to create designs. I was involved every process however, my main contribution was:</p>
                                <ol>
                                    <li>Conduct workshops and to lead user interviews.</li>
                                    <li>Created new personas and defined staff & guest pain points.</li>
                                    <li>Suggested most of the important components and design concepts in the dashboard.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="row featurette projectModules projectArrows">
                            <div className="col-md-6 projectArrowLeft">
                                <Link to="/GSCaltex">
                                    <h2 className="project-h2"><span><FontAwesomeIcon icon={faChevronLeft} className="chevronRight" /></span> GS Caltex </h2>
                                </Link>
                            </div>
                            <div className="col-md-6 projectArrowRight">
                                <Link to="/onethirdfitness">
                                    <h2 className="project-h2">1/3 Fitness <span><FontAwesomeIcon icon={faChevronRight} className="chevronRight" /></span></h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HangwhaTechwin;
