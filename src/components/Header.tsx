import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../api/firebase";

import './Header.css';


const Header = () => {

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

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate( "/login" );
    };
    const navigateToContactForm = () => {
        navigate( "/contact" );
    };
    const handleBooking = () => {
        navigate( "/booking" );
    };
    const handleRegister = () => {
        navigate( "/register" );
    };
    const handleOurRooms = () => {
        navigate( "/ourrooms" );
    };

    return (
        <header className="header">
            <div className="logo">
            <img id="hotel_logo" src="https://firebasestorage.googleapis.com/v0/b/dobra-ekipa-6f3c0.appspot.com/o/logo%2F2.png?alt=media&token=59adcdea-ea81-4400-b9f0-10c042d5fae1" alt="Logo" className="logo" />
            <span className="hotel_name" onClick={()=> window.location.replace('/')}>Sol Hotel</span>
            </div>
            <div className="navigation">
                {auth?.currentUser?.email && <button onClick={handleBooking} className="navi_button">Book Now</button>}
                <button onClick={handleOurRooms} className="navi_button">Our Rooms</button>
                <button onClick={navigateToContactForm} className="navi_button">Contact Us</button>
                {!auth?.currentUser?.email &&<button onClick={handleLogin} className="navi_button" style={{backgroundColor: "#2c3f1f", color: "#f1f3ee"}}>Login</button>}
                { auth?.currentUser?.email && <button onClick={handleSignOut} className="navi_button" style={{backgroundColor: "#2c3f1f", color: "#f1f3ee"}}>Log Out</button>}
            </div>
        </header>
    );
}
export default Header;