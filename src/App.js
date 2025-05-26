// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'

function App() {
  const lenisOptions = {
    lerp: 0.04,
    duration: 1.5,
    smoothTouch: true,
    smooth: true,
    syncTouch: false,
    direction: 'vertical',
    gestureDirection: 'vertical',
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  };
  return (
    <Router>
      <Navbar />
          <ReactLenis root options={lenisOptions}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      </ReactLenis>
      <Footer />
    </Router>
  )
}

export default App
