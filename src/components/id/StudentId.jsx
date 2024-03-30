export default function StudentId({ setIsOpen }) {
	function closeSimulator() {
		setIsOpen(false);
	}

	return (
		<div className=" w-1/2 h-1/2 bg-stone-900 rounded-xl flex flex-col">
			<SimulatorHeader handleClose={closeSimulator} />
		</div>
	);
}

function SimulatorHeader({ handleClose }) {
	return (
		<div>
			<button onClick={() => handleClose()}>close</button>
		</div>
	);
}
