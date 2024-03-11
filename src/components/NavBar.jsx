import { HiOfficeBuilding } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "./Button";
import DropDown from "./DropDown";

const tabs = [
	{
		text: "Offices",
		dropdown: true,
		icon: <HiOfficeBuilding />,
		dropdownIcon: <RiArrowDropDownLine />,
		dropdowns: [
			{
				text: "faculties",
				multilevel: true,
				icon: <HiOfficeBuilding />,
			},
			{
				text: "registrar",
				multilevel: true,
				icon: <HiOfficeBuilding />,
			},
			{
				text: "finance",
				multilevel: true,
				icon: <HiOfficeBuilding />,
			},
		],
	},
	{
		text: "Dormitories",
		dropdown: false,
	},
	{
		text: "Wifi Centers",
		dropdown: false,
	},
	{
		text: "Where To Test?",
		dropdown: true, // male toilet , female toilet
		dropdownIcon: <RiArrowDropDownLine />,
		dropdowns: [
			{
				text: "faculties",
				multilevel: true,
				icon: <HiOfficeBuilding />,
			},
			{
				text: "registrar",
				multilevel: true,
				icon: <HiOfficeBuilding />,
			},
			{
				text: "finance",
				multilevel: true,
				icon: <HiOfficeBuilding />,
			},
		],
	},
	{
		text: "Where To Eat?", // cafe, launch, mother houses
		dropdown: true,
		dropdownIcon: <RiArrowDropDownLine />,
		dropdowns: [
			{
				text: "faculties",
				multilevel: true,
				icon: <HiOfficeBuilding />,
			},
			{
				text: "registrar",
				multilevel: true,
				icon: <HiOfficeBuilding />,
			},
			{
				text: "finance",
				multilevel: true,
				icon: <HiOfficeBuilding />,
			},
		],
	},
	{
		text: "Where To Drink?",
		dropdown: true,
		dropdownIcon: <RiArrowDropDownLine />,
		dropdowns: [
			{
				text: "faculties",
				multilevel: true,
				icon: <HiOfficeBuilding />,
			},
			{
				text: "registrar",
				multilevel: true,
				icon: <HiOfficeBuilding />,
			},
			{
				text: "finance",
				multilevel: true,
				icon: <HiOfficeBuilding />,
			},
		],
	},
];

export default function NavBar() {
	function handleClick(tab) {
		console.log("clicked: " + tab);
	}

	return (
		<ul className=" flex items-start gap-4 ">
			{tabs.map((tab) =>
				tab.dropdown ? (
					<DropDown key={tab.text} tab={tab} />
				) : (
					<li key={tab.text}>
						<Button
							className="flex items-center gap-2"
							handleClick={() => handleClick(tab)}
						>
							{tab.icon}
							{tab.text}
							{tab.dropdown && tab.dropdownIcon}
						</Button>
					</li>
				)
			)}
		</ul>
	);
}
