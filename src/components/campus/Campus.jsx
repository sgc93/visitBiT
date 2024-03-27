import { useState } from "react";
import { campusTabs } from "../../services/tabs";
import CampusData from "./CampusData";
import CampusMap from "./CampusMap";
import CampusNav from "./CampusNav";
import CampusWindowTab from "./CampusWindowTab";

export default function Campus() {
	const [tabs, setTabs] = useState(campusTabs);
	const [selectedTab, setSelectedTab] = useState(tabs[0]);

	return (
		<div
			id="campuses"
			className="overlay w-full h-full backdrop-blur-[4px] flex flex-col items-center gap-3 p-10"
		>
			<div className="flex flex-col w-full h-full bg-stone-950 rounded-xl">
				<CampusNav
					tabs={tabs}
					setTabs={setTabs}
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
				/>
				<div className="flex flex-col gap-1 w-[calc(100%-1rem)] h-full m-2 rounded-lg bg-stone-900">
					<CampusWindowTab selectedTab={selectedTab} tabs={tabs} />
					<div className="w-full h-full flex items-center gap-4">
						<CampusData campus={selectedTab} />
						<span className="bg-stone-900 h-[95%] w-[1px]"></span>
						<CampusMap />
					</div>
				</div>
			</div>
		</div>
	);
}
