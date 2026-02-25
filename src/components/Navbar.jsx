import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import useRegionStore from '../store/regionStore';
import './style/Navbar.css';
import Logo from '../assets/titulo.png';
import Decoracion from '../assets/Logo.png';

const Navbar = () => {
  const { t } = useTranslation();
  const { regionId, region, setRegion } = useRegionStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (location.pathname === `/${regionId}`) {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${regionId}`);
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const goToMenu = () => {
    setIsOpen(false);
    const section = document.getElementById('menu');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleRegion = () => {
    const newRegion = regionId === 'mx' ? 'ca' : 'mx';
    setRegion(newRegion);
    const path = location.pathname.replace(`/${regionId}`, `/${newRegion}`);
    navigate(path || `/${newRegion}`);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-row">
        <div className="navbar-left">
          <img
            src={Logo}
            alt="Sabores"
            className="titulo-img"
            onClick={() => scrollToSection('home')}
            style={{ cursor: 'pointer' }}
          />

          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          <nav>
            <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
              <li onClick={() => scrollToSection('home')}>
                <i className="fas fa-home"></i> {t('nav.home')}
              </li>
              <li onClick={goToMenu}>
                <i className="fas fa-utensils"></i> {t('nav.menu')}
              </li>
              <li onClick={() => scrollToSection('about')}>
                <i className="fas fa-info-circle"></i> {t('nav.about')}
              </li>
              <li onClick={() => scrollToSection('ubicacion')}>
                <i className="fas fa-map-marker-alt"></i> {t('nav.location')}
              </li>
              <li onClick={() => scrollToSection('footer')}>
                <i className="fas fa-envelope"></i> {t('nav.contact')}
              </li>
            </ul>
          </nav>
        </div>

        <div className="navbar-center">
          <img src={Decoracion} alt="Sabores Logo" className="decor-img" />
        </div>

        <div className="navbar-right">
          <button className="region-toggle" onClick={toggleRegion} aria-label="Change region">
            <span className="region-toggle-flag">{region.flag}</span>
            <span className="region-toggle-label">{regionId.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
