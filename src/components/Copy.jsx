import { IoCopy } from "react-icons/io5";

export default function Copy({ value }) {
	async function handleCopy() {
		try {
			await navigator.clipboard.writeText(value);
			console.log("copied successfully : " + value);
		} catch (error) {
			console.log("error : " + error);
		}
	}
	return (
		<span
			className="text-md transition-all rounded-full p-1 duration-300 hover:text-stone-100 hover:bg-blue-950 cursor-pointer"
			onClick={() => handleCopy()}
		>
			<IoCopy />
		</span>
	);
}
