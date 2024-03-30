import { FaIdCard, FaRegWindowClose, FaTemperatureHigh } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { IoMdRefresh } from "react-icons/io";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { PiAppWindowBold, PiBracketsAngleBold } from "react-icons/pi";
import { RiEyeCloseFill, RiRoadMapLine } from "react-icons/ri";

export const layerTabs = [
	{
		text: "default",
		code: "m",
	},
	{
		text: "hybrid",
		code: "s,h",
	},
	{
		text: "satellite",
		code: "s",
	},
	{
		text: "terrain",
		code: "p",
	},
];

export const homeTabs = [
	{
		text: "BiT hints and abouts",
		icon: <PiAppWindowBold />,
		href: "hint",
	},
	{
		text: "Id Card Simulator",
		icon: <FaIdCard />,
		href: "idCard",
	},
	{
		text: "other campuses",
		icon: <MdOutlineAddLocationAlt />,
		href: "campuses",
	},
	{
		text: "current temperature",
		icon: <FaTemperatureHigh />,
		href: "temp",
	},
	{
		text: "BiT map overview",
		icon: <RiRoadMapLine />,
		href: "overview",
	},
	{
		text: "BiT contacts",
		icon: <GrContact />,
		href: "contact",
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
		contacts: {
			post: "P.O. Box 79",
			email: "bduinfo@bdu.edu.et",
			fax: "+251 583 20 60 94 ",
			phone: "+251 583 20 9653 / +251 583 20 6059 / +251 582 20 5934",
		},
		link: "https://www.bdu.edu.et/cobe/",
		selected: false,
	},
	{
		name: "Poly Campus",
		position: [11.597621756651337, 37.39551835806901],
		content: `Bahir Dar University is one of the largest and well-known public universities in Ethiopia. The university was established on May 6, 2000 by merging two public higher institutions namely Bahir Dar Polytechnic and Bahir Dar Teachers’ College. Currently, the university has five institutes, five colleges, two academies, six faculties and two schools. Bahir Dar Institute of Technology, which is one of the institutes in Bahir Dar University, is among the oldest and well-known technology institutes in Ethiopia. The institute was founded by a bilateral agreement between the Ethiopian and former Soviet Union governments in 1963. It was planned to admit top ranked students who successfully passed the eighth-grade national examination. Following its establishment as polytechnic institute, it admitted 232 students for four-year programs. Since then, the institute had undergone several program changes within the area of technology (Agro-mechanics, Industrial Chemistry, Metal, Textile, Electrical and Wood Technologies). In 2011, the institute was upgraded to Bahir Dar Institute of Technology (BiT).  

The institute has been contributing to the labor market with graduates who are now running most of the businesses in the industrial, educational, agricultural and other economic development sectors in Ethiopia and working abroad. Since its establishment, it became a pioneer institute of technology offering higher education in the field of engineering and technology. The institute aspires to become a leading institute in engineering and technology programs that prepare students to become entrepreneurs, and innovators through a distinct education. Currently, 4675 students are enrolled in 18 undergraduate programs and about 1869 postgraduate students in 38 Msc programs and 138 students in 26 PhD programs. It has well equipped 44 laboratories supporting research and practical teaching and to deliver different technical support to partners and our main stakeholders in the region. 

The institute is working towards solving practical problems of community and teaching practically oriented courses through an ample experience in teaching, research and community service. Furthermore, it is also envisioned to have a national impact through the dissemination of technologies focused on the need of the local community and industrial sector. The institute has many international and national partners which are working towards facilitating teaching, research and community service activities. The teaching, research and community service activities are supported by high qualified instructors, technical assistants, and administrative staff.`,
		contacts: {
			post: "P.o.Box: 26",
			email: "polybit1955@gmail.com",
			fax: "(+251) 58-226-4471 ",
			phone: "(+251)58-222 1953",
			facebook: "https://www.facebook.com/bitpoly",
			telegram: "https://t.me/bitpoly",
			hours: "8 AM - 5PM Eastern Time (Mon - Fri)",
		},
		link: "https://bit.bdu.edu.et/",
		selected: false,
	},
	{
		name: "Sebatamit Campus",
		position: [11.52690623269073, 37.401044368743904],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		contacts: {
			post: "P.O. Box 79",
			email: "bduinfo@bdu.edu.et",
			fax: "+251 583 20 60 94 ",
			phone: "+251 583 20 9653 / +251 583 20 6059 / +251 582 20 5934",
		},
		link: "https://www.bdu.edu.et/cmhs/",
		selected: false,
	},
	{
		name: "Selam Campus",
		position: [11.5829545898627, 37.39617347717286],
		content:
			'The Bahir Dar Polytechnic Institute, which has transformed itself into Technology and Textile institutes, was established in 1963 under the technical cooperation between the Government of USSR and the Imperial Government of Ethiopia. The institute was a premier institute in producing technicians for the nation. The institute started its first training program in Textile Technology in collaboration with the Russian Government at advanced diploma level under Bahir Dar Polytechnic Institute, which eventually grew to become Bahir Dar University in 2000. For about 33 years the training program was in the level of Advance Diploma in the field of Textile Technology. Shortly afterwards, the Advanced Diploma program was upgraded to B.Sc. program in Textile Engineering in 1997. Considering the importance of the textile, garment, and fashion sector to the economic well-being and industrialization of Ethiopia, the Government of Ethiopia has upgraded the Department of Textile Engineering to Institute level with the name "Institute of Textile and Clothing Technology" from July, 2009. Later in 2010, the Engineering Capacity Building Program (ECBP) started operating in Ethiopia with the collaboration of the German government and the institute was renamed as "Institute of Technology for Textile, Garment, and Fashion Design (IoTEX)" and functioning separately under Bahir Dar University. Shortly afterwards, as of March 2014, it was renamed as "Ethiopian Institute of Textile and Fashion Technology (EiTEX).',
		contacts: {
			post: "P.O. Box: 1037",
			email: "tamrat_tsfy@yahoo.com",
			fax: "+251 582 26 62 46",
			phone: "+251 582 26 62 46",
		},
		link: "https://eitex.bdu.edu.et/",
		selected: false,
	},
	{
		name: "Yibab Campus",
		position: [11.57109058919408, 37.32939720153809],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		contacts: {
			post: "P.O. Box 79",
			email: "bduinfo@bdu.edu.et",
			fax: "+251 583 20 60 94 ",
			phone: "+251 583 20 9653 / +251 583 20 6059 / +251 582 20 5934",
		},
		link: "https://www.bdu.edu.et/ila/",
		selected: false,
	},
	{
		name: "Zenzelma Campus",
		position: [11.62104699753215, 37.45878159999848],
		content:
			"abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z abc def ghi jkl mno qrs tuv wxy z",
		contacts: {
			post: "P.O. Box 79",
			email: "bduinfo@bdu.edu.et",
			fax: "+251 583 20 60 94 ",
			phone: "+251 583 20 9653 / +251 583 20 6059 / +251 582 20 5934",
		},
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
