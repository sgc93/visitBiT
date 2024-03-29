import { dateFormatter } from "../../services/helpers";
import LoaderBlock from "../LoaderBlock";

export default function DayWeather({
	forecastDay,
	isLoading,
	forecastTo,
	isToday,
}) {
	return (
		<div className="glassmorphism-white w-[30%] h-full rounded-lg p-2 flex flex-col gap-2">
			<DayHeader
				forecastDay={forecastDay}
				isLoading={isLoading}
				forecastTo={forecastTo}
				isToday={isToday}
			/>
			<span className="h-[1px] bg-stone-500"></span>
			<DailyAverage forecastDay={forecastDay} isLoading={isLoading} />
		</div>
	);
}

function DayHeader({ forecastDay, isLoading, forecastTo, isToday }) {
	return (
		<div className="flex items-center justify-between w-full h-[8%]">
			<div className="flex items-center gap-1">
				<span className="text-blue-950 font-semibold">Daily Weather</span>
				{isLoading || !forecastDay ? (
					<LoaderBlock width={"7rem"} height={"1.3rem"} />
				) : (
					<span className="w-28 flex justify-center underline underline-offset-2 text-sm text-stone-400">
						{dateFormatter(forecastDay.date)}
					</span>
				)}
			</div>
			<div className="flex items-center">
				<button
					className={`px-2 py-[2px] rounded-l-lg overflow-hidden ${
						isToday
							? "glassmorphism-white border-none"
							: " transition-all duration-300 hover:border-none glassmorhpism-bg hover:glassmorphism-white"
					}`}
					onClick={() => forecastTo(0)}
				>
					today
				</button>
				<button
					className={`px-2 py-[2px] rounded-r-lg overflow-hidden ${
						!isToday
							? "glassmorphism-white border-none"
							: " transition-all duration-300 hover:border-none glassmorphism-bg hover:glassmorphism-white"
					}`}
					onClick={() => forecastTo(1)}
				>
					tomorrow
				</button>
			</div>
		</div>
	);
}

function DailyAverage({ forecastDay, isLoading }) {
	const data = forecastDay ? forecastDay.day : "";
	return (
		<div className="flex flex-col w-full h-[92%] gap-2">
			<AveTemp tempData={data} isLoading={isLoading} />
			<AveWeather weatherData={data} isLoading={isLoading} />
		</div>
	);
}

function AveTemp({ tempData, isLoading }) {
	return (
		<>
			{isLoading || !tempData ? (
				<LoaderBlock width={"100%"} height={"40%"} />
			) : (
				<div className="w-full h-[40%] glassmorphism-bg rounded-xl flex items-center justify-center gap-4">
					<div className=" h-full px-4 py-2 flex flex-col gap-1 items-center">
						<img src={tempData.condition.icon} alt={tempData.condition.text} />
						<span className="text-3xl font-semibold text-stone-100">
							{tempData.condition.text}
						</span>
					</div>
					<div>
						<div className="flex items-end gap-1">
							<span className="text-blue-900 text-4xl">
								{tempData.avgtemp_c}°C
							</span>
							<span className="text-sm font-semibold text-blue-900">
								/ {tempData.avgtemp_f}°F
							</span>
						</div>
						<div>
							<div>
								<span className="text-red-900 text-xl">
									max: {tempData.maxtemp_c}°C
								</span>
								<span className="text-sm font-semibold text-red-900">
									/ {tempData.maxtemp_f}°F
								</span>
							</div>
							<div>
								<span className="text-green-900 text-xl">
									min: {tempData.mintemp_c}°C
								</span>
								<span className="text-sm font-semibold text-green-900">
									/ {tempData.mintemp_f}°F
								</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

function AveWeather({ weatherData, isLoading }) {
	let summary;
	if (!isLoading && weatherData) {
		summary = [
			`Daily chance of rain is ${weatherData.daily_chance_of_rain}%`,
			`Daily chance of snow is ${weatherData.daily_chance_of_snow}%`,
			`Maximum wind speed is ${weatherData.maxwind_kph} kph`,
		];
	}

	return (
		<>
			{isLoading || !weatherData ? (
				<LoaderBlock width={"100%"} height={"60%"} />
			) : (
				<div className="w-full h-[60%] glassmorphism-bg rounded-xl flex flex-col justify-center gap-2 px-4">
					{summary.map((data, key) => (
						<Summary data={data} key={key} />
					))}
				</div>
			)}
		</>
	);
}

function Summary({ data }) {
	return (
		<span className="text-stone-900 font-sm font-semibold glassmorphism-bg px-2 py-1 rounded-lg">
			{data}
		</span>
	);
}
