import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import OneThirdFitnessBg from "../images/OneThirdFitnessBg.png";
import OneThirdFitnessDiscovery from "../images/OneThirdFitnessDiscovery.png";
import OneThirdFitnessDesign from "../images/OneThirdFitnessDesign.png";


function OneThirdFitness() {
  return (
    <div className="project-wrapper">
      <div className="project-info-header">
        <div className="project-header">
          <div classNames="col-md-12 container text-center project-head-heght">
            <h1 className="project-h1">Smart mirror app and admin web application</h1>
          </div>
          <figure className="col-md-12 project-head-heght"><img className="featurette-image img-fluid mx-auto project-img" role="img" aria-label="OneThirdFitnessBg: 1232x275" preserveAspectRatio="xMidYMid slice" focusable="false" src={OneThirdFitnessBg} alt="OneThirdFitnessBg"></img></figure>
        </div>
        <div className="project-info ">
          <div className="project-contents">
            <div className="row featurette projectModules">
              <div className="col-md-5">
                <h2 className="project-h2">1/3 Fitness</h2>
              </div>
              <div className="col-md-7">
                <p className="project-p">
                  <a className="projectCompanyLinks" href="https://www.1-3rdfitness.com/">1/3 Fitness </a> is one of the 24-hour gyms in Japan located in 3 different cities. Their members and registration rates were dramatically decreasing since the COVID19 outbreak came up. They approach us to find new services to increase the number of memberships and registration rates against our break.</p>
              </div>
            </div>
            <div className="row featurette projectModules">
              <div className="col-md-7">
                <h2 className="project-h2">Discovery</h2>
                <p className="project-p">We wanted to understand current services and their business as well as their customers and staff. Therefore, we conducted:</p>
                <ol>
                  <li>Workshops with stakeholders to define current situations for their business and their objectives.</li>
                  <li>User and Stakeholder interviews were needed to address their entire journey when they were in the gym.</li>
                  <li>Competitive analysis to get inspirations and for benchmarking.</li>
                </ol>
              </div>
              <div className="col-md-5 discovery-imgs">
                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" role="img" aria-label="OneThirdFitnessDiscovery: 456x272" preserveAspectRatio="xMidYMid slice" focusable="false" src={OneThirdFitnessDiscovery} alt="OneThirdFitnessDiscovery"></img></figure>
              </div>
            </div>
            <div className="row featurette projectModules">
              <div className="col-md-5">
                <h2 className="project-h2">Discovery Results</h2>
              </div>
              <div className="col-md-7">
                <p className="project-p">After the discovery phase,  we got 3 personas through member’s types, lifestyles and their objectives to go to the gym. Also, we created 3 customer journey maps. Besides, we researched and found 26 services that 1/3 fitness could implement against Covid19 but after prioritization and discussion with stakeholders, we finally decided to provide the Fitness Mirror Service for Home gym. To conduct the system, we built a Smart Mirror App and admin system.</p>
              </div>
            </div>
            <div className="row featurette projectModules">
              <div className="col-md-5">
                <h2 className="project-h2">Design</h2>
                <p className="project-p">We designed:</p>
                <ol>
                  <li>Fitness mirror app. Through this app, users can book and watch live training courses and watch previous videos. Also, they can view training schedules and fitness articles.</li>
                  <li>Admin web app is to manage videos, lives, news and registration of the fitness mirror membership.</li>
                </ol>
              </div>
              <div className="col-md-7 discovery-imgs">
                <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" role="img" aria-label="OneThirdFitnessDesign: 520x468" preserveAspectRatio="xMidYMid slice" focusable="false" src={OneThirdFitnessDesign} alt="OneThirdFitnessDesign"></img></figure>

              </div>
            </div>
            <div className="row featurette projectModules">
              <div className="col-md-5">
                <h2 className="project-h2">Development and Testings</h2>
              </div>
              <div className="col-md-7">
                <p className="project-p">We built the app and system. Weekly review meetings were conducted with users and stakeholders.</p>
              </div>
            </div>
            <div className="row featurette projectModules">
              <div className="col-md-5">
                <h2 className="project-h2">Contribution</h2>
              </div>
              <div className="col-md-7">
                <p className="project-p">I worked on this project as a service designer and product designer. My main contribution was:</p>
                <ol>
                  <li>Created new customer journey maps for 3 personas by reflecting the Covid19 situations.</li>
                  <li>Competitive analysis to find services that could be provided with the outbreak.</li>
                  <li>Feature prioritization for the services.</li>
                  <li>Create UI design for app and admin system.</li>
                  <li>Modification design through feedback from testing.</li>
                </ol>
              </div>
            </div>

            <div className="row featurette projectModules projectArrows">
              <div className="col-md-6 projectArrowLeft">
                <Link to="/hanwhatechwin">
                  <h2 className="project-h2"><span><FontAwesomeIcon icon={faChevronLeft} className="chevronRight" /></span> Hanwha</h2>
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

export default OneThirdFitness;