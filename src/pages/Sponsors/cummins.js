import React from "react";
import ReactPlayer from "react-player";

import CumminsFactSheetOne from "../../assets/sponsor-files/cummins/cummins-fact-sheet-one.png";
import CumminsFactSheetTwo from "../../assets/sponsor-files/cummins/cummins-fact-sheet-two.png";

const Cummins = () => (
  <div className="page-container">
    <h1>Cummins</h1>
    <ul>
      <li>
        <p>
          Mark your calendars for Cummins' Tech Center Tour and Q&A on Friday,
          March 26th from 1-3 PM! The tour and Q&A session will be 20 minutes
          and occur every half hour, so don't miss the chance to hear from a
          global power leader! Visit the <i>Schedule</i> tab for more
          information.
        </p>
      </li>
      <li>
        <p>
          Join us for an{" "}
          <a
            href="http://smarttourmedia.com/embed/CumminsJEP/?utm_campaign=dbu-cssna-powerclub&utm_term=Thank%20You%20for%20Attending%20the%20Cummins%20Heavy%20Duty%20Executive%20Summit%21&utm_content=DBU_NA_OnHwy_HDSummit_Event%20Video%20Link&utm_medium=email&utm_source=Eloqua"
            target="_blank"
            rel="noopener noreferrer"
          >
            interactive 3D tour
          </a>{" "}
          of our Jamestown Engine Plant where we produce our 11L, 12L, and 15L
          Diesel and Natural Gas engines.
        </p>
      </li>
    </ul>
    <br />
    <br />
    <div className="cummins-fact-sheet-container">
      <img src={CumminsFactSheetOne} alt="cummins-fact-sheet" />
      <img src={CumminsFactSheetTwo} alt="cummins-fact-sheet" />
    </div>
    <div className="cummins-videos-container">
      <div className="cummins-video">
        <p>
          See how Cummins is living our brand promise by powering a world that's
          Always On:
        </p>
        <div className="cummins-video-embed">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=B_zooNrioCA"
          />
        </div>
      </div>
      <div className="cummins-video">
        <p>
          For a century, Cummins Inc. has been a leader in the development of
          clean diesel and natural gas technology and in the exciting potential
          of electrification and other low-carbon alternatives. Learn about the
          future challenges as we begin our next century:
        </p>
        <div className="cummins-video-embed">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=PgZjq454e_k"
          />
        </div>
      </div>
      <div className="cummins-video">
        <p>
          Learn about how Cummins is leading the charge to provide power with
          alternative fuels. On- and off-highway natural gas use is growing, and
          Cummins stands ready to provide strong, dependable, durable engines
          fueled by natural gas. Our commitment as a global leader in clean
          power means giving our customers options through innovation,
          naturally.
        </p>
        <div className="cummins-video-embed">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=sXTGb7yyCkE&list=RDCMUCIFw2pXR2LfJqN_9cKOptsw&index=20"
          />
        </div>
      </div>
      <div className="cummins-video">
        <p>
          With hydrogen power, there's a whole universe of possibilities. As the
          world looks to decarbonize, Cummins is investing in clean forms of
          energy, including fuel cells and hydrogen production technologies.
        </p>
        <div className="cummins-video-embed">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=0miaOAfrS5Y"
          />
        </div>
      </div>
      <div className="cummins-video">
        <p>
          Get a behind-the-scenes look at how we build the award-winning Cummins
          Turbo Diesel engine at our Cummins Mid-Range Engine Plant:
        </p>
        <div className="cummins-video-embed">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=V5lxEpMds7k&t=1s"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Cummins;
