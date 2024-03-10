import { MdDragIndicator } from "react-icons/md";

export default function DragIndicator({ className, isShown }) {
	return isShown && <MdDragIndicator className={className} />;
}
