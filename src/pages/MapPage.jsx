import "leaflet/dist/leaflet.css";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Map from "../components/Map";
import SideBar from "../components/SideBar";
import { bit } from "../services/data";

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
	const [isNotifierOpened, setIsNotifierOpened] = useState(true);
	const dragConstraint = useRef();

	function setMarkedPlace(position) {
		setPositions(position);
	}

	return (
		<section
			className="relative overflow-hidden w-screen h-screen"
			ref={dragConstraint}
		>
			{isNotifierOpened && (
				<Notification setIsNotifierOpened={setIsNotifierOpened} />
			)}
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

function Notification({ setIsNotifierOpened }) {
	function handleClose() {
		setIsNotifierOpened(false);
	}

	return (
		<div className="absolute left-0 top-0 z-[1001] w-screen h-screen flex justify-center backdrop-blur-[2px] pt-32">
			<div className="bg-slate-400 h-fit rounded-xl flex flex-col items-end gap-3 p-3">
				<div className="flex flex-col gap-1 items-center">
					<span className="text-stone-950 font-bold text-lg">
						Not all places&apos;s and necessary data are deployed!
					</span>
					<span className="text-stone-800 glassmorphism-bg px-2 py-[2px] rounded-lg">
						there will be full functionality soon! consider this version as an{" "}
						<span className="text-blue-700">alpha</span>
					</span>
				</div>
				<button
					className="white-btn rounded-md px-2 py-[2px] text-semibold w-fit "
					onClick={() => handleClose()}
				>
					ok
				</button>
			</div>
		</div>
	);
}
