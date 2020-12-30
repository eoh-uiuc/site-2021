import React, { useState } from "react";
import Pins from "../../components/Pins";

import ReactMapGL from "react-map-gl";
import buildingData from "./building-data.js";

const Exhibits = () => {
	const [viewport, setViewport] = useState({
		width: 550,
		height: 550,
		latitude: 40.1122022,
		longitude: -88.2270992,
		zoom: 16
	});

	return (
		<div className="exhibits-map-wrapper">
			<ReactMapGL
				{...viewport}
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
				onViewportChange={nextViewport => setViewport(nextViewport)}
			>
				<Pins data={buildingData} />
			</ReactMapGL>
		</div>
	);
}

export default Exhibits;