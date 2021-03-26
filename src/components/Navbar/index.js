import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/eoh-puzzle-logo.png";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [top, setTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setTop(true);
      } else {
        setTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [top]);

  const hideMenu = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`navbar ${menuOpen ? "navbar-open" : "navbar-close"} ${
        !menuOpen && !top ? "scrolled" : ""
      }`}
    >
      <Link onClick={hideMenu} to="/">
        <img className="navbar-logo" src={Logo} alt="logo" />
      </Link>

      <div className="menu-icon">
        <Hamburger
          animation="butterfly"
          toggle={toggleMenu}
          toggled={menuOpen}
        />
      </div>

      <div
        className={`navbar-links ${
          menuOpen ? "menu-links-open" : "menu-links-close"
        }`}
      >
        <Link className="navbar-text" onClick={hideMenu} to="/schedule">
          Schedule
        </Link>
        <Link className="navbar-text" onClick={hideMenu} to="/exhibits">
          Exhibits
        </Link>
        <Link className="navbar-text" onClick={hideMenu} to="/visitors">
          Visitors
        </Link>
        <a
          className="navbar-text"
          onClick={hideMenu}
          href="https://grainger.illinois.edu/news/features/EOH-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          History
        </a>
        <Link className="navbar-text" onClick={hideMenu} to="/about">
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
