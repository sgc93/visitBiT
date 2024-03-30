import EmployeeId from "./EmployeeId";
import StudentId from "./StudentId";

export default function Simulator({ type, setIsSimulatorOpened }) {
	const studentId = type === "STUDENT ID";
	const employeeId = type === "EMPLOYEE ID";

	return (
		<div className="w-full h-full flex backdrop-blur-[5px]">
			{studentId && <StudentId setIsOpen={setIsSimulatorOpened} />}
			{employeeId && <EmployeeId setIsOpen={setIsSimulatorOpened} />}
		</div>
	);
}
