export default function SearchResulBar({ query, setQuery }) {
	return (
		<section className="glassmorphism rounded-r-lg h-full w-[18dvw] px-2 py-2">
			<input
				type="text"
				placeholder="Search here ... "
				className="w-[100%] rounded-lg border-none outline-none px-3 py-[0.35rem] text-stone-900 font-semibold placeholder:text-stone-500 placeholder:font-semibold focus:backdrop-blur-xl "
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			SideBar
		</section>
	);
}
