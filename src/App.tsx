import './App.css'
import { Routes, Route } from "react-router-dom"

// Importing Pages
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Pokemon from './pages/Pokemon.tsx'
import NotFound from './pages/NotFound.tsx'
import NavBar from './component/NavBar.tsx'




function App() {

  return (
    <>
    
      <NavBar/>

      <main className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/error" element={<NotFound />} />
          {/* For 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

    </>
  )
}

export default App
