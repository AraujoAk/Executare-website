import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo Executare" className="logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </button>
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <img src={logo} alt="Logo Executare" className="logo" />
        <Link to="/" className="nav-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" className="nav-link" onClick={toggleMenu}>
          Sobre Nós
        </Link>
        <Link to="/services" className="nav-link" onClick={toggleMenu}>
          Serviços
        </Link>
        <Link to="/blog" className="nav-link" onClick={toggleMenu}>
          Blog
        </Link>
        <Link to="/contact" className="nav-link" onClick={toggleMenu}>
          Contato
        </Link>
        <Link
          to="/client-area" // Corrigido para a rota do React Router
          className="cta-button"
          onClick={toggleMenu}
        >
          Área do Cliente
        </Link>
      </nav>
    </header>
  );
};

export default Header;