import NavBar from "./NavBar";
import QuickSearch from "./QuickSearch";

export default function Header({ dragConstraint, setPositions }) {
	return (
		<div className="absolute top-4 left-16 z-[999] flex items-start gap-2">
			<QuickSearch />
			<NavBar dragConstraint={dragConstraint} setPositions={setPositions} />
		</div>
	);
}
