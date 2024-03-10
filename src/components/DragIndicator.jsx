import { MdDragIndicator } from "react-icons/md";

export default function DragIndicator({ isShown }) {
	return (
		<MdDragIndicator
			className={`text-[1.7rem] transition-all duration-500 ${
				isShown ? "opacity-70" : "opacity-0"
			}`}
		/>
	);
}
