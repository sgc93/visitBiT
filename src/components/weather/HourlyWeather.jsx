import { dateFormatter } from "../../services/helpers";
import LoaderBlock from "../LoaderBlock";

export default function HourlyWeather({ forecastDay, isLoading }) {
	return (
		<>
			{isLoading || !forecastDay ? (
				<LoaderBlock width={"75%"} height={"100%"} />
			) : (
				<div className="w-[75%] h-full rounded-lg glassmorphism-white p-2 flex flex-col gap-2">
					<HourlyHeader forecastDay={forecastDay} />
					<HourlyDetail forecastDay={forecastDay} />
				</div>
			)}
		</>
	);
}

function HourlyHeader({ forecastDay }) {
	return (
		<div className="flex items-center gap-3">
			<span className="font-semibold text-blue-950">Hourly Weather Data</span>
			<span className="text-sm font-semibold text-stone-400 underline underline-offset-2">
				{dateFormatter(forecastDay.date)}
			</span>
		</div>
	);
}

function HourlyDetail({ forecastDay }) {
	const hour = forecastDay.hour;

	return (
		<div className="flex">
			<DetailTable hourlyData={hour} />
		</div>
	);
}

function DetailTable({ hourlyData }) {
	return <div>hourlyData</div>;
}
