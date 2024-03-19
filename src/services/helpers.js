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
					resolve([latitude, longitude]);
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

function inRadian(angle) {
	return angle * (Math.PI / 180);
}

// considering that earth is spherical : using Haversine Formula
export function getDistance(lat1, lng1, lat2, lng2) {
	const R = 6371; // radius of earth
	const l1 = inRadian(lat1);
	const l2 = inRadian(lat2);
	const dLat = inRadian(lat2 - lat1);
	const dLng = inRadian(lng2 - lng1);

	// calculate haversine term a
	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(l1) * Math.cos(l2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

	// calculate central angle c
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	// calculate distance d = R * c
	const d = R * c;
	console.log("distance in km: " + d);
	return d;
}
