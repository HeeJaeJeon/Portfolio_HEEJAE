import React from "react";
import GSCaltexImg from "../GSCaltex.png";
import HanwhaImg from "../HanwhaTechwin.png";
import oneThirdFitnessImge from "../OneThirdFitness.png";
import TAFSImg from "../TAFS.png"
import Juniqe from "../Juniqe.png"

const Works = () => {
    return (
        <div id="works" className="works-wrapper border-bottom">
            <div className="works-info ">
                <div className="row featurette works-header">
                    <div className="col-md-6">
                        <h1>Featured works</h1>
                        <p className="lead">This is a collection of projects that are delivered recently. He has worked for from SMEs to corporates.
                            You will see how he got insights and how he solved user’s problems. Feel free to contact me if you have more questions on the projects.</p>
                    </div>
                    <div className="col-md-6 works-imgs">
                        <a href="">
                            <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" role="img" aria-label="GSC: 424x283" preserveAspectRatio="xMidYMid slice" focusable="false" src={GSCaltexImg} alt="GSC"></img></figure>
                            <h3>GS Caltex</h3>
                        </a>
                    </div>
                </div>
                <div className="row featurette pro-works-list">
                    <div className="col-md-6 works-imgs">
                        <a href="">
                            <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" role="img" aria-label="GSC: 424x283" preserveAspectRatio="xMidYMid slice" focusable="false" src={HanwhaImg} alt="Hanwha"></img></figure>
                            <h3>Hanwha Techwin</h3>
                        </a>
                    </div>
                    <div className="col-md-6 works-imgs">
                        <a href="">
                            <figure className="col-md-12"><img className="featurette-image img-fluid mx-auto" role="img" aria-label="GSC: 424x283" preserveAspectRatio="xMidYMid slice" focusable="false" src={oneThirdFitnessImge} alt="1/3Fitness"></img></figure>
                            <h3>1/3 Fitness</h3>
                        </a>
                    </div>
                </div>
                <h1 className='personalWorks'>Personal works</h1>
                <div className="row featurette personal-works-list">
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
            </div>
        </div>
    );
}

export default Works;
