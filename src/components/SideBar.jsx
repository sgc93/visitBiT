import { IoIosArrowBack } from "react-icons/io";
import SearchResulBar from "./SearchResulBar";

export default function SideBar() {
	return (
		<section className="flex items-center gap-1 h-[96dvh] w-[30dvw] absolute top-4 left-0 z-[999]">
			<section className="glassmorphism  w-[5dvw] h-full"></section>
			<SearchResulBar />
			<IoIosArrowBack className="glassmorphism text-[1.3rem] text-stone-600 rounded-sm" />
		</section>
	);
}
