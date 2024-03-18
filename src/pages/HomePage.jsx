import "leaflet/dist/leaflet.css";
import { useRef, useState } from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import SideBar from "../components/SideBar";

const bit = [
	{
		name: "Bahir Dar Institute Of Technology",
		description:
			"a campus of engineering in Bahir Dar University. historically, it is the oldest one - originated in 1963 by Emperor HaileSelassie",
		position: [11.597621756651337, 37.39551835806901],
		phone: ["058 220 9338"],
		img: ["/bit/img1.jpg"],
	},
];

export default function HomePage() {
	const [position, setPosition] = useState(bit);
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
