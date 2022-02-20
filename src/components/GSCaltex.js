import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import GSCaltexBg from "../images/GSCaltexBg.png";
import GSCDiscoveryPic from "../images/GSCDiscoveryPic.png"
import GSCIdeationPic from "../images/GSCIdeationPic.png"
import GSCTesting from "../images/GSCTesting.png"



class GSCaltex extends React.Component {
    render() {
        return (
            <div className="project-wrapper">
                <div className="project-info-header">
                    {/* <div className="project-header">
                        <div classNames="col-md-12 container text-center project-head-heght">
                            <h1 className="project-h1">Creating supply and trading team’s operating system</h1>
                        </div>
                        <figure className="col-md-12 project-head-heght"><img className="featurette-image img-fluid mx-auto project-img" aria-label="GSCaltexBg: 1232x275" preserveAspectRatio="xMidYMid slice" focusable="false" src={GSCaltexBg} alt="GSCaltexBg"></img></figure>
                    </div> */}
                    <div className="project-header">
                        <div classNames="col-md-12 container text-center project-head-heght">
                            <h1 className="project-h1">Creating supply and trading team’s operating system</h1>
                        </div>
                        <img className="featurette-image img-fluid mx-auto project-img" aria-label="GSCaltexBg: 1232x275" preserveAspectRatio="xMidYMid slice" focusable="false" src={GSCaltexBg} alt="GSCaltexBg"></img>
                    </div>
                    <div className="project-info">
                        <div className="project-contents">
                            <div className="row featurette projectModules">
                                <div className="col-md-5">
                                    <h2 className="project-h2">GS Caltex</h2>
                                </div>
                                <div className="col-md-7">
                                    <p className="project-p">
                                    <a className="projectCompanyLinks" href="https://www.gscaltex.com/en" >GS Caltex</a> is one of South Korean oil refineries. It provides more than one-third of Korea’s oil needs and exports over 50% of its products. GS Caltex approached us to improve their work productivity and efficiency for supply and trading team by creating an operating system.</p>
                                </div>
                            </div>
                            <div className="row featurette projectModules">
                                <div className="col-md-7">
                                    <h2 className="project-h2">Discovery</h2>
                                    <p className="project-p">We were curious about what makes them unproductive and inefficient so we conducted:</p>
                                    <ol>
                                        <li>Workshops with stakeholders to to define its business objective, success criteria of the project</li>
                                        <li>User and Stakeholder interviews to define workflows, its history and personas. </li>
                                        <li>Competitive analysis to get inspirations and for benchmarking.</li>
                                    </ol>
                                </div>
                                <div className="col-md-5 discovery-imgs">
                                    <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="GSC_discovery: 456x272" preserveAspectRatio="xMidYMid slice" focusable="false" src={GSCDiscoveryPic} alt="GSC_discovery"></img></figure>

                                </div>
                            </div>
                            <div className="row featurette projectModules">
                                <div className="col-md-5">
                                    <h2 className="project-h2">Analysis</h2>
                                </div>
                                <div className="col-md-7">
                                    <p className="project-p">After constructive discovery sessions, we found that there are 2 different user groups. They spend so much time consolidating and updating data for supply plans. With unmanaged data, they had to deal with inquiries from other departments as well. They wanted to zero in on decision making with the data for plans rather than manual works such as updating and integrating data. Finally, we could address common workflows and 7 areas they are working on for the operating system.</p>
                                </div>
                            </div>
                            <div className="row featurette projectModules">
                                <div className="col-md-7">
                                    <h2 className="project-h2">Ideation</h2>
                                    <p className="project-p">We had another workshop to:</p>
                                    <ol>
                                        <li>Brainstorm about how the supply & trading team can see the data at a glance and provide it to other departments.</li>
                                        <li>Ideate how they can visually view supply plans. </li>
                                        <li>Sketch graphs and tables that they need.</li>
                                    </ol>
                                </div>
                                <div className="col-md-5 discovery-imgs">
                                    <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="GSC_ideation: 360x270" preserveAspectRatio="xMidYMid slice" focusable="false" src={GSCIdeationPic} alt="GSC_ideation"></img></figure>
                                </div>
                            </div>
                            <div className="row featurette projectModules">
                                <div className="col-md-7">
                                    <h2 className="project-h2">Design and Testings</h2>
                                    <p className="project-p">We created wireframes and rapid prototypes. In designs, there are plenty of tales, graphs, filters and modals. The key of design was how we could prioritize and organize components. Therefore, we also had user testings and sharpened designs. Eventually, we could approach the final designs that users are happy with.</p>
                                </div>
                                <div className="col-md-5 discovery-imgs">
                                    <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="GSC_testing: 360x270" preserveAspectRatio="xMidYMid slice" focusable="false" src={GSCTesting} alt="GSC_testing"></img></figure>
                                </div>
                            </div>
                            <div className="row featurette projectModules">
                                <div className="col-md-5">
                                    <h2 className="project-h2">Development and Testings</h2>
                                </div>
                                <div className="col-md-7">
                                    <p className="project-p">After the design phase, we developed the font-end part as well as we conducted user testings to improve usability. While the front-end was developing, the back-end was also builded. It was hard to manage many data sources into one platform and refine them. Therefore, we closely collaborated with the supply and trading team, GS IT team and other related departments for the data. Eventually, we could complete the project successfully.</p>
                                </div>
                            </div>
                            <div className="row featurette projectModules">
                                <div className="col-md-5">
                                    <h2 className="project-h2">Final Results</h2>
                                </div>
                                <div className="col-md-7">
                                    <p className="project-p">GS Caltex was able to reduce 30% of labor cost with the operating system since they boosted up their work efficiency and productivity.</p>
                                </div>
                            </div>
                            <div className="row featurette projectModules">
                                <div className="col-md-5">
                                    <h2 className="project-h2">Contribution</h2>
                                </div>
                                <div className="col-md-7">
                                    <p className="project-p">This project was a valuable opportunity to join as a project manager and a service designer so I was able to involve entire UX process including development until publishing the product. But my main contribution was:</p>
                                    {/* <p className="project-p project-p-subtitle">As a service designer:</p> */}
                                    <dl>
                                    <dt className="project-p project-p-subtitle">As a service designer:</dt>
                                    <ol>
                                        <li>Conducted workshops, stakeholder and user interviews. Work closely with designers for design initiatives.</li>
                                        <li>Conducted usability testings and consolidated feedbacks. Implemented design modifications.</li>
                                        <li>Defined authorization flows and created interaction/UI design for admin and authorization pages</li>
                                    </ol>
                                    </dl>
                                    <dl>
                                    <dt className="project-p project-p-subtitle">As a project manager:</dt>
                                    <ol>
                                        <li>Leading weekly reviews with clients.</li>
                                        <li> Communicated with GS Caltex stakeholders and collaborated with product designers and 8 international developers.</li>
                                    </ol>
                                    </dl>
                                </div>
                            </div>

                            <div className="row featurette projectModules projectArrows">
                                <div className="col-md-6 projectArrowLeft">

                                </div>
                                <div className="col-md-6 projectArrowRight">
                                    <Link to="/hanwhatechwin">
                                        <h2 className="project-h2" text-align="right">Hanwha <span><FontAwesomeIcon icon={faChevronRight} className="chevronRight" /></span></h2>
                                        
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GSCaltex;
