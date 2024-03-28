import { useEffect } from "react";

const API = "e2b3350b4ad94eec94e91829242803";
const call =
	"https://api.weatherapi.com/v1/forecast.json?key=e2b3350b4ad94eec94e91829242803&q=bahir dar&days=1&aqi=yes&alerts=no";
export default function Weather() {
	useEffect(() => {
		async function fetchWeatherData() {}
	}, []);
	return (
		<div id="temp" className="overlay w-full h-full">
			Weather
		</div>
	);
}
