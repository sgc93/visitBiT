import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Animated({ isOpen, setIsOpen }) {
	const origin = 1963;
	const year = new Date().getFullYear();
	const a = year - origin;
	const [currYear, setCurrYear] = useState(year);
	const [age, setAge] = useState(0);

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
		<div className=" w-1/2 flex flex-col text-stone-100">
			<div className="relative flex flex-col">
				{year !== currYear && (
					<span className="absolute top-10 left-5 text-2xl">since</span>
				)}
				<span className="year font-bold  ">{currYear}</span>
			</div>
			<div
				className={`flex relative transition-all duration-500 ${
					age > 0 ? "opacity-100" : "opacity-0"
				}`}
			>
				<motion.span
					animate={{ y: 0 }}
					initial={{ y: 20 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className=" year font-bold "
				>
					{age}{" "}
				</motion.span>
				<span className="absolute bottom-20 left-72 text-2xl transition-all duration-300">
					<span
						className={`age px-2 pb-10 mr-2 rounded-xl transition-all duration-500 ${
							age > a / 3 ? "opacity-100 " : "opacity-0"
						}`}
					>
						Evolved
					</span>
					<span
						className={`age px-2 pt-10 mr-2 rounded-xl transition-all duration-500 ${
							age > a / 2 ? "opacity-100 " : "opacity-0"
						}`}
					>
						Proven
					</span>
					<span
						className={`age px-2 pb-10 mr-2 rounded-xl transition-all duration-500 ${
							age > a / 1.1 ? "opacity-100 " : "opacity-0"
						}`}
					>
						Fruitful
					</span>
					<span>years</span>
				</span>
			</div>
		</div>
	);
}
