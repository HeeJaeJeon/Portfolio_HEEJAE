import React from 'react';
import { Icon } from "@iconify/react";

const Footer = () => {
    return (

        <footer id="about" className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center footer-right">
                <span className="text-muted">© 2022 HeeJaeJeon</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex footer-social">
                <li className="ms-3"><a className="text-muted" href="mailto:juns880526@hotmail.com"><Icon icon="fluent:mail-24-filled" color="#363636" height="33" /></a></li>
                <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/heejaejeon/"><Icon icon="entypo-social:linkedin-with-circle" color="#363636" height="32" /></a></li>
                <li className="ms-3"><a className="text-muted" href="https://medium.com/@juns880526"><Icon icon="ant-design:medium-circle-filled" color="#363636" height="34" /></a></li>
            </ul>
        </footer>
    
    );
}

export default Footer;
