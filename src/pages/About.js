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
            <span className="history-year">2015</span>
            <p className="history-description">
              Fundação da Executare com foco em contabilidade para MEIs e
              pequenas empresas.
            </p>
          </div>
          <div className="history-event">
            <span className="history-year">2018</span>
            <p className="history-description">
              Expansão para serviços de consultoria financeira e planejamento
              estratégico.
            </p>
          </div>
          <div className="history-event">
            <span className="history-year">2022</span>
            <p className="history-description">
              Lançamento de soluções digitais para gestão eficiente e moderna.
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
                src="https://img.freepik.com/fotos-gratis/aluno-feliz-com-penteado-afro-mostra-dentes-brancos-fica-de-bom-humor-depois-das-aulas_273609-16608.jpg?t=st=1737810067~exp=1737813667~hmac=5634644d7e525b82207a6bb6f4942cefa8d59b9e53c40745c1eeb6143dc8a7aa&w=900"
                alt="João Almeida"
                className="team-image"
              />
            </div>
            <h3 className="team-name">João Almeida</h3>
            <p className="team-role">Especialista em Contabilidade</p>
          </div>
          <div className="team-card">
            <div className="team-image-container">
              <img
                src="https://img.freepik.com/fotos-premium/cosmetologista-jovem-em-fundo-branco-retrato-de-esteticista-profissional_154092-467.jpg?w=900"
                alt="Maria Silva"
                className="team-image"
              />
            </div>
            <h3 className="team-name">Maria Silva</h3>
            <p className="team-role">Consultora Financeira</p>
          </div>
          <div className="team-card">
            <div className="team-image-container">
              <img
                src="https://img.freepik.com/fotos-premium/retrato-de-um-jovem-sorridente-vestindo-camisa_171337-50383.jpg?w=900"
                alt="Pedro Santos"
                className="team-image"
              />
            </div>
            <h3 className="team-name">Pedro Santos</h3>
            <p className="team-role">Analista de Dados</p>
          </div>
        </div>
      </section>

      <section className="about-values-mission-section">
        <div className="values-mission-container">
          <div className="mission-block">
            <h2 className="section-title">Nossa Missão</h2>
            <p className="section-description">
              Capacitar empresas a prosperarem por meio de soluções contábeis e
              financeiras inovadoras.
            </p>
          </div>
          <div className="values-block">
            <h2 className="section-title">Nossos Valores</h2>
            <ul className="values-list">
              <li className="value-item">
                <i className="fas fa-check-circle value-icon"></i> Inovação
                Constante
              </li>
              <li className="value-item">
                <i className="fas fa-check-circle value-icon"></i> Ética e
                Transparência
              </li>
              <li className="value-item">
                <i className="fas fa-check-circle value-icon"></i> Compromisso
                com Resultados
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;