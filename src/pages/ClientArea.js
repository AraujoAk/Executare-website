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

      {/* Ajuda */}
      <section className="client-area-help client-area-fade-in">
        <h2 className="section-title">Como Podemos Ajudar?</h2>
        <p className="help-description">
          Entre em contato com nossa equipe para suporte técnico ou informações adicionais.
        </p>
        <button className="help-button">Fale Conosco</button>
      </section>
    </div>
  );
};

export default ClientArea;
