import React, { useState } from 'react';
import './Navbar.css';
import logo from './sem fundo.png'; // Certifique-se de que o logo.png está no mesmo diretório ou ajuste o caminho.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="navbar-logo-image" />
        <span>Afiliados</span>
      </div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/reviews">Reviews</a></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
