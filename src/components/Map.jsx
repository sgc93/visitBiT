import { useRef, useState } from "react";
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	useMapEvents,
} from "react-leaflet";
import CurrentLoc from "./CurrentLoc";
import MapLayer from "./MapLayer";

const subdomains = ["mt0", "mt1", "mt2", "mt3"];

export default function Map({ positions }) {
	const [mapUrl, setMapUrl] = useState(
		"http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}"
	);

	const dragConstraint = useRef();
	const center = [11.597621756651337, 37.39551835806901];
	const zoom = 15;

	return (
		<div ref={dragConstraint} id="map" className="h-screen w-screen">
			<MapContainer center={center} zoom={zoom} style={{ height: "100%" }}>
				<TileLayer
					attribution='&copy; <a href="http://www.stadiomaps.org/copyright">stadiomaps</a>'
					url={mapUrl}
					subdomains={subdomains}
				/>
				{positions &&
					positions.map((pos) => (
						<Marker position={pos.position} key={pos}>
							<Popup>
								<div className="glassmorphism">{pos.name}</div>
							</Popup>
						</Marker>
					))}
				<InteractWithMap />
			</MapContainer>
			<CurrentLoc dragConstraint={dragConstraint} />
			<MapLayer setMapUrl={setMapUrl} />
		</div>
	);
}

function InteractWithMap() {
	function handleMapClick(event) {
		console.log(event);
	}

	useMapEvents({
		click: handleMapClick,
	});
}

// stackoverflow

// For the static purpose you can freely add the google map tiles inside your leaflet. You doesn't need to add the third party plugin and google API. For the static tiles, you can add following code, for street,

// const googleStreets = L.tileLayer(
// 	"http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
// 	{
// 		maxZoom: 20,
// 		subdomains: ["mt0", "mt1", "mt2", "mt3"],
// 	}
// );

// // Hybrid

// const googleHybrid = L.tileLayer(
// 	"http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}",
// 	{
// 		maxZoom: 20,
// 		subdomains: ["mt0", "mt1", "mt2", "mt3"],
// 	}
// );

// // satellite

// const googleSat = L.tileLayer(
// 	"http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}",
// 	{
// 		maxZoom: 20,
// 		subdomains: ["mt0", "mt1", "mt2", "mt3"],
// 	}
// );

// // Terrain

// const googleTerrain = L.tileLayer(
// 	"http://{s}.google.com/vt?lyrs=p&x={x}&y={y}&z={z}",
// 	{
// 		maxZoom: 20,
// 		subdomains: ["mt0", "mt1", "mt2", "mt3"],
// 	}
// );
