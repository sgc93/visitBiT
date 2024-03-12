import { useState } from "react";
import SearchResulBar from "./SearchResulBar";
import SideBarBox from "./SideBarBox";

export default function SideBar() {
	const [query, setQuery] = useState("");
	const [showSideBar, setShowSideBar] = useState(false);
	return (
		<section className="flex flex-col gap-3 absolute top-4 left-4 z-[999]">
			<SearchResulBar
				showSideBar={showSideBar}
				setShowSideBar={setShowSideBar}
				query={query}
				setQuery={setQuery}
			/>
			{showSideBar && <SideBarBox />}
		</section>
	);
}
