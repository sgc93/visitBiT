import React from "react";

export default function StoryTeller() {
	return (
		<div className="storyTeller w-full h-full absolute top-0 left-0 flex items-center justify-center">
			<div className=" w-1/2 h-1/2 bg-stone-900 rounded-xl flex flex-col">
				<div className="flex items-center justify-between p-2">
					<div className="flex gap-[0.4rem] ">
						<span className="w-5 h-5 rounded-full bg-red-600"></span>
						<span className="w-5 h-5 rounded-full bg-yellow-600"></span>
						<span className="w-5 h-5 rounded-full bg-green-600"></span>
					</div>
					<div className="text-xl font-semibold text-stone-600 uppercase">
						bdu
					</div>
					<span className="w-5 h-5 rounded-full bg-red-600"></span>
				</div>
				<span className="h-[1px] bg-stone-600 mx-2"></span>
			</div>
		</div>
	);
}
