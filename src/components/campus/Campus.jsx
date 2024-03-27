import { useState } from "react";
import { campusTabs } from "../../services/tabs";
import CampusData from "./CampusData";
import CampusMap from "./CampusMap";
import CampusNav from "./CampusNav";
import CampusWindowTab from "./CampusWindowTab";

export default function Campus() {
	const [tabs, setTabs] = useState(campusTabs);
	const [selectedTab, setSelectedTab] = useState(tabs[0]);

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
		setSelectedTab(tabs[0]);
	}

	function handleClosingTab() {
		let nextTab;
		let nextI;
		const updatedTabs = tabs.filter((tab, index) => {
			if (tab.name === selectedTab.name) {
				nextTab = { ...tabs[index + 1], selected: true };
				nextI = index;
			} else {
				return tab;
			}
		});

		updatedTabs.splice(nextI, 1);
		updatedTabs.splice(nextI, 0, nextTab);

		setTabs(updatedTabs);
		setSelectedTab(nextTab);
	}

	return (
		<div
			id="campuses"
			className="overlay w-full h-full backdrop-blur-[4px] flex flex-col items-center gap-3 p-10"
		>
			<div className="flex flex-col w-full h-full bg-stone-950 rounded-xl">
				<CampusNav
					tabs={tabs}
					setTabs={setTabs}
					setSelectedTab={setSelectedTab}
					handleClose={handleClosingTab}
				/>
				<div className="flex flex-col gap-1 w-[calc(100%-1rem)] h-full m-2 rounded-lg bg-stone-900">
					<CampusWindowTab
						selectedTab={selectedTab}
						tabs={tabs}
						handleNext={handleNext}
						handlePrevious={handlePrevious}
						handleRefreshing={handleRefreshing}
					/>
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
