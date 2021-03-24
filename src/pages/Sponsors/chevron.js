import React from "react";
import ReactPlayer from "react-player";

const Chevron = () => (
  <div className="page-container">
    <h1>Chevron</h1>
    <p>
      Chevron Corporation is one of the world’s leading integrated energy
      companies. Through its subsidiaries that conduct business worldwide, the
      company is involved in virtually every facet of the energy industry.
      Chevron explores for, produces and transports crude oil and natural gas;
      refines, markets and distributes transportation fuels and lubricants;
      manufactures and sells petrochemicals and additives; generates power; and
      develops and deploys technologies that enhance business value in every
      aspect of the company’s operations. Chevron is based in San Ramon,
      California. More information about Chevron is available at{" "}
      <a
        href="https://www.chevron.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.chevron.com
      </a>
      .
    </p>
    <br />
    <div className="chevron-video-container">
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=PRHAQDPWOf8"
      />
    </div>
  </div>
);

export default Chevron;
