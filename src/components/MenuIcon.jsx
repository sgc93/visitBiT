import { MdClose, MdMenu } from "react-icons/md";
const className =
	" glassmorphism w-7 h-6 mt-1 text-2xl rounded-md opacity-80 transition-all duration-300 hover:bg-blue-900 hover:text-stone-100";

export default function MenuIcon({ showSideBar, setShowSideBar }) {
	return (
		<section className="flex flex-col gap-2 w-[18dvw]">
			<div className="flex items-center gap-2 w-full">
				{showSideBar ? (
					<MdClose
						className={className}
						onClick={() => setShowSideBar(false)}
					/>
				) : (
					<MdMenu className={className} onClick={() => setShowSideBar(true)} />
				)}
			</div>
		</section>
	);
}
