import React from 'react';
import { useTranslation } from 'react-i18next';
import useRegionStore from '../store/regionStore';
import './style/Barbacoa.css';

const Barbacoa = () => {
  const { t } = useTranslation();
  const { region } = useRegionStore();

  const scrollToMenu = () => {
    const section = document.getElementById('menu');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="barbacoa-section">
      <div className="barbacoa-overlay"></div>
      <div className="barbacoa-content">
        <p className="barbacoa-subtitulo">{t('barbacoa.subtitle')}</p>
        <h2>
          <span className="highlight">{t('barbacoa.title_1')}</span> {t('barbacoa.title_2')}
        </h2>
        <p className="disponible">{region.barbacoa.displayText}</p>
        <p className="descripcion">{t('barbacoa.description')}</p>
        <p className="frase">{t('barbacoa.phrase')}</p>

        <div className="botones-barbacoa">
          <button className="btn-barbacoa" onClick={scrollToMenu}>
            <i className="fas fa-utensils"></i> {t('barbacoa.btn_menu')}
          </button>
          <a
            href={region.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tiktok"
          >
            <i className="fab fa-tiktok"></i> {t('barbacoa.btn_tiktok')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Barbacoa;
