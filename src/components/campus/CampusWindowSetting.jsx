import { FaToggleOff, FaToggleOn } from "react-icons/fa";

export default function CampusWindowSetting({ tabs, setTabs }) {
	function handleToggle(index) {
		const updatedTabs = tabs.map((tab, key) => {
			if (key === index) {
				return { ...tab, isOn: !tab.isOn };
			} else {
				return tab;
			}
		});

		setTabs(updatedTabs);
	}

	return (
		<div className="absolute top-0 right-8 w-full h-fit p-2 bg-stone-950 text-stone-400 rounded-lg border-2 border-stone-800 flex flex-col gap-1">
			{tabs.map((tab, key) => (
				<Tab key={key} tab={tab} handleToggle={handleToggle} index={key} />
			))}
		</div>
	);
}

function Tab({ tab, index, handleToggle }) {
	return (
		<div
			onClick={() => handleToggle(index)}
			className="w-[calc(100% - 1.5rem)] px-1 flex items-center justify-between bg-stone-800 rounded-md transition-all duration-300 hover:bg-stone-700 hover:text-stone-300 cursor-pointer"
		>
			<div className="flex items-center gap-2 text-md ">
				{tab.icon}
				<span>{tab.text}</span>
			</div>
			{tab.isOn ? <FaToggleOn className="text-stone-300" /> : <FaToggleOff />}
		</div>
	);
}
