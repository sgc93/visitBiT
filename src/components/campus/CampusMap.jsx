import { useEffect } from "react";
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	Tooltip,
	useMap,
} from "react-leaflet";
const mapUrl = "http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}";
const subdomains = ["mt0", "mt1", "mt2", "mt3"];

export default function CampusMap({ campus }) {
	return (
		<div className="relative w-1/2 h-full border-2 border-stone-700 rounded-xl overflow-hidden">
			<GbiMap campus={campus} />
			<ShareLink campus={campus} />
		</div>
	);
}

function ShareLink({ campus }) {
	return <div>{campus.position}</div>;
}

function GbiMap({ campus }) {
	return (
		<div className="w-full h-full">
			<MapContainer
				center={campus.position}
				zoom={18}
				className="h-full w-full"
			>
				<TileLayer url={mapUrl} subdomains={subdomains} />
				<Popup position={campus.position}>
					<div className="glassmorphism">{campus.name}</div>
				</Popup>
				<Marker position={campus.position}>
					<Tooltip position={campus.position}>{campus.name}</Tooltip>
				</Marker>
				<FlyTo center={campus.position} />
			</MapContainer>
		</div>
	);
}

function FlyTo({ center }) {
	const map = useMap();

	useEffect(() => {
		map.flyTo(center, map.getZoom());
	}, [center, map]);
}
