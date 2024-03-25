import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import StoryTeller from "./StoryTeller";

const pos = [11.597925500052817, 37.397444149178554];

export default function HomePage() {
	const navigateTo = useNavigate();
	return (
		<section className="w-screen h-screen glassmorphism">
			<div className="w-full h-full flex flex-col gap-4 items-center justify-center">
				<h1 className="text-5xl uppercase font-thin tracking-wide">
					visit BiT
				</h1>
				<Button handleClick={() => navigateTo(`/map`)}>start exploring</Button>
			</div>
			<StoryTeller />
		</section>
	);
}
