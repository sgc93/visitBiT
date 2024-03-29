import { dateFormatter } from "../../services/helpers";
import LoaderBlock from "../LoaderBlock";

export default function DayWeather({
	forecastDay,
	isLoading,
	forecastTo,
	isToday,
}) {
	return (
		<div className="glassmorphism-white w-2/6 h-full rounded-lg p-2 flex flex-col gap-2">
			<DayHeader
				forecastDay={forecastDay}
				isLoading={isLoading}
				forecastTo={forecastTo}
				isToday={isToday}
			/>
			<span className="h-[1px] bg-stone-700"></span>
		</div>
	);
}

function DayHeader({ forecastDay, isLoading, forecastTo, isToday }) {
	return (
		<div className="flex items-center justify-between">
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
