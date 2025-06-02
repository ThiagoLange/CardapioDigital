import React from 'react';
import './GnocchiOptions.css';

import imagemBatata from '../assets/gnocchi-batata.jpeg';
import imagemEspinafre from '../assets/gnocchi-espinafre.jpg';
import imagemCenoura from '../assets/gnocchi-cenoura.jpeg';
import imagemBeterraba from '../assets/gnocchi-beterraba.jpeg';

// 2. Atualize o array de dados para usar as variáveis das imagens importadas
const gnocchiItems = [
  { 
    id: 1, 
    name: "Gnocchi de Batata", 
    price: "R$ 32,00", 
    imageUrl: imagemBatata
  },
  { 
    id: 2, 
    name: "Gnocchi de Espinafre", 
    price: "R$ 35,00", 
    imageUrl: imagemEspinafre
  },
  { 
    id: 3, 
    name: "Gnocchi de Cenoura", 
    price: "R$ 34,00", 
    imageUrl: imagemCenoura
  },
  { 
    id: 4, 
    name: "Gnocchi de Beterraba", 
    price: "R$ 36,00", 
    imageUrl: imagemBeterraba
  }
];

function GnocchiOptions() {
  return (
    <div className="gnocchi-section">
      <h2>Nossos Gnocchis Artesanais</h2>
      <div className="gnocchi-cards-container">
        {gnocchiItems.map(gnocchi => (
          <div key={gnocchi.id} className="gnocchi-card">
            <img src={gnocchi.imageUrl} alt={gnocchi.name} className="gnocchi-image" />
            <div className="gnocchi-info">
              <h3>{gnocchi.name}</h3>
              <p className="gnocchi-price">{gnocchi.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GnocchiOptions;