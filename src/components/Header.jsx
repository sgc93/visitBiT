import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
	return (
		<div className="absolute top-[2rem] left-[2rem] z-[1000] flex items-center gap-8">
			<Logo />
			<NavBar />
			<input
				type="text"
				placeholder="Search here ... "
				className="glassmorphism border-none w-64 outline-none px-3 py-[0.35rem] text-stone-900 font-semibold placeholder:text-stone-500 placeholder:font-semibold focus:backdrop-blur-xl "
			/>
		</div>
	);
}
