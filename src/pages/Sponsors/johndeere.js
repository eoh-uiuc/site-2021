import React from "react";
import ReactPlayer from "react-player";

import JohnDeereVideo from "../../assets/sponsor-files/johndeere/john-deere-video.mp4";

const JohnDeere = () => (
  <div className="page-container">
    <h1>John Deere</h1>
    <ReactPlayer
      url={JohnDeereVideo}
      width="100%"
      height="100%"
      controls={true}
    />
  </div>
);

export default JohnDeere;
