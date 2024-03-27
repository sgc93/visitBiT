import Typer from "../Typer";

export default function Typing({ text }) {
	return (
		<div className="w-2/4 h-full pr-2 flex flex-col text-stone-400 overflow-scroll overflow-x-hidden story-scroll">
			<Typer text={text} />
		</div>
	);
}
