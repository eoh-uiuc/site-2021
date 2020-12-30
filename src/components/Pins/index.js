import React from "react";
import PinIcon from "../../assets/pin.png";
import { Marker } from "react-map-gl";

const Pins = ({ data, handlePinClick }) => {
	return data.map(
		building => <Marker latitude={building.latitude} longitude={building.longitude}>
			<img className="exhibits-pin-image" src={PinIcon} height={30} onClick={() => handlePinClick(building)} alt="pin" />
		</Marker>
	);
}

export default Pins;