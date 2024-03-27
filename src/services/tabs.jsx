import { FaRegWindowClose, FaTemperatureHigh } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoMdRefresh } from "react-icons/io";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { PiAppWindowBold, PiBracketsAngleBold } from "react-icons/pi";
import { RiEyeCloseFill, RiRoadMapLine } from "react-icons/ri";

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
		position: [11.587023661576392, 37.39566922187806],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		link: "https://www.bdu.edu.et/",
		selected: true,
	},
	{
		name: "Peda Campus",
		position: [11.576764, 37.395184],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		link: "https://www.bdu.edu.et/cobe/",
		selected: false,
	},
	{
		name: "Poly Campus",
		position: [11.597621756651337, 37.39551835806901],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		link: "https://bit.bdu.edu.et/",
		selected: false,
	},
	{
		name: "Sebatamit Campus",
		position: [11.52690623269073, 37.401044368743904],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		link: "https://www.bdu.edu.et/cmhs/",
		selected: false,
	},
	{
		name: "Selam Campus",
		position: [11.5829545898627, 37.39617347717286],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		link: "https://eitex.bdu.edu.et/",
		selected: false,
	},
	{
		name: "Yibab Campus",
		position: [11.57109058919408, 37.32939720153809],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		link: "https://www.bdu.edu.et/ila/",
		selected: false,
	},
	{
		name: "Zenzelma Campus",
		position: [11.62104699753215, 37.45878159999848],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		link: "https://www.bdu.edu.et/caes/",
		selected: false,
	},
];

export const campusSettingTabs = [
	{
		icon: <FaRegWindowClose />,
		text: "enable tab closing",
		isOn: true,
	},
	{
		icon: <PiBracketsAngleBold />,
		text: "enable button navigation",
		isOn: true,
	},
	{
		icon: <IoMdRefresh />,
		text: "enable button refreshing",
		isOn: true,
	},
	{
		icon: <RiEyeCloseFill />,
		text: "hide this tab",
		isOn: false,
	},
];
