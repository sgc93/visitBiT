import "leaflet/dist/leaflet.css";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
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

export default function MapPage() {
	const [searchParams] = useSearchParams();
	const coords = [searchParams.get("lat"), searchParams.get("lng")];

	const initial = searchParams.size > 0 ? [{ position: coords }] : bit;

	const [positions, setPositions] = useState([
		initial,
		`${searchParams.size > 0 ? "detail" : "init"}`,
	]);
	const [showShareBox, setShowShareBox] = useState(false);
	const [detailedPlace, setDetailedPlace] = useState("");

	const dragConstraint = useRef();

	function setMarkedPlace(position) {
		setPositions(position);
	}

	return (
		<section
			className="relative overflow-hidden w-screen h-screen"
			ref={dragConstraint}
		>
			<Header dragConstraint={dragConstraint} setMarkedPlace={setMarkedPlace} />
			<SideBar
				setShowShareBox={setShowShareBox}
				setDetailedPlace={setDetailedPlace}
			/>
			<Map
				positions={positions}
				setMarkedPlace={setMarkedPlace}
				detailedPlace={detailedPlace}
				setDetailedPlace={setDetailedPlace}
				showShareBox={showShareBox}
				setShowShareBox={setShowShareBox}
			/>
		</section>
	);
}
