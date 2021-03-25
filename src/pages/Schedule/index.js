import React from "react";
import ScheduleCard from "../../components/ScheduleCard";

import saturdayData from "./saturdayData.js";
import sundayData from "./sundayData.js";

const Schedule = () => {
  return (
    <div className="page-container schedule-wrapper">
      <h2>On-Demand Exhibits</h2>
      <p>
        Due to the nature of EOH this year, exhibitors have worked hard to bring
        their exhibits to life through the virtual format! Access these
        on-demand, interactive exhibit videos under the <i>Exhibits</i> tab in
        the coming days. Exhibit videos range across all engineering departments
        and represent a large variety of student organization offered here at
        Illinois, ensuring that there is an exhibit video that will catch your
        interests!
      </p>
      <div className="schedule-section-separator" />

      <h2>Beckman Institute Open House</h2>
      <p>
        The Beckman Institute Open House will provide a virtual,
        behind-the-scenes look at one of the nation's leading centers for
        interdisciplinary research. Activities will include lab tours and
        demonstrations, a virtual escape room, an interview with Founding
        Director Ted Brown, and Bugscope sessions on Zoom from 10 AM to noon on
        both Friday, March 26 and Saturday, March 27.
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://beckman.illinois.edu/visit/events-at-beckman/beckman-institute-open-house-2021"
      >
        <button className="red-link-button schedule-card-link">Website</button>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://linktr.ee/beckman.illinois"
      >
        <button className="red-link-button">Social Media</button>
      </a>
      <div className="schedule-section-separator" />

      <h2>Friday, March 26</h2>
      {saturdayData.map((d) => (
        <div>
          <div className="schedule-divider">
            <p>{d.startTime}</p>
            <div className="schedule-divider-line" />
          </div>
          {d.events.map((event) => (
            <ScheduleCard data={event} />
          ))}
        </div>
      ))}
      <div className="schedule-section-separator" />

      <h2>Saturday, March 27</h2>
      {sundayData.map((d) => (
        <div>
          <div className="schedule-divider">
            <p>{d.startTime}</p>
            <div className="schedule-divider-line" />
          </div>
          {d.events.map((event) => (
            <ScheduleCard data={event} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Schedule;