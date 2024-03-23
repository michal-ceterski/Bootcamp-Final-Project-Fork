import React from "react";
import { Register } from "../auth/Register";


function Header() {
     
    return (
        <header className="header">
            <span className="hotel_name">Sol Hotel</span>

            <div className="navigation">
                <button className="navi_button">Book Now</button>
                <button className="navi_button">Our Rooms</button>
                <button className="navi_button">Contact Us</button>
                <button className="navi_button" onClick={<Register />}>Login/Register</button>
            </div>
        </header>
    );
}

export default Header;