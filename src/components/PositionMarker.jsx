import { Marker, Popup, Tooltip } from "react-leaflet";
import Button from "./Button";

function CustomTip({ props }) {
	return <div className="glassmorphism">{props.label}</div>;
}

export default function PositionMarker({
	positions,
	setShowDetailBox,
	setDetailedPlace,
	setShowShareBox,
}) {
	return (
		<>
			{positions[0].length > 0 &&
				positions[0].map((pos, key) => (
					<Marker position={pos.position} key={key}>
						<Tooltip tip={CustomTip}>
							{pos.name ? pos.name : pos.position}
						</Tooltip>
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
											setShowShareBox(true);
										}}
									>
										share
									</Button>
								</div>
							</div>
						</Popup>
					</Marker>
				))}
		</>
	);
}
