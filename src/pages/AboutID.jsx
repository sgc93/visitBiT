export default function AboutID({ openSimulator, handleClose }) {
	return (
		<div>
			<button onClick={() => openSimulator("STUDENT ID")}>
				Simulate Student Id
			</button>
			<button onClick={() => openSimulator("EMPLOYEE ID")}>
				Simulate Employee Id
			</button>
			<button onClick={() => handleClose()}>Close Simulator</button>
		</div>
	);
}
