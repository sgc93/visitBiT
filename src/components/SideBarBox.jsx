import { useReducer, useState } from "react";
import { FaCode, FaCopyright, FaInfo, FaToggleOn } from "react-icons/fa";
import { GiShare } from "react-icons/gi";
import { MdContactPage, MdDragIndicator, MdPrint } from "react-icons/md";
import getCurrentDateTime, { getCurrentPos } from "../services/helpers";
import About from "./About";
import Button from "./Button";
import Contact from "./Contact";
import Print from "./Print";

const className = "opacity-70 text-xl";

const tabs = [
	{
		text: "Disable UI draggablity",
		type: "toggle",
		icon: <MdDragIndicator className={className} />,
		toggleIcon: <FaToggleOn className="text-2xl text-blue-900" />,
	},
	{
		text: "Share My Location",
		type: "loading",
		icon: <GiShare className={className} />,
	},
	{
		text: "Print",
		type: "",
		icon: <MdPrint className={className} />,
	},
	{
		text: "About",
		type: "", // male toilet , female toilet
		icon: <FaInfo className={className} />,
	},
	{
		text: "Contact", // cafe, launch, mother houses
		type: "",
		icon: <MdContactPage className={className} />,
	},
	{
		text: "Code Overview",
		type: "",
		icon: <FaCode className={className} />,
	},
];

function Tab({ tab, handleClick, children, isLoading }) {
	return (
		<div className="flex flex-col items-center gap-3 w-full">
			<Button
				className={
					"w-full flex items-center gap-2 transition-all duration-300 hover:border-blue-900 hover:text-stone-300"
				}
				handleClick={handleClick}
			>
				{tab.type === "toggle" ? (
					<>
						<span className="flex  items-center gap-2">
							{tab.icon}
							{tab.text}
						</span>
						{tab.toggleIcon}
					</>
				) : tab.type === "loading" ? (
					<>
						<span className="flex items-center gap-2">
							{tab.icon}
							{tab.text}
						</span>
						{isLoading && <span className="small-loader"></span>}
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

const initialState = {
	isAbout: false,
	isContact: false,
	isPrint: false,
};

function reducer(state, dispatch) {
	switch (dispatch.type) {
		case "showModal/print":
			return { ...state, isAbout: false, isPrint: true, isContact: false };
		case "showModal/about":
			return { ...state, isAbout: true, isPrint: false, isContact: false };
		case "showModal/contact":
			return { ...state, isAbout: false, isPrint: false, isContact: true };
		default:
			return state;
	}
}

export default function SideBarBox({ setShowShareBox, setDetailedPlace }) {
	const [{ isAbout, isContact, isPrint }, dispatch] = useReducer(
		reducer,
		initialState
	);
	const [isLoading, setIsLoading] = useState(false);

	async function handleSharingLoc() {
		try {
			setIsLoading(true);
			const currentPos = await getCurrentPos();
			const currentLoc = {
				name: "User Location",
				position: currentPos,
			};

			setDetailedPlace(currentLoc);
			setShowShareBox(true);
		} catch (error) {
			throw new Error(error.message);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<section className=" flex items-center gap-1 justify-between">
			<div className="glassmorphism-white rounded-r-lg h-[88.4dvh] flex flex-col items-center justify-between">
				<div className=" w-full flex flex-col gap-2 p-1">
					<Tab tab={tabs[0]}>
						<span className="w-full h-[1px] bg-blue-600 opacity-70"></span>
					</Tab>
					<Tab
						tab={tabs[1]}
						isLoading={isLoading}
						handleClick={() => handleSharingLoc()}
					/>
					<Tab
						tab={tabs[2]}
						handleClick={() => dispatch({ type: "showModal/print" })}
					>
						<span className="w-full h-[1px] bg-blue-600 opacity-70"></span>
					</Tab>
					<Tab
						tab={tabs[3]}
						handleClick={() => dispatch({ type: "showModal/about" })}
					/>
					<Tab
						tab={tabs[4]}
						handleClick={() => dispatch({ type: "showModal/contact" })}
					/>
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
			</div>

			{isAbout && <About />}
			{isContact && <Contact />}
			{isPrint && <Print />}
		</section>
	);
}
