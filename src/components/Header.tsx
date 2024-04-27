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
import { useAuth } from "../auth/AuthContext";
import { LanguageSelector } from "./LanguageSelector";
import { useTranslation, } from "react-i18next"

import { useContact } from "./ContactContext";

export type HeaderProps = {
    loginPopupVisible:boolean,
    setLoginPopupVisible:React.Dispatch<React.SetStateAction<boolean>>
};

const Header = () => {
    const { loginPopupVisible, registerPopupVisible, openLoginPopup, closeLoginPopup, openRegisterPopup, closeRegisterPopup } = useAuth();
    const { contactPopupVisible, openContactPopup, closeContactPopup } = useContact();
    const [isFormSubmitted, setisFormSubmitted] = useState(false)
    const navigate = useNavigate();
    const {t, } =useTranslation()

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

    const handleBooking = () => {
        navigate( "/booking" );
    };

    const handleOurRooms = () => {
        navigate( "/ourrooms" );
    };

    

    return (
        <header className="header">
            <div className="logo">
            <img id="hotel_logo" src="https://firebasestorage.googleapis.com/v0/b/dobra-ekipa-6f3c0.appspot.com/o/logo%2F2.png?alt=media&token=59adcdea-ea81-4400-b9f0-10c042d5fae1" alt="Logo" className="logo" onClick={()=> window.location.replace('/')} />
            <span className="hotel_name" onClick={()=> window.location.replace('/')}>Sol Hotel</span>
            </div>
            <div className="navigation">
                {auth?.currentUser?.email && <button onClick={handleBooking} className="navi_button">{t('BookNow')}</button>}
                <button onClick={handleOurRooms} className="navi_button">{t('OurRooms')}</button>
                <button onClick={openContactPopup} className="navi_button">{t('HeaderContactUs')}</button>
                {!auth?.currentUser?.email &&<button onClick={openLoginPopup} className="navi_button" style={{backgroundColor: "#2c3f1f", color: "#f1f3ee"}}>{t('HeaderLogin')}</button>}
                {auth?.currentUser?.email && <button onClick={handleSignOut} className="navi_button" style={{backgroundColor: "#2c3f1f", color: "#f1f3ee"}}>{t('HeaderLogOut')}</button>}
                <LanguageSelector/>
            </div>
            {loginPopupVisible && <Login onClose={closeLoginPopup} onRegisterClick={openRegisterPopup}/>}
            {registerPopupVisible && <Register onClose={closeRegisterPopup} onLoginClick={openLoginPopup}/>}
            {/* ts-ignore */}
            {contactPopupVisible && <ContactForm isFormSubmitted={isFormSubmitted} setisFormSubmitted={setisFormSubmitted} onClose={closeContactPopup} />}
            {isFormSubmitted && <Toaster iconClass = "fa-solid fa-circle-check" text=' Success! We&#39;ve received your message' isFormSubmitted={isFormSubmitted} setisFormSubmitted={setisFormSubmitted} /> }
        </header>
    );
}
export default Header;