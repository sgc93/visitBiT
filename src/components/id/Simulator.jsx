import EmployeeId from "./EmployeeId";
import StudentId from "./StudentId";

export default function Simulator({ type, setIsSimulatorOpened }) {
	const studentId = type === "STUDENT ID";
	const employeeId = type === "EMPLOYEE ID";

	return (
		<div className="w-screen h-screen flex backdrop-blur-[5px] items-center justify-center">
			{studentId && <StudentId setIsOpen={setIsSimulatorOpened} />}
			{employeeId && <EmployeeId setIsOpen={setIsSimulatorOpened} />}
		</div>
	);
}
