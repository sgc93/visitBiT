import { useState } from "react";
import OverviewMap from "./OverviewMap";

export default function Overview() {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="glassmorphism-bg w-full h-screen backdrop-blur-[8px] flex gap-8 p-6">
			<Controller isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && <OverviewMap />}
		</div>
	);
}

function Controller({ isOpen, setIsOpen }) {
	function handleToggling() {
		setIsOpen((isOpen) => !isOpen);
	}
	return (
		<div className="flex items-start gap-2">
			<span className="text-stone-400 font-semibold ">controller</span>
			<button
				onClick={() => handleToggling()}
				className="glassmorphism-white px-2 rounded-lg transition-all duration-300 text-blue-950 font-semibold hover:bg-stone-300  hover:translate-y-[-2px]"
			>
				{isOpen ? "hide map" : "show overview map"}
			</button>
		</div>
	);
}
