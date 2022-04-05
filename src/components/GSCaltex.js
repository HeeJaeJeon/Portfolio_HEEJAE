import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import GSCaltexBg from "../images/GSCaltexBg.png";
import GSCDiscoveryPic from "../images/GSCDiscoveryPic.png"
import GSCTesting from "../images/GSCTesting.png"
import WorkFlows from "../images/4WorkFlows.png"
import newProcess from "../images/newProcess.png"
import ideationWorkshop from "../images/ideationWorkshop.png"
import BenchmarkingGS from "../images/BenchmarkingGS.png"
import TimelineViewScreen from "../images/TimelineViewScreen.png"
import SimulationScreen from "../images/SimulationScreen.png"
import AdminPages from "../images/AdminPages.png"
import GS_Mockup1 from "../images/GS_Mockup1.png"
import GS_Mockup2 from "../images/GS_Mockup2.png"


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
                                    <h2 className="project-h2">Analysis and Solution</h2>
                                </div>
                                <div className="col-md-7">
                                    <p className="project-p">After constructive discovery sessions, we found that there are 2 different user groups(leaders and staff). They spend so much time consolidating and updating data for supply plans. With unmanaged data, they had to deal with inquiries from other departments as well. They wanted to zero in on decision making with the data for plans rather than manual work such as updating and integrating data. As a solution, We decided to show the integrated data with visualization on the operating system.</p>
                                </div>
                            </div>
                            <div className="row featurette projectModules">
                                <div className="col-md-5">
                                    <h2 className="project-h2">Major Design Challenges</h2>
                                </div>
                                <div className="col-md-7">
                                <p className="project-p">We had to design from scratch since it was a new system. Therefore, the main design challenges were:</p>
                                    <ol>
                                        <li>Menus (Navigation & Sitemap)</li>
                                        <li>Data Visualization & Modules</li>
                                        <li>Admin Pages</li>
                                    </ol>
                                </div>
                            </div>
                            <div className="row featurette projectSubModules1">
                                <div className="col-md-5">
                                    <h3 className="project-h2">Menus(Navigation)</h3>
                                </div>
                                <div className="col-md-7">
                                    <p className="project-p">To create a Navigation, it was necessary to understand their work flows so in the discovery phase, we found out 4 of Task flows and came up with common areas. Eventually, We combined all flows and created a new process for the operating system.</p>
                                </div>
                            </div>
                            <div className="row featurette projectSubModules2">
                                <div className="col-md-5">
                                <p className="project-p">Summary of workflow tables:</p>
                                <ul>
                                    <li>Rows: Each departments</li>
                                    <li>Columns: Steps of work</li>
                                    <li>Final goal: Creating the supply plan</li>
                                    <li>
                                      Common Flow:
                                      <ol>
                                      <li>Check each data sources</li>
                                      <li>Decide supply plan and schedule</li>
                                      <li>Create orders into SAP</li>
                                      <li>Share the plans with other related departments</li>
                                      </ol> 
                                    </li>
                                    <li>Additional Flow: Manager flow to check the trends of sales, cost and stocks</li>
                                </ul>
                                </div>
                                <div className="col-md-7 ">
                                    <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="GSC_4WorkFlows: 520x294" preserveAspectRatio="xMidYMid slice" focusable="false" src={WorkFlows} alt="4WorkFlows"></img></figure>
                                </div>
                            </div>
                            <div className="row featurette projectSubModules2">
                                <div className="col-md-5">
                                <p className="project-p">With the new process, we got 7 main menus and 7 sub-menus. Also, we could understand all the data routes and how to share the plans and data.</p>
                                </div>
                                <div className="col-md-7 ">
                                    <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="newProcess: 520x294" preserveAspectRatio="xMidYMid slice" focusable="false" src={newProcess} alt="newProcess"></img></figure>
                                </div>
                            </div>
                            <div className="row featurette projectSubModules1">
                                <div className="col-md-5">
                                    <h3 className="project-h2">Data Visualization and Modules</h3>
                                </div>
                                <div className="col-md-7">
                                    <p className="project-p">It was significant how to show the data and what modules could improve the work productivity. Therefore, we had an ideation workshop as well as benchmarked other systems. Lastly, we were collecting use cases such as excel files, PPT files and emails.</p>
                                </div>
                            </div>
                            <div className="row featurette projectSubModules2">
                                <div className="col-md-5">
                                <p className="project-p">With the ideation Workshop, we focused on what integrated data and what modules users want to have in the system. Since decision making for supply plan was the core work for them so they wanted to have modules below:</p>
                                <ul>
                                    <li>Timeline view page </li>
                                    <li>Simulation page</li>
                                </ul>
                                </div>
                                <div className="col-md-7 ">
                                    <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="GSC_ideationWorkshop: 520x294" preserveAspectRatio="xMidYMid slice" focusable="false" src={ideationWorkshop} alt="ideationWorkshop"></img></figure>
                                </div>
                            </div>
                            <div className="row featurette projectSubModules2">
                                <div className="col-md-5">
                                <p className="project-p">We also benchmarked other supply chain systems. Besides, We collected all the use cases from the GS Caltex S&T team and selected graphs and tables.</p>
                                </div>
                                <div className="col-md-7 ">
                                    <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="GSC_BenchmarkingGS: 520x294" preserveAspectRatio="xMidYMid slice" focusable="false" src={BenchmarkingGS} alt="BenchmarkingGS"></img></figure>
                                </div>
                            </div>
                            <div className="row featurette projectSubModules2">
                                <div className="col-md-3">
                                <p className="project-p">Timeline View</p>
                                </div>
                                <div className="col-md-9">
                                    <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="GSC_TimelineViewScreen: 672x427" preserveAspectRatio="xMidYMid slice" focusable="false" src={TimelineViewScreen} alt="TimelineViewScreen"></img></figure>
                                </div>
                            </div>
                            <div className="row featurette projectSubModules2">
                                <div className="col-md-3">
                                <p className="project-p">Simulation</p>
                                </div>
                                <div className="col-md-9">
                                    <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="GSC_SimulationScreen: 672x427" preserveAspectRatio="xMidYMid slice" focusable="false" src={SimulationScreen} alt="SimulationScreen"></img></figure>
                                </div>
                            </div>
                            <div className="row featurette projectSubModules1">
                                <div className="col-md-5">
                                    <h3 className="project-h2">Admin Pages</h3>
                                </div>
                                <div className="col-md-7">
                                    <p className="project-p">In admin pages, we had to include functions below:
                                    <ul>
                                        <li>Role and Response - View and edit </li>
                                        <li>List Management for logistic centers, products, tanks and ships</li>
                                        <li>Active and Inactive function for specific tanks</li>
                                        <li>Add, delete and edit functions and flows</li>
                                    </ul>
                                    </p>
                                    <p>From personas, we set a 2 roles(view, edit) and divided the response through user’s tasks. Also, design other admin menus for the lists of date such as logistic center, products, tanks and ships. Lastly, with weekly meeting, we tweaked pages for details</p>
                                </div>
                            </div>
                            <div className="row featurette projectSubModules2">
                                <div className="col-md-3">
                                <p className="project-p">Admin</p>
                                </div>
                                <div className="col-md-9">
                                    <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="GSC_AdminPages: 672x427" preserveAspectRatio="xMidYMid slice" focusable="false" src={AdminPages} alt="AdminPages"></img></figure>
                                </div>
                            </div>
                            <div className="row featurette projectModules">
                                <div className="col-md-7">
                                    <h2 className="project-h2">Usability Testing</h2>
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
                                    <p className="project-p">This project was a valuable opportunity to join as a project manager and a product designer so I was able to involve entire UX process including development until publishing the product. But my main contribution was:</p>
                                    {/* <p className="project-p project-p-subtitle">As a service designer:</p> */}
                                    <dl>
                                    <dt className="project-p project-p-subtitle">As a product designer:</dt>
                                    <ol>
                                        <li>Conducted workshops, stakeholder and user interviews. Work closely with designers for design initiatives.</li>
                                        <li>Conducted usability testings and consolidated feedbacks. Implemented design modifications.</li>
                                        <li>Produced workflows and consolidated the flows</li>
                                        <li>Set the flow and details for simulation and timeline view page</li>
                                        <li>Created Admin pages</li>
                                    </ol>
                                    </dl>
                                    <dl>
                                    <dt className="project-p project-p-subtitle">As a project manager:</dt>
                                    <ol>
                                        <li>Leading weekly reviews with clients.</li>
                                        <li>Consolidated feedback and handover it to design director</li>
                                        <li>Communicated with GS Caltex stakeholders and collaborated with product designers and 8 international developers.</li>
                                    </ol>
                                    </dl>
                                </div>
                            </div>
                            <div className="row featurette projectModules">
                                <div className="col-md-12 discovery-imgs">
                                    <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="GSC_GS_Mockup1: 880x488" preserveAspectRatio="xMidYMid slice" focusable="false" src={GS_Mockup1} alt="GSC_GS_Mockup1"></img></figure>
                                </div>
                            </div>
                            <div className="row featurette projectModules">
                                <div className="col-md-12 discovery-imgs">
                                    <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="GSC_GS_Mockup2: 624x603" preserveAspectRatio="xMidYMid slice" focusable="false" src={GS_Mockup2} alt="GSC_GS_Mockup2"></img></figure>
                                </div>
                            </div>
                            <div className="row featurette projectModules projectArrows">
                                <div className="col-md-6 projectArrowLeft">

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
        )
    }
}

export default GSCaltex;
