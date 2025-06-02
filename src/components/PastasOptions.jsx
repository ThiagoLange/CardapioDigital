// src/components/PastasOptions.jsx
import React from 'react';
import Molhos from './Molhos';
import './PastasOptions.css';

// Importa suas imagens locais da pasta assets
import imagemEspaguete from '../assets/epaguete.jpg';
import imagemTagliatelle from '../assets/tagliatelle.jpg';
import imagemFettuccine from '../assets/fettuccine.jpg';
import imagemPenne from '../assets/penne.jpg';
import imagemRigatoni from '../assets/rigatoni.jpg';
import imagemPappardelle from '../assets/pappardelle.jpg';

// Atualiza o array de dados para usar as variáveis das imagens importadas
const pastaData = [
  { 
    id: 'espaguete', 
    name: "Espaguete", 
    price: "R$ 38,00", 
    imageUrl: imagemEspaguete, // Usa a variável da imagem importada
    allowedSauces: ["Alla Puttanesca", "Al Pesto di Basilico", "Cacio e Pepe", "Alla Matriciana"] 
  },
  { 
    id: 'tagliatelle', 
    name: "Tagliatelle", 
    price: "R$ 40,00", 
    imageUrl: imagemTagliatelle,
    allowedSauces: ["Alla Puttanesca", "Alla Matriciana"] 
  },
  { 
    id: 'fettuccine', 
    name: "Fettuccine", 
    price: "R$ 39,00", 
    imageUrl: imagemFettuccine,
    allowedSauces: ["Alla Puttanesca", "Al Pesto di Basilico", "Cacio e Pepe"] 
  },
  { 
    id: 'penne', 
    name: "Penne", 
    price: "R$ 35,00", 
    imageUrl: imagemPenne,
    allowedSauces: ["Alla Puttanesca", "Cacio e Pepe"] 
  },
  { 
    id: 'rigatoni', 
    name: "Rigatoni", 
    price: "R$ 42,00", 
    imageUrl: imagemRigatoni,
    allowedSauces: ["Alla Matriciana"] 
  },
  { 
    id: 'pappardelle', 
    name: "Pappardelle", 
    price: "R$ 44,00", 
    imageUrl: imagemPappardelle,
    allowedSauces: ["Alla Puttanesca", "Alla Matriciana"] 
  }
];

function PastasOptions() {
  return (
    <div className="pastas-section">
      <h2>Nossas Massas Frescas</h2>
      <div className="pastas-cards-container">
        {pastaData.map(pasta => (
          <div key={pasta.id} className="pasta-card">
            {/* A tag <img> agora usará o caminho correto da imagem local */}
            <img src={pasta.imageUrl} alt={pasta.name} className="pasta-image" />
            <div className="pasta-info">
              <h3>{pasta.name}</h3>
              <p className="pasta-price">{pasta.price}</p>
              <Molhos 
                sauceList={pasta.allowedSauces} 
                title="Opções de Molhos :"
                compact={true} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PastasOptions;