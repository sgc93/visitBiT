import { MdClose, MdMenu } from "react-icons/md";
const className =
	"white-btn cursor-pointer w-8 h-7 mt-1 text-2xl rounded-md opacity-80 ";

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
