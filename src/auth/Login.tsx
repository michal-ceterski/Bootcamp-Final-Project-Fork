import React, {useState, FormEvent} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import "./Login&Register.css";
import { useTranslation } from "react-i18next"

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
    const {t} =useTranslation()
    
    return (
        <div className="popup">
            <div className="popup-content">
                <button id="close-btn" onClick={onClose}>X</button>
                <h3>{t('LoginSignIn')}</h3>
                <div className="popup-body">
                    <form onSubmit={handleSubmit}>
                        <input id="input-login" 
                            type="text" 
                            name="login" 
                            placeholder={t('LoginPlaceholderLogin')} 
                            value={formData.login} 
                            onChange={handleChange} 
                            required 
                        />
                        <input id="input-password"
                            type="password" 
                            name="password" 
                            placeholder={t('LoginPlaceholderPassword')}
                            value={formData.password} 
                            onChange={handleChange} 
                            required
                        />
                        <button id="button_action" type="submit" className="submit-btn">{t('LoginLogin')}</button>
                    </form>
                </div>
                <div className="popup-login-register">
                        <span id="text_referral">{t('LoginNoAccount')}</span>
                        <button id="button_referral" onClick={handleToggleRegister}>{t('LoginSignup')}</button>
                </div>
            </div>
        </div>
    );
};

