import { useState } from "react";
import { MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet";
import { bitParts } from "../../services/data";
import { getCenter } from "../../services/helpers";
import { layerTabs } from "../../services/tabs";

const subdomains = ["mt0", "mt1", "mt2", "mt3"];
const center = [11.597370448983153, 37.3976755142212];

export default function OverviewMap() {
	const [type, setType] = useState("s");

	const mapUrl = `http://{s}.google.com/vt?lyrs=${type}&x={x}&y={y}&z={z}`;
	const parts = bitParts;

	return (
		<div className="w-full flex flex-col items-center justify-center gap-2">
			<div className="relative w-3/4 h-[72dvh] rounded-xl p-2 glassmorphism-white ">
				<MapContainer center={center} zoom={16} className="w-full h-full">
					<TileLayer url={mapUrl} subdomains={subdomains} />
					{parts && <PartDrawer parts={parts} />}
					{parts && <Label part={parts[2]} />}
					{parts && <PartMarker parts={parts} />}
				</MapContainer>
			</div>
			<Layer setType={setType} type={type} />
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

function Layer({ setType, type }) {
	const [selected, setSelected] = useState("satellite");

	const tabs = layerTabs;

	function changeLayerTypeTo(layer) {
		if (type !== layer.code) {
			setType(layer.code);
			setSelected(layer.text);
		}
	}

	return (
		<div className="w-3/4 flex items-start">
			<span className="glassmorphism-bg px-2 py-1 mt-1 rounded-lg text-lg font-semibold w-20 text-center">
				{selected}
			</span>
			<div className="flex items-center">
				{tabs.map((layer, key) => (
					<LayerTab
						key={key}
						layer={layer}
						changeLayerTypeTo={changeLayerTypeTo}
						type={type}
					/>
				))}
			</div>
		</div>
	);
}

function LayerTab({ layer, changeLayerTypeTo, type }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="flex flex-col items-center gap-2"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={`flex items-center justify-center p-1 rounded-lg ${
					type !== layer.code
						? " glassmorphism-bg transition-all duration-300 hover:bg-stone-300"
						: "bg-stone-300"
				}`}
			>
				<img
					className={`w-10 h-10 rounded-md cursor-pointer ${
						type !== layer.code
							? "opacity-50 transition-all duration-300 hover:opacity-100 hover:border-2 hover:border-stone-700"
							: "opacity-100 border-2 border-stone-700"
					}`}
					src={`/${layer.text}_layer.png`}
					alt={layer.text}
					onClick={() => changeLayerTypeTo(layer)}
				/>
			</div>
			<span
				className={`text-sm font-semibold px-2 py-[2px] glassmorphism-bg rounded-md transition-all duration-300 ${
					isHovered ? "opacity-100" : "opacity-0"
				}`}
			>
				{layer.text}
			</span>
		</div>
	);
}
