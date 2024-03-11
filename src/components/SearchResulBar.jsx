import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdClose, MdMenu } from "react-icons/md";
const className =
	"text-2xl transition-all duration-300 hover:glassmorphism hover:rounded-md hover:opacity-70";

export default function SearchResulBar({
	showSideBar,
	setShowSideBar,
	query,
	setQuery,
}) {
	const [showSearchBar, setShowSearchBar] = useState(true);

	return (
		<section className="flex flex-col items-center gap-2 w-[18dvw]">
			<div className="flex items-center gap-2">
				<MdMenu
					className={`opacity-50 ${className}`}
					onClick={() => setShowSideBar((showSideBar) => !showSideBar)}
				/>
				<input
					type="text"
					placeholder="Search here ... "
					className="w-55 rounded-lg border-none outline-none px-3 py-[0.35rem] text-stone-900 font-semibold placeholder:text-stone-500 placeholder:font-semibold focus:backdrop-blur-xl "
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
						setShowSideBar(false);
					}}
				/>
				<MdClose
					className={`${query ? "opacity-50" : "opacity-0"} ${
						query && className
					}`}
					onClick={() => setQuery("")}
				/>
			</div>
			{query && !showSideBar && (
				<div className="w-full h-[91.5dvh] flex items-center gap-1">
					{showSearchBar && (
						<div
							className={`w-full glassmorphism rounded-r-lg px-2 py-2 ${
								query ? "h-[90.4dvh]" : ""
							}`}
						>
							{query && (
								<div className=" w-full flex items-center">
									results for {query}
								</div>
							)}
						</div>
					)}
					<button
						onClick={() => setShowSearchBar((showSearchBar) => !showSearchBar)}
						className={"opacity-70 glassmorphism rounded-r-md p-1 "}
					>
						{showSearchBar ? <IoIosArrowBack /> : <IoIosArrowForward />}
					</button>
				</div>
			)}
		</section>
	);
}
