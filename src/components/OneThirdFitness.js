import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import OneThirdFitnessBg from "../images/OneThirdFitnessBg.png";
import competitiveAnalysis from "../images/competitiveAnalysis.png";
import affinityMapping from "../images/affinityMapping.png";
import smartMirrorDesign1 from "../images/smartMirrorDesign1.png";
import adminDeisgn2 from "../images/adminDeisgn2.png";
import smartMirrorConceptImage from "../images/smartMirrorConceptImage.png";
import trainerView from "../images/trainerView.png";
import fitnessAdmin from "../images/fitnessAdmin.png";



function OneThirdFitness() {
  return (
    <div className="project-wrapper">
      <div className="project-info-header">
        {/* <div className="project-header">
          <div classNames="col-md-12 container text-center project-head-heght">
            <h1 className="project-h1">Smart mirror app and admin web application</h1>
          </div>
          <figure className="col-md-12 project-head-heght"><img className="featurette-image img-fluid mx-auto project-img" aria-label="OneThirdFitnessBg: 1232x275" preserveAspectRatio="xMidYMid slice" focusable="false" src={OneThirdFitnessBg} alt="OneThirdFitnessBg"></img></figure>
        </div> */}
        <div className="project-header">
          <div classNames="col-md-12 container text-center project-head-heght">
            <h1 className="project-h1">Smart mirror app and admin web application</h1>
          </div>
          <img className="featurette-image img-fluid mx-auto project-img" aria-label="OneThirdFitnessBg: 1232x275" preserveAspectRatio="xMidYMid slice" focusable="false" src={OneThirdFitnessBg} alt="OneThirdFitnessBg"></img>
        </div>
        <div className="project-info ">
          <div className="project-contents">
            <div className="row featurette projectModules">
              <div className="col-md-5">
                <h2 className="project-h2">1/3 Fitness</h2>
              </div>
              <div className="col-md-7">
                <p className="project-p">
                  <a className="projectCompanyLinks" href="https://www.1-3rdfitness.com/">1/3 Fitness </a> is one of the 24-hour gyms in Japan located in 3 different cities. They wanted to offer new services to increase the number of rastration rates.</p>
              </div>
            </div>
            <div className="row featurette projectModules">
              <div className="col-md-5">
                <h2 className="project-h2">Discovery</h2>
              </div>
              <div className="col-md-7">
                <p className="project-p">After we finished analyzing the results of the workshops and interviews, Suddenly, the Covid19 outbreak came up. So It became a project that defined and developed what services we could provide against this pandemic. Consequently, we had to proceed the discovery phase again with quick and effective methods.</p>
              </div>
            </div>
            <div className="row featurette projectSubModules1">
              <div className="col-md-12">
                <h3 className="project-h3">Competitive analysis and Affininy mapping</h3>
              </div>
            </div>
            <div className="row featurette projectSubModules2">
              <div className="col-md-5">
                <p className="project-p">Most of the competitors have an app to improve their memember's experience. Moreover, those brands inform their members that the app brings significant enhancements to member's fitness life.</p>
              </div>
              <div className="col-md-7">
                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="competitiveAnalysis: 520x290" preserveAspectRatio="xMidYMid slice" focusable="false" src={competitiveAnalysis} alt="competitiveAnalysis"></img></figure>
              </div>
            </div>
            <div className="row featurette projectSubModules2">
              <div className="col-md-5">
              <p className="project-p">1. Digital presence
                <ul>
                  <li>The number of digital channels</li>
                  <li>The number of digital functions</li>
                  <li>Various online contents</li>
                </ul>
              </p>
              <p className="project-p">2. Engage member to fitness lifestyle by APP
                <ul>
                  <li>The gyms create a healthy and fitness lifestyle for their members via smart training program of APP</li>
                </ul>
              </p>
              <p className="project-p">3. Current position
                <ul>
                  <li>Have various digital channels (Website, Youtube, Instagram, Facebook)</li>
                  <li>However, Need to produce more content</li>
                  <li>It might be required to empower the digital touch points to engage their members</li>
                </ul>
              </p>
              <p className="project-p">4. Opportunities to be developed
                <ul>
                  <li>Develop a critical digital channel like an app to expand the digital presence</li>
                  <li>Offering functional features that can integrate with member's fitness lifestyle</li>
                  <li>E.g. : Tracking fitness progress, Smart suggestions, Social engaging function, Motivational supports</li>
                </ul>
              </p>
              </div>
              <div className="col-md-7">
                  <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="affinityMapping: 520x698" preserveAspectRatio="xMidYMid slice" focusable="false" src={affinityMapping} alt="affinityMapping"></img></figure>
              </div>
            </div>
            <div className="row featurette projectSubModules1">
              <div className="col-md-5">
                  <h3 className="project-h3">Benchmarking</h3>
              </div>
              <div className="col-md-7">
                  <p className="project-p">Singapore has been affected by COVID19 pandemic, similar to Japan. Therefore, we benchmarked how the fitness brands in Singapore acted against the pandemic:</p>
                  <ul>
                    <li>Online courses</li>
                    <li>Supporting home training</li>
                    <li>Engaging life styles via social medias</li>
                    <li>Inform how they maintain the gym during COVID19 (before close down the gym)</li>
                    <li>Virtual events</li>
                </ul>
              </div>
            </div>
            <div className="row featurette projectModules">
              <div className="col-md-5">
                <h2 className="project-h2">Solution</h2>
              </div>
              <div className="col-md-7">
                <p className="project-p">Since the isolation was important during the pandemic, most companies engaged members online. Also, the majority of members wanted to get the training courses or live training. The interesting fact is that Japanese members wanted to follow the exact movements of instructors during the course. However, it was hard to follow movements though mobiles, tablets and monitors since the screens were too narrow. Therefore, we finally decided to design and develop a smart mirror app. The smart mirror is a touchable mirror that can work like a mobile screen but it is able to show exact movement of the instructors.</p>
              </div>
            </div>
            <div className="row featurette projectSubModules1">
              <div className="col-md-12">
                <h2 className="project-h2">Design</h2>
              </div>
            </div>
            <div className="row featurette projectSubModules1">
              <div className="col-md-5">
                <h3 className="project-p">Smart mirror app</h3>
                <p className="project-p">Functions:
                  <ul>
                    <li>Dachboard</li>
                    <li>Videos</li>
                    <li>Live sports</li>
                    <li>Training Schedule</li>
                    <li>News</li>
                  </ul>
                </p>
              </div>
              <div className="col-md-7">
                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="smartMirrorDesign1: 532x495" preserveAspectRatio="xMidYMid slice" focusable="false" src={smartMirrorDesign1} alt="smartMirrorDesign1"></img></figure>
              </div>
            </div>
            <div className="row featurette projectSubModules1">
              <div className="col-md-5">
                <h3 className="project-h3">Admin web app</h3>
                <p className="project-p">Functions:
                  <ul>
                    <li>Membership management</li>
                    <li>Live sports</li>
                    <li>Video playlist</li>
                    <li>News</li>
                  </ul>
                </p>
              </div>
              <div className="col-md-7">
                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="adminDeisgn2: 532x353" preserveAspectRatio="xMidYMid slice" focusable="false" src={adminDeisgn2} alt="adminDeisgn2"></img></figure>
              </div>
            </div>
            <div className="row featurette projectModules">
              <div className="col-md-5">
                <h2 className="project-h2">Contribution</h2>
              </div>
              <div className="col-md-7">
                <p className="project-p">I worked on this project as a product designer. My main contribution was:</p>
                <ol>
                  <li>Created journey maps and new customers journey maps for 3 personas by reflecting the Covid19 situations</li>
                  <li>Competitive analysis and affinity mapping to find services that could be provided with the outbreak</li>
                  <li>Feature prioritization for the services</li>
                  <li>Create UI design for smart mirror app and admin system</li>
                  <li>Modification design through feedback from testing</li>
                </ol>
              </div>
            </div>
            <div className="row featurette projectModules">
              <div className="col-md-12 discovery-imgs">
                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="smartMirrorConceptImage: 728x486" preserveAspectRatio="xMidYMid slice" focusable="false" src={smartMirrorConceptImage} alt="smartMirrorConceptImage"></img></figure>
              </div>
            </div>
            <div className="row featurette projectModules">
              <div className="col-md-12 discovery-imgs">
                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="trainerView: 472x283" preserveAspectRatio="xMidYMid slice" focusable="false" src={trainerView} alt="trainerView"></img></figure>
              </div>
            </div>
            <div className="row featurette projectModules">
              <div className="col-md-12 discovery-imgs">
                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" aria-label="fitnessAdmin: 576x364" preserveAspectRatio="xMidYMid slice" focusable="false" src={fitnessAdmin} alt="fitnessAdmin"></img></figure>
              </div>
            </div>
            
            
            <div className="row featurette projectModules projectArrows">
              <div className="col-md-6 projectArrowLeft">
                <Link to="/GSCaltex">
                  <h2 className="project-h2"><span><FontAwesomeIcon icon={faChevronLeft} className="chevronRight" /></span> GS Caltex </h2>
                 </Link>
              </div>
              <div className="col-md-6 projectArrowRight">
                <Link to="/hanwhatechwin">
                  <h2 className="project-h2">Hanwha <span><FontAwesomeIcon icon={faChevronRight} className="chevronRight" /></span></h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneThirdFitness;