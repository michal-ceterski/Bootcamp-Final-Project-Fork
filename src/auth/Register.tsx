import React, {useState, FormEvent} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import "./Login&Register.css";
import { useTranslation } from "react-i18next"

type Props = {
    onClose: ()=>void,
    onLoginClick: ()=>void
}

export const Register = ({ onClose, onLoginClick  }:Props) => {
    const [formData, setFormData] = useState({
        name: "",
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

    const {t} =useTranslation()

    return (
        <div className="popup">
            <div className="popup-content">
                <button id="close-btn" onClick={onClose}>X</button>
                <h3>{t('RegisterSignup')}</h3>
                <div className="popup-body">
                    <form onSubmit={handleSubmit}>
                        <input id="input-name"
                            type="text"
                            name="name"
                            placeholder={t('RegisterPlaceholderName')} 
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input id="input-login"
                            type="email" 
                            name="login" 
                            placeholder="Email" 
                            value={formData.login} 
                            onChange={handleChange} 
                            required 
                        />
                        <input id="input-password"
                            type="password" 
                            name="password" 
                            placeholder={t('RegisterPlaceholderPassword')} 
                            value={formData.password} 
                            onChange={handleChange} 
                            required
                        />
                        <button id="button_action" type="submit" className="submit-btn">{t('RegisterJoin')}</button>
                    </form>
                </div>
                <div className="popup-login-register">
                        <span id="text_referral">{t('RegisterAlreadyAccount')}</span>
                        <button id="button_referral" onClick={handleToggleLogin}>{t('RegisterSignin')}</button>
                </div>
            </div>
        </div>
    );
};