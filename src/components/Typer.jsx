import { useEffect } from "react";
import Typed from "typed.js";

export default function Typer({ text, speed }) {
	useEffect(() => {
		const typed = new Typed("#typed-content", {
			strings: [text],
			typeSpeed: speed ? speed : 10,
			loop: false,
		});

		return () => typed.destroy();
	}, [text, speed]);

	return <span id="typed-content"></span>;
}
