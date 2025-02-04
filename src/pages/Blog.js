import React from "react";
import "../styles/Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      {/* Banner */}
      <section className="blog-banner-section">
        <h1 className="blog-banner-title">Blog da Executare</h1>
        <p className="blog-banner-description">
          Dicas, insights e informações relevantes para o sucesso da sua empresa.
        </p>
      </section>

      {/* Lista de Posts */}
      <section className="blog-posts-section">
        <h2 className="blog-posts-title">Últimos Artigos</h2>
        <div className="blog-posts-grid">
          <div className="blog-post-card">
            <img
              className="blog-post-image"
              src="https://img.freepik.com/fotos-premium/maos-de-mulher-com-laptop-trabalhando-em-fundo-de-madeira_230726-95.jpg?w=900"
              alt="Post 1"
            />
            <h3 className="blog-post-title">5 Dicas para Gerenciar Melhor sua Contabilidade</h3>
            <p className="blog-post-description">
              Aprenda estratégias essenciais para manter sua contabilidade organizada e eficiente.
            </p>
            <button className="blog-post-button">Leia Mais</button>
          </div>
          <div className="blog-post-card">
            <img
              className="blog-post-image"
              src="https://img.freepik.com/fotos-premium/fechar-se-jovens-se-cumprimentando-na-mesa-de-trabalho_160672-19772.jpg?w=900"
              alt="Post 2"
            />
            <h3 className="blog-post-title">Tributação Simplificada: O que você Precisa Saber</h3>
            <p className="blog-post-description">
              Descubra como a tributação simplificada pode beneficiar sua empresa.
            </p>
            <button className="blog-post-button">Leia Mais</button>
          </div>
          <div className="blog-post-card">
            <img
              className="blog-post-image"
              src="https://img.freepik.com/fotos-premium/pessoas-de-negocios-exibem-tabelas-graficas-em-cadernos_10221-8641.jpg?w=900"
              alt="Post 3"
            />
            <h3 className="blog-post-title">Planejamento Financeiro para o Sucesso</h3>
            <p className="blog-post-description">
              Estratégias práticas para melhorar o desempenho financeiro da sua empresa.
            </p>
            <button className="blog-post-button">Leia Mais</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
