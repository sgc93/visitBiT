import { useState } from "react";
import { campusTabs } from "../../services/tabs";
import CampusData from "./CampusData";
import CampusMap from "./CampusMap";
import CampusNav from "./CampusNav";

export default function Campus() {
	const [tabs, setTabs] = useState(campusTabs);
	const [selectedTab, setSelectedTab] = useState(tabs[0]);

	return (
		<div
			id="campuses"
			className="overlay w-full h-full backdrop-blur-[4px] flex flex-col items-center gap-3 p-10"
		>
			<div className="flex flex-col gap-1 w-full h-full bg-stone-950 rounded-xl">
				<CampusNav
					tabs={tabs}
					setTabs={setTabs}
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
				/>
				<CampusWindowTab selectedTab={selectedTab} />
				<span className="h-[1px] w-full bg-stone-900"></span>
				<div className="w-full h-full flex items-center gap-4">
					<CampusData campus={selectedTab} />
					<span className="bg-stone-900 h-[95%] w-[1px]"></span>
					<CampusMap />
				</div>
			</div>
		</div>
	);
}

function CampusWindowTab({ selectedTab }) {
	return (
		<div className="pl-4 py-2">
			<span className="text-md text-stone-400 lowercase">
				<span className="text-blue-600">&gt;</span>{" "}
				<span className="text-stone-700">bahir Dar University </span>
				<span className="text-blue-600">/ </span>
				<span className="text-stone-600">{selectedTab.name}</span>
			</span>
		</div>
	);
}
