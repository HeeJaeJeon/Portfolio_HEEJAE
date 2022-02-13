import React from 'react';
import Socialicons from './Socialicons';


const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-6 d-flex align-items-center footer-left">
                <span className="text-muted">© 2022 HeeJaeJeon</span>
            </div>
            <Socialicons />
        </footer>

    );
}

export default Footer;
