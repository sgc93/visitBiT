import CampusData from "./CampusData";
import CampusMap from "./CampusMap";
import CampusNav from "./CampusNav";

export default function Campus() {
	return (
		<div
			id="campuses"
			className="overlay w-fll h-full backdrop-blur-[4px] flex flex-col items-center gap-3 p-10"
		>
			<CampusNav />
			<div className="flex w-full h-[95%]">
				<CampusData />
				<CampusMap />
			</div>
		</div>
	);
}
