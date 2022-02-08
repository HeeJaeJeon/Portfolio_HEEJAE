import React from "react";
import Socialicons from "./Socialicons";


const Header = () => {
    return (
            <div id="home" className="header-wrapper border-bottom">
                <div className="main-info">
                    <h1>Service Designer creating insightful, user-centered products.</h1>
                    <p className="intro1">HEEJAE is a Hospitality Industry based service designer with great empathy. He specializes in interaction design and service design for uncovering insights and translating it to design concepts. His purpose of design is creating highly focused user experiences and user-centered products</p>
                    <p className="intro2">He has worked with <a className="previousCompany" href="https://favoritemedium.com/" target="_blank">Favorite Medium</a> where he is performing on corporate digital products such as operating systems. Before that, he worked at <a className="previousCompany" href="https://uxboost.com/" target="_blank">UX booost</a> where he designed Smart mirror app and company websites.</p>
                    <Socialicons />
                </div>
            </div>
    );
};

export default Header;
