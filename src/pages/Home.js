import './Home.css';
import introimg from '../assets/introimage.png';
import chooseimg from '../assets/choose.jpg';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Empowering Your Digital Transformation</h1>
        <p>Nexure Technologies delivers cutting-edge solutions to accelerate your <br/>growth and innovation in the ever-evolving digital landscape.</p>
        <div className="button-group">
          <button className="btn btn-primary"> <Link to="/services">Our Services </Link><span className="arrow">→</span>
          </button>
          <button className="btn btn-outline" 
          onClick={() => window.open('https://wa.me/917976465707?text=Hi%20there!%20I%27m%20interested%20in%20your%20services.', '_blank')}>Learn More</button>
        </div>
      </section>
      <section className='intro'>
        <div className='left'>
          <h3>Pioneering Digital <br/> Solutions for a Connected World</h3>
          <p>At Nexure Technologies, we are at the forefront of technological innovation. We specialize in crafting bespoke digital solutions that empower businesses to thrive in an ever-evolving landscape. Our mission is to transform your vision into reality through cutting-edge technology and strategic insights. <br/><br/>From dynamic enterprise systems to agile startup platforms, we deliver excellence and drive growth. Discover how our expertise can elevate your business.</p>
        </div>
        <div className='right'>
          <img src={introimg} className='introimg' alt=''/>
        </div>
      </section>
      <section className='services'>
        <h3>Our Core Services</h3>
        <p>We provide a wide array of technology services tailored to meet your business needs and drive success.</p>
        <div className='cards'>
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
      </section>
      <section className='choose-us'>
        <div className='left-img'>
          <img src={chooseimg} alt="" className='leftchooseimg'/>
        </div>
        <div className='right-choose'>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>Expert Team</li>
            <li>Fast Delivery</li>
            <li>Affordable Pricing</li>
            <li>Custom Development</li>
            <li>Client-Centric Approach</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Home
