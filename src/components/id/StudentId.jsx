import { useEffect, useState } from "react";
import Barcode from "react-barcode";
import { IoCloseCircle } from "react-icons/io5";
import {
	dateFormatter,
	getRandomLetter,
	readFile,
} from "../../services/helpers";

export default function StudentId({ setIsOpen }) {
	const [name, setName] = useState("Smachew Gedefaw Chekol");
	const [dept, setDept] = useState("Software Engineering");
	const [id, setId] = useState("1308736");
	const [img, setImg] = useState("/sgc.jpg");

	function closeSimulator() {
		setIsOpen(false);
	}

	return (
		<div className=" w-1/2 h-3/4 bg-stone-900 rounded-xl flex flex-col">
			<SimulatorHeader handleClose={closeSimulator} />
			<div className="h-[92%] w-full flex flex-col items-center pt-6 gap-10">
				<IdCard name={name} dept={dept} id={id} img={img} />
				<DataField
					name={name}
					setName={setName}
					dept={dept}
					setDept={setDept}
					id={id}
					setId={setId}
					setImg={setImg}
				/>
			</div>
		</div>
	);
}

function SimulatorHeader({ handleClose }) {
	return (
		<div className="flex flex-col h-[8%] w-full">
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

function IdCard({ name, dept, id, img }) {
	return (
		<div className="glassmorphism-white w-[55%] h-[52%] flex items-center justify-center rounded-xl p-[0.7rem]">
			<div className="w-[400px] h-full bg-stone-50 rounded-lg overflow-hidden">
				<IdCardHeader />
				<IdCardBody name={name} dept={dept} id={id} img={img} />
				<BarCode id={id} />
			</div>
		</div>
	);
}

function DataField({ name, setName, dept, setDept, id, setId, setImg }) {
	function isValid(num) {
		const stringId = num.toString();
		return stringId.length < 8;
	}

	function isNegative(num) {
		return num < 0;
	}

	function handleChangeInId(e) {
		if (isNegative(e.target.value) || !isValid(e.target.value)) {
			setId(0);
		} else {
			setId(e.target.value);
		}
	}

	return (
		<div className="flex flex-col gap-3">
			<span className="text-stone-400 text-center">
				Import the following data
			</span>
			<div className="text-stone-400 flex flex-col gap-2">
				<div className="field_box">
					<span>Full Name:</span>
					<input
						type="text"
						placeholder="full name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="field_box">
					<span>Department:</span>
					<input
						type="text"
						placeholder="department"
						value={dept}
						onChange={(e) => setDept(e.target.value)}
					/>
				</div>
				<div className="field_box">
					<span>ID No:</span>
					<input
						type="number"
						placeholder="id number"
						value={id}
						onChange={handleChangeInId}
					/>
				</div>
				<ImageLoader setImg={setImg} />
			</div>
		</div>
	);
}

function ImageLoader({ setImg }) {
	async function handleUploading(e) {
		const url = await readFile(e.target.files[0]);
		setImg(url);
	}

	return (
		<div className="">
			<input
				type="file"
				accept="image/.png, image/.jpg, image/jpeg"
				onChange={handleUploading}
			/>
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

function IdCardBody({ name, dept, id, img }) {
	const date = dateFormatter(new Date(), "short")
		.split(",")
		.join(" ")
		.split(" ");
	date.splice(2, 1);
	const issueDate = date.join("-");

	console.log("new Image: ", img);

	return (
		<div className="w-full h-[122px] flex">
			<div className="w-[122px] h-[122px] flex items-center justify-center">
				<img className="w-full h-full" src={img} alt={name.split(" ")[0]} />
			</div>
			<div className="w-[calc(100%-122px)] h-full flex flex-col">
				<span className="w-full bg-black text-white text-center text-[.8rem]">
					BSC STUDENT ID
				</span>
				<div className="id_data flex flex-col px-2 font-bold">
					<div className="flex items-end gap-1">
						<span>Name:</span>
						<span>{name}</span>
					</div>
					<div className="flex items-end gap-3">
						<span>Dept: </span>
						<span>{dept}</span>
					</div>
					<div className="flex items-end gap-6">
						<span>ID:</span>
						<span>BDU{id}</span>
					</div>
					<div className="flex items-end gap-3">
						<span>Issue Date:</span>
						<span>{issueDate}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function BarCode({ id }) {
	const [value, setValue] = useState(`${id}S`);
	useEffect(() => {
		if (id) {
			setValue(`${id}${getRandomLetter()}`);
		}
	}, [id]);

	return (
		<div className="w-full h-[22%] flex items-center justify-center">
			{id ? (
				<Barcode
					format="CODE39"
					value={value}
					height={47}
					width={2.2}
					margin={1}
					displayValue={false}
				/>
			) : (
				<PlaceHolder />
			)}
		</div>
	);
}

function PlaceHolder() {
	return (
		<div className="flex flex-col items-center text-blue-700">
			<span className="font-semibold">
				enter <span className="font-bold text-red-500">Valid</span> Id number
				please
			</span>
			<span className="text-sm ">
				Id should be a numerical string with length &lt; 8
			</span>
		</div>
	);
}
