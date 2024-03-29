export const bit = [
	{
		name: "Bahir Dar Institute Of Technology",
		description:
			"a campus of engineering in Bahir Dar University. historically, it is the oldest one - originated in 1963 by Emperor HaileSelassie",
		position: [11.597621756651337, 37.39551835806901],
		phone: ["058 220 9338"],
		img: ["/bit/img1.jpg"],
	},
];

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
		label: "classrooms",
		bounds: [
			[11.59603734766471, 37.39581219306159],
			[11.597026304551813, 37.395040365781306],
			[11.595101377722301, 37.39395663306609],
			[11.595006783348103, 37.39406389345615],
			[11.595006831751551, 37.39512579928845],
		],
		style: {
			color: "yellow",
			fillColor: "yellow",
			weight: 1.2,
			opacity: 1,
		},
	},
	{
		label: "offices",
		bounds: [
			[11.595931614509572, 37.39562971054585],
			[11.595448028608919, 37.39532658116569],
			[11.595016440799323, 37.39556263212751],
			[11.595027184327567, 37.39650726703173],
			[11.5964898101722, 37.39787058403805],
			[11.59710990711451, 37.397656263764645],
			[11.597403936790807, 37.397978470534035],
			[11.597498270387804, 37.39715199126757],
			[11.598118499639956, 37.39684084297835],
			[11.596929109087922, 37.39516629091158],
			[11.596760200774643, 37.39536981301851],
			[11.597306896014707, 37.39617469595209],
			[11.596075308451319, 37.397001130433466],
			[11.595548951442725, 37.39618546892689],
		],
		style: {
			color: "purple",
			fillColor: "purple",
			weight: 1.2,
			opacity: 1,
		},
	},
	{
		label: "dormitories",
		bounds: [
			[11.600568340806495, 37.39709769813554],
			[11.599962481159764, 37.39809676384986],
			[11.597869918269557, 37.397871556189415],
			[11.598101283974707, 37.39706710606087],
			[11.599467777097528, 37.39645545891457],
		],
		style: {
			color: "black",
			fillColor: "black",
			weight: 1.2,
			opacity: 1,
		},
	},

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
	{
		label: "library",
		bounds: [
			[11.596816831224185, 37.40034181738445],
			[11.596584301866733, 37.400964049653126],
			[11.594971313474723, 37.40102336089764],
			[11.59499761488678, 37.399646835480986],
			[11.595176844051569, 37.39985119002747],
			[11.595609023485922, 37.39972218879645],
			[11.596415355231954, 37.399878096016394],
		],
		style: {
			color: "red",
			fillColor: "red",
			weight: 1.2,
			opacity: 0.7,
		},
	},
	{
		label: "stadium",
		bounds: [
			[11.595075746135363, 37.3978149345454],
			[11.595407508487183, 37.398207901795026],
			[11.596092130738262, 37.39855180701853],
			[11.596369976724091, 37.39797889207008],
			[11.595567344557, 37.39734570899023],
		],
		style: {
			color: "green",
			fillColor: "green",
			weight: 1.2,
			opacity: 1,
		},
	},
];

export const allPlaces = [...dormitories, ...launches, ...cafes];
