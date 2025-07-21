import React from 'react';
import './style/Barbacoa.css';

const Barbacoa = () => {
  return (
    <section className="barbacoa-section">
      <div className="barbacoa-overlay"></div>
      <div className="barbacoa-content">
        <p className="barbacoa-subtitulo">Fin de semana Mexicana</p>
        <h2>
          <span className="highlight">Barbacoa</span> tradicional
        </h2>
        <p className="disponible">Disponible solo viernes a domingo</p>
        <p className="descripcion">
          Solo <strong>viernes a domingo</strong> Disfruta nuestra barbacoa al estilo Hidalgo: <br />
          carne suave, tortillas a mano, cebolla, cilantro y su respectivo consomé bien calientito.
        </p>
        <p className="frase">Un sabor que no se olvida y se sirve con amor.</p>

        <div className="botones-barbacoa">
          <button className="btn-barbacoa">Ver menú</button>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="btn-tiktok">
            <i className="fab fa-tiktok"></i> Ver TikTok
          </a>
        </div>
      </div>
    </section>
  );
};

export default Barbacoa;
