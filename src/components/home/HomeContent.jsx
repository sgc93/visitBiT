import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { homeTabs } from "../../services/tabs";
import Button from "../Button";
import Animated from "./Animated";

export default function HomeContent({ isOpen, setIsOpen }) {
	return (
		<div className="home-relay backdrop-blur-[6px] w-screen h-screen flex items-center p-20">
			<NavContent />
			<Animated isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
}

function NavContent() {
	return (
		<div className="w-1/2 h-full flex flex-col justify-between">
			<ul className="list ml-5 text-stone-300 flex flex-col gap-2">
				{homeTabs.map((tab, key) => (
					<Tab tab={tab} key={key} />
				))}
			</ul>
			<Hero />
		</div>
	);
}

function Tab({ tab }) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<li
			className="glassmorphism w-fit h-8 flex items-center gap-2 rounded-lg px-2 py-[2px] transition-all duration-300 hover:text-blue-950 hover:bg-stone-300 hover:border-stone-300"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			{tab.icon}
			{isOpen && <a href={`#${tab.href}`}>{tab.text}</a>}
		</li>
	);
}

function Hero() {
	const navigateTo = useNavigate();
	return (
		<div className="m-4 flex flex-col  gap-5">
			<div className="flex flex-col gap-4">
				<span className="text-6xl text-stone-50 font-thin">
					Decide to join BiT
				</span>
				<span className="text-lg text-stone-300 font-semibold flex gap-12 capitalize tracking-widest">
					<span>technology</span>
					<span>nurture</span>
					<span>enlightenment</span>
				</span>
				<Button
					className={
						"w-fit text-stone-100 capitalize transition-all duration-300 hover:bg-stone-300 hover:border-stone-300 hover:text-stone-900"
					}
					handleClick={() => navigateTo("/map")}
				>
					start exploring
				</Button>
			</div>
		</div>
	);
}
