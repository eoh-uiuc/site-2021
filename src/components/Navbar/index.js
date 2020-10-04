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
                    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSd76ndm0137Ud-vfG9h-8tTbobY-v0n_X_3VBaDkaVxXthm9g/viewform?usp=sf_link">Exhibitors</a>
                    <Link className="navbar-text" to="/sponsors">Sponsor Us</Link>
                    {/* <Link className="navbar-text" to="/about">About Us</Link> */}
                </div>
            </nav>
        );
    }
}

export default Navbar;