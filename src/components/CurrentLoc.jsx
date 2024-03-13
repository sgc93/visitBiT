import { motion } from "framer-motion";
import { useState } from "react";
import { FaHandHoldingWater, FaRestroom } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMyLocation } from "react-icons/md";
import Button from "./Button";

const className = "opacity-60";

const tabs = [
	{
		text: "my location",
		icon: <GrLocation className={className} />,
	},
	{
		text: "near by restrooms",
		icon: <FaRestroom className={className} />,
	},
	{
		text: "near by water resource",
		icon: <FaHandHoldingWater className={className} />,
	},
];
export default function CurrentLoc({ dragConstraint }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div
			drag
			dragElastic={0.3}
			dragConstraints={dragConstraint}
			className="absolute bottom-[8.4rem] right-5 z-[999] flex flex-col items-end gap-1"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			{isOpen && (
				<div className="glassmorphism p-1 rounded-t-lg flex flex-col gap-1">
					{tabs.map((tab) => (
						<Button
							key={tab.text}
							className={
								"flex items-center gap-2 transition-all duration-500 hover:bg-blue-900 hover:text-stone-100"
							}
						>
							{tab.icon}
							{tab.text}
						</Button>
					))}
				</div>
			)}
			<div
				className={`glassmorphism p-1 text-xl text-blue-900 transition-all duration-300 hover:border-blue-900 hover:bg-blue-900 hover:text-stone-200 ${
					isOpen ? "rounded-b-lg" : "rounded-t-lg"
				}`}
			>
				<MdOutlineMyLocation />
			</div>
		</motion.div>
	);
}