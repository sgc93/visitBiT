import { FaHandHoldingWater, FaRestroom } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { HiOfficeBuilding } from "react-icons/hi";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { IoWifi } from "react-icons/io5";
import { MdFoodBank, MdOutlineBedroomChild } from "react-icons/md";
import Button from "./Button";
import DropDown from "./DropDown";
const className = "opacity-50";

const tabs = [
	{
		text: "Offices",
		dropdown: true,
		icon: <HiOfficeBuilding className={className} />,
		dropdowns: [
			{
				text: "faculties",
				multilevel: true,
				icon: <HiMiniBuildingOffice2 className={className} />,
			},
			{
				text: "registrar",
				multilevel: true,
				icon: <GiArchiveRegister className={className} />,
			},
			{
				text: "finance",
				multilevel: true,
				icon: <HiOfficeBuilding className={className} />,
			},
		],
	},
	{
		text: "Dormitories",
		dropdown: false,
		icon: <MdOutlineBedroomChild className={className} />,
	},
	{
		text: "Wifi Centers",
		dropdown: false,
		icon: <IoWifi className={className} />,
	},
	{
		text: "Where To Test?",
		dropdown: true, // male toilet , female toilet
		icon: <FaRestroom className={className} />,
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
		icon: <MdFoodBank className={className} />,
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
		icon: <FaHandHoldingWater className={className} />,
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
