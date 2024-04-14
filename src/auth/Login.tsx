import React, {useState, FormEvent} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import "./Login&Register.css";


type Props = {
    onClose: ()=>void,
    onRegisterClick: ()=>void
}

export const Login = ({onClose, onRegisterClick}: Props) => {
    const [formData, setFormData] = useState({
        login: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };  
    
    const handleSubmit = (e:FormEvent) => {
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
                <button id="close-btn" onClick={onClose}>X</button>
                <h3>Sign In</h3>
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
                        <button id="button_action" type="submit" className="submit-btn">Login</button>
                    </form>
                </div>
                <div className="popup-login-register">
                        <span id="text_referral">You don't have an account?</span>
                        <button id="button_referral" onClick={handleToggleRegister}>Sign up</button>
                </div>
            </div>
        </div>
    );
};

