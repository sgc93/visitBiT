import { Marker, Popup } from "react-leaflet";
import Button from "./Button";

export default function PositionMarker({
	pos,
	setShowDetailBox,
	setDetailedPlace,
	setShowShareBox,
}) {
	return (
		<Marker position={pos.position}>
			<Popup>
				<div className="flex flex-col gap-2">
					{pos.name && <span>{pos.name}</span>}
					{pos.img && <img src={pos.img[0]} alt={pos.name} />}
					<div className="flex items-center gap-1">
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
						<Button
							className={
								"bg-blue-400 text-sm items-center transition-all duration-300 hover:bg-blue-900 hover:text-stone-100"
							}
							handleClick={() => {
								setDetailedPlace(pos);
								setShowShareBox((showShareBox) => {
									return { ...showShareBox, isOpen: true };
								});
							}}
						>
							share
						</Button>
					</div>
				</div>
			</Popup>
		</Marker>
	);
}
