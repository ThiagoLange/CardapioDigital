import React from 'react';
import './HeroBanner.css';
import imagemFachada from '../assets/fachada-restaurante.jpg'; // 1. Importa a imagem

function HeroBanner() {
  return (
    <section className="hero-banner-container">
      <div className="hero-text-section">
        <h1>Servindo massas à mais de 70 anos</h1>
        <p>Qualidade passada por gerações</p>
      </div>
      <div className="hero-image-section">
        <img 
          src={imagemFachada} // 2. Usa a imagem importada aqui
          alt="Fachada do Restaurante Mamamia Massas" 
        />
      </div>
    </section>
  );
}

export default HeroBanner;