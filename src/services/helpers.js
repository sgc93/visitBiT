import { allPlaces } from "./data";

export function timeFormatter(time) {
	const toTime = new Date(time);
	const formatter = new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});

	return formatter.format(toTime);
}

export function dateFormatter(date) {
	const toDate = new Date(date);
	const formatter = new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return formatter.format(toDate);
}

export default function getCurrentMonthYear() {
	const date = new Date();
	return dateFormatter(date);
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

export function getCenter(positions, type) {
	let latLng;
	if (type === "bounds") {
		latLng = positions;
	} else {
		latLng = positions.map((pos) => pos.position);
	}
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
	return center;
}

function inRadian(angle) {
	return angle * (Math.PI / 180);
}

// convert km into m if d < 1km  : and rounding
function convertDistance(d) {
	if (d < 1) {
		return [Math.round(d * 1000), "Meters"];
	} else {
		return [Math.round(d), "Kms"];
	}
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

	return convertDistance(d);
}

export function getNearest(positions, userPos) {
	let smallestD = [Infinity, "meters"];
	let nearestPlace;

	positions.forEach((pos) => {
		const d = getDistance(
			pos.position[0],
			pos.position[1],
			userPos[0],
			userPos[1]
		);
		// d = [magnitude, unit]
		if (d[0] < smallestD[0]) {
			smallestD = d;
			nearestPlace = pos;
		}
	});

	return [nearestPlace, smallestD];
}

export function getNearestPlace(positions) {
	return new Promise((resolve, reject) => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(userPos) => {
					const { latitude, longitude } = userPos.coords;
					const nearest = getNearest(positions, [latitude, longitude]);

					resolve([
						[
							{
								name: "user",
								position: [latitude, longitude],
							},
							nearest[0],
						],
						nearest[1],
					]);
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

// customized searching

export function searchFor(query) {
	return new Promise((resolve, reject) => {
		let matchedPlace = [];
		allPlaces.forEach((place) => {
			if (place.name.toLowerCase().includes(query.toLowerCase())) {
				matchedPlace.push(place);
			}
		});

		if (matchedPlace.length > 0) {
			resolve(matchedPlace.sort(sortPlaces));
		} else {
			reject("Place Not Found!");
		}
	});
}

// sort given array of places based on their name

function sortPlaces(place1, place2) {
	const name1 = place1.name.toLowerCase();
	const name2 = place2.name.toLowerCase();
	return name1.localeCompare(name2);
}
