import React, {useState, FormEvent} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import "./Register.css";

type Props = {
    onClose: ()=>void,
    onLoginClick: ()=>void
}

export const Register = ({ onClose, onLoginClick  }:Props) => {
    const [formData, setFormData] = useState({
        login: "",
        password: "",
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, formData.login, formData.password)
            .then(() => {
                onClose(); // Close popup after log in
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
                    </form>
                </div>
                <button id="register" type="submit" className="submit-btn">Regist</button>
                <div className="popup-login-register">
                        <span>You have an account?</span>
                        <button id="button_login" onClick={handleToggleLogin}>Sign in</button>
                </div>
            </div>
        </div>
    );
};