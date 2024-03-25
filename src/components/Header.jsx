import NavBar from "./NavBar";
import QuickSearch from "./QuickSearch";

export default function Header({ dragConstraint, setMarkedPlace }) {
	return (
		<div className="absolute top-4 left-16 z-[999] flex items-start gap-2">
			<QuickSearch setMarkedPlace={setMarkedPlace} />
			<NavBar dragConstraint={dragConstraint} setMarkedPlace={setMarkedPlace} />
		</div>
	);
}
