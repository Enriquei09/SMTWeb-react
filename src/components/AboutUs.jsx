import React from 'react';
import { useTranslation } from 'react-i18next';
import './style/AboutUs.css';

import img1 from '../assets/masa.png';
import img2 from '../assets/verduras.png';
import img3 from '../assets/tacoabout.png';
import categoriaImg from '../assets/categoriasComida.png';
import mosaico from '../assets/mosaico.png';

const AboutUs = () => {
  const { t } = useTranslation();

  const scrollToMenu = () => {
    const section = document.getElementById('menu');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="about-section">
      <div className="overlay"></div>

      <div className="about-container">
        <div className="about-text">
          <h4 className="subtitulo">{t('about.subtitle')}</h4>
          <h2>
            <span className="highlight">{t('about.title_1')}</span> {t('about.title_2')}
          </h2>
          <p>{t('about.description')}</p>
          <button className="btn-about" onClick={scrollToMenu}>
            {t('about.btn_read_more')}
          </button>
        </div>

        <div className="about-images">
          <div className="img-large">
            <img src={img1} alt="Masa" loading="lazy" />
          </div>
          <div className="img-small-group">
            <img src={img2} alt="Verduras" loading="lazy" />
            <img src={img3} alt="Taco" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="about-bottom">
        <h4 className="categoria-subtitulo">{t('about.categories_subtitle')}</h4>
        <h2 className="categoria-titulo">
          <span className="highlight">{t('about.categories_title_1')}</span> {t('about.categories_title_2')}
        </h2>

        <div className="categoria-imagen">
          <img src={categoriaImg} alt="Categorías de comida" loading="lazy" />
        </div>

        <div className="about-extra">
          <div className="extra-gallery">
            <img src={mosaico} alt="Mosaico de platillos" className="mosaico-unico" loading="lazy" />
          </div>

          <div className="extra-info">
            <h4 className="porque-subtitulo">{t('about.why_subtitle')}</h4>
            <h2>
              <span className="highlight">{t('about.why_title_1')}</span> {t('about.why_title_2')} <br />
              <span className="highlight">{t('about.why_title_3')}</span>
            </h2>
            <p>{t('about.why_description')}</p>
            <p><strong>{t('about.why_soul')}</strong></p>

            <div className="iconos-servicios">
              <div className="icono-bloque">
                <i className="fas fa-utensils"></i>
                <span>{t('about.service_antojitos')}</span>
              </div>
              <div className="icono-bloque">
                <i className="fas fa-drumstick-bite"></i>
                <span>{t('about.service_barbacoa')}</span>
              </div>
              <div className="icono-bloque">
                <i className="fas fa-glass-martini-alt"></i>
                <span>{t('about.service_drinks')}</span>
              </div>
            </div>

            <div className="tarjeta-anios">
              <strong>{t('about.years_number')}</strong><br />
              <span>{t('about.years_label')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
