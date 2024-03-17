import { motion } from "framer-motion";
import { useState } from "react";
import { FaHandHoldingWater, FaRestroom } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMyLocation } from "react-icons/md";
import { getCurrentPos } from "../services/helpers";
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

export default function CurrentLoc({ setMarkedPlace, setCenter }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	async function handleLocatingUser() {
		try {
			setIsLoading(true);
			const currentPos = await getCurrentPos();
			setMarkedPlace(currentPos);
			setCenter(currentPos[0].position);
		} catch (error) {
			throw new Error(error.message);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<motion.div
			drag
			dragElastic={0.3}
			className="absolute bottom-[8.4rem] right-5 z-[998] flex flex-col items-end gap-1"
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
				{isLoading ? (
					"..."
				) : (
					<MdOutlineMyLocation
						onClick={() => {
							handleLocatingUser();
						}}
					/>
				)}
			</div>
		</motion.div>
	);
}
