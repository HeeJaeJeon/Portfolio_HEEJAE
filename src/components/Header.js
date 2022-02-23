import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return (
            <div className="header-wrapper">
                <div className="main-info">
                    <h1>Product Designer creating insightful, user-centered products.</h1>
                    <p className="intro1">HEEJAE is a cross-functional and multicultural service designer who has work experiences with global UX agencies. He specializes in service design and interaction design for uncovering insights and translating it to design concepts. His purpose of design is creating highly focused user-centered products.</p>
                    <p className="intro2">He has worked with <a className="previousCompany" href="https://favoritemedium.com/" target="_blank" rel="noopener noreferrer">Favorite Medium</a> where he is performing on corporate digital products such as operating systems. Before that, he worked at <a className="previousCompany" href="https://uxboost.com/" target="_blank" rel="noopener noreferrer">UX booost</a> where he designed Smart mirror app and company websites.</p>
                    <Link className="btn" to="/works"><FontAwesomeIcon icon={faArrowRight} className="arrowRight"/> View featured works </Link>
                </div>
            </div>
    );
};

export default Header;
