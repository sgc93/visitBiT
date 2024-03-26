import { FaTemperatureHigh } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { PiAppWindowBold } from "react-icons/pi";
import { RiRoadMapLine } from "react-icons/ri";

export const homeTabs = [
	{
		text: "historical hints",
		icon: <PiAppWindowBold />,
		href: "hint",
	},
	{
		text: "current temperature",
		icon: <FaTemperatureHigh />,
		href: "temp",
	},
	{
		text: "about BiT",
		icon: <HiOutlineInformationCircle />,
		href: "about",
	},
	{
		text: "BiT contacts",
		icon: <GrContact />,
		href: "contact",
	},
	{
		text: "BiT map overview",
		icon: <RiRoadMapLine />,
		href: "overview",
	},
	{
		text: "other campuses",
		icon: <MdOutlineAddLocationAlt />,
		href: "campuses",
	},
];
