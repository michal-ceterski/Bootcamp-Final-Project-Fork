import { useEffect } from "react"
import './Toaster.css'

type Toasterprops = {
    text: string,
    setisFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
    isFormSubmitted: boolean,
    iconClass: string
}


export const Toaster = ({iconClass, text, setisFormSubmitted,isFormSubmitted}: Toasterprops )=>{

    useEffect(()=> {
    setTimeout(()=>setisFormSubmitted(false), 3000)},[])

    return (
        <>
        
        <div className='toast'> 
        <i className={iconClass}></i>
        {text}
        </div>
        </>
    )
}