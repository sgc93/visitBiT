import { MdOutlineNightlightRound, MdSunny } from "react-icons/md";
import { dateFormatter, timeFormatter } from "../../services/helpers";
import LoaderBlock from "../LoaderBlock";

export default function CurrentWeather({ current, isLoading }) {
	return (
		<div className="w-2/6 h-full rounded-lg glassmorphism-white flex flex-col">
			<Title current={current} isLoading={isLoading} />
			<span className=" h-[1px] bg-stone-700 mx-2"></span>
			<Temperature current={current} isLoading={isLoading} />
			<CurrentDetail current={current} isLoading={isLoading} />
		</div>
	);
}

function Title({ current, isLoading }) {
	let date, time;
	if (!isLoading && current) {
		date = dateFormatter(current.last_updated);
		time = timeFormatter(current.last_updated);
	}

	return (
		<div className="w-full h-[12%] flex items-center justify-between px-2 ">
			<span className="text-blue-950 font-semibold">Current weather</span>
			<div className="flex flex-col justify-center w-[25%] h-full ">
				{isLoading || !current ? (
					<LoaderBlock width={"100%"} height={"100%"} />
				) : (
					<>
						<span className="text-sm font-semibold text-stone-950">{time}</span>
						<span className="text-sm font-thin text-stone-950">{date}</span>
					</>
				)}
			</div>
		</div>
	);
}

function Temperature({ current, isLoading }) {
	return (
		<div className="w-full h-[40%] flex gap-2 p-2">
			{isLoading || !current ? (
				<LoaderBlock width={"50%"} height={"100%"} />
			) : (
				<div className="glassmorphism-bg rounded-lg relative flex flex-col items-center w-[50%] h-full py-3 px-1 overflow-hidden">
					<img
						src={current.condition.icon}
						alt={current.condition.text}
						className=" h-full w-full translate-y-[-1.3rem] "
					/>
					<div className="absolute bottom-2  flex items-end gap-1">
						<span className="text-5xl text-stone-900 font-semibold">
							{current.temp_c}°C
						</span>
						<span className="text-lg font-semibold text-stone-800">
							{current.temp_f}°F
						</span>
					</div>
				</div>
			)}
			{isLoading || !current ? (
				<LoaderBlock width={"50%"} height={"100%"} />
			) : (
				<div className="glassmorphism-bg rounded-lg w-1/2 h-full flex flex-col items-center p-2">
					<span className="text-blue-900 text-4xl ">
						{current.condition.text}
					</span>
					<span className="text-stone-900 flex items-center">
						{current.is_day ? (
							<>
								<span>day</span>
								<MdSunny />
							</>
						) : (
							<>
								<span>night</span>
								<MdOutlineNightlightRound />
							</>
						)}
					</span>
				</div>
			)}
		</div>
	);
}

function CurrentDetail({ current, isLoading }) {
	let detail;
	if (!isLoading && current) {
		detail = {
			cloud: `${current.cloud > 0 ? `${current.cloud}%` : "No Cloud "}`,
			humidity: `${current.humidity}%`,
			precipitation: `${
				current.precip_mm > 0 ? `${current.precip_mm} mm` : "No precipitation "
			}`,
			pressure: `${current.pressure_mb} mb`,
			ultraViolet: current.uv,
			wind: `${current.wind_dir} ${current.wind_kph} kph`,
		};
	}

	return (
		<>
			{isLoading || !current ? (
				<LoaderBlock width={"97%"} height={"48%"} className={"mx-2 p-3 mb-2"} />
			) : (
				<div className="glassmorphism-bg rounded-lg mx-2 p-3 mb-2 h-[48%] overflow-hidden flex flex-col items-center gap-[.2rem]">
					{Object.keys(detail).map((key) => (
						<CurDet key={key} index={key} data={detail[key]} />
					))}
				</div>
			)}
		</>
	);
}

function CurDet({ data, index }) {
	return (
		<div className="w-5/6 flex items-center justify-between glassmorphism-bg rounded-md px-2 py-[1.2px]">
			<span className="capitalize text-sm font-semibold">{index}</span>
			<span className=" w-1/2 text-start text-sm lowercase font-bold">
				{data}
			</span>
		</div>
	);
}
