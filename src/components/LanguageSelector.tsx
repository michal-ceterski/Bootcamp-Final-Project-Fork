// import React from "react";
// import { useTranslation, } from "react-i18next"

export const LanguageSelector = ()=>{

    const {t, i18n} =useTranslation()

    return ( 
        <select value={localStorage.i18nextLng === 'PL'? 'PL': 'EN'} onChange={(e)=>{
            i18n.changeLanguage(e.target.value)
        }}>
            <option value='EN' >EN</option> 
            <option value='PL' >PL</option> 

        </select>
        )    
    }

