import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className='logo' alt=''/>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
