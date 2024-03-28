import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import { bit } from "../../services/data";
import { getCurrentPos } from "../../services/helpers";

const mapUrl = "http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}";
const subdomains = ["mt0", "mt1", "mt2", "mt3"];

export default function WeatherMap() {
	const [place, setPlace] = useState(bit[0]);
	return (
		<div className="relative w-3/6 h-[90%] rounded-lg border-2 border-purple-500 overflow-hidden">
			<MapBox place={place} />
			<PositionChoicer place={place} setPlace={setPlace} />
		</div>
	);
}

function PositionChoicer({ place, setPlace }) {
	const [isBiTSelected, setIsBiTSelected] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("something went wrong!");

	useEffect(() => {
		const id = setTimeout(() => {
			setError("");
		}, 2000);

		return () => clearTimeout(id);
	}, [error]);

	async function changeRefLocTo(ref) {
		if (ref === "user") {
			try {
				setIsLoading(true);
				setError("");
				const currPos = await getCurrentPos();
				setPlace({
					name: "Current User Location",
					position: currPos,
				});
				setIsBiTSelected(false);
			} catch (error) {
				setError(`${error}`);
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		} else {
			if (bit.length === 1) {
				setPlace(bit[0]);
				setIsBiTSelected(true);
			}
		}
	}

	return (
		<div
			className={`absolute bottom-3 left-[50%] translate-x-[-50%] z-[500] w-[23rem] h-[3.7rem] ${
				error !== "" ? "bg-red-500" : "glassmorphism-white"
			} px-2 py-[2px] rounded-lg flex flex-col items-center gap-1`}
		>
			{isLoading ? (
				<div className="w-full h-full flex flex-col items-center justify-center gap-2">
					<span className="small-loader border-4 w-5"></span>
					<span className="text-sm text-blue-900">loading</span>
				</div>
			) : error !== "" ? (
				<span className="text-stone-200 text-semibold text-center">
					{error}
				</span>
			) : (
				<>
					<div className="text-sm flex items-center gap-2 ">
						<span className=" text-stone-800">used coords: </span>
						<span className=" text-stone-900">{place.position}</span>
					</div>
					<div className="flex items-center gap-2 pb-1">
						<button
							className={`px-2 rounded-md  ${
								isBiTSelected
									? "bg-blue-300"
									: "bg-blue-100 transition-all duration-300 hover:bg-blue-300"
							}`}
							onClick={() => changeRefLocTo("bit")}
						>
							use BiT&apos;s location
						</button>
						<button
							className={`px-2 rounded-md  ${
								!isBiTSelected
									? "bg-blue-300"
									: "bg-blue-100 transition-all duration-300 hover:bg-blue-300"
							}`}
							onClick={() => changeRefLocTo("user")}
						>
							use user location
						</button>
					</div>
				</>
			)}
		</div>
	);
}

function MapBox({ place }) {
	return (
		<div className="w-full h-full ">
			{place.position && (
				<MapContainer
					center={place.position}
					zoom={16}
					className="w-[100%] h-[100%]"
				>
					<TileLayer url={mapUrl} subdomains={subdomains} />
					<Popup position={place.position}>
						<div className="bg-stone-200 px-2 py-1 rounded-lg text-sm">
							{place.name}
						</div>
					</Popup>
					<Marker position={place.position}>
						<Tooltip position={place.position}>{place.name}</Tooltip>
						<Popup position={place.position}>
							<div className="bg-stone-200 px-2 py-1 rounded-lg text-sm">
								{place.name}
							</div>
						</Popup>
					</Marker>
				</MapContainer>
			)}
		</div>
	);
}
