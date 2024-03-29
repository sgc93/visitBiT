import { MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";
import { bitParts } from "../../services/data";
import { getCenter } from "../../services/helpers";

const subdomains = ["mt0", "mt1", "mt2", "mt3"];
const center = [11.597370448983153, 37.3976755142212];

export default function OverviewMap({ type }) {
	const mapUrl = `http://{s}.google.com/vt?lyrs=${type}&x={x}&y={y}&z={z}`;
	const parts = bitParts;

	return (
		<div className="w-full flex items-center justify-center">
			<div className="w-3/4 h-[60dvh] rounded-xl p-2 glassmorphism-white">
				<MapContainer center={center} zoom={16} className="w-full h-full">
					<TileLayer url={mapUrl} subdomains={subdomains} />
					{parts && <PartDrawer parts={parts} />}
					{parts && <Label part={parts[2]} />}
					{parts && <PartMarker parts={parts} />}
				</MapContainer>
			</div>
		</div>
	);
}

function PartDrawer({ parts }) {
	return parts.map((part, key) => (
		<Polygon key={key} positions={part.bounds} pathOptions={part.style} />
	));
}

function Label({ part }) {
	return (
		<Popup position={getCenter(part.bounds, "bounds")}>
			<div className="bg-stone-200 text-blue-900 text-lg font-bold px-2 py-[2px] rounded-lg">
				{part.label}
			</div>
		</Popup>
	);
}

function PartMarker({ parts }) {
	return parts.map((part, key) => (
		<Marker key={key} position={getCenter(part.bounds, "bounds")}>
			<Popup>
				<div className="bg-stone-200 text-blue-900 text-lg font-bold px-2 py-[2px] rounded-lg">
					{part.label}
				</div>
			</Popup>
		</Marker>
	));
}
