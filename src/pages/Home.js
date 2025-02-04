import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="fade-in">
            Bem-vindo à <span className="highlight-text">Executare</span>
          </h1>
          <p className="fade-in-delayed">
            Sua parceira estratégica para transformar gestão contábil em resultados.
          </p>
          <button className="cta-button bounce-in">Fale com um Especialista</button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <h2>
          <span className="highlight-text">Por que</span> nos Escolher?
        </h2>
        <div className="highlights">
          <div className="highlight slide-in-left">
            <i className="fas fa-chart-pie"></i>
            <h3>Planejamento</h3>
            <p>
              Estratégias personalizadas para cada cliente, maximizando resultados.
            </p>
          </div>
          <div className="highlight fade-in-delayed">
            <i className="fas fa-user-shield"></i>
            <h3>Segurança</h3>
            <p>Confiança total no cuidado com suas informações financeiras.</p>
          </div>
          <div className="highlight slide-in-right">
            <i className="fas fa-rocket"></i>
            <h3>Resultados</h3>
            <p>
              Soluções rápidas e eficazes para impulsionar o crescimento da sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="fade-in">Depoimentos de Clientes</h2>
        <div className="testimonials">
          <div className="testimonial-card zoom-in">
            <p>
              "Trabalhar com a Executare foi um divisor de águas para nossa empresa.
              A expertise deles em contabilidade nos trouxe paz e crescimento."
            </p>
            <span>- Ana Beatriz</span>
          </div>
          <div className="testimonial-card zoom-in-delayed">
            <p>
              "Graças à Executare, nosso fluxo financeiro foi otimizado de forma
              impressionante!"
            </p>
            <span>- João Pedro</span>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2 className="slide-in-bottom">
          Pronto para <span className="highlight-text">Começar?</span>
        </h2>
        <button className="cta-button-secondary fade-in">
          Solicite sua Consultoria Gratuita
        </button>
      </section>
    </div>
  );
};

export default Home;
