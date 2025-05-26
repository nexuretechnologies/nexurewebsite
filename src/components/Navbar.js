import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <img src={logo} className='logo' alt=''/>
      
      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Menu */}
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {/* Logo in mobile menu */}
        <div className="mobile-logo">
          <img src={logo} alt='' />
        </div>
        
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      <div 
        className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>
    </nav>
  )
}

export default Navbar