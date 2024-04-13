import React from "react";
import roomdata from './RoomData'
import './Description.css'
import { useNavigate } from "react-router-dom";
import {Room} from './RoomData';

const RoomDescription = () => {

    const navigate = useNavigate();
    const handleBooking = () => {
        navigate( "/booking" );
    };

    return (
        <>
        <div className="container">
        <div>SEE OUR COMFORTABLE ROOM</div>
        <div>
            <div>The hotel has 85 rooms, including 74 standard rooms, 6 premium rooms and 5 suites. Our rooms are equipped 
                with large, comfortable beds, which ensure a restful night's sleep. Standard facilities include: telephone 
                with a free wake-up call on demand, LCD satellite TV, free Wi-Fi and tea and coffee making facilities as well 
                as free mineral water. Bathrooms are equipped with showers or bathtubs. For extra comfort, each bathroom has 
                a hairdryer, slippers, and bathrobes. To ensure our guests' best possible rest, all rooms are equipped with 
                blackout curtains.</div>
            <div>
            <div>In your room:</div>
            <div className="photos_container">
                <img className="add_image" src="https://cdn.pixabay.com/photo/2017/03/05/17/39/wi-fi-2119225_1280.png"/><div>Internet w pokoju</div>
                <img className="add_image" src="https://image.freepik.com/darmowe-ikony/lodowka_318-10736.jpg"/><div>Lodówka</div>
                <img className="add_image" src="https://th.bing.com/th/id/R.f5866a9e728c84ed2933d3dd31804fee?rik=rQy59MfHPnTEjA&pid=ImgRaw&r=0"/><div>Telefon</div>
                <img className="add_image" src="https://image.freepik.com/darmowe-ikony/sylwetka-kropla-wody_318-37294.jpg"/><div>Bezpłatna woda mineralna</div>
                <img className="add_image" src="https://i.pinimg.com/originals/fa/9a/8c/fa9a8c990be8c250c7966931a0c73893.png"/><div>Klimatyzacja</div>
                <img className="add_image" src="https://mkdesk.pro/wp-content/uploads/2020/03/ikona-biurka-4.png"/><div>Biurko</div>
                <img className="add_image" src="https://t3.ftcdn.net/jpg/05/60/25/80/360_F_560258099_ky62cSILjBBhH0G8jgh3t2iPdiclDhmE.jpg"/><div>Ręczniki</div>
                <img className="add_image" src="https://media.istockphoto.com/id/1329818102/ko/%EB%B2%A1%ED%84%B0/%ED%97%A4%EC%96%B4-%EB%93%9C%EB%9D%BC%EC%9D%B4%EC%96%B4-%ED%94%BD%ED%86%A0%EA%B7%B8%EB%9E%A8-%EB%AF%B8%EC%9A%A9-%EC%9E%A5%EB%B9%84-%EC%8A%A4%EC%BC%80%EC%B9%98-%EC%A0%84%EB%AC%B8-%EB%8F%84%EA%B5%AC-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0-%EA%B7%B8%EB%A6%BC%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%9D%B4%EB%B0%9C%EC%82%AC-%EA%B8%B0%ED%98%B8.jpg?s=170667a&w=0&k=20&c=4hbDthJn_qTCEnb67rcxCuykKpUz2aHLqo-MHclMVZk="/><div>Suszarka do włosów</div>
            </div>
            </div>
        </div>
        </div>
        
            {roomdata.map((room:Room) => {
                return (
                    <React.Fragment key={room.id}>
                        <div className="room_container">
                        <img className="hotel_room_image" src={room.url}/>
                        <div>
                        <h1 className="abcde">{room.roomname}</h1>
                        <h2>{room.roomdescription}</h2>
                        <div className="info_container">
                        <div>
                        <div>Book for {room.price} $/night</div>
                        <div>Space: {room.surface}</div>
                        <div>Max amount of guests: {room.people}</div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </React.Fragment>
                )
            })}
            <button onClick={handleBooking} className="navi_button">Book Now</button>
        </>
    );
}

export default RoomDescription;