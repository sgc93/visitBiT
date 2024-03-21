import { Popup } from "react-leaflet";

export default function Label({ positions }) {
	return (
		positions[0].length > 0 &&
		positions[0].map((pos, key) => {
			console.log(pos);
			return (
				<Popup position={pos.position} key={key}>
					{pos.name}
				</Popup>
			);
		})
	);
}
