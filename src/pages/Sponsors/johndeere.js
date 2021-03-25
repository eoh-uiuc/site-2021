import React from "react";
import ReactPlayer from "react-player";

const JohnDeere = () => (
  <div className="page-container">
    <h1>John Deere</h1>
    <div className="sponsor-video-container">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=Vch2dfQgNSM"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  </div>
);

export default JohnDeere;
