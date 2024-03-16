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
				return pos;
			},
			(error) => {
				throw new Error("Something went wrong while locating user : " + error);
			}
		);
	} else {
		throw new Error("geolocation is not supported in this browser!");
	}
}
