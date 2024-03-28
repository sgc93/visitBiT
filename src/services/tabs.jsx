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
		content: `Bahir Dar University was established by merging two former higher education institutions; namely the Bahir Dar Polytechnic and Bahir Dar Teachers’ College. The Bahir Dar Polytechnic Institute, which has transformed itself into Technology and Textile institutes, was established in 1963 under the technical cooperation between the Government of USSR and the Imperial Government of Ethiopia. The institute was a premier institute in producing technicians for the nation. The Bahir Dar Teachers’ College, by then known as the Academy of Pedagogy, was established in 1972 by the tripartite agreement of the Imperial Government of Ethiopia, UNESCO and UNDP and started actual work in the following year under the auspices of the Ministry of Education and Fine Arts. Its general objective was to train multipurpose primary education professionals capable of adopting primary education to rural life and rural development. Its specific objectives were to train primary school teacher trainers, supervisors, educational leaders, adult education organizers and community development agents.
			The two institutions of higher learning were integrated to form the Bahir Dar University following the Council of Ministers regulation no. 60/1999 GC. The University was inaugurated on May 6, 2000. Bahir Dar University is now among the largest universities in the Federal Democratic Republic of Ethiopia, with more than 52,830 students in its 219 academic programs; 69 undergraduate, 118 masters, and 32 PhD programs; Bahir Dar University has Five colleges, four institutes, two faculties and one school. The academic units of the University include College of Science, College of Agriculture and Environmental Sciences, College of Medical and Health Sciences, College of Business and Economics, College of Education and Behavioral Sciences, Bahir Dar Institute of Technology, Ethiopia Institute of Textile and Fashion Technology, Institute of Land Administration, Institute of Disaster Risk Management and Food Security Studies, Faculty of Humanities, Faculty of Social Sciences, School of Law, Sport academy and Maritime academy. The research centers of the university are Blue Nile water Institute, Biotechnology research Institute, Pedagogy and Education research Institute, Energy research Institute, Textile, garment and fashion design, Abay culture and development research center, Geospatial data and technology center, Institute of Economics research and Demographic surveillance`,
		link: "https://www.bdu.edu.et/",
		contacts: {
			post: "P.O. Box 79",
			email: "bduinfo@bdu.edu.et",
			fax: "+251 583 20 60 94 ",
			phone: "+251 583 20 9653 / +251 583 20 6059 / +251 582 20 5934",
		},
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
