import React from "react";
import ReactPlayer from "react-player";

import SynchronyVideo from "../../assets/sponsor-files/synchrony/synchrony-video.mp4";

const Synchrony = () => (
  <div className="page-container">
    <h1>Synchrony</h1>
    <ReactPlayer
      url={SynchronyVideo}
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
);

export default Synchrony;
