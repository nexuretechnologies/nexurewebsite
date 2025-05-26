import React from 'react';
import './Home.css'; 
import about from '../assets/about.png';

const AboutUs = () => {
  return (
    <>
      <div className="hero">
        <h1>About Us</h1>
        <p>Learn more about who we are and what we do.</p>
      </div>

      <div className="intro">
        <div className="left">
          <h3>Our Mission</h3>
          <p>
            We are a team of passionate developers, designers, and strategists committed to building high-quality digital solutions that empower businesses to grow in the modern age.
          </p>
          <p>
            Since our inception, we have focused on combining innovation with functionality. Our goal is to provide seamless user experiences and scalable applications across web and mobile platforms.
          </p>
        </div>
        <div className="right">
          <img
            src={about}
            alt="About us"
            className="introimg"
          />
        </div>
      </div>

      <div className="services">
        <h3>Our Values</h3>
        <p>We believe in excellence, integrity, and long-term partnerships.</p>

        <div className="cards">
          <div className="card">
            <h4>Innovation</h4>
            <p>Always adapting and pushing boundaries with cutting-edge tech.</p>
          </div>
          <div className="card">
            <h4>Transparency</h4>
            <p>Clear communication and honest collaboration at every step.</p>
          </div>
          <div className="card">
            <h4>Client Success</h4>
            <p>Your growth is our priority. We measure our success by yours.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
