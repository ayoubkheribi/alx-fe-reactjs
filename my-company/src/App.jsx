import React from 'react'
import About from './components/About'
import {BrowserRouter,Router, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App(){
  return (
      <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Services' element={<Services/>} />
        </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App
