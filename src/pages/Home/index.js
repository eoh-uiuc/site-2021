import React, { Component } from "react";
import ReactTextRotator from "react-text-rotator";

import Sponsors from "./sponsors";

const words = [
  {
    text: "Overcome",
    className: "rotating-text",
    animation: "fade",
  },
  {
    text: "Discover",
    className: "rotating-text",
    animation: "fade",
  },
  {
    text: "Succeed",
    className: "rotating-text",
    animation: "fade",
  },
  {
    text: "Triumph",
    className: "rotating-text",
    animation: "fade",
  },
  {
    text: "Achieve",
    className: "rotating-text",
    animation: "fade",
  },
  {
    text: "Continue",
    className: "rotating-text",
    animation: "fade",
  },
];

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-splash">
          <div className="event-theme">
            <h1>TOGETHER WE WILL</h1>
            <ReactTextRotator content={words} time={4000} />
          </div>
          <div className="event-details">
            <h4>March 26 - 27, 2021</h4>
          </div>
        </div>
        <Sponsors />
      </div>
    );
  }
}

export default Home;
