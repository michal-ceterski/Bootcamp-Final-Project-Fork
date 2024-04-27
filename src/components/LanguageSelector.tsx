import React from "react";
import { useTranslation, } from "react-i18next"

export const LanguageSelector = ()=>{

    const {t, i18n} =useTranslation()
    
    if(localStorage.i18nextLng !== 'PL' ){
        return ( 
        <select id ='LngSelector'onChange={(e)=>{
            i18n.changeLanguage(e.target.value)
        }}>
            <option value='EN' >EN</option> 
                        <option value='PL' >PL</option> 

        </select>
        )
    }
    else if(localStorage.i18nextLng === 'PL'){
        return(
            <select id ='LngSelector'onChange={(e)=>{
            
                i18n.changeLanguage(e.target.value)

            }}> 
            <option value='PL' >PL</option> 
                <option value='EN' >EN</option> 
                        
            </select>
        )
    }
   
   

}