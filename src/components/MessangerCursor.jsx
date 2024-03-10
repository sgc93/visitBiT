import { useEffect } from "react";

export default function MessangerCursor({ message, isShown }) {
	useEffect(() => {
		function updatePosition(e) {
			console.log(e);
		}

		document.addEventListener("mousemove", updatePosition);
		return () => document.addEventListener("mousemove", updatePosition);
	});
	return isShown && <div>MessangerCursor</div>;
}
