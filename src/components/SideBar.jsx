import { useState } from "react";
import SearchResulBar from "./SearchResulBar";

export default function SideBar() {
	const [query, setQuery] = useState("");

	return (
		<section className="flex gap-1  absolute top-4 left-4 z-[999]">
			{/* <section className="glassmorphism  w-[5dvw] h-[96dvh]"></section> */}
			<SearchResulBar query={query} setQuery={setQuery} />
		</section>
	);
}
