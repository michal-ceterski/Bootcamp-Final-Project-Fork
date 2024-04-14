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
import { AuthProvider } from './auth/AuthContext';

function App() {
  const [count, setCount] = useState<number>(0)
  
  const [loginPopupVisible, setLoginPopupVisible] = useState(false);
  const {setID}=useContext(UserContext)
  
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if(user){const ID=user.uid
      setID(ID)}
    })
    return unsubscribe
  }, [])

 
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ourrooms" element={<RoomDescription setLoginPopupVisible={setLoginPopupVisible}/>} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
      
        <Footer/>
      
        </BrowserRouter>
      </AuthProvider>
      
    </>
  )
}

export default App;
