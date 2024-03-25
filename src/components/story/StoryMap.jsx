import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import FlyTo from "./FlyTo";

const mapUrl = "http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}";
const subdomains = ["mt0", "mt1", "mt2", "mt3"];

export default function StoryMap({ story }) {
	return (
		<div className="h-full w-full " id="map">
			<MapContainer
				center={story.mark.center}
				zoom={17}
				className="h-full w-full"
			>
				<TileLayer url={mapUrl} subdomains={subdomains} />
				<Marker position={story.mark.center}>
					<Tooltip position={story.mark.center}>{story.topic}</Tooltip>
				</Marker>
				<FlyTo center={story.mark.center} />
			</MapContainer>
		</div>
	);
}
