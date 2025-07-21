import React from 'react';
import './style/Barbacoa.css';

const Barbacoa = () => {
  return (
    <section className="barbacoa-section">
      <div className="barbacoa-overlay"></div>
      <div className="barbacoa-content">
        <p className="barbacoa-subtitulo">Mexican Weekend</p>
        <h2>
          <span className="highlight">Traditiona</span> Barbacoa
        </h2>
        <p className="disponible">Available only Friday to Sunday</p>
        <p className="descripcion">
              Friday to Sunday only. Enjoy our Hidalgo-style barbacoa: <br />
              tender meat, handmade tortillas, onion, cilantro, and a piping hot broth.
              </p>
        <p className="frase">A flavor that is not forgotten and is served with love.</p>

        <div className="botones-barbacoa">
          <button className="btn-barbacoa">View menu</button>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="btn-tiktok">
            <i className="fab fa-tiktok"></i> View TikTok
          </a>
        </div>
      </div>
    </section>
  );
};

export default Barbacoa;
