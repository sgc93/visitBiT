import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
const className =
	" rounded-md w-2/12 text-2xl transition-all duration-300 hover:bg-blue-900 hover:text-stone-100 hover:opacity-70";

export default function SidebarHeader({
	showSideBar,
	setShowSideBar,
	query,
	setQuery,
}) {
	const [showSearchBar, setShowSearchBar] = useState(true);

	return (
		<section className="flex flex-col gap-2 w-[18dvw]">
			<div className="flex items-center gap-2 w-full">
				{showSideBar ? (
					<MdClose
						className={className}
						onClick={() => setShowSideBar(false)}
					/>
				) : (
					<MdMenu
						className={`opacity-50 ${className}`}
						onClick={() => setShowSideBar(true)}
					/>
				)}
			</div>
		</section>
	);
}
