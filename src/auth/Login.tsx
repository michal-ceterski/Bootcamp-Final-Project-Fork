import React, {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import "./Login.css";

export const Login = ({ onClose, onRegisterClick  }) => {
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
        signInWithEmailAndPassword(auth, formData.login, formData.password)
            .then(() => {
                onClose(); // Zamknij popup po zalogowaniu
            })
            .catch((error) => {
                console.error("Error during login:", error);
            });
    };

    const handleToggleRegister = () => {
        onClose();
        onRegisterClick();
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <h3>Sign In</h3>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="login" 
                            placeholder="Login" 
                            value={formData.login} 
                            onChange={handleChange} 
                            required 
                        />
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required
                        />
                        <button type="submit" className="submit-btn">Login</button>
                    </form>
                <span>You don't have an account?</span>
                <button className="button_register" onClick={handleToggleRegister}>Sign up</button>
            </div>
        </div>
    );
};

