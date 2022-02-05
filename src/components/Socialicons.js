import React from 'react';
import { Icon } from "@iconify/react";

const Socialicons = () => {
    return (
        <ul className="list-inline mb-0">
            <li className="list-inline-item g-mx-2">
                <a className="mailTo" target="_blank" href="mailto:juns880526@hotmail.com" >
                    <Icon icon="fluent:mail-24-filled" color="#363636" height="32" />
                </a>
            </li>
            <li className="list-inline-item g-mx-2">
                <a className="linkedIn" target="_blank" href="https://www.linkedin.com/in/heejaejeon/">
                    <Icon icon="entypo-social:linkedin-with-circle" color="#363636" height="31" />
                </a>
            </li>
            <li className="list-inline-item g-mx-2">
                <a className="medium" target="_blank" href="https://medium.com/@juns880526">
                    <Icon icon="ant-design:medium-circle-filled" color="#363636" height="34" />
                </a>
            </li>
        </ul>
    );
}

export default Socialicons;
