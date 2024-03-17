import "leaflet/dist/leaflet.css";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import SideBar from "../components/SideBar";

export default function HomePage() {
	const [position, setPosition] = useState([]);
	const dragConstraint = useRef();

	function setMarkedPlace(position) {
		setPosition(position);
	}

	return (
		<section
			className="relative overflow-hidden w-screen h-screen"
			ref={dragConstraint}
		>
			<Header dragConstraint={dragConstraint} setMarkedPlace={setMarkedPlace} />
			<SideBar setPosition={setMarkedPlace} />
			<Map positions={position} setMarkedPlace={setMarkedPlace} />
		</section>
	);
}
