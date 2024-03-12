import { useState } from "react";
import { GrLayer } from "react-icons/gr";
import Button from "./Button";

const tabs = [
	{
		text: "default",
		code: "m",
	},
	{
		text: "hybrid",
		code: "s,h",
	},
	{
		text: "satellite",
		code: "s",
	},
	{
		text: "terrain",
		code: "p",
	},
];

function LayerImg({ src }) {
	return <img className="w-5 h-5" src={`/${src}_layer.png`} alt={src} />;
}

export default function MapLayer({ setMapUrl }) {
	const [isOpen, setIsOpen] = useState(false);
	const [layer, setLayer] = useState("layers");

	function selectLayer(code, name) {
		setMapUrl(`http://{s}.google.com/vt?lyrs=${code}&x={x}&y={y}&z={z}`);
		setLayer(name);
	}

	return (
		<div
			className="absolute bottom-4 right-5 z-[999] flex items-end gap-2"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			{isOpen && (
				<div className="glassmorphism p-1 rounded-l-lg rounded-t-lg flex flex-col gap-1">
					{tabs.map((tab) => (
						<Button
							key={tab.text}
							className={
								"flex items-center gap-2 transition-all duration-500 hover:bg-blue-900 hover:text-stone-100"
							}
							handleClick={() => selectLayer(tab.code, tab.text)}
						>
							<LayerImg src={tab.text} />
							{tab.text}
						</Button>
					))}
				</div>
			)}
			<div
				className={`glassmorphism h-8 px-2 py-1  flex items-center gap-2 text-blue-900 transition-all duration-300 hover:bg-blue-900 hover:text-stone-100 ${
					isOpen ? "rounded-r-lg" : "rounded-l-lg rounded-b-lg "
				}`}
			>
				<GrLayer />
				<span
					className={`transition-all duration-1000 ${
						!isOpen ? "inline" : "hidden"
					}`}
				>
					{layer}
				</span>
			</div>
		</div>
	);
}
