import React, { Component } from "react";

import Logo from "../../assets/eoh-general-logo-white.png";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <img className="footer-logo" src={Logo} alt="logo" />
                <div className="footer-links">
                    <a href="mailto:eoh@ec.illinois.edu">EMAIL US</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/EngineeringOpenHouse/">FACEBOOK</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/IllinoisEOH">TWITTER</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/eoh_illinois/">INSTAGRAM</a>
                </div>
            </div>
        );
    }
}

export default Footer;