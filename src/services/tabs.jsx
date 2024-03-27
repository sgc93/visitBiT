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

export const campusTabs = [
	{
		name: "Wisdom Tower",
		position: [],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		selected: true,
	},
	{
		name: "Peda Campus",
		position: [],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		selected: false,
	},
	{
		name: "Poly Campus",
		position: [],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		selected: false,
	},
	{
		name: "Sebatamit Campus",
		position: [],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		selected: false,
	},
	{
		name: "Selam Campus",
		position: [],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		selected: false,
	},
	{
		name: "Yibab Campus",
		position: [],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		selected: false,
	},
	{
		name: "Zenzelma Campus",
		position: [],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		selected: false,
	},
];
