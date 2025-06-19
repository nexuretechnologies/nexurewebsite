import React from 'react';
import './Home.css';
import telephone from '../assets/telephone.png';

const ContactUs = () => {
  return (
    <>
      <div className="hero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out with any questions or ideas!</p>
      </div>

      <div className="intro">
        <div className="left">
          <h3>Get in Touch</h3>
          <p>
            Whether you're looking for a tech partner, have a question about our services, or just want to say hello — we're here for you.
          </p>
          <ul style={{ listStyleType: 'none', paddingLeft: 0, fontSize: '1.1rem', color: '#fff' }}>
            <li><strong>Email:</strong> nexuretechnologies@gmail.com</li>
            <li><strong>Phone:</strong> +91 7976465707</li>
            <li><strong>Address:</strong> Remote</li>
          </ul>
        </div>
        <div className="right">
          <img
            src={telephone}
            alt="Contact Us"
            className="introimg"
          />
        </div>
      </div>

      <div className="services">
        <h3>Send a Message</h3>
        <p>Fill out the form and we’ll get back to you shortly.</p>

        <form
          className="card"
          style={{
            padding: '2rem',
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#fff',
            alignItems: 'stretch'
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{ padding: '0.75rem', marginBottom: '1rem', borderRadius: '6px', border: '1px solid lightgray' }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{ padding: '0.75rem', marginBottom: '1rem', borderRadius: '6px', border: '1px solid lightgray' }}
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            style={{ padding: '0.75rem', marginBottom: '1rem', borderRadius: '6px', border: '1px solid lightgray', resize: 'none' }}
          ></textarea>
          <button type="submit" className="learn-more-btn">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
