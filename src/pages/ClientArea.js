import React, { useEffect } from "react";
import "../styles/ClientArea.css";
import logo from "../assets/logo.png";

const ClientArea = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".client-area-fade-in");
    elements.forEach((el) => {
      el.classList.add("visible");
    });
  }, []);

  return (
    <div className="client-area-container">
      {/* Banner */}
      <section className="client-area-banner client-area-fade-in">
        <div className="banner-content">
          <img src={logo} alt="Logo Executare" className="banner-logo" />
          <h1 className="banner-title">Bem-vindo à Área do Cliente</h1>
          <p className="banner-description">
            As ferramentas e recursos essenciais para facilitar sua gestão contábil.
          </p>
        </div>
      </section>

      {/* Links Úteis */}
      <section className="client-area-links client-area-fade-in">
        <h2 className="section-title">Acesso Rápido</h2>
        <div className="links-grid">
          <div className="link-card client-area-fade-in">
            <i className="fas fa-file-alt card-icon"></i>
            <h3 className="card-title">Faturas</h3>
            <p className="card-description">
              Gerencie suas faturas e acompanhe os pagamentos.
            </p>
          </div>
          <div className="link-card client-area-fade-in">
            <i className="fas fa-chart-line card-icon"></i>
            <h3 className="card-title">Relatórios</h3>
            <p className="card-description">
              Obtenha relatórios detalhados para análise.
            </p>
          </div>
          <div className="link-card client-area-fade-in">
            <i className="fas fa-user-cog card-icon"></i>
            <h3 className="card-title">Suporte Técnico</h3>
            <p className="card-description">
              Encontre ajuda personalizada para suas dúvidas.
            </p>
          </div>
        </div>
      </section>

      {/* Portal do Cliente */}
      <section className="client-area-portal client-area-fade-in">
        <h2 className="portal-title">Acesse o Portal do Cliente</h2>
        <p className="portal-description">
          Gerencie seus serviços e acesse suas informações de forma segura e prática.
        </p>
        <a
          href="https://auth.thomsonreuters.com/u/login/password?state=hKFo2SA5WjlYV0VZeVZTUFpmOGtLUXRZX1ZuR3JKTzRyXzhsM6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHlPZWZjVkZ6cGI4WmZTdzNic1BSckRNVzBZSktZSzJoo2NpZNkgWXc3dnloRUtnZ3R2OTlGZE1xNUVERlR5VjVTRFpGdUk&ui_locales=pt-BR"
          target="_blank"
          rel="noopener noreferrer"
          className="portal-button"
        >
          Acessar Portal do Cliente
        </a>
      </section>

      {/* Fale Conosco (WhatsApp) */}
      <section className="client-area-contact client-area-fade-in">
        <h2 className="contact-title">Fale Conosco</h2>
        <p className="contact-description">
          Precisa de suporte? Entre em contato diretamente pelo WhatsApp.
        </p>
        <a
          href="https://wa.me/5584999848448"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <i className="fab fa-whatsapp"></i> Conversar no WhatsApp
        </a>
      </section>
    </div>
  );
};

export default ClientArea;
