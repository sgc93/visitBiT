import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import QuickSearch from "./QuickSearch";

export default function Header({ dragConstraint, setMarkedPlace }) {
	const navigateTo = useNavigate();
	return (
		<div className="absolute top-4 left-16 z-[999] flex items-start gap-2">
			<QuickSearch setMarkedPlace={setMarkedPlace} />
			<NavBar dragConstraint={dragConstraint} setMarkedPlace={setMarkedPlace} />
			<button
				className="h-full w-fit white-btn p-1 text-xl text-stone-600 rounded-md"
				onClick={() => navigateTo("/")}
			>
				<MdHome />
			</button>
		</div>
	);
}
