import React from "react";
import ReactPlayer from "react-player";

import RollsRoyceVideo from "../../assets/sponsor-files/rollsroyce/rolls-royce-video.mp4";

const RollsRoyce = () => (
  <div className="page-container">
    <h1>Rolls Royce</h1>
    <ReactPlayer
      url={RollsRoyceVideo}
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
);

export default RollsRoyce;
