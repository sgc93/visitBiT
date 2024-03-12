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
