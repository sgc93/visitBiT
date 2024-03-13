import { Marker, Popup } from "react-leaflet";
import Button from "./Button";

export default function PositionMarker({
	pos,
	setShowDetailBox,
	setDetailedPlace,
}) {
	return (
		<Marker position={pos.position}>
			<Popup>
				<div className="flex flex-col gap-2">
					<span>{pos.name}</span>
					<img src={pos.img[1]} alt="kitaw_launch" />
					<Button
						className={
							"bg-blue-400 text-sm items-center transition-all duration-300 hover:bg-blue-900 hover:text-stone-100"
						}
						handleClick={() => {
							setShowDetailBox(true);
							setDetailedPlace(pos);
						}}
					>
						See More
					</Button>
				</div>
			</Popup>
		</Marker>
	);
}
