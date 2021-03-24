import React from "react";
import { Link } from "react-router-dom";

import Ameren from "../../assets/sponsor-logos/ameren.jpeg";
import Cat from "../../assets/sponsor-logos/cat.png";
import Chevron from "../../assets/sponsor-logos/chevron.jpg";
import Cummins from "../../assets/sponsor-logos/cummins.jpg";
import Exelon from "../../assets/sponsor-logos/exelon.png";
import Exxon from "../../assets/sponsor-logos/exxon.png";
import Ford from "../../assets/sponsor-logos/ford.png";
import JohnDeere from "../../assets/sponsor-logos/john-deere.png";
import PG from "../../assets/sponsor-logos/pg.png";
import RR from "../../assets/sponsor-logos/rolls-royce.jpg";
import Synchrony from "../../assets/sponsor-logos/synchrony.jpg";

const Sponsors = () => (
  <div className="home-sponsor-logos">
    <h2>Our Sponsors</h2>
    <p>
      Engineering Open House 2021 is proudly sponsored by the following
      companies. Click on a logo to view more information about our sponsors!
    </p>
    <div className="sponsors-list">
      <a
        className="sponsors-logo"
        href="https://www.ameren.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Ameren} alt="ameren-logo" />
      </a>
      <a
        className="sponsors-logo"
        href="https://www.caterpillar.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Cat} alt="cat-logo" />
      </a>
      <Link className="sponsors-logo" to="/chevron">
        <img src={Chevron} alt="chevron-logo" />
      </Link>
      <Link className="sponsors-logo" to="/cummins">
        <img src={Cummins} alt="cummins-logo" />
      </Link>
      <a
        className="sponsors-logo"
        href="https://www.synchrony.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Exelon} alt="s" />
      </a>
      <Link className="sponsors-logo" to="/exxon-mobil">
        <img src={Exxon} alt="exxon-logo" />
      </Link>
      <a
        className="sponsors-logo"
        href="https://www.synchrony.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Ford} alt="s" />
      </a>
      <Link className="sponsors-logo" to="/john-deere">
        <img src={JohnDeere} alt="john-deere-logo" />
      </Link>
      <Link className="sponsors-logo" to="/pg">
        <img src={PG} alt="pg-logo" />
      </Link>
      <Link className="sponsors-logo" to="/rolls-royce">
        <img src={RR} alt="rolls-royce-logo" />
      </Link>
      <Link className="sponsors-logo" to="/synchrony">
        <img src={Synchrony} alt="synchrony-logo" />
      </Link>
    </div>
  </div>
);

export default Sponsors;
