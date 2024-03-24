
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from  './components/Header';
import { Login} from "./auth/Login";
import { Register } from "./auth/Register";
import { Home } from "./components/Home";
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import BookingForm from './components/Booking';
import ContactForm from './components/ContactForm'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='login' element={<Login />}> </Route>
        <Route path='register' element={<Register />}> </Route>
        <Route path="/booking" element={<BookingForm />} />
        <Route path="contact" element={<ContactForm />} />
      </Routes>
      </BrowserRouter>
      <Gallery>
      </Gallery>
      <BookingForm>
      </BookingForm>
      <Footer/>
    </>
  )
}

export default App;
