import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "./Button";
import SearchResulBar from "./SearchResulBar";

export default function SideBar() {
	const [showSearchBar, setShowSearchBar] = useState(true);
	const [query, setQuery] = useState("");
	return (
		<section className="flex items-center gap-1 h-[96dvh] w-[30dvw] absolute top-4 left-0 z-[999]">
			<section className="glassmorphism  w-[5dvw] h-full"></section>
			{showSearchBar && <SearchResulBar query={query} setQuery={setQuery} />}
			{query && (
				<Button
					handleClick={() =>
						setShowSearchBar((showSearchBar) => !showSearchBar)
					}
					style={{ opacity: ".7" }}
				>
					{showSearchBar ? <IoIosArrowBack /> : <IoIosArrowForward />}
				</Button>
			)}
		</section>
	);
}
