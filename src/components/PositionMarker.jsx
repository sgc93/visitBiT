import React from "react";
import { Marker, Popup } from "react-leaflet";

export default function PositionMarker({ pos }) {
	return (
		<Marker position={pos.position}>
			<Popup>{pos.name}</Popup>
		</Marker>
	);
}
