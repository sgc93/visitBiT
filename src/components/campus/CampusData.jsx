import { useEffect, useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import Typed from "typed.js";
import Copy from "../Copy";

export default function CampusData({ campus }) {
	return (
		<div className="w-1/2 h-full rounded-lg bg-stone-800 flex flex-col">
			<div className="p-2 min-h-12 text-sm flex items-center justify-start gap-1">
				<span className="text-stone-400">visit_BiT:</span>
				<span className="text-stone-300">Bahir Dar university /</span>
				<span className="text-stone-300 font-semibold text-lg bg-stone-700 px-2 rounded-lg">
					{campus.name}
				</span>
				<span className="text-stone-400 ">
					<AiOutlineEnter />
				</span>
			</div>
			<span className="w-full h-[1px] bg-stone-700"></span>
			<div className="m-4 p-1 max-h-48 overflow-x-auto overflow-y-scroll story-scroll">
				<span className="text-stone-300 ">
					{/* {campus.content} */}
					<DataTyper campus={campus} speed={10} />
				</span>
			</div>
			<span className="mx-5 h-[1px] bg-stone-700"></span>
			<Contact campus={campus} />
			<span className="mx-2 mt-2 h-[1px] bg-stone-700"></span>
		</div>
	);
}

function Contact({ campus }) {
	return (
		<div className="p-2 flex flex-col gap-2">
			<span className="text-stone-400 underline underline-offset-2">
				contacts:
			</span>
			<div>
				<ul>
					{campus.contacts &&
						Object.keys(campus.contacts).map((key) => (
							<ContactTab key={key} index={key} campus={campus} />
						))}
				</ul>
			</div>
		</div>
	);
}

function ContactTab({ index, campus }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<li
			key={index}
			className=" w-full px-2 py-[2px] flex items-center justify-between rounded-lg transition-all duration-300 hover:bg-stone-700"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="flex items-center gap-2">
				<span className="text-stone-400">{index}: </span>
				<span className="text-stone-300">{campus.contacts[index]}</span>
			</div>
			{isHovered && (
				<Copy
					value={campus.contacts[index]}
					className={
						"p-1 rounded-full text-stone-400 transition-all duration-300 hover:text-blue-800 hover:bg-stone-300"
					}
				/>
			)}
		</li>
	);
}

function DataTyper({ campus, speed }) {
	useEffect(() => {
		const typed = new Typed("#typed-content", {
			strings: [campus.content],
			typeSpeed: speed ? speed : 10,
			loop: false,
		});

		return () => typed.destroy();
	}, [campus, speed]);

	return <span id="typed-content"></span>;
}
