export default function getCurrentMonthYear() {
	const date = new Date();
	const options = {
		month: "long",
		day: "numeric",
		year: "numeric",
	};

	const today = date.toLocaleString("en-US", options);

	return today;
}

export function getCurrentPos() {
	return new Promise((resolve, reject) => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(userPos) => {
					const { latitude, longitude } = userPos.coords;
					const pos = [
						{
							name: "user",
							position: [latitude, longitude],
						},
					];
					resolve(pos);
				},
				(error) => {
					reject("Something went wrong while locating user : " + error);
				}
			);
		} else {
			throw new Error("geolocation is not supported in this browser!");
		}
	});
}

export function getCenter(positions) {
	const latLng = positions.map((pos) => pos.position);
	let minLat = Infinity;
	let maxLat = -Infinity;
	let minLng = Infinity;
	let maxLng = -Infinity;

	for (const [lat, lng] of latLng) {
		minLat = Math.min(minLat, lat);
		maxLat = Math.max(maxLat, lat);
		minLng = Math.min(minLng, lng);
		maxLng = Math.max(maxLng, lng);
	}

	const center = [(minLat + maxLat) / 2, (minLng + maxLng) / 2];
	console.log(center);
	return center;
}
