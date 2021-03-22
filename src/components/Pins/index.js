import React from "react";
import PinIcon from "../../assets/pin.png";
import { Marker } from "react-map-gl";

const PIN_SIZE = 35;

const Pins = ({ data, handlePinClick }) => {
  return data.map((building) => (
    <Marker
      key={building.name}
      latitude={building.latitude}
      longitude={building.longitude}
    >
      <img
        className="exhibits-pin-image"
        style={{ transform: `translate(${-PIN_SIZE / 2}px,${-PIN_SIZE}px)` }}
        src={PinIcon}
        height={PIN_SIZE}
        onClick={() => handlePinClick(building)}
        alt="pin"
      />
    </Marker>
  ));
};

export default Pins;
