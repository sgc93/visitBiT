import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Header from "../components/Header";

export default function HomePage() {
	const center = [11.5975972, 37.3941337];
	const zoom = 30;
	return (
		<section className="relative w-screen h-screen">
			<Header />
			<div
				id="map"
				style={{
					height: "100dvh",
				}}
			>
				<MapContainer center={center} zoom={zoom} style={{ height: "100%" }}>
					<img src="/map.png" alt="" />
					<TileLayer
						attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
						url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</MapContainer>
			</div>
		</section>
	);
}
