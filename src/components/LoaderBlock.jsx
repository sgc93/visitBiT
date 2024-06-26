export default function LoaderBlock({ width, height, className }) {
	return (
		<div
			style={{ height: height, width: width }}
			className={`loader-block glassmorphism-white opacity-50 my-1 rounded-lg ${className}`}
		></div>
	);
}
