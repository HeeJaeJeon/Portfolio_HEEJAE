import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faMediumM } from "@fortawesome/free-brands-svg-icons";



const Socialicons = () => {
    return (
        <ul className="list-inline mb-0">
            <li className="list-inline-item g-mx-2">
                <a className="mailTo" target="_blank" href="mailto:juns880526@hotmail.com" >
                    <FontAwesomeIcon icon={faEnvelope} className="socialIcons"/>
                </a>
            </li>
            <li className="list-inline-item g-mx-2">
                <a className="linkedIn" target="_blank" href="https://www.linkedin.com/in/heejaejeon/">
                    <FontAwesomeIcon icon={faLinkedinIn} className="socialIcons"/>
                </a>
            </li>
            <li className="list-inline-item g-mx-2">
                <a className="medium" target="_blank" href="https://medium.com/@juns880526">
                    <FontAwesomeIcon icon={faMediumM} className="socialIcons" />
                </a>
            </li>
        </ul>
    );
}

export default Socialicons;
