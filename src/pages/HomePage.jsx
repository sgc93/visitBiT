import "leaflet/dist/leaflet.css";
import Header from "../components/Header";
import Map from "../components/Map";
import SideBar from "../components/SideBar";

export default function HomePage() {
	return (
		<section className="relative w-screen h-screen">
			<Header />
			<SideBar />
			<Map />
		</section>
	);
}
