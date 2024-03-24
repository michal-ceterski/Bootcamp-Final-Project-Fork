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

    return (
        <header className="header">
            <span className="hotel_name" onClick={()=> window.location.replace('/')}>Sol Hotel</span>
            <div className="navigation">
                {auth?.currentUser?.email && <button onClick={handleBooking} className="navi_button">Book Now</button>}
                <button className="navi_button">Our Rooms</button>
                <button onClick={navigateToContactForm} className="navi_button">Contact Us</button>
                {!auth?.currentUser?.email &&<button onClick={handleLogin} className="navi_button" style={{backgroundColor: "#2c3f1f", color: "#f1f3ee"}}>Login</button>}
                { auth?.currentUser?.email && <button onClick={handleSignOut} className="navi_button" style={{backgroundColor: "#2c3f1f", color: "#f1f3ee"}}>Log Out</button>}
            </div>
        </header>
    );
}
export default Header;