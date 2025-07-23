import React from 'react';
import './style/AboutUs.css';

import img1 from '../assets/masa.png';
import img2 from '../assets/verduras.png';
import img3 from '../assets/tacoabout.png';
import categoriaImg from '../assets/categoriasComida.png'; // imagen completa de las 4 comidas
import mosaico from '../assets/mosaico.png';


const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="overlay"></div>

      <div className="about-container">
        <div className="about-text">
          <h4 className="subtitulo">About us</h4>
          <h2>
            <span className="highlight">Always</span> with the greatest tradition
          </h2>
          <p>
            Sabores was born from a love of traditional Mexican cuisine. From fresh guacamole
            to homemade weekend burritos, our commitment is to deliver authentic flavors, served
            with heart in the heart of Canada.
          </p>
          <button className="btn-about">Read More</button>
        </div>

        <div className="about-images">
          <div className="img-large">
            <img src={img1} alt="Masa" />
          </div>
          <div className="img-small-group">
            <img src={img2} alt="Verduras" />
            <img src={img3} alt="Taco" />
          </div>
        </div>
      </div>

      {/* Sección de Categorías y Tradición */}
      <div className="about-bottom">
        <h4 className="categoria-subtitulo">Categories</h4>
        <h2 className="categoria-titulo"><span className="highlight">Choose</span> your food</h2>

        <div className="categoria-imagen">
          <img src={categoriaImg} alt="Categorías de comida" />
        </div>

        <div className="about-extra">
       <div className="extra-gallery">
  <img src={mosaico} alt="Mosaico de platillos" className="mosaico-unico" />
</div>



          <div className="extra-info">
  <h4 className="porque-subtitulo">Why choose us?</h4>
  <h2>
             <span className="highlight">Authentic</span> tradition and  <br />
    Auténtico <span className="highlight">Mexican</span>
  </h2>
           <p>
    At Sabores Ca, we bring the most traditional flavors of Mexico to Canada.
From handmade tacos to weekend barbacoa, each dish is prepared
with fresh ingredients, homemade seasoning, and a touch of love.
  </p>
  <p><strong>It's not just fast food, it's food with soul!</strong></p>
    

           <div className="iconos-servicios">
    <div className="icono-bloque">
      <i className="fas fa-utensils"></i>
      <span>Antojitos</span>
    </div>
    <div className="icono-bloque">
      <i className="fas fa-drumstick-bite"></i>
      <span>Barbacoa</span>
    </div>
    <div className="icono-bloque">
      <i className="fas fa-glass-martini-alt"></i>
      <span>Drinks</span>
    </div>
  </div>

             <div className="tarjeta-anios">
    <strong>10+</strong><br />
    <span>Years of Tradition</span>
  </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
