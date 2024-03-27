import { useState } from "react";
import { campusTabs } from "../../services/tabs";

export default function CampusNav() {
	const [tabs, setTabs] = useState(campusTabs);
	const [selectedTab, setSelectedTab] = useState(tabs[0]);

	function handleClick(key) {
		const updatedTabs = tabs.map((tab, index) => {
			if (key === index) {
				return { ...tab, selected: true };
			} else {
				return { ...tab, selected: false };
			}
		});
		setTabs(updatedTabs);
		setSelectedTab(tabs[key]);
	}

	return (
		<div className="w-full h-[8%] flex flex-col gap-2">
			<ul className="flex gap-4">
				{tabs.map((campus, index) => (
					<Tab
						key={index}
						campus={campus}
						index={index}
						handleClick={handleClick}
					/>
				))}
			</ul>
			<span className="text-md text-stone-400 lowercase">
				<span className="text-blue-600">&gt;</span>{" "}
				<span className="text-stone-400">bahir Dar University </span>
				<span className="text-blue-600">/ </span>
				<span className="text-stone-300">{selectedTab.name}</span>
			</span>
		</div>
	);
}

const className =
	"px-2 py-[2px] rounded-lg cursor-pointer text-blue-950 font-semibold transition-all duration-300 hover:bg-blue-600 hover:border-blue-400 hover:text-stone-100";

function Tab({ campus, handleClick, index }) {
	return (
		<li
			className={`${
				campus.selected
					? "bg-blue-800 text-stone-100 border-[1px] border-blue-800"
					: "glassmorphism-white"
			} ${className}`}
			onClick={() => handleClick(index)}
		>
			{campus.name}
		</li>
	);
}
