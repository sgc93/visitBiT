import { dateFormatter } from "../../services/helpers";
import LoaderBlock from "../LoaderBlock";

export default function Astronomy({ forecastDay, isLoading }) {
	return (
		<>
			{isLoading || !forecastDay ? (
				<LoaderBlock width={"16%"} height={"100%"} />
			) : (
				<div className="glassmorphism-white w-1/6 h-full rounded-lg flex flex-col ">
					<AstronomyHeader date={forecastDay.date} />
					<span className="h-[1px] bg-stone-600 mx-2"></span>
				</div>
			)}
		</>
	);
}

function AstronomyHeader({ date }) {
	return (
		<div className="w-full h-[8%] flex items-center justify-between px-2">
			<span className="text-blue-900 font-semibold capitalize">Astronomy</span>
			<span className="text-stone-900 text-sm">{dateFormatter(date)}</span>
		</div>
	);
}
