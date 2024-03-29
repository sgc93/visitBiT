import { useState } from "react";
import Campus from "../components/campus/Campus";
import HomeContent from "../components/home/HomeContent";
import Weather from "../components/weather/Weather";
import StoryTeller from "./StoryTeller";

const title_style = "w-full text-2xl px-4 pt-2 text-stone-50 font-semibold";

export default function HomePage() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<section className="home overflow-x-hidden flex flex-col w-screen h-[100dvh]">
			<div className=" relative w-full h-screen ">
				<HomeContent isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
			<StoryTeller isOpen={isOpen} setIsOpen={setIsOpen} />
			{!isOpen && (
				<>
					<span
						id="campuses"
						className={`${title_style} glassmorphism-bg backdrop-blur-[8px]`}
					>
						&gt; Other 6 Campuses
					</span>
					<div className="glassmorphism-bg relative w-full h-screen ">
						<Campus />
					</div>
					<span id="temp" className={`${title_style} overlay`}>
						&gt; BiT Weather Data
					</span>

					<div className=" relative w-full h-screen ">
						<Weather />
					</div>
					<span
						id="overview"
						className={`${title_style} glassmorphism-bg backdrop-blur-[8px]`}
					>
						&gt; Other 6 Campuses
					</span>
				</>
			)}
		</section>
	);
}
