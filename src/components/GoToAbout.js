import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const GoToAbout = () => {
    return (
        <div className="goToAbout-wrapper">
            <div className="goToAbout-info">
                <div className="row featurette goToAbout-header">
                    <div className="col-md-6 goToAbout-h2">
                        <h2>About HEEJAE</h2>
                    </div>
                    <div className="col-md-6">
                        <p>The interesting fact of HEEJAE is that He used to work in the hospitality industy with international brands.
                            Those early experiences sharpened his ability to understand user’s challenges with great empathy.</p>
                        <Link className="btn toAboutBtn" to="/about"><FontAwesomeIcon icon={faArrowRight} className="arrowRight" /> View About HEEJAE </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoToAbout
