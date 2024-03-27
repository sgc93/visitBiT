import { useState } from "react";
import Campus from "../components/campus/Campus";
import HomeContent from "../components/home/HomeContent";
import Temperature from "../components/temperature/Temperature";
import StoryTeller from "./StoryTeller";

export default function HomePage() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<section className="overflow-x-hidden ">
			<div className="home relative w-screen h-screen ">
				<HomeContent isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
			<StoryTeller isOpen={isOpen} setIsOpen={setIsOpen} />
			{!isOpen && (
				<>
					<div className="temp relative w-screen h-screen ">
						<Temperature />
					</div>
					<div className="campus relative w-screen h-screen ">
						<Campus />
					</div>
				</>
			)}
		</section>
	);
}
