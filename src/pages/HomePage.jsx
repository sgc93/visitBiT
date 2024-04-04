import { useState } from "react";
import { FaCopyright, FaGithub, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
						Other Campuses
					</span>
					<div className="glassmorphism-bg relative w-full h-screen ">
						<Campus />
					</div>
					<span id="temp" className={`${title_style} overlay`}>
						BiT Weather Data
					</span>

					<div className=" relative w-full h-screen ">
						<Weather />
					</div>
					<span
						id="overview"
						className={`${title_style} glassmorphism-bg backdrop-blur-[8px]`}
					>
						BiT&apos;s Map Overview
					</span>
					<div className=" relative w-full h-screen ">
						<Overview />
					</div>
					<Footer />
				</>
			)}
		</section>
	);
}

const link_style =
	"glassmorphism-bg p-1 rounded-lg transition-all duration-300 hover:bg-slate-50 hover:text-stone-700";

function Footer() {
	const [isHovered, setIsHovered] = useState(true);

	return (
		<div className="overlay w-full p-10 flex flex-col items-center gap-9">
			<div className="flex justify-evenly">
				<div className="w-2/5 flex flex-col gap-1">
					<span className="text-lg font-bold text-slate-200">visit_BiT</span>
					<span className="text-slate-300 text-lg">
						Visit_BiT is developed by a software engineering student of Bahir
						Dar Institute of Technology. it&apos;s basic purpose is to make
						someone new feel home when experiencing BiT for the first time.
					</span>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-lg font-bold text-slate-200">more @</span>
					<div className="flex items-center gap-3 text-xl text-slate-50">
						<a href="https://github.com/sgc93" className={link_style}>
							<FaGithub />
						</a>
						<a href="https://tg" className={link_style}>
							<FaTelegram />
						</a>
						<a
							href="mailto:smachewgedefaw@gmail.com"
							className={`flex items-center gap-2 relative`}
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							<span
								className={`${
									isHovered ? "opacity-0" : "opacity-100"
								} ${link_style}`}
							>
								<MdEmail />
							</span>
							{isHovered && (
								<span className="absolute left-0 glassmorphism-bg px-1 rounded-lg">
									smachewgedefaw@gmail.com
								</span>
							)}
						</a>
					</div>
				</div>
			</div>
			<a
				href="https://github.com/sgc93/visitBiT"
				className=" text-slate-50 flex items-center gap-1 "
			>
				<span className="text-lg font-thin">sgc </span>
				<FaCopyright />
				<span> {new Date().getFullYear()}</span>
			</a>
		</div>
	);
}
