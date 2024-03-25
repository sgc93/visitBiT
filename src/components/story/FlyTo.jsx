import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function FlyTo({ center }) {
	const map = useMap();

	useEffect(() => {
		map.flyTo(center, map.getZoom());
	}, [center, map]);
}
