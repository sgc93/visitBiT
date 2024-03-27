export default function CampusData({ campus }) {
	return (
		<div className="w-1/2 h-full py-4 px-7">
			<div className="text-stone-500">name: {campus.name}</div>
		</div>
	);
}
