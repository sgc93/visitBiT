import {
	MdClose,
	MdContentCopy,
	MdLocationPin,
	MdPhone,
	MdShare,
} from "react-icons/md";
import { RiUserSharedFill } from "react-icons/ri";

export default function DetailBox({ showDetailBox, setShowDetailBox, place }) {
	return (
		showDetailBox && (
			<div className="absolute left-4 top-16 z-[998]">
				<div className="scroll glassmorphism flex flex-col items-start gap-2 w-[18dvw] h-[90dvh] rounded-lg overflow-x-hidden overflow-y-scroll ">
					<img src={place.img[1]} alt={place.name} className="rounded-t-lg" />
					<div className="flex flex-col">
						<span className="text-xl font-semibold px-2">{place.name}</span>
						<span className=" font-semibold px-4">{place.description}</span>
						<span className="h-[1px] bg-blue-900 m-2"></span>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2 px-2 text-blue-900">
							<MdLocationPin className="text-4xl" />
							<span className="text-sm font-semibold">
								{place.position[0]}, {place.position[1]}
							</span>
							<button
								className={
									"text-xl transition-all duration-300 glassmorphism hover:bg-blue-900 hover:text-stone-200 p-1 rounded-md"
								}
							>
								<MdContentCopy />
							</button>
						</div>
						<div className="w-full flex items-center justify-between px-2 text-blue-900">
							<div className="flex items-center gap-2">
								<MdPhone className="text-2xl" />
								<span className="text-sm font-semibold">
									{place.phone[0]}, <br /> {place.phone[0]}
								</span>
							</div>
							<div className="flex items-center gap-2">
								<button
									className={
										"text-xl transition-all duration-300 glassmorphism hover:bg-blue-900 hover:text-stone-200 p-1 rounded-md"
									}
								>
									<MdContentCopy />
								</button>
								<a
									href={`callto:${place.phone[0]}`}
									className={
										"text-xl transition-all duration-300 glassmorphism hover:bg-blue-900 hover:text-stone-200 p-1 rounded-md"
									}
								>
									<MdPhone />
								</a>
							</div>
						</div>
						<div className="w-full flex items-center justify-between px-2 text-blue-900">
							<div className="flex items-center gap-2">
								<RiUserSharedFill className="text-2xl" />
								<span className="text-lg font-base">share location</span>
							</div>
							<button
								className={
									"text-xl transition-all duration-300 glassmorphism hover:bg-blue-900 hover:text-stone-200 p-1 rounded-md"
								}
							>
								<MdShare />
							</button>
						</div>
						<span className="w-auto h-[1px] bg-blue-900 m-2"></span>
					</div>
					<div className="flex flex-col gap-2 px-2">
						<span className="text-blue-950 font-semibold">images</span>
						<div className="w-full flex flex-col gap-2">
							{place.img.map((img) => (
								<img
									src={img}
									alt={place.name}
									key={img}
									className="rounded-md"
								/>
							))}
						</div>
					</div>
				</div>
				<div
					className="absolute right-2 top-2 z-[999] text-xl font-bold transition-all duration-300 opacity-70 hover:opacity-100 bg-blue-900 text-stone-200 p-1 rounded-md "
					onClick={() => setShowDetailBox(false)}
				>
					<MdClose />
				</div>
			</div>
		)
	);
}
