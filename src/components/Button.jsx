export default function Button({
	children,
	className,
	title,
	style,
	handleClick,
}) {
	return (
		<button
			className={`glassmorphism rounded-lg px-[0.5rem] py-[0.1rem] lowercase font-sans text-lg ${className}`}
			style={style}
			onClick={handleClick}
		>
			{title}
			{children}
		</button>
	);
}
