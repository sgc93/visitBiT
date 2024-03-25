import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Typing({ text }) {
	const contentRef = useRef();

	useEffect(() => {
		const typed = new Typed("#typed-content", {
			strings: [text],
			typeSpeed: 10,
			loop: false,
		});

		return () => typed.destroy();
	}, [text]);

	// scrolling down automatically while there is overflow
	useEffect(() => {
		const element = contentRef.current;
		if (element) {
			console.log(element);
			console.log(element.scrollHeight, element.clientHeight);
			if (element.clientHeight < element.scrollHeight) {
				element.scrollTop = element.scrollHeight - element.clientHeight;
			}
		}
	});

	return (
		<div
			ref={contentRef}
			className="w-2/4 h-full pr-2 flex flex-col text-stone-400 overflow-scroll overflow-x-hidden story-scroll"
		>
			<span id="typed-content"></span>
		</div>
	);
}
