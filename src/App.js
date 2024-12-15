import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import About from './Pages/About'
import Header from './Component/Header/Header'
import Mark from './Component/Markquee/Mark'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
     <Header/>
        <main>
        <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/contact" element={<Contact/>}/>
              </Routes>
        </main>
     

      <Mark/>
    </BrowserRouter>
  )
}

export default App
