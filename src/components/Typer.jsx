import { useEffect } from "react";
import Typed from "typed.js";

export default function Typer({ text }) {
	useEffect(() => {
		const typed = new Typed("#typed-content", {
			strings: [text],
			typeSpeed: 10,
			loop: false,
		});

		return () => typed.destroy();
	}, [text]);

	return <span id="typed-content"></span>;
}
