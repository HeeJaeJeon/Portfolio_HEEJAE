import React from "react";
import { Link } from "react-router-dom";
import myLogo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <div className="topbar sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid py-3 border-bottom">
                    <Link className="navbar-brand" to="/"><img className="navLogo" src={myLogo} alt="HJ_logo"></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "#111111" }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" data-to-scrollspy-id="home">
                                    <div className="ss-item">Home</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/works" data-to-scrollspy-id="works">
                                    <div className="ss-item">Works</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" data-to-scrollspy-id="about">
                                    <div className="ss-item">About</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;
