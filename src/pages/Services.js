import React from 'react';
import './Home.css';
import serviceimg from '../assets/services.png';

const Services = () => {
  return (
    <>
      <div className="hero">
        <h1>Our Services</h1>
        <p>Delivering reliable, scalable, and custom technology solutions.</p>
      </div>

      <div className="intro">
        <div className="left">
          <h3>What We Offer</h3>
          <p>
            We specialize in delivering innovative digital solutions, helping businesses grow through custom technology tailored to their needs.
          </p>
          <p>
            From web and app development to SEO, UI/UX, and design, we bring your vision to life with precision, creativity, and reliability.
          </p>
        </div>
        <div className="right">
          <img
            src={serviceimg}
            alt="Our Services"
            className="introimg"
          />
        </div>
      </div>

      <div className="services">
        <h3>Our Expertise</h3>
        <p>Explore the core areas where we empower our clients to grow digitally.</p>

        <div className="cards">
          <div className="card">
            <h4>Web Development</h4>
            <p>Responsive websites that perform seamlessly across devices.</p>
            <button className="learn-more-btn" onClick={() => window.open('https://wa.me/917976465707?text=Hi%20there!%20I%27m%20interested%20in%20your%20services.', '_blank')}>Learn More</button>
          </div>
          <div className="card">
            <h4>App Development</h4>
            <p>Custom mobile apps for Android and iOS platforms.</p>
            <button className="learn-more-btn" onClick={() => window.open('https://wa.me/917976465707?text=Hi%20there!%20I%27m%20interested%20in%20your%20services.', '_blank')}>Learn More</button>
          </div>
          <div className="card">
            <h4>SEO</h4>
            <p>Boost visibility and ranking with effective SEO strategies.</p>
            <button className="learn-more-btn" onClick={() => window.open('https://wa.me/917976465707?text=Hi%20there!%20I%27m%20interested%20in%20your%20services.', '_blank')}>Learn More</button>
          </div>
          <div className="card">
            <h4>Graphics</h4>
            <p>Engaging graphics that capture and communicate your brand message.</p>
            <button className="learn-more-btn" onClick={() => window.open('https://wa.me/917976465707?text=Hi%20there!%20I%27m%20interested%20in%20your%20services.', '_blank')}>Learn More</button>
          </div>
          <div className="card">
            <h4>UI/UX Design</h4>
            <p>User-focused designs for intuitive and engaging experiences.</p>
            <button className="learn-more-btn" onClick={() => window.open('https://wa.me/917976465707?text=Hi%20there!%20I%27m%20interested%20in%20your%20services.', '_blank')}>Learn More</button>
          </div>
          <div className="card">
            <h4>Maintenance</h4>
            <p>Keep your products secure, updated, and performing at their best.</p>
            <button className="learn-more-btn" onClick={() => window.open('https://wa.me/917976465707?text=Hi%20there!%20I%27m%20interested%20in%20your%20services.', '_blank')}>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
