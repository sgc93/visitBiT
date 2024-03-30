import { useState } from "react";
import Controller from "./MapController";
import OverviewMap from "./OverviewMap";

export default function Overview() {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="glassmorphism-bg w-full backdrop-blur-[8px] flex flex-col gap-8 p-6">
			<Controller isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && <OverviewMap />}
		</div>
	);
}
