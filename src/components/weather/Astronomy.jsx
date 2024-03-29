import { WiMoonrise, WiMoonset, WiSunrise, WiSunset } from "react-icons/wi";
import { dateFormatter } from "../../services/helpers";
import LoaderBlock from "../LoaderBlock";

export default function Astronomy({ forecastDay, isLoading }) {
	const date = forecastDay ? dateFormatter(forecastDay.date) : "";
	const astro = forecastDay ? forecastDay.astro : {};

	return (
		<>
			{isLoading || !forecastDay ? (
				<LoaderBlock width={"16%"} height={"100%"} />
			) : (
				<div className="glassmorphism-white w-1/6 h-full rounded-lg flex flex-col p-2 gap-2">
					<AstronomyHeader date={date} />
					<span className="h-[1px] bg-stone-600 mb-2"></span>
					<AstronomyDetail astro={astro} />
				</div>
			)}
		</>
	);
}

function AstronomyHeader({ date }) {
	console.log(date);
	return (
		<div className="w-full h-[8%] flex items-center justify-between ">
			<span className="text-blue-900 font-semibold capitalize">Astronomy</span>
			<span className="text-stone-900 text-sm">{date}</span>
		</div>
	);
}

function AstronomyDetail({ astro }) {
	let astroData = [
		[
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
		],
		{
			"Moon illumination": `${astro.moon_illumination}%`,
			"Moon Phase": astro.moon_phase,
		},
		[
			`${astro.is_moon_up ? "🌑 moon is up" : "✖️ moon is not up"}`,
			`${astro.is_sun_up ? "☀️ sun is up" : "✖️ sun is not up"}`,
		],
	];

	return (
		<div className="glassmorphism-bg rounded-lg p-2 w-full h-full flex flex-col gap-2">
			{astroData[0].map((data, key) => (
				<DataA key={key} data={data} />
			))}
			<span className="w-full h-[1px] bg-stone-600"></span>
			{Object.keys(astroData[1]).map((key) => (
				<DataB key={key} index={key} data={astroData[1]} />
			))}
			<span className="w-full h-[1px] bg-stone-600"></span>
			{astroData[2].map((data, key) => (
				<DataC key={key} data={data} />
			))}
		</div>
	);
}

function DataA({ data }) {
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

function DataB({ index, data }) {
	return (
		<div className="w-full flex items-center gap-4">
			<span className="text-sm">{index} : </span>
			<span className="text-sm font-bold">{data[index]}</span>
		</div>
	);
}

function DataC({ data }) {
	return (
		<span className="glassmorphism px-2 py-1 rounded-lg overflow-hidden">
			{data}
		</span>
	);
}
