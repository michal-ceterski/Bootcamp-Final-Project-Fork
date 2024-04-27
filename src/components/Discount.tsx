import React, { FormEvent } from "react";
import './Discount.css'
import { db } from "../api/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next"

const Discount = () => {

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault()
        const docRef = addDoc(collection(db, "users"), {
            email: e.target.email.value,
        });
        e.target.email.value = "";
    }
    const {t} =useTranslation()
    return (
        <div className="discount_container">
        <img className="discount-img" src="https://www.humanproofdesigns.com/wp-content/uploads/2020/12/discount.png" alt="discount image"/>
        <div className="text-container">
        <div className="discount-title">{t('discountHeader')}</div>
        <div>{t('discountHeader2')}</div>
        <form onSubmit={handleSubmit}>
             <label htmlFor="email">{t('discountEmail')}</label><br></br>
             <input type="email" id="email"  name="email" required/><br></br>
             <input type="checkbox" id="agreed" name="agreed" value="Agreed" required/>
             <label htmlFor="agreed"> {t('discountConsent')}</label><br></br>
             <input type="submit" id="submit" name="submit" value="Submit"/>
        </form>
        </div>
        </div>
    )
}

export default Discount;