export default function Error({ error }) {
	return (
		<div className="w-full h-[20dvh] overlay flex flex-col items-center justify-center">
			<div className="glassmorphism-white flex flex-col items-center gap-2 px-4 py-1 rounded-lg">
				<span className="text-stone-950 font-bold text-xl capitalize">
					something went wrong!
				</span>
				<span className="text-lg font-semibold text-slate-900">{error}</span>
			</div>
		</div>
	);
}
