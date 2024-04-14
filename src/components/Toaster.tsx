import { useEffect } from "react"
import './Toaster.css'

type Toasterprops = {
    text: string,
    setisEmailSent: React.Dispatch<React.SetStateAction<boolean>>,
    isEmailSent: boolean,
    iconClass: string
}


export const Toaster = ({iconClass, text, setisEmailSent,isEmailSent}: Toasterprops )=>{

    useEffect(()=> {
    setTimeout(()=>setisEmailSent(false), 3000)},[])

    return (
        <>
        
        <div className='toast'> 
        <i className={iconClass}></i>
        {text}
        </div>
        </>
    )
}