import React, { Component } from "react";

import Logo from "../../assets/eoh-general-logo-white.png";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <img className="navbar-logo" src={Logo} alt="logo" />
            </div>
        );
    }
}

export default Navbar;