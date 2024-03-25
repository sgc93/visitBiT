import { useEffect } from "react";
import Typed from "typed.js";

export default function Typing({ text }) {
	useEffect(() => {
		const typed = new Typed("#typed-content", {
			strings: [text],
			typeSpeed: 30,
			loop: false,
		});

		return () => typed.destroy();
	}, [text]);
	return <span id="typed-content"></span>;
}
