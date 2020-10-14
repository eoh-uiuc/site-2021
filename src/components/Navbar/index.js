import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Logo from "../../assets/eoh-puzzle-logo.png";
import menuIcon from "../../assets/icons/menu.png";

class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            menuOpen: false,
        }
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen,
        }));
    }

    hideMenu = () => {
        this.setState(prevState => ({
            menuOpen: false,
        }));
    }

    render() {
        return (
            <nav className="navbar">
                <Link to="/">
                    <img className="navbar-logo" src={Logo} alt="logo" />
                </Link>

                <img className="menu-icon" src={menuIcon} onClick={this.toggleMenu} />

                <div className={`navbar-links ${this.state.menuOpen ? 'menu-open': 'menu-close'}`}>
                    <a className="navbar-text" onClick={this.hideMenu} target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSd76ndm0137Ud-vfG9h-8tTbobY-v0n_X_3VBaDkaVxXthm9g/viewform?usp=sf_link">Exhibitors</a>
                    <Link className="navbar-text" onClick={this.hideMenu} to="/sponsors">Sponsor Us</Link>
                    {/* <Link className="navbar-text" onClick={this.hideMenu} to="/about">About Us</Link> */}
                </div>
            </nav>
        );
    }
}

export default Navbar;