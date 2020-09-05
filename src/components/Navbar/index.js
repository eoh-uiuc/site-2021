import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Logo from "../../assets/eoh-general-logo-white.png";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/">
                    <img className="navbar-logo" src={Logo} alt="logo" />
                </Link>

                <div className="navbar-links">
                    <Link to="/sponsors">Sponsor Us</Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;