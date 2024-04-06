export type Room = {
	id:number, 
	room:string,
	room_description: string,
	price: number,
	surface: number,
	people: number,
	url: string,
}

const roomdata: Array<Room> = [
	{
		"id": 0,
		"room": "SINGLE ROOM",
		"room_description" : "Comfortable and modern interior with a comfortable bed (140x200 cm). The bathroom is equipped with a shower or bathtub, hairdryer. The room features a work desk, refrigerator, safe, tea and coffee brewing set, free mineral water and LCD TV with international channels. It is possible to darken the room completely.",
		"price": 285,
		"surface": 20,
		"people": 1,
		"url": "https://th.bing.com/th/id/OIP.MqDPVS_IKpo8aaPI7QH2xgHaFg?rs=1&pid=ImgDetMain"
	},
	{
		"id": 1,
		"room": "QUEEN DOUBLE ROOM",
		"room_description" : "Comfortable and modern interior with a comfortable king-size bed (180x200 cm). The bathroom is equipped with a shower or bathtub, hairdryer. The room features a work desk, refrigerator, safe, tea and coffee brewing set, free mineral water and LCD TV with international channels. It is possible to darken the room completely.",
		"price": 315,
		"surface": 25,
		"people": 2,
		"url": "https://th.bing.com/th/id/OIP.MqDPVS_IKpo8aaPI7QH2xgHaFg?rs=1&pid=ImgDetMain"
	},
	{
		"id": 2,
		"room": "TWIN DOUBLE ROOM",
		"room_description" : "Comfortable and modern interior with two comfortable separate beds (90x200 cm). The bathroom is equipped with a shower or bathtub. The room features a work desk, refrigerator, safe, tea and coffee brewing set, free mineral water and LCD TV with international channels. It is possible to darken the room completely.",
		"price": 345,
		"surface": 25,
		"people": 2,
		"url": "https://th.bing.com/th/id/OIP.MqDPVS_IKpo8aaPI7QH2xgHaFg?rs=1&pid=ImgDetMain"
	},
	{
		"id": 3,
		"room": "PREMIUM DOUBLE ROOM",
		"room_description" : "Comfortable and modern interior with a comfortable king-size bed (180x200 cm). The bathroom is equipped with a shower or bathtub, hairdryer, bathrobe and slippers. The room features a work desk, refrigerator, safe, tea and coffee brewing set, free mineral water and LCD TV with international channels. It is possible to darken the room completely.",
		"price": 314,
		"surface": 35,
		"people": 2,
		"url": "https://th.bing.com/th/id/OIP.MqDPVS_IKpo8aaPI7QH2xgHaFg?rs=1&pid=ImgDetMain"
	},
	{
		"id": 4,
		"room": "JUNIOR SUITE",
		"room_description" : "Spacious and modern interior. The suite features a room with a comfortable king-size bed (180x200 cm) and a double sofa. The bathroom features a bathtub with shower, hairdryer, bathrobes and slippers. The room features a large work desk, refrigerator, safe, tea and coffee brewing set, free mineral water and LCD TV with international channels. It is possible to darken the room completely.",
		"price": 361,
		"surface": 41,
		"people": 2,
		"url": "https://th.bing.com/th/id/OIP.MqDPVS_IKpo8aaPI7QH2xgHaFg?rs=1&pid=ImgDetMain"
	}
];

export default roomdata;