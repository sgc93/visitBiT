import { IoCloseCircle } from "react-icons/io5";

export default function StudentId({ setIsOpen }) {
	function closeSimulator() {
		setIsOpen(false);
	}

	return (
		<div className=" w-1/2 h-1/2 bg-stone-900 rounded-xl flex flex-col">
			<SimulatorHeader handleClose={closeSimulator} />
			<IdCard />
		</div>
	);
}

function SimulatorHeader({ handleClose }) {
	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between px-2 py-[2px]">
				<span className="text-stone-500">
					BSC student digital Id card simulator
				</span>
				<IoCloseCircle
					className="text-red-600 text-xl transition-all duration-300 hover:text-red-400 cursor-pointer"
					onClick={() => handleClose()}
				/>
			</div>
			<span className="w-full h-[1px] bg-stone-700"></span>
		</div>
	);
}

function IdCard() {
	return (
		<div className="glassmorphism-white w-[72%] h-[68%] flex items-center justify-center rounded-xl p-[0.7rem]">
			<div className="w-full h-full bg-stone-100 rounded-lg overflow-hidden">
				<IdCardHeader />
				<div>student data</div>
				<div>barcode</div>
			</div>
		</div>
	);
}

function IdCardHeader() {
	return (
		<div className="h-[70px] bg-[#0066cc] flex items-center gap-4">
			<img className="h-full" src="/bitLogo.png" alt="bitLogo" />
			<div className="w-full flex flex-col items-center font-semibold text-stone-50 text-xl">
				<span className="">Bahir Dar Institute of Technology</span>
				<span>Bahir Dar University</span>
			</div>
		</div>
	);
}

function BiTLogo() {
	return null;
}
