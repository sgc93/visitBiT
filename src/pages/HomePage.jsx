import { useState } from "react";
import Campus from "../components/campus/Campus";
import HomeContent from "../components/home/HomeContent";
import Weather from "../components/weather/Weather";
import StoryTeller from "./StoryTeller";

export default function HomePage() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<section className="overflow-x-hidden flex flex-col ">
			<div className="home relative w-screen h-screen ">
				<HomeContent isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
			<span className="mx-2 h-1 bg-stone-300"></span>
			<StoryTeller isOpen={isOpen} setIsOpen={setIsOpen} />
			{!isOpen && (
				<>
					<div className="campus relative w-screen h-screen ">
						<Campus />
					</div>
					<span className="mx-2 h-1 bg-stone-300"></span>

					<div className="temp relative w-screen h-screen ">
						<Weather />
					</div>
				</>
			)}
		</section>
	);
}
