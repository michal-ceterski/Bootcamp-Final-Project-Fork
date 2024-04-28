import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from  './components/Header';
import { Home } from "./components/Home";
import Footer from './components/Footer';
import BookingForm from './components/Booking';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './api/firebase';
import { UserContext } from './auth/UserContext';
import RoomDescription from './components/RoomDescription';
import AboutUs from './components/AboutUs';
import NotFoundPage from "./components/NotFoundPage";
import { Navigate } from 'react-router-dom';
import { Toaster } from './components/Toaster';
import { useTranslation, } from "react-i18next";

function App() {
  const [count, setCount] = useState<number>(0)
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const {setID}=useContext(UserContext);
  const {t} =useTranslation();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const ID = user.uid;
        setID(ID);
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
    return unsubscribe;
  }, []);

 
  return (
    <>
  
        <BrowserRouter>
        <Header error={error} setError={setError}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ourrooms" element={<RoomDescription/>} />
          <Route path="/booking" element={loggedIn ? (<BookingForm error={error} setError={setError} isFormSubmitted={isFormSubmitted} setisFormSubmitted={setisFormSubmitted}/>) : ( <Navigate replace to={"/"}/>)} />
          <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {isFormSubmitted && <Toaster iconID ='check' iconClass = "fa-solid fa-circle-check" text={t('ConfirmationToast')} error={error} setError={setError} isFormSubmitted={isFormSubmitted} setisFormSubmitted={setisFormSubmitted}/>}
        {error && <Toaster iconID='cross'iconClass = "fa-solid fa-circle-xmark" text={t('ErrorToast')} error={error} setError={setError} isFormSubmitted={isFormSubmitted} setisFormSubmitted={setisFormSubmitted}/>}
        <Footer/>
      
        </BrowserRouter>
  
      
    </>
  )
}

export default App;
