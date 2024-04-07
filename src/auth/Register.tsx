import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import "./Login&Register.css";



export const Register = ({ onClose, onLoginClick  }) => {
    const [formData, setFormData] = useState({
        login: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, formData.login, formData.password)
            .then(() => {
                onClose(); // Zamknij popup po zalogowaniu
            })
            .catch((error) => {
                console.error("Error during registration:", error);
            });
    };

    const handleToggleLogin= () => {
        onClose();
        onLoginClick();
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <button id="close-btn" onClick={onClose}>X</button>
                <h3>Sign Up</h3>
                <div className="popup-body">
                    <form onSubmit={handleSubmit}>
                        <input id="input-login"
                            type="text" 
                            name="login" 
                            placeholder="Login" 
                            value={formData.login} 
                            onChange={handleChange} 
                            required 
                        />
                        <input id="input-password"
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required
                        />
                        <button id="button_action" type="submit" className="submit-btn">Regist</button>
                    </form>
                </div>
                <div className="popup-login-register">
                        <span>You have an account?</span>
                        <button id="button_referral" onClick={handleToggleLogin}>Sign in</button>
                </div>
            </div>
        </div>
    );
};