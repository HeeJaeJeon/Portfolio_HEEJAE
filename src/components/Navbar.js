import React from "react";
import myLogo from "../logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
            {/* <div className="container d-flex flex-wrap py-3 border-bottom"> */}
            <div className="container-fluid py-3 border-bottom">
            <a className="navbar-brand" href="#"><img className="navLogo" src={myLogo} art="HJ_logo"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"#111111"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav active ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">Fixed navbar</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarCollapse">
        //             <ul className="navbar-nav me-auto mb-2 mb-md-0">
        //                 <li className="nav-item">
        //                     <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Link</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link disabled">Disabled</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

    );
}

export default Navbar;
