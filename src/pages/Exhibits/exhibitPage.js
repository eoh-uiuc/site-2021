import React, { useState, useEffect } from "react";
import ExhibitCard from "../../components/ExhibitCard";

import exhibitData from "./exhibitData.js";

const ExhibitPage = (props) => {
	const location = props.location;
	const [data, setData] = useState(null);

	useEffect(() => {
		if (!data) {
			if (location.state) {
				setData(location.state.data);
			} else {
				const building = exhibitData.filter(building => building.link === location.pathname);
				setData(building[0]);
			}
		}
	}, [data, location.state, location.pathname]);

	return (
		data && 
		<div className="page-container exhibit-page-wrapper">
			<h2>{data.name}</h2>
			<div className="exhibit-page-about">
				<p>{data.description}</p>
			</div>
			<div className="exhibit-videos">
				{data.exhibits.map(exhibit => <ExhibitCard data={exhibit} />)}
			</div>
		</div>
	);
}

export default ExhibitPage;