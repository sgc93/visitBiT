import { useState } from "react";
import { campusSettingTabs, campusTabs } from "../../services/tabs";
import CampusData from "./CampusData";
import CampusMap from "./CampusMap";
import CampusNav from "./CampusNav";
import CampusWindowTab from "./CampusWindowTab";

export default function Campus() {
	const [tabs, setTabs] = useState(campusTabs);
	const [selectedTab, setSelectedTab] = useState(tabs[0]);
	const [settingTabs, setSettingTabs] = useState(campusSettingTabs);

	function handleNext() {
		let updatedTab;
		let currI;
		const updatedTabs = tabs
			.filter((tab, index) => {
				if (tab.name === selectedTab.name) {
					const nexTab = { ...tabs[index + 1], selected: true };
					updatedTab = nexTab;
					currI = index + 1;
					return tab;
				} else {
					if (index !== currI) {
						return tab;
					}
				}
			})
			.map((tab) => {
				return { ...tab, selected: false };
			});

		updatedTabs.splice(currI, 0, updatedTab);
		setTabs(updatedTabs);
		setSelectedTab(updatedTab);
	}

	function handlePrevious() {
		let updatedTab;
		let currI;
		let updatedTabs = tabs.filter((tab, index) => {
			if (tab.name === selectedTab.name) {
				const nexTab = { ...tabs[index - 1], selected: true };
				updatedTab = nexTab;
				currI = index - 1;
				return tab;
			} else {
				return tab;
			}
		});
		updatedTabs.splice(currI, 1);
		updatedTabs = updatedTabs.map((tab) => {
			return { ...tab, selected: false };
		});

		updatedTabs.splice(currI, 0, updatedTab);
		setTabs(updatedTabs);
		setSelectedTab(updatedTab);
	}

	function handleRefreshing() {
		setTabs(campusTabs);
		setSelectedTab(campusTabs[0]);
	}

	function handleClosingTab() {
		let currTab;
		let currI;
		const updatedTabs = tabs.filter((tab, index) => {
			if (tab.name === selectedTab.name) {
				if (index === tabs.length - 1) {
					currTab = { ...tabs[index - 1], selected: true };
					currI = index - 1;
				} else {
					currTab = { ...tabs[index + 1], selected: true };
					currI = index;
				}
			} else {
				return tab;
			}
		});

		updatedTabs.splice(currI, 1);
		updatedTabs.splice(currI, 0, currTab);

		setTabs(updatedTabs);
		setSelectedTab(currTab);
	}

	return (
		<div className=" w-full h-full backdrop-blur-[8px] flex flex-col items-center gap-3 p-10">
			<div className="flex flex-col w-full h-full bg-stone-950 rounded-xl">
				<CampusNav
					tabs={tabs}
					setTabs={setTabs}
					setSelectedTab={setSelectedTab}
					handleClose={handleClosingTab}
					settingTabs={settingTabs}
				/>
				<div className="flex flex-col gap-1 w-[calc(100%-1rem)] h-full m-2 rounded-lg bg-stone-900">
					<CampusWindowTab
						selectedTab={selectedTab}
						tabs={tabs}
						settingTabs={settingTabs}
						setSettingTabs={setSettingTabs}
						handleNext={handleNext}
						handlePrevious={handlePrevious}
						handleRefreshing={handleRefreshing}
					/>
					<div className="w-full h-[75dvh] flex items-center gap-4">
						<CampusData campus={selectedTab} />
						<span className="bg-stone-700 h-[95%] w-[1px]"></span>
						<CampusMap campus={selectedTab} />
					</div>
				</div>
			</div>
		</div>
	);
}
