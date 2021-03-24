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
        href="https://www.harting.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Ameren} alt="a" />
      </a>
      <a
        className="sponsors-logo"
        href="https://www.sbbrg.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Cat} alt="ej" />
      </a>
      <a
        className="sponsors-logo"
        href="https://www.goldmansachs.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Chevron} alt="g" />
      </a>
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
      <a
        className="sponsors-logo"
        href="https://www.synchrony.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={JohnDeere} alt="s" />
      </a>
      <a
        className="sponsors-logo"
        href="https://www.synchrony.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={PG} alt="s" />
      </a>
      <a
        className="sponsors-logo"
        href="https://www.synchrony.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={RR} alt="s" />
      </a>
      <a
        className="sponsors-logo"
        href="https://www.synchrony.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Synchrony} alt="s" />
      </a>
    </div>
  </div>
);

export default Sponsors;
