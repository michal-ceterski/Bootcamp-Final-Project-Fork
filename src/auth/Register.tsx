import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import "./Register.css";



export const Register = ({ onClose  }) => {
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

    

    return (
        <div className="popup">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <h3>Sign Up</h3>
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
                        <button type="submit" className="submit-btn">Regist</button>
                    </form>
            </div>
        </div>
    );
};