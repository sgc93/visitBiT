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
		<div className="w-full h-[5%] flex flex-col gap-2">
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
