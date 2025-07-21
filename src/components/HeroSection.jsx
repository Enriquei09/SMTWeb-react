import React from 'react';
import pozole from '../assets/pozole.png';
import fondo1 from '../assets/fondo1.png';
import './style/HeroSection.css';

const HeroSection = () => (
  <div className="hero-wrapper" style={{ backgroundImage: `url(${fondo1})` }}>
    <div className="overlay"></div>

    {/* Barra lateral de redes sociales */}
    <div className="social-bar">
      <div className="line"></div>
      <ul>
        <li><i className="fab fa-facebook-f"></i></li>
        <li><i className="fab fa-twitter"></i></li>
        <li><i className="fab fa-pinterest-p"></i></li>
      </ul>
      <div className="line"></div>
    </div>

    <section className="hero">
      <div className="hero-text">
        <h1>
          A little piece of <span className="highlight">Mexico</span> in each <span className="highlight">bite-sized</span>
        </h1>
        <p>Authentic Mexican food in Kelowna. Made with love, flavor, and tradition.</p>
        <div className="buttons">
          <button className="btn-pink">See Menu</button>
          <button className="btn-green">Order by WhatsApp</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={pozole} alt="Pozole" />
      </div>
    </section>
  </div>
);

export default HeroSection;
