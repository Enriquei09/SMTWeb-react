import React from 'react';
import { useTranslation } from 'react-i18next';
import useRegionStore from '../store/regionStore';
import pozole from '../assets/pozole.png';
import fondo1 from '../assets/fondo1.png';
import './style/HeroSection.css';

const HeroSection = () => {
  const { t } = useTranslation();
  const { region } = useRegionStore();
  const getWhatsAppUrl = useRegionStore((s) => s.getWhatsAppUrl);

  const scrollToMenu = () => {
    const section = document.getElementById('menu');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-wrapper" style={{ backgroundImage: `url(${fondo1})` }}>
      <div className="overlay"></div>

      <div className="social-bar">
        <div className="line"></div>
        <ul>
          <li>
            <a href={region.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href={region.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href={region.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
          </li>
        </ul>
        <div className="line"></div>
      </div>

      <section className="hero">
        <div className="hero-text">
          <h1>
            {t('hero.title_1')} <span className="highlight">{t('hero.title_mexico')}</span>{' '}
            {t('hero.title_2')} <span className="highlight">{t('hero.title_bite')}</span>
          </h1>
          <p>{t('hero.subtitle')}</p>
          <div className="buttons">
            <button className="btn-pink" onClick={scrollToMenu}>
              <i className="fas fa-utensils"></i> {t('hero.btn_menu')}
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green"
            >
              <i className="fab fa-whatsapp"></i> {t('hero.btn_whatsapp')}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={pozole} alt="Pozole" loading="lazy" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
