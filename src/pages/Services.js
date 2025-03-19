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
          
          {/* Contabilidade Geral (dividida em três áreas) */}
          <div className="service-card fade-in-card">
            <i className="fas fa-chart-line service-icon"></i>
            <h3 className="service-title">Contabilidade Geral</h3>
            <p className="service-description">Dividida em três áreas principais:</p>
            <ul className="service-sublist">
              <li><strong>Setor Tributário / Fiscal:</strong> Responsável pelo cumprimento das leis fiscais, envio de declarações e cálculos de impostos.</li>
              <li><strong>Departamento Pessoal:</strong> Gestão de funcionários, folha de pagamento, admissões e passivos trabalhistas.</li>
              <li><strong>Setor Contábil:</strong> Controle das movimentações financeiras e identificação de riscos patrimoniais.</li>
            </ul>
            <button className="service-more-button bounce-in">Saiba Mais</button>
          </div>

          {/* Consultoria Financeira e Empresarial */}
          <div className="service-card fade-in-card">
            <i className="fas fa-briefcase service-icon"></i>
            <h3 className="service-title">Consultoria Financeira e Empresarial</h3>
            <p className="service-description">
              Assessoria estratégica para crescimento empresarial, planejamento financeiro e otimização de recursos.
            </p>
            <button className="service-more-button bounce-in">Saiba Mais</button>
          </div>

          {/* Planejamento Estratégico */}
          <div className="service-card fade-in-card">
            <i className="fas fa-lightbulb service-icon"></i>
            <h3 className="service-title">Planejamento Estratégico</h3>
            <p className="service-description">
              Definição de metas e estratégias para o crescimento sustentável dos negócios.
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
