import NavBar from "./NavBar";

export default function Header() {
	return (
		<div className="absolute top-4 left-96 z-[1000] flex items-center gap-8">
			<NavBar />
		</div>
	);
}
