
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from  './components/Header.tsx';
import { Login} from "./auth/Login.tsx";
import { Register } from "./auth/Register.tsx";
import { Home } from "./components/Home.tsx";
import Footer from './components/Footer';
import Gallery from './components/Gallery';
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
        <Route path="contact" element={<ContactForm />} />
      </Routes>
      </BrowserRouter>
      <Gallery>
      </Gallery>
      <Footer/>
    </>
  )
}

export default App;
