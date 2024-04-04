import { useEffect } from "react";
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	Tooltip,
	useMap,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { icon } from "../../services/tabs";
import Copy from "../Copy";
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
	const navigateTo = useNavigate();

	return (
		<div className="absolute z-[500] bottom-3 left-[50%] translate-x-[-50%] w-[50%] flex items-center gap-2">
			<div className="w-full bg-stone-400 border-2 border-stone-300 rounded-lg px-2 py-[2px] flex items-center justify-between">
				<input
					type="text"
					value={`http://localhost:5173/map?lat=${campus.position[0]}&lng=${campus.position[1]}`}
					disabled
					className="text-sm px-2 rounded-md bg-stone-200 w-3/4"
				/>
				<Copy
					value={`http://localhost:5173/map?lat=${campus.position[0]}&lng=${campus.position[1]}`}
				/>
			</div>
			<button
				className="px-2 py-[2px] bg-stone-200 shadow-stone-500  text-blue-950 rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px] focus:translate-y-0"
				onClick={() =>
					navigateTo(`/map?lat=${campus.position[0]}&lng=${campus.position[1]}`)
				}
			>
				Open
			</button>
		</div>
	);
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
					<div className="">{campus.name}</div>
				</Popup>
				<Marker position={campus.position} icon={icon}>
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
