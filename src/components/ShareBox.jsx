import { MdClose } from "react-icons/md";
import Copy from "./Copy";

export default function ShareBox({ place, setShowShareBox, showShareBox }) {
	const isUserLoc = showShareBox.type === "user";

	return (
		<div className=" w-[23rem] absolute z-[998] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] glassmorphism px-2 pt-1 pb-4 rounded-lg">
			<div className="w-full flex justify-between items-center gap-1">
				<span>Share</span>
				<span className="text-xl text-blue-950 cursor-pointer">
					<MdClose
						onClick={() =>
							setShowShareBox((showShareBox) => {
								return { ...showShareBox, isOpen: false };
							})
						}
					/>
				</span>
			</div>
			{!isUserLoc && (
				<div className="p-2 flex items-start gap-2">
					{place.img && (
						<img
							className="w-16 max-h-20"
							src={place.img[0]}
							alt={place.name}
						/>
					)}
					<div className="flex flex-col">
						<span className="text-sm text-blue-950">
							{place.position[0]},{place.position[1]}
						</span>
						{place.name && (
							<span className="text-lg text-stone-500">{place.name}</span>
						)}
					</div>
				</div>
			)}
			<div className="flex flex-col gap-1">
				<span className="text-lg text-stone-600">Share Link</span>
				<div className="flex items-center gap-2 px-2">
					<input
						type="text"
						className="w-full px-2 py-1 rounded-md bg-stone-50 text-blue-950 text-sm font-semibold"
						value={`http//:local:7153/lat=${place.position[0]}&lng=${place.position[1]}`}
						disabled
					/>
					<Copy
						value={`http//:local:7153/lat=${place.position[0]}&lng=${place.position[1]}`}
					/>
				</div>
			</div>
		</div>
	);
}
