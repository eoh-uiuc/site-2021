import React from "react";
import ReactPlayer from "react-player";

const RollsRoyce = () => (
  <div className="page-container">
    <h1>Rolls Royce</h1>
    <div className="sponsor-video-container">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=G5N9tQ8mgFo"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  </div>
);

export default RollsRoyce;
