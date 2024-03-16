import "leaflet/dist/leaflet.css";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import SideBar from "../components/SideBar";

export default function HomePage() {
	const [positions, setPositions] = useState([]);
	const dragConstraint = useRef();
	return (
		<section
			className="relative overflow-hidden w-screen h-screen"
			ref={dragConstraint}
		>
			<Header dragConstraint={dragConstraint} setPositions={setPositions} />
			<SideBar setPosition={setPositions} />
			<Map positions={positions} />
		</section>
	);
}
