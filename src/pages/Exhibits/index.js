import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pins from "../../components/Pins";

import ReactMapGL, { Popup } from "react-map-gl";
import exhibitData from "./exhibitData.js";
import "mapbox-gl/dist/mapbox-gl.css";

const Exhibits = () => {
	const [viewport, setViewport] = useState({
		width: "100%",
		height: "100%",
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
					<Link to={{
						pathname: popupInfo.link,
						state: {
							data: popupInfo
						}
					}}>
						<button className="red-link-button">
							View Exhibits
						</button>
					</Link>
				</Popup>
			)
		);
	}

	return (
		<div className="exhibits-map-wrapper">
			<div className="react-map-gl-wrapper">
				<ReactMapGL
					{...viewport}
					mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
					onViewportChange={nextViewport => setViewport(nextViewport)}
					maxZoom={17}
					minZoom={15}
				>
					<Pins data={exhibitData.filter(({ latitude }) => latitude)} handlePinClick={handlePinClick} />
					{renderPopup()}
				</ReactMapGL>
			</div>
		</div>
	);
}

export default Exhibits;