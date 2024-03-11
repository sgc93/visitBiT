import NavBar from "./NavBar";
import SearchResulBar from "./SearchResulBar";

export default function Header({ dragConstraint }) {
	return (
		<div className="absolute top-4 left-4 z-[999] flex items-start gap-2">
			<SearchResulBar />
			<NavBar dragConstraint={dragConstraint} />
		</div>
	);
}
