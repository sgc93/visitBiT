import {
	IoIosArrowBack,
	IoIosArrowForward,
	IoMdRefresh,
	IoMdSettings,
} from "react-icons/io";
import Copy from "../Copy";

export default function CampusWindowTab({ selectedTab }) {
	return (
		<div className="pl-4 py-2 w-full flex items-center gap-3">
			<div className="w-full flex items-center gap-4">
				<div className="flex items-center gap-2 text-xl text-stone-400">
					<IoIosArrowBack />
					<IoIosArrowForward />
					<IoMdRefresh />
				</div>
				<div className=" w-2/3 px-2 py-1 flex items-center justify-between text-md bg-stone-950 rounded-md lowercase">
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

function Setting() {
	return (
		<div className="relative pr-1">
			<IoMdSettings className="text-xl text-stone-400 transition-all duration-300 hover:text-stone-300 cursor-pointer" />
		</div>
	);
}
