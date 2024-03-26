import HomeContent from "../components/home/HomeContent";
import StoryTeller from "./StoryTeller";

export default function HomePage() {
	return (
		<section className="home w-screen h-screen story-scroll ">
			<div className="relative w-full h-full backdrop-blur-[4px] ">
				<HomeContent />
				<StoryTeller />
			</div>
		</section>
	);
}
