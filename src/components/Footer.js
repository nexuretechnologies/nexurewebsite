import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <img src={logo} alt='' className='footer-logo'/>
          <p>Innovating technology solutions for a brighter future. We help businesses thrive in the digital age.</p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> Remote</p>
          <p><FaEnvelope /> nexuretechnologies@gmail.com</p>
          <p><FaPhone /> +91 7976465707</p>
        </div>

        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-bottom">© 2025 Nexure Technologies. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
