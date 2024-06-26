import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function DropDown({ tab, handleClick }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div
			className="flex flex-col gap-1 "
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<div
				className={`border-[1px] white-btn px-[0.5rem] py-[0.1rem] lowercase font-semibold text-lg flex items-center gap-1 ${
					isOpen
						? "rounded-t-lg transition-all duration-300 bg-blue-950 text-stone-50"
						: "rounded-lg"
				}`}
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
				<div className="glassmorphism-white p-1 rounded-b-lg flex flex-col gap-2">
					{tab &&
						tab.dropdowns.map((dropdown) => (
							<div key={dropdown.text} className="flex flex-col gap-1">
								<button
									className="white-btn flex items-center gap-1 rounded-md border-b-[1px] px-1 py-[2px]"
									onClick={() => handleClick(dropdown)}
								>
									{dropdown.icon}
									{dropdown.text}
								</button>
								{/* <span className="w-full h-[1px] bg-blue-400"></span> */}
							</div>
						))}
				</div>
			)}
		</div>
	);
}
