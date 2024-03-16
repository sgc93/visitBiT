import React, { useState } from "react";
import { GrDown } from "react-icons/gr";
import { IoCloseCircle } from "react-icons/io5";
import { MdClose, MdSearch } from "react-icons/md";
import Button from "./Button";

export default function QuickSearch() {
	const [query, setQuery] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className=" flex items-start gap-1">
			<div
				className=" bg-blue-700 text-stone-100 font-thin flex items-center gap-3 py-1 rounded-lg px-2 cursor-pointer transition-all duration-300 hover:bg-blue-900"
				onClick={() => setIsOpen(true)}
			>
				<MdSearch className="text-xl" />
				<span>quick search</span>
				<span className=" hidden sm:inline">ctrl k</span>
			</div>
			{isOpen && (
				<div className="absolute left-[-4rem] top-[-1rem] z-[999] w-screen  h-screen glassmorphism ">
					<div
						className={`absolute left-[50%] top-[10%] translate-x-[-45%]  flex items-start gap-4 pb-6`}
					>
						<div className=" w-72 glassmorphism rounded-lg px-2 py-2 flex flex-col items-center">
							<div className="bg-stone-100 rounded-lg flex items-center gap-1 pr-1">
								<input
									type="text"
									placeholder="Search here ... "
									className="  border-none outline-none px-3 py-[0.35rem] text-stone-900 font-semibold placeholder:text-stone-500 placeholder:font-semibold bg-transparent"
									value={query}
									onChange={(e) => {
										setQuery(e.target.value);
									}}
								/>
								<span
									className={`text-blue-900 text-2xl transition-all duration-500 hover:bg-blue-100 rounded-md ${
										query ? "opacity-100" : "opacity-0"
									}`}
								>
									<MdClose onClick={() => setQuery("")} />
								</span>
							</div>
							<div className=" w-full flex flex-col">
								<span>results for {query}</span>
								<div className="flex flex-col pl-3">
									<span>E. Kitaw Cafe</span>
									<span>digital library </span>
									<span>bit stadium</span>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<Button>
									<span>nearest rest room</span>
								</Button>
								<Button>
									<span>nearest wifi center </span>
								</Button>
								<Button>
									<span>nearest rest room</span>
								</Button>
								<Button className={"flex justify-center"}>
									<GrDown />
								</Button>
							</div>
						</div>
						<span className=" text-2xl transition-all duration-300 hover:text-stone-100 hover:bg-blue-900 rounded-full">
							<IoCloseCircle onClick={() => setIsOpen(false)} />
						</span>
					</div>
				</div>
			)}
		</div>
	);
}
