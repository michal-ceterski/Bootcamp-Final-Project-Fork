import { useEffect } from "react"
import './Toaster.css'

type Toasterprops = {
    text: string,
    setisFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
    isFormSubmitted: boolean,
    iconClass: string,
    iconID: string,
    error: boolean,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
}


export const Toaster = ({iconClass, text, setisFormSubmitted,isFormSubmitted, error, setError,iconID}: Toasterprops )=>{

    useEffect(()=> {
    setTimeout(()=>setisFormSubmitted(false), 2000)},[])
    useEffect(()=> {
    setTimeout(()=>setError(false), 2000)},[])

    return (
        <>
        
        <div className='toast'> 
        <i id = {iconID} className={iconClass}></i>
        {text}
        </div>
        </>
    )
}