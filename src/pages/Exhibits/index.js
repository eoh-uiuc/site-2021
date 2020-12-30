import React, { useState } from "react";
import Pins from "../../components/Pins";

import ReactMapGL, { Popup } from "react-map-gl";
import buildingData from "./building-data.js";

const Exhibits = () => {
	const [viewport, setViewport] = useState({
		width: 550,
		height: 550,
		latitude: 40.1122022,
		longitude: -88.2270992,
		zoom: 16
	});
	const [popupInfo, setPopupInfo] = useState(null);

	const handlePinClick = tagInfo => {
		setPopupInfo(tagInfo);
	}

	const renderPopup = () => {
		return (
			popupInfo && (
				<Popup
					className="exhibits-pin-popup"
					anchor="bottom"
					tipSize={5}
					longitude={popupInfo.longitude+0.0001}
					latitude={popupInfo.latitude}
					closeOnClick={false}
					onClose={() => setPopupInfo(null)}
				>
					<p className="exhibits-popup-title">{popupInfo.name}</p>
					<p className="exhibits-popup-description">{popupInfo.description}</p>
					<button className="exhibits-popup-button">View Exhibits</button>
				</Popup>
			)
		);
	}

	return (
		<div className="exhibits-map-wrapper">
			<ReactMapGL
				{...viewport}
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
				onViewportChange={nextViewport => setViewport(nextViewport)}
				maxZoom={17}
				minZoom={15}
			>
				<Pins data={buildingData} handlePinClick={handlePinClick} />
				{renderPopup()}
			</ReactMapGL>
		</div>
	);
}

export default Exhibits;