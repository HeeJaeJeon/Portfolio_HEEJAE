import React from "react";
import myLogo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            <div className="container-fluid py-3 border-bottom">
                <a className="navbar-brand" href="#"><img className="navLogo" src={myLogo} art="HJ_logo"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#111111" }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home" data-to-scrollspy-id="home">
                                <div className="ss-item">Home</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#works" data-to-scrollspy-id="works">
                                <div className="ss-item">Works</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" data-to-scrollspy-id="about">
                                <div className="ss-item">About</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
