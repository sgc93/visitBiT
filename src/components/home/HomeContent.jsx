import { useState } from "react";
import { homeTabs } from "../../services/tabs";
import Animated from "./Animated";

export default function HomeContent() {
	return (
		<div className="w-full h-full flex items-center px-20">
			<NavContent />
			<Animated />
		</div>
	);
}

function NavContent() {
	return (
		<div className="w-1/2 h-full flex flex-col justify-center gap-32">
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
			className="glassmorphism w-fit h-8 flex items-center gap-2 rounded-lg px-2 py-[2px] transition-all duration-300 hover:bg-blue-950 hover:border-blue-950"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			{tab.icon}
			{isOpen && <a href={`#${tab.href}`}>{tab.text}</a>}
		</li>
	);
}

function Hero() {
	return (
		<div className="m-4 flex flex-col  gap-5">
			<div className="flex flex-col gap-4">
				<span className="text-6xl text-stone-50 font-thin">
					Decide to join BiT
				</span>
				<span className="text-lg text-stone-300 flex gap-4 capitalize tracking-widest">
					<span className="bg-blue-600 px-3 py-1 rounded-lg">technology</span>
					<span className="bg-green-600 px-3 py-1 rounded-lg">nurture</span>
					<span className="bg-yellow-600 px-3 py-1 rounded-lg">
						enlightenment
					</span>
				</span>
			</div>
		</div>
	);
}
