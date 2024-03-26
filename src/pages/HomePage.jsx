import { useState } from "react";
import HomeContent from "../components/home/HomeContent";
import StoryTeller from "./StoryTeller";

export default function HomePage() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<section className="home w-screen h-screen story-scroll ">
			<div className="relative w-full h-full backdrop-blur-[4px] ">
				<HomeContent isOpen={isOpen} setIsOpen={setIsOpen} />
				<StoryTeller isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</section>
	);
}
