import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"


// Importing Pages
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Pokemon from './pages/Pokemon.tsx'




function App() {

return (
  <>

    <BrowserRouter>
      <header>
        <nav>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/pokemon">Pokemon</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </nav>
      </header>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  </>
)
}

export default App
