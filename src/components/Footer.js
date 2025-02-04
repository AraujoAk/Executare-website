import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Informações Principais */}
      <div className="footer-main">
        <div className="footer-logo-section">
          <img src={logo} alt="Logo Executare" className="logo" />
          <p className="footer-description">
            Soluções inovadoras em contabilidade e gestão para impulsionar seu
            sucesso.
          </p>
        </div>

        {/* Links Úteis */}
        <div className="footer-links-section">
          <h3 className="footer-links-title">Links Úteis</h3>
          <ul className="footer-links-list">
            <li>
              <a href="/" className="footer-link">Home</a>
            </li>
            <li>
              <a href="/services" className="footer-link">Serviços</a>
            </li>
            <li>
              <a href="/about" className="footer-link">Sobre Nós</a>
            </li>
            <li>
              <a href="/blog" className="footer-link">Blog</a>
            </li>
            <li>
              <a href="/contact" className="footer-link">Contato</a>
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className="footer-social-section">
          <h3 className="footer-social-title">Conecte-se Conosco</h3>
          <div className="footer-social-icons">
            <a href="#" className="footer-social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="footer-social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="footer-social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="footer-social-icon">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé Inferior */}
      <div className="footer-bottom">
        <p>© 2025 Executare. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;