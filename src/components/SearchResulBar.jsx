import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

export default function SearchResulBar() {
	const [query, setQuery] = useState("");

	return (
		<section className="flex flex-col items-center gap-2">
			<div className="flex items-center gap-2">
				<MdMenu className="text-3xl" />
				<input
					type="text"
					placeholder="Search here ... "
					className="w-55 rounded-lg border-none outline-none px-3 py-[0.35rem] text-stone-900 font-semibold placeholder:text-stone-500 placeholder:font-semibold focus:backdrop-blur-xl "
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				{query && (
					<MdClose
						className="text-2xl opacity-50 transition-all duration-300 hover:glassmorphism hover:rounded-md hover:opacity-70"
						onClick={() => setQuery("")}
					/>
				)}
			</div>
			{query && (
				<div
					className={`glassmorphism rounded-r-lg w-full px-2 py-2 ${
						query ? "h-[90.4dvh]" : ""
					}`}
				>
					{query && (
						<div className=" w-full flex items-center">results for {query}</div>
					)}
				</div>
			)}
		</section>
	);
}
