import React from "react";
import { Polygon, Popup } from "react-leaflet";
import { bitParts } from "../services/data";
import { getCenter } from "../services/helpers";

export default function Parts() {
	return (
		bitParts.length > 0 &&
		bitParts.map((pos, key) => {
			const center = getCenter(pos.bounds, "bounds");
			return (
				<React.Fragment key={key}>
					<Popup position={center}>{pos.label}</Popup>
					<Polygon pathOptions={pos.style} positions={pos.bounds} />
				</React.Fragment>
			);
		})
	);
}
