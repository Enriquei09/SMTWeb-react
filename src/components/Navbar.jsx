import React, { useState } from 'react';
import './style/Navbar.css';
import Logo from '../assets/titulo.png';
import Decoracion from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Cierra menú en móvil
    }
  };

  return (
    <header className="navbar">
      <div className="overlay"></div>

      <div className="navbar-row">
        {/* Logo y botón hamburguesa */}
        <div className="navbar-left">
          <img src={Logo} alt="Sabores" className="titulo-img" />

          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>

          <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('barbacoa')}>Menú</li>
            <li onClick={() => scrollToSection('footer')}>Páginas</li>
            <li onClick={() => scrollToSection('about')}>Acerca de</li>
            <li onClick={() => scrollToSection('ubicacion')}>Ubicación</li>
          </ul>
        </div>

        {/* Ícono decorativo */}
        <div className="navbar-right">
          <img src={Decoracion} alt="Decoración" className="decor-img" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
