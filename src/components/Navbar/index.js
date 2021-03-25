import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/eoh-puzzle-logo.png";
import { Squash as Hamburger } from "hamburger-react";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false,
      top: true,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY === 0) {
      this.setState({ top: true });
    } else {
      this.setState({ top: false });
    }
  };

  toggleMenu = () => {
    console.log("here");
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  hideMenu = () => {
    this.setState((prevState) => ({
      menuOpen: false,
    }));
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <nav
        className={`navbar ${
          this.state.menuOpen ? "navbar-open" : "navbar-close"
        } ${!this.state.menuOpen && !this.state.top ? "scrolled" : ""}`}
      >
        <Link onClick={this.hideMenu} to="/">
          <img className="navbar-logo" src={Logo} alt="logo" />
        </Link>

        <div className="menu-icon">
          <Hamburger
            animation="butterfly"
            toggle={this.toggleMenu}
            toggled={this.state.menuOpen}
          />
        </div>

        <div
          className={`navbar-links ${
            this.state.menuOpen ? "menu-links-open" : "menu-links-close"
          }`}
        >
          <Link className="navbar-text" onClick={this.hideMenu} to="/schedule">
            Schedule
          </Link>
          <Link className="navbar-text" onClick={this.hideMenu} to="/visitors">
            Visitors
          </Link>
          <a
            className="navbar-text"
            onClick={this.hideMenu}
            href="https://grainger.illinois.edu/news/features/EOH-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            History
          </a>
          <Link className="navbar-text" onClick={this.hideMenu} to="/about">
            About Us
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
