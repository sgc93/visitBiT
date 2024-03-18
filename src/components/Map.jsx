import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

import { Polygon, useMapEvents } from "react-leaflet";
import { getCenter } from "../services/helpers";
import CurrentLoc from "./CurrentLoc";
import DetailBox from "./DetailBox";
import MapLayer from "./MapLayer";
import PositionMarker from "./PositionMarker";
import ShareBox from "./ShareBox";

const subdomains = ["mt0", "mt1", "mt2", "mt3"];
const bit_borders = [
	[11.5949517437591, 37.39396750992978],
	[11.595104263890669, 37.39387103850565],
	[11.60068893574915, 37.39706948532273],
	[11.600060179446068, 37.39821357260628],
	[11.599457191771728, 37.400297623781356],
	[11.59764833249412, 37.40004739108627],
	[11.596859189389615, 37.40034791596014],
	[11.596596141192421, 37.40101336389521],
	[11.59492314885836, 37.40105629602003],
	[11.59491700034278, 37.39432222157943],
];

const border_style = {
	color: "blue",
	fillColor: "#0084ff66",
	weight: 1.2,
	opacity: 0.7,
};

export default function Map({ positions, setMarkedPlace }) {
	const [mapUrl, setMapUrl] = useState(
		"http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}"
	);
	const [center, setCenter] = useState([11.597621756651337, 37.39551835806901]);
	const zoom = 17;

	const [showDetailBox, setShowDetailBox] = useState(false);
	const [showShareBox, setShowShareBox] = useState({
		type: "place",
		isOpen: false,
	});
	const [detailedPlace, setDetailedPlace] = useState("");

	// handle finding center of given set of positions
	useEffect(() => {
		if (positions.length > 1) {
			setCenter(getCenter(positions));
		} else if (positions.length === 1) {
			setCenter(positions[0].position);
		}
	}, [positions]);

	return (
		<div id="map" className="h-screen w-screen">
			<MapContainer center={center} zoom={zoom} style={{ height: "100%" }}>
				<TileLayer
					attribution='&copy; <a href="http://www.stadiomaps.org/copyright">stadiomaps</a>'
					url={mapUrl}
					subdomains={subdomains}
				/>
				{positions &&
					positions.map((pos) => (
						<PositionMarker
							key={pos.name}
							pos={pos}
							setShowDetailBox={setShowDetailBox}
							setDetailedPlace={setDetailedPlace}
							setShowShareBox={setShowShareBox}
						/>
					))}
				<Polygon positions={bit_borders} pathOptions={border_style} />
				{/* {flyToOptions && <FlyTo {...flyToOptions} />} */}
				<InteractWithMap setMarkedPlace={setMarkedPlace} />
				<FlyTo center={center} />
			</MapContainer>
			{showShareBox.isOpen && (
				<ShareBox
					setShowShareBox={setShowShareBox}
					place={detailedPlace}
					showShareBox={showShareBox}
				/>
			)}
			<DetailBox
				showDetailBox={showDetailBox}
				setShowDetailBox={setShowDetailBox}
				setShowShareBox={setShowShareBox}
				place={detailedPlace}
			/>
			<CurrentLoc setMarkedPlace={setMarkedPlace} />
			<MapLayer setMapUrl={setMapUrl} />
		</div>
	);
}

// a component to handle user's interaction with map

function InteractWithMap({ setMarkedPlace }) {
	function handleMapClick(e) {
		const clickedPos = [
			{
				position: [e.latlng.lat, e.latlng.lng],
			},
		];
		setMarkedPlace((pos) => clickedPos);
	}

	useMapEvents({
		click: handleMapClick,
	});
}

// a component used to flay from anywhere to a selected place

function FlyTo({ center }) {
	const map = useMap();

	useEffect(() => {
		map.flyTo(center, map.getZoom());
	}, [center, map]);
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
