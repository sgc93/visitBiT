import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import Button from "../components/Button";
import { story } from "../services/bitStory";

export default function StoryTeller() {
	const [isOpen, setIsOpen] = useState(true);
	const [currStoryIndex, setCurrStoryIndex] = useState(0);
	return (
		isOpen && (
			<div className="storyTeller w-full h-full absolute top-0 left-0 flex justify-center">
				<div className=" w-1/2 h-1/2 bg-stone-900 rounded-xl flex flex-col">
					<div className="flex items-center justify-between p-2">
						<div className="flex gap-[0.4rem] ">
							<span className="text-sm text-stone-500">visit_BiT</span>
							{/* <span className="w-5 h-5 rounded-full bg-red-600"></span>
						<span className="w-5 h-5 rounded-full bg-yellow-600"></span>
						<span className="w-5 h-5 rounded-full bg-green-600"></span> */}
						</div>
						<div className="text-xl font-semibold text-stone-600 uppercase">
							{story[currStoryIndex].topic}
						</div>
						<IoIosCloseCircle
							className="text-2xl text-red-700 transition-all duration-300 hover:text-red-400"
							onClick={() => setIsOpen(false)}
						/>
					</div>
					<span className="h-[1px] bg-stone-600 mx-2"></span>
					<div className=" h-3/4 p-6 flex items-center gap-5 w-full">
						<div className="w-2/4 h-full pr-2 flex flex-col items-center text-stone-400 overflow-scroll overflow-x-hidden story-scroll">
							{story[currStoryIndex].content}
						</div>
						<div className="w-2/4 h-full rounded-lg overflow-hidden border-2 border-stone-400">
							<img
								className="h-full"
								src="/map.png"
								alt={story[currStoryIndex].topic}
							/>
						</div>
					</div>
					<div className="p-2 flex justify-end gap-2">
						<Button
							className={
								"text-stone-500 border-2 border-stone-500 transition-all duration-300 hover:text-stone-400 hover:border-stone-400"
							}
						>
							exit
						</Button>
						<Button
							className={
								"text-stone-900 bg-stone-500 border-2 border-stone-500 transition-all duration-300 hover:bg-stone-400 hover:border-stone-400"
							}
						>
							next
						</Button>
					</div>
				</div>
			</div>
		)
	);
}
