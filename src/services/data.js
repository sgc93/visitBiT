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
	// {
	// 	name: "main bit launch",
	// 	position: [11.598283015211864, 37.39589959956143],
	// },
];
