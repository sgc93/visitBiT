import { MapContainer, TileLayer } from "react-leaflet";

const mapUrl = "http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}";
const subdomains = ["mt0", "mt1", "mt2", "mt3"];
const pos = [11.597621756651337, 37.39551835806901];

export default function StoryMap() {
	return (
		<div className="h-full w-full " id="map">
			<MapContainer center={pos} zoom={15} className="h-full w-full">
				<TileLayer url={mapUrl} subdomains={subdomains} />
			</MapContainer>
		</div>
	);
}
