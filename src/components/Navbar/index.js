import React, { Component } from "react";

import Logo from "../../assets/eoh-logo.png";
import "./styles.scss";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-wrapper">
                <img className="navbar-logo" src={Logo} />
                <div className="navbar-links">
                    <p>Exhibits</p>
                    <p>Volunteer</p>
                    <p>Sponsor</p>
                    <p>About</p>
                </div>
            </div>
        );
    }
}

export default Navbar;