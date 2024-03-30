import Barcode from "react-barcode";
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
		<div className="glassmorphism-white w-[55%] h-[68%] flex items-center justify-center rounded-xl p-[0.7rem]">
			<div className="w-[400px] h-full bg-stone-50 rounded-lg overflow-hidden">
				<IdCardHeader />
				<IdCardBody />
				<BarCode />
			</div>
		</div>
	);
}

function IdCardHeader() {
	return (
		<div className="h-[70px] bg-[#0066cc] flex items-center gap-4">
			<img className="h-full" src="/bitLogo.png" alt="bitLogo" />
			<div className="w-full flex flex-col items-center text-stone-50 text-xl">
				<span className="">Bahir Dar Institute of Technology</span>
				<span>Bahir Dar University</span>
			</div>
		</div>
	);
}

function IdCardBody() {
	return (
		<div className="w-full h-[122px] flex">
			<div className="w-[122px] h-[122px] flex items-center justify-center">
				<img className="w-full h-full" src="/sgc.jpg" alt="" />
			</div>
			<div className="w-[calc(100%-122px)] h-full flex flex-col">
				<span className="w-full bg-black text-white text-center text-[.8rem]">
					BSC STUDENT ID
				</span>
				<div className="id_data flex flex-col px-2 font-bold">
					<div className="flex items-end gap-1">
						<span>Name:</span>
						<span>Smachew Gedefaw Chekol</span>
					</div>
					<div className="flex items-end gap-3">
						<span>Dept: </span>
						<span>Software Engineering</span>
					</div>
					<div className="flex items-end gap-6">
						<span>ID:</span>
						<span>BDU1308736</span>
					</div>
					<div className="flex items-end gap-3">
						<span>Issue Date:</span>
						<span>Apr-15-2022</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function BarCode() {
	return (
		<div className="flex items-center justify-center">
			<Barcode
				format="CODE39"
				value="1308736S"
				height={43}
				width={2.2}
				marginTop={2}
				marginLeft={2}
				marginRight={2}
			/>
		</div>
	);
}
