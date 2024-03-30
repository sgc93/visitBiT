import { useEffect, useState } from "react";

export default function Animated({ isOpen }) {
	const origin = 1963;
	const year = new Date().getFullYear();
	const a = year - origin;
	const [currYear, setCurrYear] = useState(year);
	const [age, setAge] = useState(0);
	console.log(isOpen);

	useEffect(() => {
		let intervalId;

		function handleCountingDown() {
			intervalId = setInterval(() => {
				if (currYear > origin) {
					setCurrYear((currYear) => currYear - 1);
					setAge((age) => age + 1);
				} else {
					clearInterval(intervalId);
				}
			}, 50);
		}

		if (!isOpen) {
			handleCountingDown();
		}

		return () => clearInterval(intervalId);
	}, [isOpen, currYear, age]);

	return (
		<div className=" w-1/2 h-full flex flex-col text-stone-100">
			<div className="h-2/5 relative flex flex-col">
				<span
					className={`absolute top-10 left-5 text-2xl transition-all duration-600 glassmorphism-bg px-2 py-[2px] rounded-lg ${
						currYear < year ? "opacity-100" : "opacity-0"
					}`}
				>
					since
				</span>
				<span className="year font-bold ">{currYear}</span>
			</div>
			<div
				className={`flex relative transition-all duration-500 w-full h-3/5 ${
					age > 0 ? "opacity-100" : "opacity-0"
				}`}
			>
				<div className=" h-full flex flex-col items-center justify-end">
					<div className="year font-bold mb-[-3rem]">{age}</div>
				</div>
				<div className="absolute bottom-[-1rem] left-72 h-full w-fit transition-all duration-300 flex gap-3">
					<Attr
						show={age > a / 3}
						desc={"campuses schools institutes colleges"}
						att={"Evolved"}
						name={"age1"}
					/>
					<Attr
						show={age > a / 1.7}
						desc={"structured updated qualified education"}
						att={"Proven"}
						name={"age2"}
					/>
					<Attr
						show={age > a / 1.1}
						desc={"disciplined enlightened innovative students"}
						att={"Fruitful"}
						name={"age3"}
					/>
					<span
						className={`flex flex-col items-center justify-end pb-10 transition-all duration-300 ${
							age === a ? "opacity-100" : "opacity-0"
						}`}
					>
						years
					</span>
				</div>
			</div>
		</div>
	);
}

function Attr({ show, desc, att, name }) {
	return (
		<div
			className={`w-1/4 h-full flex flex-col items-center justify-end gap-3 transition-all duration-700 ${
				show ? "opacity-100 " : "opacity-0"
			}`}
		>
			{name !== "age2" && <Holder name={name} />}
			<div
				className={`${name} rounded-xl w-full p-2 text-center text-sm text-stone-300 font-semibold`}
			>
				{desc}
			</div>
			<span
				className={`${name} text-center text-2xl px-2 ${
					name === "age2" ? "pt-10" : "pb-10"
				} w-full rounded-xl  `}
			>
				{att}
			</span>
			{name === "age2" && <Holder name={name} />}
		</div>
	);
}

function Holder({ name }) {
	return <div className={`w-full h-8 rounded-xl opacity-[.24] ${name}`}></div>;
}
