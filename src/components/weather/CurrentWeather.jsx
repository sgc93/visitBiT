import { dateFormatter, timeFormatter } from "../../services/helpers";

export default function CurrentWeather() {
	const current = {
		cloud: 0,
		condition: {
			text: "Clear ",
			icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
			code: 1000,
		},
		feelslike_c: 24.1,
		feelslike_f: 75.3,
		gust_kph: 25.4,
		humidity: 26,
		is_day: 0,
		last_updated: "2000-11-30 17:00",

		precip_in: 0,
		precip_mm: 0,
		pressure_in: 29.88,
		pressure_mb: 1012,
		temp_c: 24.5,
		temp_f: 76,
		uv: 1,
		vis_km: 10,
		vis_miles: 6,
		wind_degree: 293,
		wind_dir: "WNW",
		wind_kph: 14.4,
		wind_mph: 8.9,
	};
	return (
		<div className="w-2/6 h-full rounded-lg glassmorphism-white flex flex-col">
			<Title />
			<span className="w-full h-[1px] bg-stone-700"></span>
			<div className="w-full h-3/6 bg-orange-500"></div>
			<div className="w-full h-[42%] bg-blue-500"></div>
		</div>
	);
}

function Title({ updateTime }) {
	let date, time;
	if (updateTime) {
		date = dateFormatter(updateTime);
		time = timeFormatter(updateTime);
	}

	return (
		<div className="w-full h-[8%] flex items-center justify-between px-2 ">
			<span className="text-blue-950 font-semibold">Current weather</span>
			{updateTime ? (
				<div className="flex flex-col">
					<span>{time}</span>
					<span>{date}</span>
				</div>
			) : (
				<LoaderBlock width={"100%"} height={"100%"} />
			)}
		</div>
	);
}

function LoaderBlock({ width, height }) {
	return (
		<div
			style={{ height: height, width: width }}
			className="loader-block bg-stone-800"
		></div>
	);
}
