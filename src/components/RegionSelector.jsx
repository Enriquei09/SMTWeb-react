import React from 'react';
import { useTranslation } from 'react-i18next';
import useRegionStore from '../store/regionStore';
import { useNavigate } from 'react-router-dom';
import './style/RegionSelector.css';
import LogoImg from '../assets/Logo.png';
import TituloImg from '../assets/titulo.png';

const RegionSelector = () => {
  const { t } = useTranslation();
  const setRegion = useRegionStore((s) => s.setRegion);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setRegion(id);
    navigate(`/${id}`);
  };

  return (
    <div className="region-selector-page">
      <div className="region-overlay"></div>
      <div className="region-content">
        <img src={LogoImg} alt="Sabores Logo" className="region-logo-img" />
        <img src={TituloImg} alt="Sabores" className="region-titulo-img" />
        <p className="region-tagline">Traditional Mexican Food</p>
        <h2>{t('region_selector.title')}</h2>
        <p className="region-subtitle">{t('region_selector.subtitle')}</p>

        <div className="region-cards">
          <button className="region-card" onClick={() => handleSelect('mx')}>
            <span className="region-flag">🇲🇽</span>
            <span className="region-name">{t('region_selector.mexico')}</span>
            <span className="region-currency">MXN $</span>
          </button>

          <button className="region-card" onClick={() => handleSelect('ca')}>
            <span className="region-flag">🇨🇦</span>
            <span className="region-name">{t('region_selector.canada')}</span>
            <span className="region-currency">CAD $</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegionSelector;
