import { useState } from "react";
import Campus from "../components/campus/Campus";
import HomeContent from "../components/home/HomeContent";
import Overview from "../components/overview/Overview";
import Weather from "../components/weather/Weather";
import IdSimulator from "./IdSimulator";
import StoryTeller from "./StoryTeller";

const title_style = "w-full text-2xl px-4 pt-2 text-stone-50 font-semibold";

export default function HomePage() {
	const [isStoryBoxOpened, setIsStoryBoxOpen] = useState(true);
	const [isIdBoxOpened, setIsIdBoxOpened] = useState(false);
	const isBoxOpened = isStoryBoxOpened || isIdBoxOpened;
	console.log(isBoxOpened);

	return (
		<section className="home overflow-x-hidden flex flex-col w-screen h-[100dvh]">
			<div className=" relative w-full h-screen ">
				<HomeContent
					isBoxOpened={isBoxOpened}
					setIsHintBoxOpened={setIsStoryBoxOpen}
					setIsIdBoxOpened={setIsIdBoxOpened}
				/>
			</div>
			<StoryTeller isOpen={isStoryBoxOpened} setIsOpen={setIsStoryBoxOpen} />
			<IdSimulator
				isIdBoxOpened={isIdBoxOpened}
				setIsIdBoxOpened={setIsIdBoxOpened}
			/>
			{!isBoxOpened && (
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
						&gt; BiT&apos;s Map Overview
					</span>
					<div className=" relative w-full h-screen ">
						<Overview />
					</div>
				</>
			)}
		</section>
	);
}
