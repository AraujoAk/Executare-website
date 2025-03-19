import React, { useEffect } from "react";
import "../styles/Contact.css";

const Contact = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in, .fade-in-card, .bounce-in");
    elements.forEach((el) => {
      el.classList.add("visible");
    });
  }, []);

  return (
    <div className="contact-container">
      {/* Banner */}
      <section className="contact-banner-section fade-in">
        <h1 className="contact-banner-title bounce-in">Entre em Contato Conosco</h1>
        <p className="contact-banner-description fade-in">
          Estamos aqui para ajudar você a solucionar dúvidas e encontrar as melhores soluções contábeis para o seu negócio.
        </p>
      </section>

      {/* Formulário de Contato */}
      <section className="contact-form-section fade-in">
        <h2 className="contact-form-title bounce-in">Envie uma Mensagem</h2>
        <form className="contact-form">
          <input type="text" className="contact-input fade-in-card" placeholder="Seu Nome" required />
          <input type="email" className="contact-input fade-in-card" placeholder="Seu Email" required />
          <textarea className="contact-textarea fade-in-card" placeholder="Sua Mensagem" rows="5" required></textarea>
          <button type="submit" className="contact-submit-button bounce-in">Enviar</button>
        </form>
      </section>

      {/* Informações de Contato */}
      <section className="contact-info-section fade-in">
        <h2 className="contact-info-title bounce-in">Informações de Contato</h2>
        <div className="contact-info-grid">
          <div className="contact-info-item fade-in-card">
            <i className="fas fa-phone-alt contact-icon"></i>
            <h3 className="contact-info-heading">Telefone</h3>
            <p className="contact-info-text"><a href="tel:+5584999848448">84 99984-8448</a></p>
          </div>
          <div className="contact-info-item fade-in-card">
            <i className="fas fa-envelope contact-icon"></i>
            <h3 className="contact-info-heading">Email</h3>
            <p className="contact-info-text">
              <a href="mailto:executarecont@gmail.com">executarecont@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-item fade-in-card">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <h3 className="contact-info-heading">Endereço</h3>
            <p className="contact-info-text">
              Rua Jaguarari 2281, sala 11, Lagoa Nova, Natal/RN
            </p>
          </div>
        </div>
      </section>

      {/* Mapa Integrado */}
      <section className="contact-map-section fade-in">
        <h2 className="contact-map-title bounce-in">Nosso Local</h2>
        <iframe
          className="contact-map fade-in-card"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31564.394820126394!2d-35.21762866557619!3d-5.821545895560456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff870d05a95f%3A0x5e54a1d6c09ad16c!2sRua%20Jaguarari%2C%202281%20-%20Lagoa%20Nova%2C%20Natal%20-%20RN!5e0!3m2!1spt-BR!2sbr!4v1710773839077!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
