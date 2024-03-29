export default function Controller({ isOpen, setIsOpen }) {
	function handleToggling() {
		setIsOpen((isOpen) => !isOpen);
	}

	return (
		<div className="flex items-start gap-2">
			<span className="text-stone-400  ">controller :</span>
			<div>
				<button
					onClick={() => handleToggling()}
					className="glassmorphism-bg px-2 rounded-lg transition-all duration-300 text-blue-950 font-bold hover:bg-stone-400 hover:"
				>
					{isOpen ? "hide map" : "show overview map"}
				</button>
			</div>
		</div>
	);
}
