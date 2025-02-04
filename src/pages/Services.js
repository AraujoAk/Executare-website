import React, { useEffect } from "react";
import "../styles/Services.css";

const Services = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in, .fade-in-card, .bounce-in");
    elements.forEach((el) => {
      el.classList.add("visible");
    });
  }, []);

  return (
    <div className="services-container">
      {/* Banner */}
      <section className="services-banner-section fade-in">
        <h1 className="services-banner-title bounce-in">Nossos Serviços</h1>
        <p className="services-banner-description fade-in">
          Soluções personalizadas para atender às suas necessidades financeiras e contábeis.
        </p>
      </section>

      {/* Lista de Serviços */}
      <section className="services-list-section fade-in">
        <h2 className="services-list-title bounce-in">O que Oferecemos</h2>
        <div className="services-list-grid">
          <div className="service-card fade-in-card">
            <i className="fas fa-chart-line service-icon"></i>
            <h3 className="service-title">Contabilidade Geral</h3>
            <p className="service-description">
              Gerenciamento completo da contabilidade empresarial.
            </p>
            <button className="service-more-button bounce-in">Saiba Mais</button>
          </div>
          <div className="service-card fade-in-card">
            <i className="fas fa-file-invoice service-icon"></i>
            <h3 className="service-title">Consultoria Tributária</h3>
            <p className="service-description">
              Planejamento estratégico para otimizar impostos.
            </p>
            <button className="service-more-button bounce-in">Saiba Mais</button>
          </div>
          <div className="service-card fade-in-card">
            <i className="fas fa-users service-icon"></i>
            <h3 className="service-title">Gestão de Folha</h3>
            <p className="service-description">
              Simplificação de processos e folha de pagamento.
            </p>
            <button className="service-more-button bounce-in">Saiba Mais</button>
          </div>
          <div className="service-card fade-in-card">
            <i className="fas fa-briefcase service-icon"></i>
            <h3 className="service-title">Planejamento Estratégico</h3>
            <p className="service-description">
              Definição de metas e estratégias para o crescimento empresarial.
            </p>
            <button className="service-more-button bounce-in">Saiba Mais</button>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="services-benefits-section fade-in">
        <h2 className="services-benefits-title bounce-in">Por que escolher nossos serviços?</h2>
        <div className="services-benefits-grid">
          <div className="benefit-card fade-in-card">
            <i className="fas fa-trophy benefit-icon"></i>
            <h3 className="benefit-title">Excelência</h3>
            <p className="benefit-description">
              Comprometimento em entregar resultados de alta qualidade.
            </p>
          </div>
          <div className="benefit-card fade-in-card">
            <i className="fas fa-handshake benefit-icon"></i>
            <h3 className="benefit-title">Parceria</h3>
            <p className="benefit-description">
              Trabalhamos lado a lado com você para alcançar seus objetivos.
            </p>
          </div>
          <div className="benefit-card fade-in-card">
            <i className="fas fa-shield-alt benefit-icon"></i>
            <h3 className="benefit-title">Confiabilidade</h3>
            <p className="benefit-description">
              Sua empresa em mãos seguras, com transparência e ética.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="services-cta-section fade-in">
        <h2 className="services-cta-title bounce-in">Precisa de um serviço especializado?</h2>
        <p className="services-cta-description fade-in">
          Entre em contato com nossa equipe para mais informações e agende uma consulta gratuita.
        </p>
        <button className="services-cta-button bounce-in">Fale Conosco</button>
      </section>
    </div>
  );
};

export default Services;