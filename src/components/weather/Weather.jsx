import { useEffect, useState } from "react";
import { bit } from "../../services/data";
import Astronomy from "./Astronomy";
import CurrentWeather from "./CurrentWeather";
import DayWeather from "./DayWeather";
import WeatherMap from "./WeatherMap";

const API = "e2b3350b4ad94eec94e91829242803";

export default function Weather() {
	const [place, setPlace] = useState(bit[0]);
	const [weather, setWeather] = useState({});
	const [forecastDay, setForecastDay] = useState();
	const [isToday, setIsToday] = useState(true);

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		async function fetchWeatherData() {
			try {
				setIsLoading(true);
				setError("");
				const response = await fetch(
					`https://api.weatherapi.com/v1/forecast.json?key=e2b3350b4ad94eec94e91829242803&q=${place.position}&days=2&aqi=no&alerts=no`
				);
				const data = await response.json();
				setWeather(data);
				setForecastDay(data.forecast.forecastday[isToday ? 0 : 1]);
			} catch (error) {
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchWeatherData();
	}, [place]);

	function changeDayOfForcast(day) {
		if (day === 0) {
			if (!isToday) {
				setIsToday(true);
				setForecastDay(weather.forecast.forecastday[0]);
				console.log(forecastDay);
			}
		} else {
			if (isToday) {
				console.log(forecastDay);
				setIsToday(false);
				setForecastDay(weather.forecast.forecastday[1]);
			}
		}
	}

	return (
		<div id="temp" className="overlay w-full h-screen p-4 flex flex-col gap-4">
			<div className="w-full h-1/2 flex items-center gap-4">
				<CurrentWeather current={weather.current} isLoading={isLoading} />
				<WeatherMap place={place} setPlace={setPlace} />
				<Astronomy forecastDay={forecastDay} isLoading={isLoading} />
			</div>
			<div className="w-full h-1/2 flex items-center gap-4">
				<DayWeather
					forecastDay={forecastDay}
					forecastTo={changeDayOfForcast}
					isLoading={isLoading}
					isToday={isToday}
				/>
				<div className="w-4/6 h-full rounded-lg bg-red-500"></div>
			</div>
		</div>
	);
}
