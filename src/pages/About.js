import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Banner */}
      <section className="about-banner-section">
        <h1 className="about-banner-title">A História da Executare</h1>
        <p className="about-banner-text">
          Mais do que uma empresa de contabilidade, somos parceiros na
          construção do sucesso dos nossos clientes.
        </p>
      </section>

      {/* Linha do Tempo */}
      <section className="about-history-section">
        <h2 className="about-history-title">Nossa Jornada</h2>
        <div className="about-history-timeline">
          <div className="history-event">
            <span className="history-year">2009</span>
            <p className="history-description">
              Início da trajetória na contabilidade, adquirindo experiência e especialização no setor.
            </p>
          </div>
          <div className="history-event">
            <span className="history-year">2022</span>
            <p className="history-description">
              Fundação da Executare, consolidando um novo modelo de serviços contábeis e consultoria financeira.
            </p>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="about-team-section">
        <h2 className="about-team-title">Conheça Nossa Equipe</h2>
        <p className="about-team-description">
          Nossa equipe é composta por profissionais dedicados e qualificados,
          prontos para oferecer o melhor para sua empresa.
        </p>
        <div className="about-team-grid">
          <div className="team-card">
            <div className="team-image-container">
              <img
                src="https://img.freepik.com/vetores-premium/ilustracao-plana-vetorial-em-escala-de-cinza-avatar-perfil-de-usuario-pessoa-icone-imagem-de-perfil-adequado-para-perfis-de-midia-social-icones-protetores-de-tela-e-como-um-modelo-x9xa_719432-1230.jpg?w=900" 
                alt="Tarciane"
                className="team-image"
              />
            </div>
            <h3 className="team-name">Tarciane</h3>
            <p className="team-role">Nova Integrante da Equipe</p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="about-values-mission-section">
        <div className="values-mission-container">
          <div className="mission-block">
            <h2 className="section-title">Missão</h2>
            <p className="section-description">
              Atender às necessidades dos clientes, buscando a satisfação e o crescimento, 
              com um atendimento diferenciado e na qualidade dos serviços prestados, 
              dentro dos padrões contábeis.
            </p>
          </div>
          <div className="vision-block">
            <h2 className="section-title">Visão</h2>
            <p className="section-description">
              Ser referência no mercado de consultoria e assessoria contábil e empresarial, 
              tornando-nos eficientes e importantes para nossos clientes, parceiros e colaboradores.
            </p>
          </div>
          <div className="values-block">
            <h2 className="section-title">Valores</h2>
            <p className="section-description">
              Baseado-se na legalidade, honestidade, ética e transparência.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
