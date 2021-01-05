import React from "react";

const ScheduleCard = ({ data }) => {
	return (
		<div className="schedule-card-wrapper">
			<p>{`${data.startTime} - ${data.endTime}`}</p>
			<h3>{data.name}</h3>
			<p>{data.description}</p>
			<a target="_blank" rel="noopener noreferrer" href={data.zoom}><button className="red-link-button schedule-card-link">Join Zoom</button></a>
			{data.links.map(l => <a target="_blank" rel="noopener noreferrer" href={l.link}><button className="red-link-button schedule-card-link">{l.name}</button></a>)}
		</div>
	);
}

export default ScheduleCard;