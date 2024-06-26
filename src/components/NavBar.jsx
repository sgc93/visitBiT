import { motion } from "framer-motion";
import { useState } from "react";
import { FaHandHoldingWater, FaHandsWash, FaRestroom } from "react-icons/fa";
import {
	GiArchiveRegister,
	GiClothes,
	GiMoneyStack,
	GiWaterBottle,
} from "react-icons/gi";
import { GrMore, GrUserWorker } from "react-icons/gr";
import { HiLibrary, HiOfficeBuilding } from "react-icons/hi";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { IoIosRestaurant } from "react-icons/io";
import { IoWifi } from "react-icons/io5";
import {
	MdEmojiFoodBeverage,
	MdFoodBank,
	MdMeetingRoom,
	MdOutlineBedroomChild,
	MdSchool,
	MdSports,
} from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";
import DragIndicator from "../components/DragIndicator";
import { cafes, dormitories, launches } from "../services/data";
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
				icon: <GiMoneyStack className={className} />,
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
		text: "Where To rest?",
		dropdown: true, // male toilet , female toilet
		icon: <FaRestroom className={className} />,
		dropdowns: [
			{
				text: "for students",
				multilevel: true,
				icon: <MdSchool />,
			},
			{
				text: "for employees",
				multilevel: true,
				icon: <GrUserWorker />,
			},
		],
	},
	{
		text: "Where To Eat?", // cafe, launch, mother houses
		dropdown: true,
		icon: <MdFoodBank className={className} />,
		dropdowns: [
			{
				text: "cafes",
				multilevel: true,
				icon: <PiBowlFood />,
			},
			{
				text: "launches",
				multilevel: true,
				icon: <MdEmojiFoodBeverage />,
			},
			{
				text: "mother houses",
				multilevel: true,
				icon: <IoIosRestaurant />,
			},
		],
	},
	{
		text: "Where To Drink?",
		dropdown: true,
		icon: <FaHandHoldingWater className={className} />,
		dropdowns: [
			{
				text: "for drink",
				multilevel: true,
				icon: <GiWaterBottle />,
			},
			{
				text: "for hand wash",
				multilevel: true,
				icon: <FaHandsWash />,
			},
			{
				text: "for cloth wash",
				multilevel: true,
				icon: <GiClothes />,
			},
		],
	},
	{
		text: "more",
		dropdown: true,
		icon: <GrMore className={className} />,
		dropdowns: [
			{
				text: "Library",
				multilevel: true,
				icon: <HiLibrary />,
			},
			{
				text: "Classrooms",
				multilevel: true,
				icon: <MdSchool />,
			},
			{
				text: "Sport centers",
				multilevel: true,
				icon: <MdSports />,
			},
			{
				text: "Halls",
				multilevel: true,
				icon: <MdMeetingRoom />,
			},
		],
	},
];

export default function NavBar({ dragConstraint, setMarkedPlace }) {
	const [isDragIndicatorShow, setIsDragIndicatorShown] = useState(false);

	function handleClick(tab) {
		if (tab.text === "Dormitories") {
			setMarkedPlace([dormitories, "mark"]);
		} else if (tab.text === "cafes") {
			setMarkedPlace([cafes, "mark"]);
		} else if (tab.text === "launches") {
			setMarkedPlace([launches, "mark"]);
		}
	}

	return (
		<motion.ul
			className=" flex items-start gap-4 ml-5"
			drag
			dragElastic={0.3}
			dragConstraints={dragConstraint}
			onHoverStart={() => setIsDragIndicatorShown(true)}
			onHoverEnd={() => setIsDragIndicatorShown(false)}
		>
			{tabs.map((tab) =>
				tab.dropdown ? (
					<DropDown key={tab.text} tab={tab} handleClick={handleClick} />
				) : (
					<li key={tab.text}>
						<Button
							className="white-btn flex items-center  font-semibold"
							handleClick={() => handleClick(tab)}
						>
							{tab.icon}
							{tab.text}
						</Button>
					</li>
				)
			)}
			<DragIndicator isShown={isDragIndicatorShow} />
		</motion.ul>
	);
}
