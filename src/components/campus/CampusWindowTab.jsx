import { useState } from "react";
import { FaToggleOn } from "react-icons/fa";
import {
	IoIosArrowBack,
	IoIosArrowForward,
	IoMdRefresh,
	IoMdSettings,
} from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RiEyeCloseLine } from "react-icons/ri";
import Copy from "../Copy";

export default function CampusWindowTab({ selectedTab }) {
	return (
		<div className="pl-4 py-2 w-full flex items-center justify-between ">
			<div className="w-[70%] flex items-center gap-4">
				<div className="flex items-center gap-2 text-xl text-stone-400">
					<IoIosArrowBack />
					<IoIosArrowForward />
					<IoMdRefresh />
				</div>
				<div className=" w-[80%] px-2 py-1 flex items-center justify-between text-md bg-stone-950 rounded-md lowercase">
					<span>
						<span className="text-stone-400">bahir Dar University </span>
						<span className="text-blue-400">/ </span>
						<span className="text-stone-400">{selectedTab.name}</span>
					</span>
					<Copy
						className={
							"p-1 rounded-full text-stone-400 transition-all duration-300 hover:bg-stone-700 hover:text-stone-300 cursor-pointer"
						}
					/>
				</div>
			</div>
			<Setting />
		</div>
	);
}

const className =
	"text-xl text-stone-400 transition-all duration-300 hover:text-stone-300 cursor-pointer";

function Setting() {
	const [isOpen, setIsOpen] = useState(false);
	const [isHidden, setIsHidden] = useState(false);

	return (
		<div className="w-[20%] relative pr-1 flex items-center justify-end gap-2">
			{isOpen && (
				<div className="absolute top-0 right-8 w-full h-44 p-2 bg-stone-950 text-stone-400 rounded-lg border-2 border-stone-800">
					<div className="w-[calc(100% - 1.5rem)] px-1 flex items-center justify-between bg-stone-800 rounded-md transition-all duration-300 hover:bg-stone-700 cursor-pointer">
						<div className="flex items-center gap-2 text-md ">
							<RiEyeCloseLine />
							<span>enable tab closing</span>
						</div>
						<FaToggleOn />
					</div>
					<div className="flex items-center gap-2">
						<span>enable btn navigation</span>
						<FaToggleOn />
					</div>
					<div className="flex items-center gap-2">
						<span>enable refreshing</span>
						<FaToggleOn />
					</div>
					<div className="flex items-center gap-2">
						<span>hide tab bar</span>
						<FaToggleOn />
					</div>
				</div>
			)}
			{!isOpen ? (
				<IoMdSettings onClick={() => setIsOpen(true)} className={className} />
			) : (
				<IoClose onClick={() => setIsOpen(false)} className={className} />
			)}
		</div>
	);
}
