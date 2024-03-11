import NavBar from "./NavBar";

export default function Header({ dragConstraint }) {
	return (
		<div className="absolute top-4 left-72 z-[999] flex items-start gap-2">
			<NavBar dragConstraint={dragConstraint} />
		</div>
	);
}
