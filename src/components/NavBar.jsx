const tabs = [
	{
		text: "Offices",
		type: "multi",
	},
	{
		text: "Dormitories",
		type: "mono",
	},
	{
		text: "Wifi Centers",
		type: "mono",
	},
	{
		text: "Where To Test?",
		type: "multi", // male toilet , female toilet
	},
	{
		text: "Where To Eat?", // cafe, launch, mother houses
		type: "multi",
	},
	{
		text: "Where To Drink?",
		type: "multi",
	},
];

export default function NavBar() {
	return (
		<ul className=" flex items-center gap-4 text-xl text-stone-900">
			{tabs.map((tab) => (
				<li className="glassmorphism" key={tab.text}>
					<button>{tab.text}</button>
				</li>
			))}
		</ul>
	);
}
