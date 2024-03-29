import { WiMoonrise, WiMoonset, WiSunrise, WiSunset } from "react-icons/wi";
import { dateFormatter } from "../../services/helpers";
import LoaderBlock from "../LoaderBlock";

export default function Astronomy({ forecastDay, isLoading }) {
	console.log(forecastDay);
	return (
		<>
			{isLoading || !forecastDay ? (
				<LoaderBlock width={"16%"} height={"100%"} />
			) : (
				<div className="glassmorphism-white w-1/6 h-full rounded-lg flex flex-col px-2 pb-2">
					<AstronomyHeader date={forecastDay.date} />
					<span className="h-[1px] bg-stone-600 mb-2"></span>
					<AstronomyDetail astro={forecastDay.astro} />
				</div>
			)}
		</>
	);
}

function AstronomyHeader({ date }) {
	return (
		<div className="w-full h-[8%] flex items-center justify-between ">
			<span className="text-blue-900 font-semibold capitalize">Astronomy</span>
			<span className="text-stone-900 text-sm">{dateFormatter(date)}</span>
		</div>
	);
}

function AstronomyDetail({ astro }) {
	let astroData = astro
		? [
				{
					attr: "Sun rise",
					value: astro.sunrise,
					icon: <WiSunrise />,
				},
				{
					attr: "Sun set",
					value: astro.sunset,
					icon: <WiSunset />,
				},
				{
					attr: "Moon rise",
					value: astro.moonrise,
					icon: <WiMoonrise />,
				},
				{
					attr: "Moon set",
					value: astro.moonset,
					icon: <WiMoonset />,
				},
		  ]
		: [];

	return (
		<div className="glassmorphism-bg rounded-lg p-2 w-full h-full flex flex-col gap-2">
			{astroData.map((data, key) => (
				<Data key={key} data={data} />
			))}
		</div>
	);
}

function Data({ data }) {
	return (
		<div className="flex items-center w-full justify-between glassmorphism-bg rounded-md px-1 transition-all duration-300 hover:bg-orange-200">
			<div className="flex items-center gap-1 w-2/3">
				<span className="text-xl">{data.icon}</span>
				<span className="capitalize">{data.attr}</span>
			</div>
			<span className="text-sm font-semibold w-1/3">{data.value}</span>
		</div>
	);
}
