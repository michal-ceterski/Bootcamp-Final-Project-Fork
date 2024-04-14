import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../api/firebase";
import { useState, useEffect } from "react";
import { Toaster } from "./Toaster";
import './Header.css';
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import ContactForm from "./ContactForm";

export type HeaderProps = {
    loginPopupVisible:boolean,
    setLoginPopupVisible:React.Dispatch<React.SetStateAction<boolean>>
};

const Header = ({loginPopupVisible, setLoginPopupVisible}:HeaderProps) => {
    const [registerPopupVisible, setRegisterPopupVisible] = useState(false);
    const [contactPopupVisible, setContactPopupVisible] = useState(false);
    const [isEmailSent, setisEmailSent] = useState(false)
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {})
        .then(() => {
            window.location.reload();
        })
        .catch((error) => {
        console.error('Error during logout:', error);
        });
    };

    const handleCloseLoginPopup = () => {
        setLoginPopupVisible(false);
    };

    const handleLoginClick = () => {
        setLoginPopupVisible(true);
    };

    const handleCloseRegisterPopup = () => {
        setRegisterPopupVisible(false);
    };

    const handleRegisterClick = () => {
        setRegisterPopupVisible(true);
    };

    const handleCloseContactPopup = () => {
        setContactPopupVisible(false);          
    };

    const handleContactClick = () => {
        setContactPopupVisible(true);
    };

    // const navigateToContactForm = () => {
    //     navigate( "/contact" );
    // };
    const handleBooking = () => {
        navigate( "/booking" );
    };
   
    const handleOurRooms = () => {
        navigate( "/ourrooms" );
    };

    // useEffect(()=>{
    //     console.log(isEmailSent)
    // },[isEmailSent])

    return (
        <header className="header">
            <div className="logo">
            <img id="hotel_logo" src="https://firebasestorage.googleapis.com/v0/b/dobra-ekipa-6f3c0.appspot.com/o/logo%2F2.png?alt=media&token=59adcdea-ea81-4400-b9f0-10c042d5fae1" alt="Logo" className="logo" onClick={()=> window.location.replace('/')} />
            <span className="hotel_name" onClick={()=> window.location.replace('/')}>Sol Hotel</span>
            </div>
            <div className="navigation">
                {auth?.currentUser?.email && <button onClick={handleBooking} className="navi_button">Book Now</button>}
                <button onClick={handleOurRooms} className="navi_button">Our Rooms</button>
                <button onClick={handleContactClick} className="navi_button">Contact Us</button>
                {!auth?.currentUser?.email &&<button onClick={handleLoginClick} className="navi_button" style={{backgroundColor: "#2c3f1f", color: "#f1f3ee"}}>Login</button>}
                {auth?.currentUser?.email && <button onClick={handleSignOut} className="navi_button" style={{backgroundColor: "#2c3f1f", color: "#f1f3ee"}}>Log Out</button>}
            </div>
            {loginPopupVisible && <Login onClose={handleCloseLoginPopup} onRegisterClick={handleRegisterClick} />}
            {registerPopupVisible && <Register onClose={handleCloseRegisterPopup} onLoginClick={handleLoginClick}/>}
            {/* ts-ignore */}
            {contactPopupVisible && <ContactForm isEmailSent={isEmailSent} setisEmailSent={setisEmailSent} onClose={handleCloseContactPopup} />}
            {isEmailSent && <Toaster iconClass = "fa-solid fa-circle-check" text=' Success! We&#39;ve received your message' isEmailSent={isEmailSent} setisEmailSent={setisEmailSent} /> }
        </header>
    );
}
export default Header;