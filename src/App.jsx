import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes ,useLocation,useNavigate } from 'react-router-dom'
import EnergyAssets from './Pages/EnergyAssets'
import Features from './Pages/Features'
import Aboutus from './Pages/Aboutus'
import ScrollTop from './Components/ScrollTop'

function App() {




  return (
    <>
       <BrowserRouter >
       <ScrollTop>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/energy" element={<EnergyAssets/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
        </Routes>
        </ScrollTop>
      </BrowserRouter>
    </>
  )
}

export default App
