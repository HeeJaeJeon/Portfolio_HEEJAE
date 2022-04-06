import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import HanwhaTechwinBg from "../images/HanwhaTechwinBgPic.png";
import HanwahTechwinInterview from "../images/HanwahTechwinInterview.png"
import hanwhaUseCases from "../images/hanwhaUseCases.png"
import hanwhaIdeation1 from "../images/hanwhaIdeation1.png"
import hanwhaBenchmarking1 from "../images/hanwhaBenchmarking1.png"
import hanwhaWireframes1 from "../images/hanwhaWireframes1.png"
import hanwhaHifiMockUp1 from "../images/hanwhaHifiMockUp1.png"
import hanwaMockup1 from "../images/hanwaMockup1.png"
import hanwaMockup2 from "../images/hanwaMockup2.png"

function HangwhaTechwin() {
    return (
        <div className="project-wrapper">
            <div className="project-info-header">
                {/* <div className="project-header">
                    <div classNames="col-md-12 container text-center project-head-heght">
                        <h1 className="project-h1">Self check in/out services by using image data from CCTV (PoC)</h1>
                    </div>
                    <figure className="col-md-12 project-head-heght"><img className="featurette-image img-fluid mx-auto project-img" aria-label="HanwhaTechwinBg: 1232x275" preserveAspectRatio="xMidYMid slice" focusable="false" src={HanwhaTechwinBg} alt="HanwhaTechwinBg"></img></figure>
                </div> */}
                <div className="project-header">
                    <div classNames="col-md-12 container text-center project-head-heght">
                        <h1 className="project-h1">Self check in/out services by using image data from CCTV (PoC)</h1>
                    </div>
                    <img className="featurette-image img-fluid mx-auto project-img" aria-label="HanwhaTechwinBg: 1232x275" preserveAspectRatio="xMidYMid slice" focusable="false" src={HanwhaTechwinBg} alt="HanwhaTechwinBg"></img>
                </div>
                <div className="project-info ">
                    <div className="project-contents">
                        <div className="row featurette projectModules">
                            <div className="col-md-5">
                                <h2 className="project-h2">Hanwha Techwin</h2>
                            </div>
                            <div className="col-md-7">
                                <p className="project-p">
                                    <a className="projectCompanyLinks" href="https://www.hanwha-security.com/en/" >Hanwha Techwin</a> is a video surveillance company and a subsidiary of Hanwha Group. The techwin team wanted to confirm whether the image data(from CCTV) could be used for self check in/out processes and improve services for Hanwha hotels and resorts or not.
                                </p>
                                <p className="project-p">So this Project became a PoC project with 2 different tracks:
                                    <ul>
                                        <li>Concept design PoC</li>
                                        <li>Engineering PoC</li>
                                    </ul>
                                </p>
                                <p>With my portfolio, I will zero in on the concept design PoC.</p>
                            </div>
                        </div>
                        <div className="row featurette projectModules">
                            <div className="col-md-7">
                                <h2 className="project-h2">User Interviews</h2>
                                <p className="project-p">We visited one of the hanwha hotels in Gangwon province in South korea and this hotel is executing self check in/out services. We conducted interviews with 4 staff from 2 different departments(front desk and maintenance team).  With sessions, we understood how they were using image data and uncovered pain points.</p>
                            </div>
                            <div className="col-md-5 discovery-imgs">
                                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="HanwahTechwinInterview: 360x270" preserveAspectRatio="xMidYMid slice" focusable="false" src={HanwahTechwinInterview} alt="HanwahTechwinInterview"></img></figure>
                            </div>
                        </div>
                        <div className="row featurette projectModules">
                            <div className="col-md-12">
                                <h2 className="project-h2">Interview Results</h2>
                            </div>
                        </div>
                        <div className="row featurette projectSubModules1">
                            <div className="col-md-5">
                                <h3 className="project-h3">Personas</h3>
                            </div>
                            <div className="col-md-7">
                                <p className="project-p">We got 2 personas:
                                    <ul>
                                        <li>Lobby manager: Customer service and Room stock management</li>
                                        <li>Facilities team leader: Facilities management</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="row featurette projectSubModules1">
                            <div className="col-md-5">
                                <h3 className="project-h3">Pain points</h3>
                            </div>
                            <div className="col-md-7">
                                <p className="project-p">The pain points were on:
                                    <ul>
                                        <li>They could not see the check in/out at a glance</li>
                                        <li>No internal communication channels</li>
                                        <li>They don't know the location of CCTVs</li>
                                        <li>They have too many screens to check</li>
                                        <li>No notification systems</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="row featurette projectSubModules1">
                            <div className="col-md-5">
                                <h3 className="project-p">Use cases</h3>
                                <ul>
                                    <li>Can we improve our current work using image analysis data?</li>
                                    <li>Can video analytics data be used to improve facilities team work?</li>
                                </ul>
                            </div>
                            <div className="col-md-7">
                                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="hanwhaUseCases: 520x375" preserveAspectRatio="xMidYMid slice" focusable="false" src={hanwhaUseCases} alt="hanwhaUseCases"></img></figure>
                            </div>
                        </div>
                        <div className="row featurette projectModules">
                            <div className="col-md-12">
                                <h2 className="project-h2">Design</h2>
                            </div>
                        </div>
                        <div className="row featurette projectSubModules1">
                            <div className="col-md-5">
                                <h3 className="project-p">Ideation</h3>
                                <p className="project-p">If IP Camera video analysis data is used, how can it help hotel operation?</p>
                            </div>
                            <div className="col-md-7">
                                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="hanwhaIdeation1: 520x252" preserveAspectRatio="xMidYMid slice" focusable="false" src={hanwhaIdeation1} alt="hanwhaIdeation1"></img></figure>
                            </div>
                        </div>
                        <div className="row featurette projectSubModules1">
                            <div className="col-md-5">
                                <h3 className="project-p">Benchmarking</h3>
                                <p>We benchmarked systems such as:
                                    <ul>
                                        <li>Property Management System (PMS)</li>
                                        <li>Central Reservation System (CRS)</li>
                                        <li>Customer relationship management (CRM)</li>
                                        <li>AI Systems</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="col-md-7">
                                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="hanwhaBenchmarking1: 520x207" preserveAspectRatio="xMidYMid slice" focusable="false" src={hanwhaBenchmarking1} alt="hanwhaBenchmarking1"></img></figure>
                            </div>
                        </div>
                        <div className="row featurette projectSubModules1">
                            <div className="col-md-12">
                                <h3 className="project-h3">Wireframes</h3>
                            </div>
                        </div>
                        <div className="row featurette projectSubModules2">
                            <div className="col-md-12">
                                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="hanwhaWireframes1: 880x381" preserveAspectRatio="xMidYMid slice" focusable="false" src={hanwhaWireframes1} alt="hanwhaWireframes1"></img></figure>
                            </div>
                        </div>
                        <div className="row featurette projectSubModules1">
                            <div className="col-md-5">
                                <h3 className="project-h3">High fidelity prototypes</h3>
                            </div>
                            <div className="col-md-7">
                                <p className="project-p">Key functions are:
                                    <ul>
                                        <li>Dashboard: status of check in/out, status of issues</li>
                                        <li>Notification function</li>
                                        <li>Data analysis for customer and the use of spaces</li>
                                        <li>Issue analysis</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="row featurette projectSubModules2">
                            <div className="col-md-12">
                                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="hanwhaHifiMockUp1: 880x460" preserveAspectRatio="xMidYMid slice" focusable="false" src={hanwhaHifiMockUp1} alt="hanwhaHifiMockUp1"></img></figure>
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
                        <div className="row featurette projectSubModules2">
                            <div className="col-md-3">
                               
                            </div>
                            <div className="col-md-9">
                                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="hanwaMockup1: 675x493" preserveAspectRatio="xMidYMid slice" focusable="false" src={hanwaMockup1} alt="hanwaMockup1"></img></figure>
                            </div>
                        </div>
                        <div className="row featurette projectSubModules2">
                            <div className="col-md-12">
                                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="hanwaMockup2: 672x360" preserveAspectRatio="xMidYMid slice" focusable="false" src={hanwaMockup2} alt="hanwaMockup2"></img></figure>
                            </div>
                        </div>

                        <div className="row featurette projectModules projectArrows">
                            <div className="col-md-6 projectArrowLeft">
                                <Link to="/onethirdfitness">
                                    <h2 className="project-h2"><span><FontAwesomeIcon icon={faChevronLeft} className="chevronRight" /></span> 1/3 Fitness</h2>
                                </Link>
                            </div>
                            <div className="col-md-6 projectArrowRight">
                                <Link to="/works">
                                    <h2 className="project-h2">Personal Works <span><FontAwesomeIcon icon={faChevronRight} className="chevronRight" /></span></h2>
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
