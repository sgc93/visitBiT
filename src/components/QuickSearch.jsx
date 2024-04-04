import React, { useEffect, useState } from "react";
import { MdClose, MdSearch } from "react-icons/md";
import { searchFor } from "../services/helpers";

export default function QuickSearch({ setMarkedPlace }) {
	const [query, setQuery] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isQNotFound, setIsQNotFound] = useState(false);
	const [matchPlaces, setMatchPlaces] = useState([]);

	useEffect(() => {
		async function getPlace() {
			try {
				setIsQNotFound(false);
				setMatchPlaces([]);
				setIsLoading(true);
				const matchPlaces = await searchFor(query);
				setMatchPlaces(matchPlaces);
				console.log(matchPlaces);
			} catch (error) {
				setIsQNotFound(true);
			} finally {
				setIsLoading(false);
			}
		}
		if (query.length > 0) {
			getPlace();
		} else {
			setMatchPlaces([]);
		}
	}, [query]);

	return (
		<div className=" flex items-start gap-1">
			<SearchBtn setIsOpen={setIsOpen} />
			{isOpen && (
				<SearchBox
					query={query}
					setQuery={setQuery}
					isQNotFound={isQNotFound}
					isLoading={isLoading}
					matchPlaces={matchPlaces}
					setIsOpen={setIsOpen}
					setMarkedPlace={setMarkedPlace}
				/>
			)}
		</div>
	);
}

// assistant components

function SearchBtn({ setIsOpen }) {
	return (
		<div
			className="w-52 bg-blue-300 border-2 border-stone-100 text-stone-950 font-bold flex items-center gap-3 py-[3px] rounded-lg px-2 cursor-pointer transition-all duration-300 hover:bg-blue-900 hover:text-stone-50 hover:border-blue-300 capitalize"
			onClick={() => setIsOpen(true)}
		>
			<MdSearch className="text-xl" />
			<span>quick search ...</span>
		</div>
	);
}

function SearchBox({
	query,
	setQuery,
	isQNotFound,
	isLoading,
	matchPlaces,
	setIsOpen,
	setMarkedPlace,
}) {
	return (
		<div className="absolute left-[-4rem] top-[-1rem] z-[999] w-screen  h-screen backdrop-blur-[3px]">
			<div
				className={`absolute left-[50%] top-[10%] translate-x-[-45%]  flex items-start gap-4 pb-6`}
			>
				<div className="overflow-hidden w-[40dvw] min-h-[30dvh] bg-slate-500 rounded-lg px-2 py-2 flex flex-col items-center transition-all duration-500">
					<SearchBar query={query} setQuery={setQuery} />
					<div className=" w-full flex flex-col pt-2">
						<div className="py-1 flex items-center justify-between">
							{isQNotFound ? <NotFound /> : <QueryIndicator query={query} />}
							{isLoading && <span className="small-loader mr-3"></span>}
						</div>
						{matchPlaces.length > 0 && (
							<SearchResults
								matchPlaces={matchPlaces}
								setMarkedPlace={setMarkedPlace}
								setIsOpen={setIsOpen}
							/>
						)}
					</div>
					<span className="w-full h-[1px] bg-blue-200 m-4"></span>
				</div>
				<span className="text-2xl transition-all duration-300 text-stone-950 bg-red-600 hover:text-red-600 hover:bg-red-100 rounded-full">
					<MdClose onClick={() => setIsOpen(false)} />
				</span>
			</div>
		</div>
	);
}

function SearchBar({ query, setQuery }) {
	return (
		<div className="bg-stone-100 rounded-lg flex items-center gap-1 pr-1">
			<input
				type="text"
				placeholder="Search here ... "
				className="  border-none outline-none px-3 py-[0.35rem] text-stone-900 font-semibold placeholder:text-stone-500 placeholder:font-semibold bg-transparent"
				value={query}
				onChange={(e) => {
					setQuery(e.target.value);
				}}
			/>
			<span
				className={`text-blue-900 text-2xl transition-all duration-500 hover:bg-blue-100 rounded-md ${
					query ? "opacity-100" : "opacity-0"
				}`}
			>
				<MdClose onClick={() => setQuery("")} />
			</span>
		</div>
	);
}

function NotFound() {
	return (
		<div className="w-full flex flex-col items-center">
			<span className="text-stone-200 font-semibold">Sorry🙏🏻!</span>
			<span className="text-red-900 font-semibold">Place Not Found!</span>
		</div>
	);
}

function QueryIndicator({ query }) {
	return (
		query && (
			<span className="text-stone-300 text-md font-semibold">
				results for:{" "}
				<span className="text-stone-100 font-semibold text-lg lowercase w-20 overflow-clip">
					{query}
				</span>
			</span>
		)
	);
}

function SearchResults({ matchPlaces, setMarkedPlace, setIsOpen }) {
	function handleClick(place) {
		setMarkedPlace(() => [[place], "detail"]);
		setIsOpen(false);
	}
	return (
		<div className="flex flex-col pl-3 gap-1">
			{matchPlaces.map((place, key) => (
				<button
					className="flex items-center gap-2 px-2 py-1 opacity-70 bg-blue-950 text-stone-100 font-semibold rounded-md border-[1px] border-transparent transition-all duration-300 hover:opacity-100 hover:border-stone-200"
					key={key}
					onClick={() => handleClick(place)}
				>
					{place.img && (
						<img
							src={place.img[0]}
							alt={place.name}
							className="w-5 h-5 rounded-full"
						/>
					)}
					<span>{place.name}</span>
				</button>
			))}
		</div>
	);
}
