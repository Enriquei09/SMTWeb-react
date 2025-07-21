import React from 'react';
import './style/Ubicacion.css';

const Ubicacion = () => {
  return (
    <section className="ubicacion-section">
      <div className="ubicacion-overlay"></div>

      <div className="ubicacion-container">
        <div className="ubicacion-mapa">
          <h2><span className="highlight">¿Dónde</span> encontrarnos?</h2>
          <iframe
            title="Mapa ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.3760599709734!2d13.419749215799235!3d52.49253857981181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1df1b105d5%3A0x7f889679d7f28e03!2sGazzo!5e0!3m2!1ses!2sde!4v1616782187777!5m2!1ses!2sde"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="ubicacion-info">
          <h3 className="highlight">Dirección</h3>
          <p><strong>Calle Hobrecht 57</strong></p>
          <p>12047</p>
          <p><strong>Berlina</strong></p>
          <p>03098370104</p>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
