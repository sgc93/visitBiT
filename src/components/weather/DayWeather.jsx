import { useState } from "react";
import { dateFormatter } from "../../services/helpers";
import LoaderBlock from "../LoaderBlock";

export default function DayWeather({ forecastDay, isLoading, forecastTo }) {
	console.log(forecastDay);
	return (
		<div className="glassmorphism-white w-2/6 h-full rounded-lg p-2 flex flex-col gap-2">
			<DayHeader forecastDay={forecastDay} isLoading={isLoading} />
			<span className="h-[1px] bg-stone-700"></span>
		</div>
	);
}

function DayHeader({ forecastDay, isLoading, forecastTo }) {
	const [isToday, setIsToday] = useState(true);

	function today() {
		if (!isToday) {
			setIsToday(true);
			forecastTo(0);
		}
	}

	function tomorrow() {
		if (isToday) {
			setIsToday(false);
			forecastTo(1);
		}
	}

	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-1">
				<span className="text-blue-950 font-semibold">Daily Weather</span>
				{isLoading ? (
					<LoaderBlock width={"7rem"} height={"1.3rem"} />
				) : (
					<span className="w-28 flex justify-center underline underline-offset-2 text-sm font-semibold text-stone-600">
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
					onClick={() => today()}
				>
					today
				</button>
				<button
					className={`px-2 py-[2px] rounded-r-lg overflow-hidden ${
						!isToday
							? "glassmorphism-white border-none"
							: " transition-all duration-300 hover:border-none glassmorphism-bg hover:glassmorphism-white"
					}`}
					onClick={() => tomorrow()}
				>
					tomorrow
				</button>
			</div>
		</div>
	);
}
