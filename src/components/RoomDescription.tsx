import React, { useContext, useEffect, useState } from "react";
import './Description.css'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../auth/UserContext';
import { AuthProvider, useAuth } from "../auth/AuthContext";
import { useTranslation } from "react-i18next"
import { useContact } from "./ContactContext";

const RoomDescription = () => {
    const navigate = useNavigate();
    const { ID } = useContext(UserContext);
    const { loginPopupVisible, openLoginPopup, closeLoginPopup } = useAuth();
    const {t} =useTranslation()
    const {roomdata, setRoomdata} = useContact();
    const [isBooknowclicked, setIsBooknowclicked] = useState(false)

    const handleBooking = () => {
        if (ID) {
            navigate( "/booking" );
        } else {
            openLoginPopup();
            setIsBooknowclicked(true)
        }
    };

    useEffect(() => {
        if (!loginPopupVisible && isBooknowclicked && ID) {
            navigate("/booking");
            closeLoginPopup();
            setIsBooknowclicked(false)
        }
    }, [loginPopupVisible, ID, closeLoginPopup, navigate, isBooknowclicked, setIsBooknowclicked]);

  
    return (
        <>
        <div className="container">
        <div className="title-text">{t('roomDescriptionHeader')}</div>
        <div>
            <div className="description_text">{t('roomDescriptionText')}</div>
            <div>
            <div>{t('roomDescriptionHeader2')}</div>
            <div className="photos_container">
                <img className="add_image" src="https://cdn.pixabay.com/photo/2017/03/05/17/39/wi-fi-2119225_1280.png" alt="internet-icon"/><div>{t('roomDescriptionWifi')}</div>
                <img className="add_image" src="https://image.freepik.com/darmowe-ikony/lodowka_318-10736.jpg" alt="fridge-icon"/><div>{t('roomDescriptionRefridgerator')}</div>
                <img className="add_image" src="https://th.bing.com/th/id/R.f5866a9e728c84ed2933d3dd31804fee?rik=rQy59MfHPnTEjA&pid=ImgRaw&r=0" alt="phone-icon"/><div>{t('roomDescriptionTelephone')}</div>
                <img className="add_image" src="https://image.freepik.com/darmowe-ikony/sylwetka-kropla-wody_318-37294.jpg" alt="water-icon"/><div>{t('roomDescriptionWater')}</div>
                <img className="add_image" src="https://i.pinimg.com/originals/fa/9a/8c/fa9a8c990be8c250c7966931a0c73893.png" alt="ac-icon"/><div>{t('roomDescriptionAir')}</div>
                <img className="add_image" src="https://mkdesk.pro/wp-content/uploads/2020/03/ikona-biurka-4.png" alt="desk-icon"/><div>{t('roomDescriptionDesk')}</div>
                <img className="add_image" src="https://t3.ftcdn.net/jpg/05/60/25/80/360_F_560258099_ky62cSILjBBhH0G8jgh3t2iPdiclDhmE.jpg" alt="towel-icon"/><div>{t('roomDescriptionTowels')}</div>
                <img className="add_image" src="https://media.istockphoto.com/id/1329818102/ko/%EB%B2%A1%ED%84%B0/%ED%97%A4%EC%96%B4-%EB%93%9C%EB%9D%BC%EC%9D%B4%EC%96%B4-%ED%94%BD%ED%86%A0%EA%B7%B8%EB%9E%A8-%EB%AF%B8%EC%9A%A9-%EC%9E%A5%EB%B9%84-%EC%8A%A4%EC%BC%80%EC%B9%98-%EC%A0%84%EB%AC%B8-%EB%8F%84%EA%B5%AC-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0-%EA%B7%B8%EB%A6%BC%EC%9E%85%EB%8B%88%EB%8B%A4-%EC%9D%B4%EB%B0%9C%EC%82%AC-%EA%B8%B0%ED%98%B8.jpg?s=170667a&w=0&k=20&c=4hbDthJn_qTCEnb67rcxCuykKpUz2aHLqo-MHclMVZk=" alt="hairdryer-icon"/><div>{t('roomDescriptionHairdryer')}</div>
            </div>
            </div>
        </div>
        </div>
        
            {roomdata.map((room) => {                 
                return (
                    <React.Fragment key={room.id}>
                        <div className="room_container">
                        <img className="hotel_room_image" alt="room-image" src={room.url}/>
                        <div className="room_text_container">
                        <h2 className="room_description">{localStorage.i18nextLng === 'PL'? room.roomnamePL: room.roomname}</h2>
                        <p>{localStorage.i18nextLng === 'PL'? room.roomdescriptionPL : room.roomdescription }</p>
                        <div className="info_container">
                        <div>
                        <div>{t('roomDescriptionBookFor')} {room.price}{t('roomDescriptionPerNight')} </div>
                        <div>{t('roomDescriptionSpace')} {room.surface}</div>
                        <div>{t('roomDescriptionMaxAmountGuests')} {room.people}</div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </React.Fragment>
                )
            })}
            <button onClick={handleBooking} className="navi_button booknow">{t('roomDescriptionBookNow')}</button>
        </>
    );
}

export default RoomDescription;