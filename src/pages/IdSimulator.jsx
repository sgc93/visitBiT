import { useState } from "react";
import Simulator from "../components/id/Simulator";
import AboutID from "./AboutID";

export default function IdSimulator({ isIdBoxOpened, setIsIdBoxOpened }) {
	const [isSimulatorOpened, setIsSimulatorOpened] = useState(true);
	const [idType, setIdType] = useState("STUDENT ID");

	function handleClose() {
		if (isIdBoxOpened) {
			setIsIdBoxOpened(false);
		}
	}

	function openSimulator(type) {
		setIdType(type);
		setIsSimulatorOpened(true);
	}

	return (
		isIdBoxOpened && (
			<div className="storyTeller w-screen h-screen absolute top-0 left-0 backdrop-blur-[8px]">
				{isSimulatorOpened && (
					<Simulator
						type={idType}
						setIsSimulatorOpened={setIsSimulatorOpened}
					/>
				)}
				<AboutID openSimulator={openSimulator} handleClose={handleClose} />
			</div>
		)
	);
}
