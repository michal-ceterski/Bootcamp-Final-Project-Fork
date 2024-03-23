import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from  './components/Header';
import { Login} from "./auth/Login";
import { Register } from "./auth/Register";
import { Home } from "./components/Home";
// import firebase from 'firebase/app';
// import 'firebase/database';

import Gallery from './components/Gallery';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='login' element={<Login />}> </Route>
        <Route path='register' element={<Register />}> </Route>
      </Routes>
      </BrowserRouter>
      <Gallery>
      </Gallery>
    </>
  )
}

export default App;
