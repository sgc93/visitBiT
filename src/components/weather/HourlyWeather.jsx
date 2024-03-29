import { dateFormatter, timeFormatter } from "../../services/helpers";
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
		<div className="overflow-scroll table-scroll rounded-xl">
			<DetailTable hourlyData={hour} />
		</div>
	);
}

function DetailTable({ hourlyData }) {
	console.log(hourlyData);
	return (
		<table className="glassmorphism-bg rounded-xl w-full h-full">
			<tr className="mx-2">
				<th>time</th>
				<th>temperature</th>
				<th>condition</th>
				<th>humidity</th>
				<th>precipitation</th>
				<th>pressure</th>
				<th>wind</th>
				<th>cloud</th>
			</tr>
			{hourlyData.map((data, key) => (
				<tr key={key}>
					<td>{timeFormatter(data.time)}</td>
					<td>
						<span>{data.temp_c}°c / </span>
						<span>{data.temp_f}°f</span>
					</td>
					<td className="flex items-center gap-1">
						<img
							className="w-10"
							src={data.condition.icon}
							alt={data.condition.icon}
						/>
						<span>{data.condition.text}</span>
					</td>
					<td>{data.humidity}%</td>
					<td>{data.precip_mm}mm</td>
					<td>{data.pressure_mb}mb</td>
					<td>
						<span>{data.wind_dir} </span>
						<span>{data.wind_kph}kpm</span>
					</td>
					<td>{data.cloud}%</td>
				</tr>
			))}
		</table>
	);
}
