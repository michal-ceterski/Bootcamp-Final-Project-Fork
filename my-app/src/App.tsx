
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
import ContactForm from './components/ContactForm'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
    <Header/>
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
