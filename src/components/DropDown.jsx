import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DropDown({ tab }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex flex-col gap-1">
			<div
				className={`glassmorphism  px-[0.5rem] py-[0.1rem] lowercase font-sans text-lg flex items-center ${
					isOpen ? "rounded-t-lg" : "rounded-lg"
				}`}
				onClick={() => setIsOpen((isOpen) => !isOpen)}
			>
				{tab.icon}
				{tab.text}
				<RiArrowDropDownLine
					className={`opacity-50 text-xl transition-all duration-300 ${
						isOpen ? "rotate-180 opacity-90" : "rotate-0 opacity-50"
					}`}
				/>
			</div>
			{isOpen && (
				<div className="glassmorphism  rounded-b-lg flex flex-col gap-2">
					{tab &&
						tab.dropdowns.map((dropdown) => (
							<div key={dropdown.text} className="flex flex-col gap-1">
								<button className="px-[0.5rem] py-[0.1rem] flex items-center gap-1 hover:bg-blue-300">
									{dropdown.icon}
									{dropdown.text}
								</button>
								<span className="w-full h-[1px] bg-blue-400"></span>
							</div>
						))}
				</div>
			)}
		</div>
	);
}
