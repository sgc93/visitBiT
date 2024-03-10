import Button from "./Button";

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
		<ul className=" flex items-center gap-4 ">
			{tabs.map((tab) => (
				<li key={tab.text}>
					<Button title={tab.text} />
				</li>
			))}
		</ul>
	);
}
