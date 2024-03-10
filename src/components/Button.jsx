export default function Button({ children, title, style, handleClick }) {
	return (
		<button
			className="glassmorphism rounded-lg px-[0.5rem] py-[0.1rem] lowercase font-sans text-lg"
			style={style}
			onClick={handleClick}
		>
			{title}
			{children}
		</button>
	);
}
