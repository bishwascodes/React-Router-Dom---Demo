import { Link } from "react-router-dom"

export default function NavBar(){
    return (
      <header className="bg-dark mb-4">
        <nav className="nav justify-content-center py-2">
          <li className='nav-item'>
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className='nav-item'>
            <Link className="nav-link text-white" to="/about">About</Link>
          </li>
          <li className='nav-item'>
            <Link className="nav-link text-white" to="/pokemon">Pokemon</Link>
          </li>
          <li className='nav-item'>
            <Link className="nav-link text-white" to="/contact">Contact</Link>
          </li>
        </nav>
      </header>
    )
} 