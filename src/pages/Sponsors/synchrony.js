import React from "react";
import ReactPlayer from "react-player";

const Synchrony = () => (
  <div className="page-container">
    <h1>Synchrony</h1>
    <div className="sponsor-video-container">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=fSh5GAb_cbQ"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  </div>
);

export default Synchrony;
