import React from "react";
import ScheduleCard from "../../components/ScheduleCard";

import saturdayData from "./saturdayData.js";
import sundayData from "./sundayData.js";

const Schedule = () => {
	return (
		<div className="page-container schedule-wrapper">
			<h2>On-Demand</h2>
			<p>What are on-demand exhibits. Instructions how to access on-demand exhibit videos in the exhibits tab.</p>
			<br />

			<h2>Saturday, March 26</h2>
			{saturdayData.map(d =>
				<div>
					<div className="schedule-divider">
						<p>{d.startTime}</p>
						<div className="schedule-divider-line" />
					</div>
					{d.events.map(event => <ScheduleCard data={event} />)}
				</div>
			)}
			<br />

			<h2>Sunday, March 27</h2>
			{sundayData.map(d =>
				<div>
					<div className="schedule-divider">
						<p>{d.startTime}</p>
						<div className="schedule-divider-line" />
					</div>
					{d.events.map(event => <ScheduleCard data={event} />)}
				</div>
			)}
		</div>
	);
}

export default Schedule;