import React from 'react';
import './style/Footer.css';
import img1 from '../assets/barbacoa1.png';
import img2 from '../assets/barbacoa2.png';
import img3 from '../assets/barbacoa3.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
       <h2><span className="highlight">More</span> about us</h2>

        <div className="footer-gallery">
          <div className="gallery-item">
            <img src={img1} alt="Barbacoa 1" />
            <div className="play-btn"><i className="fas fa-play"></i></div>
          </div>
          <div className="gallery-item">
            <img src={img2} alt="Barbacoa 2" />
            <div className="play-btn"><i className="fas fa-play"></i></div>
          </div>
          <div className="gallery-item">
            <img src={img3} alt="Barbacoa 3" />
            <div className="play-btn"><i className="fas fa-play"></i></div>
          </div>
        </div>

        <div className="newsletter">
          <p><span className="highlight">¿Do you need </span> our support?</p>
          <small>Don't wait, make a smart and logical quote here.</small>
          <form>
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>

      <div className="footer-links">
        <div className="col">
          <h4>About Us.</h4>
          <p>Corporate clients and travelers have trusted Sabores for safe, professional service and traditional Mexican-style cuisine in the heart of Canada.</p>
          <div className="horario">
            <i className="fas fa-clock"></i>
            <span>Opening hours:<br />Monday–Sunday: 10:00am - 10:00pm</span>
          </div>
        </div>
        <div className="col">
          <h4>Useful Links</h4>
          <ul>
            <li>About</li>
            <li>News</li>
            <li>Partners</li>
            <li>Team</li>
            <li>Menu</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="col">
          <h4>Help?</h4>
          <ul>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Reporting</li>
            <li>Documentation</li>
            <li>Support Policy</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>

     <div className="footer-bottom">
  <span>Copyright © 2025 by BiteBitesInnovations. All Rights Reserved.</span>
  <div className="socials">
    <i className="fab fa-facebook-f"></i>
    <i className="fab fa-twitter"></i>
    <i className="fab fa-instagram"></i>
    <i className="fab fa-youtube"></i>
    <i className="fab fa-pinterest"></i>
  </div>
</div>

    </footer>
  );
};

export default Footer;
