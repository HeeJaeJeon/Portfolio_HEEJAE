import React from "react";
import { Link } from "react-router-dom";
import GSCaltexImg from "../images/GSCaltex.png";
import HanwhaImg from "../images/HanwhaTechwin.png";
import oneThirdFitnessImge from "../images/OneThirdFitness.png";
import TAFSImg from "../images/TAFS.png"
import Juniqe from "../images/Juniqe.png"
import GoToAbout from "./GoToAbout";



const Works = () => {
    return (
        <div id="works" className="works-wrapper">
            <div className="works-info ">
                <div className="row featurette works-header">
                    <div className="col-md-6">
                        <h1>Featured works</h1>
                        <p className="lead">This is a collection of projects that are delivered recently. He has worked for from SMEs to corporates.
                            You will see how he got insights and how he solved user’s problems. Feel free to contact me if you have more questions on the projects.</p>
                    </div>
                    <div className="col-md-6 works-imgs">
                        <Link to="/GSCaltex">
                            <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" role="img" aria-label="GSC: 424x283" preserveAspectRatio="xMidYMid slice" focusable="false" src={GSCaltexImg} alt="GSC"></img></figure>
                            <h3>GS Caltex</h3>
                        </Link>
                    </div>
                </div>
                <div className="row featurette pro-works-list">
                    <div className="col-md-6 works-imgs">
                        <Link to="/hanwhatechwin">
                            <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" role="img" aria-label="GSC: 424x283" preserveAspectRatio="xMidYMid slice" focusable="false" src={HanwhaImg} alt="Hanwha"></img></figure>
                            <h3>Hanwha Techwin</h3>
                        </Link>
                    </div>
                    <div className="col-md-6 works-imgs">
                        <Link to="/onethirdfitness">
                            <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" role="img" aria-label="GSC: 424x283" preserveAspectRatio="xMidYMid slice" focusable="false" src={oneThirdFitnessImge} alt="1/3Fitness"></img></figure>
                            <h3>1/3 Fitness</h3>
                        </Link>
                    </div>
                </div>
                <h1 className='personalWorks'>Personal works</h1>
                <div className="row featurette personal-works-list border-bottom">
                    <div className="col-md-6 works-imgs">
                        <a href="https://bootcamp.uxdesign.cc/finding-small-local-business-for-foreign-visitors-to-singapore-6d888d1d9e39">
                            <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" role="img" aria-label="GSC: 424x283" preserveAspectRatio="xMidYMid slice" focusable="false" src={TAFSImg} alt="TAFS"></img></figure>
                            <h3>A Travel App For Singapore</h3>
                        </a>
                    </div>
                    <div className="col-md-6 works-imgs">
                        <a href="https://bootcamp.uxdesign.cc/revamping-juniqes-website-one-week-challenge-ed1a591e2377">
                            <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" role="img" aria-label="GSC: 424x283" preserveAspectRatio="xMidYMid slice" focusable="false" src={Juniqe} alt="Juniqe"></img></figure>
                            <h3>Juniqe</h3>
                        </a>
                    </div>
                </div>
                <GoToAbout/>
            </div>
        </div>

    );
}

export default Works;
