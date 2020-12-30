import React from "react";
import PinIcon from "../../assets/pin.png";
import { Marker } from "react-map-gl";

const Pins = ({ data }) => {
	return data.map(
		building => <Marker latitude={building.latitude} longitude={building.longitude}>
			<img src={PinIcon} height={30} />
			<p>{building.name}</p>
		</Marker>
	);
}

export default Pins;