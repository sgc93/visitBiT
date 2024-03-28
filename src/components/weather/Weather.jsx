import { useState } from "react";
import WeatherMap from "./WeatherMap";

const API = "e2b3350b4ad94eec94e91829242803";
const call_url =
	"https://api.weatherapi.com/v1/forecast.json?key=e2b3350b4ad94eec94e91829242803&q=bahir dar&days=1&aqi=no&alerts=no";
export default function Weather() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	// useEffect(() => {
	// 	async function fetchWeatherData() {
	// 		try {
	// 			setIsLoading(true);
	// 			setError("");
	// 			const response = await fetch(call_url);
	// 			const data = await response.json();
	// 			console.log(data);
	// 		} catch (error) {
	// 			console.log(error);
	// 			setError(error.message);
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	}

	// 	fetchWeatherData();
	// }, []);

	return (
		<div id="temp" className="overlay w-full h-full p-4 flex flex-col gap-4">
			<div className="w-full h-1/2 flex items-center gap-4">
				<div className="w-2/6 h-full rounded-lg bg-green-500"></div>
				<WeatherMap />
				<div className="w-1/6 h-full rounded-lg bg-blue-500"></div>
			</div>
			<div className="w-full h-1/2 bg-orange-400 flex items-center gap-4">
				<div className="w-2/6 h-full rounded-lg bg-stone-500"></div>
				<div className="w-4/6 h-full rounded-lg bg-red-500"></div>
			</div>
		</div>
	);
}
