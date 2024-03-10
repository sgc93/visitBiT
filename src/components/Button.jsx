export default function Button({ title, handleClick }) {
	return (
		<button
			className="glassmorphism px-[0.5rem] py-[0.1rem] lowercase font-sans text-lg"
			onClick={handleClick}
		>
			{title}
		</button>
	);
}
