import { useState } from "react";
import Campus from "../components/campus/Campus";
import HomeContent from "../components/home/HomeContent";
import Weather from "../components/weather/Weather";
import StoryTeller from "./StoryTeller";

export default function HomePage() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<section className="home overflow-x-hidden flex flex-col w-screen h-[100dvh]">
			<div className=" relative w-full h-screen ">
				<HomeContent isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
			<span className="mx-2 h-1 bg-stone-300"></span>
			<StoryTeller isOpen={isOpen} setIsOpen={setIsOpen} />
			{!isOpen && (
				<>
					<div className="glassmorphism-bg relative w-full h-screen ">
						<Campus />
					</div>
					<span className="mx-2 h-1 bg-stone-300"></span>

					<div className=" relative w-full h-screen ">
						<Weather />
					</div>
				</>
			)}
		</section>
	);
}
