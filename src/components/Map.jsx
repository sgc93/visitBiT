import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";

const subdomains = ["mt0", "mt1", "mt2", "mt3"];

export default function Map() {
	const center = [11.5975972, 37.3941337];
	const zoom = 40;

	return (
		<div
			id="map"
			style={{
				height: "100dvh",
			}}
		>
			<MapContainer center={center} zoom={zoom} style={{ height: "100%" }}>
				<TileLayer
					attribution='&copy; <a href="http://www.stadiomaps.org/copyright">stadiomaps</a>'
					url="http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}"
					subdomains={subdomains}
				/>
				<InteractWithMap />
			</MapContainer>
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
