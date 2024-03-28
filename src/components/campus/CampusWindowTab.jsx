import { useState } from "react";
import {
	IoIosArrowBack,
	IoIosArrowForward,
	IoMdRefresh,
	IoMdSettings,
} from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { campusSettingTabs } from "../../services/tabs";
import Copy from "../Copy";
import CampusWindowSetting from "./CampusWindowSetting";

const btnClass =
	"p-[2px] text-center rounded-full transition-all duration-300 ";

export default function CampusWindowTab({
	selectedTab,
	tabs,
	handleNext,
	handlePrevious,
	handleRefreshing,
	settingTabs,
	setSettingTabs,
}) {
	const isLastTab = tabs[tabs.length - 1].name === selectedTab.name;
	const isFirstTab = tabs[0].name === selectedTab.name;

	function next() {
		if (settingTabs[1].isOn && !isLastTab) {
			handleNext();
		}
	}

	function previous() {
		if (settingTabs[1].isOn && !isFirstTab) {
			handlePrevious();
		}
	}

	function refreshing() {
		if (settingTabs[2].isOn) {
			handleRefreshing();
			setSettingTabs(campusSettingTabs);
		}
	}

	return (
		<div className="pl-4 py-2 w-full flex items-center justify-between ">
			<div className="w-[70%] flex items-center gap-4">
				<div className="flex items-center gap-2 text-xl text-stone-400">
					<IoIosArrowBack
						className={`${btnClass} ${
							isFirstTab || !settingTabs[1].isOn
								? "text-stone-500"
								: "hover:bg-stone-700 hover:text-stone-200"
						}`}
						onClick={() => previous()}
					/>
					<IoIosArrowForward
						className={`${btnClass} ${
							isLastTab || !settingTabs[1].isOn
								? "text-stone-500"
								: "hover:bg-stone-700 hover:text-stone-200"
						}`}
						onClick={() => next()}
					/>
					<IoMdRefresh
						className={`${btnClass} ${
							!settingTabs[2].isOn
								? "text-stone-500"
								: "hover:bg-stone-700 hover:text-stone-200"
						}`}
						onClick={() => refreshing()}
					/>
				</div>
				<div className=" w-[80%] px-2 py-1 flex items-center justify-between text-md bg-stone-950 rounded-md lowercase">
					<a
						href={selectedTab.link}
						target="_blank"
						className="text-stone-400 transition-all duration-300 hover:text-stone-300"
					>
						{selectedTab.link}
					</a>
					<Copy
						className={
							"p-1 rounded-full text-stone-400 transition-all duration-300 hover:bg-stone-700 hover:text-stone-300 cursor-pointer"
						}
						value={selectedTab.link}
					/>
				</div>
			</div>
			<Setting tabs={settingTabs} setTabs={setSettingTabs} />
		</div>
	);
}

const className =
	"text-xl text-stone-400 transition-all duration-300 hover:text-stone-300 cursor-pointer";

function Setting({ tabs, setTabs }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="w-[20%] relative pr-1 flex items-center justify-end gap-2">
			{isOpen && <CampusWindowSetting tabs={tabs} setTabs={setTabs} />}
			{!isOpen ? (
				<IoMdSettings onClick={() => setIsOpen(true)} className={className} />
			) : (
				<IoClose onClick={() => setIsOpen(false)} className={className} />
			)}
		</div>
	);
}
