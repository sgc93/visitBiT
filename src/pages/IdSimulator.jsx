export default function IdSimulator({ isIdBoxOpened, setIsIdBoxOpened }) {
	function handleClose() {
		if (isIdBoxOpened) {
			setIsIdBoxOpened(false);
		}
	}

	return (
		isIdBoxOpened && (
			<div className="storyTeller w-screen h-screen absolute top-0 left-0">
				<div className="w-full h-full flex items-center justify-center backdrop-blur-[10px]">
					<div className=" w-1/2 h-1/2 bg-stone-900 rounded-xl flex flex-col">
						<button onClick={() => handleClose()}>close</button>
					</div>
				</div>
			</div>
		)
	);
}
