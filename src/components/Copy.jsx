import { useEffect, useState } from "react";
import { IoCopy } from "react-icons/io5";

export default function Copy({ value }) {
	const [status, setStatus] = useState("");
	async function handleCopy() {
		try {
			await navigator.clipboard.writeText(value);
			setStatus("ok");
		} catch (error) {
			setStatus("error");
		}
	}

	useEffect(() => {
		const id = setTimeout(() => {
			setStatus("");
		}, 2000);
		return () => clearTimeout(id);
	}, [status]);

	return (
		<>
			{status === "" && (
				<span
					className="relative text-md transition-all rounded-full p-1 duration-300 hover:text-stone-100 hover:bg-blue-950 cursor-pointer"
					onClick={() => handleCopy()}
				>
					<IoCopy />
				</span>
			)}
			{status === "ok" && (
				<span className=" text-green-600 font-semibold">copied!</span>
			)}
			{status === "error" && <span>not copied!</span>}
		</>
	);
}
