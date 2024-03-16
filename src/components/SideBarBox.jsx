import { FaCode, FaCopyright, FaInfo, FaToggleOn } from "react-icons/fa";
import { GiShare } from "react-icons/gi";
import { MdContactPage, MdDragIndicator, MdPrint } from "react-icons/md";
import getCurrentDateTime, { getCurrentPos } from "../services/helpers";
import Button from "./Button";

const className = "opacity-70 text-xl";

const tabs = [
	{
		text: "Disable UI draggablity",
		toggle: true,
		icon: <MdDragIndicator className={className} />,
		toggleIcon: <FaToggleOn className="text-2xl text-blue-900" />,
	},
	{
		text: "Share My Location",
		toggle: false,
		icon: <GiShare className={className} />,
	},
	{
		text: "Print",
		toggle: false,
		icon: <MdPrint className={className} />,
	},
	{
		text: "About",
		toggle: false, // male toilet , female toilet
		icon: <FaInfo className={className} />,
	},
	{
		text: "Contact", // cafe, launch, mother houses
		toggle: false,
		icon: <MdContactPage className={className} />,
	},
	{
		text: "Code Overview",
		toggle: false,
		icon: <FaCode className={className} />,
	},
];

function Tab({ tab, handleClick, children }) {
	return (
		<div className="flex flex-col items-center gap-3 w-full">
			<Button
				className={
					"w-full flex items-center gap-2 transition-all duration-300 hover:border-blue-900 hover:text-stone-300"
				}
				handleClick={handleClick}
			>
				{tab.toggle ? (
					<>
						<span className="flex  items-center gap-2">
							{tab.icon}
							{tab.text}
						</span>
						{tab.toggleIcon}
					</>
				) : (
					<>
						{tab.icon}
						{tab.text}
					</>
				)}
			</Button>
			{children}
		</div>
	);
}

export default function SideBarBox({ setPosition }) {
	return (
		<section className="glassmorphism rounded-r-lg h-[88.4dvh] flex flex-col items-center justify-between">
			<div className="w-full flex flex-col gap-2 p-1">
				<Tab tab={tabs[0]}>
					<span className="w-full h-[1px] bg-blue-600 opacity-70"></span>
				</Tab>
				<Tab
					tab={tabs[1]}
					handleClick={() => {
						setPosition(getCurrentPos());
						console.log("locating user ..." + getCurrentPos());
					}}
				/>
				<Tab tab={tabs[2]}>
					<span className="w-full h-[1px] bg-blue-600 opacity-70"></span>
				</Tab>
				<Tab tab={tabs[3]} />
				<Tab tab={tabs[4]} />
				<Tab tab={tabs[5]}>
					<span className="w-full h-[1px] bg-blue-600 opacity-70"></span>
				</Tab>
			</div>
			<div className=" flex  flex-col items-center gap-2 pb-4">
				<span className="w-full h-[1px] bg-blue-600 opacity-70"></span>
				<span className="text-sm font-thin">since March 2024</span>
				<span className="flex items-center gap-1">
					<FaCopyright className="text-blue-800" />
					<span className="text-blue-900 font-semibold">
						{getCurrentDateTime()}
					</span>
				</span>
			</div>
		</section>
	);
}
