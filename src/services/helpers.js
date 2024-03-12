export default function getCurrentDateTime() {
	const date = new Date();
	const options = {
		month: "long",
		day: "numeric",
		year: "numeric",
	};

	const today = date.toLocaleString(undefined, options);

	return today;
}
