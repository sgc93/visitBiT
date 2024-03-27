import { MdClose } from "react-icons/md";

export default function CampusNav({
	tabs,
	setTabs,
	selectedTab,
	setSelectedTab,
}) {
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
		<div className="w-full h-fit flex flex-col gap-2 py-2">
			<ul className="flex gap-4 px-2">
				{tabs.map((campus, index) => (
					<Tab
						key={index}
						campus={campus}
						index={index}
						handleClick={handleClick}
					/>
				))}
			</ul>
			<span className="w-full h-[2px] bg-stone-800"></span>
		</div>
	);
}

const className =
	" w-[11rem] px-2 py-[2px] flex items-center justify-between rounded-lg cursor-pointer text-center font-semibold transition-all duration-300 ";

function Tab({ campus, handleClick, index }) {
	return (
		<li
			className={`${
				campus.selected
					? "bg-stone-400 text-blue-800 "
					: "bg-stone-800 text-stone-400 hover:bg-stone-600  hover:text-stone-300 "
			} ${className}`}
			onClick={() => handleClick(index)}
		>
			<span>{campus.name}</span>
			{campus.selected && (
				<MdClose className="text-lg rounded-full transition-all duration-300 hover:bg-blue-800 hover:text-stone-100" />
			)}
		</li>
	);
}
