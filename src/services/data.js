import L from "leaflet";

function getMarkerIcon() {
	const icon = L.Icon({
		iconUrl: "/satellite.png",
		iconSize: [30, 30],
		iconAnchor: [15, 15],
	});
	return icon;
}

export const dormitories = [
	{
		name: "Nubya : Male Dormitory",
		position: [11.598180000732109, 37.397755980491645],
	},
	{
		name: "Abdissa : Male Dormitory",
		position: [11.599231398547118, 37.397739329225715],
	},
	{
		name: "Guna : Male Dormitory",
		position: [11.598689869893942, 37.39736928087995],
	},
];

export const cafes = [
	{
		name: "mother cafe",
		position: [11.597893954575634, 37.396119483361076],
	},
	{
		name: "sister cafe",
		position: [11.598230439481872, 37.39662897021394],
	},
];

export const launches = [
	{
		name: "E. kitaw launch",
		description:
			"named after a famous engineer Kitaw Ejjigu, who attends his high level education in BiT and later warks in NASA.",
		img: [
			"/launches/kitaw_launch/kitaw_ejigu.jpeg",
			"/launches/kitaw_launch/launch1.jpg",
			"/launches/kitaw_launch/launch2.jpg",
			"/launches/kitaw_launch/launch3.jpg",
			"/launches/kitaw_launch/launch4.jpg",
		],
		phone: ["0912345678", "0987654321"],
		position: [11.597925500052817, 37.397444149178554],
	},
	{
		name: "main bit launch",
		position: [11.598283015211864, 37.39589959956143],
	},
];

export const bitParts = [
	{
		label: "Forest",
		bounds: [
			[11.600028203100376, 37.39815835939376],
			[11.599407686349565, 37.400206920962184],
			[11.5977038473007, 37.39997661320511],
			[11.59687279830807, 37.400260990294356],
			[11.596224572038379, 37.39956429003995],
			[11.595172676712432, 37.39963947300687],
			[11.595014961160707, 37.399380782404734],
			[11.59500961747603, 37.397948935913206],
			[11.595067026570915, 37.397890030805776],
			[11.595287973458841, 37.398174186927925],
			[11.595997639517364, 37.398581850532075],
			[11.596723146493941, 37.39781988779889],
			[11.598620542729945, 37.39825363786855],
		],
		style: {
			color: "green",
			fillColor: "green",
			weight: 1.2,
			opacity: 0.7,
		},
	},
];

export const allPlaces = [...dormitories, ...launches, ...cafes];
