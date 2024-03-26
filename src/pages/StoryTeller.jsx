import { useEffect, useState } from "react";
import { IoIosCloseCircle, IoMdArrowBack } from "react-icons/io";
import Button from "../components/Button";
import StoryMap from "../components/story/StoryMap";
import Typing from "../components/story/Typing";
import { story } from "../services/bitStory";

export default function StoryTeller() {
	const [isOpen, setIsOpen] = useState(true);
	const [currStoryIndex, setCurrStoryIndex] = useState(0);
	const [currStory, setCurrStory] = useState(story[0]);

	useEffect(() => {
		setCurrStory(story[currStoryIndex]);
	}, [currStoryIndex]);

	// handle close
	function handleClosing(index) {
		setIsOpen(false);
	}

	// handle next
	function displayNext() {
		if (currStoryIndex < story.length - 1) {
			setCurrStoryIndex((currIndex) => currIndex + 1);
		}
	}

	// handle previous
	function displayPrevious() {
		if (currStoryIndex > 0) {
			setCurrStoryIndex((currIndex) => currIndex - 1);
		}
	}

	return (
		isOpen && (
			<div className="storyTeller w-screen h-screen absolute top-0 left-0">
				<div className="w-full h-full flex items-center justify-center backdrop-blur-[10px]">
					<div className=" w-1/2 h-1/2 bg-stone-900 rounded-xl flex flex-col">
						<div className="flex items-center justify-between p-2">
							<div className="flex gap-[0.4rem] ">
								<span className="text-sm text-stone-500">visit_BiT</span>
							</div>
							<div className="text-xl font-semibold text-stone-600 uppercase">
								{currStory.topic}
							</div>
							<IoIosCloseCircle
								className="text-2xl text-red-700 transition-all duration-300 hover:text-red-400"
								onClick={() => handleClosing()}
							/>
						</div>
						<span className="h-[1px] bg-stone-600 mx-2"></span>
						<div className=" h-3/4 p-6 flex items-center gap-5 w-full">
							<Typing text={currStory.content} />
							<div className="w-2/4 h-full rounded-lg overflow-hidden border-2 border-stone-400">
								<StoryMap story={currStory} />
							</div>
						</div>
						<div
							className={`p-2 flex items-center ${
								currStoryIndex > 0 ? "justify-between" : "justify-end"
							}`}
						>
							{currStoryIndex > 0 && (
								<Button
									className={"bg-transparent border-none ml-1"}
									handleClick={() => displayPrevious()}
								>
									<IoMdArrowBack className="text-stone-600 text-2xl translation-all duration-300 hover:text-stone-400" />
								</Button>
							)}
							{currStoryIndex === story.length - 1 && (
								<div className="text-sm ">
									<span className=" text-stone-500">see more @ </span>
									<a
										href={currStory.link}
										className="text-blue-900 transition-all duration-300 hover:text-blue-600"
									>
										{currStory.link}
									</a>
								</div>
							)}
							<div className="flex gap-2">
								<Button
									className={
										"text-stone-500 border-2 border-stone-500 transition-all duration-300 hover:text-stone-400 hover:border-stone-400"
									}
									handleClick={() => handleClosing()}
								>
									exit
								</Button>
								{currStoryIndex < story.length - 1 && (
									<Button
										className={
											"text-stone-900 bg-stone-500 border-2 border-stone-500 transition-all duration-300 hover:bg-stone-400 hover:border-stone-400"
										}
										handleClick={() => displayNext()}
									>
										next
									</Button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	);
}
