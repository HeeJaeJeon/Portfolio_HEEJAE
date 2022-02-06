import React from "react";
import Socialicons from "./Socialicons";

const Contact = () => {
    return (
        <div className="contact-wrapper border-bottom">
            <div className="contact-info">
                <h1 className="contactHeader col-md-12">Feel free to Contact me!!</h1>
                <div className="contactSocial col-md-12">
                    <Socialicons />
                </div>
            </div>
        </div>
    );
}

export default Contact;
