// src/components/BedidasOptions.jsx
import React from 'react';
import './BedidasOptions.css';

const bedidasData = [
  {
    categoryName: "Água",
    items: [
      { id: "agua_sem_gas", name: "Água Mineral sem Gás (500ml)", price: "R$ 4,00" },
      { id: "agua_com_gas", name: "Água Mineral com Gás (500ml)", price: "R$ 4,50" },
    ]
  },
  {
    categoryName: "Refrigerantes",
    items: [
      { id: "coca_cola", name: "Coca-Cola (lata 350ml)", price: "R$ 6,00" },
      { id: "guarana", name: "Guaraná Antarctica (lata 350ml)", price: "R$ 5,50" },
      { id: "sprite", name: "Sprite (lata 350ml)", price: "R$ 5,50" },
      { id: "coca_cola_zero", name: "Coca-Cola Zero (lata 350ml)", price: "R$ 6,00" },
    ]
  },
  {
    categoryName: "Sucos Naturais",
    items: [
      { id: "suco_morango", name: "Suco de Morango (copo 400ml)", price: "R$ 9,00" },
      { id: "suco_laranja", name: "Suco de Laranja (copo 400ml)", price: "R$ 8,00" },
      { id: "suco_uva", name: "Suco de Uva Integral (copo 400ml)", price: "R$ 8,50" },
    ]
  }
];

function BedidasOptions() {
  return (
    <div className="bedidas-section">
      <h2>Nossas Bedidas</h2>
      {bedidasData.map(category => (
        <div key={category.categoryName} className="bedida-category">
          <h3>{category.categoryName}</h3>
          <ul className="bedida-items-list">
            {category.items.map(item => (
              <li key={item.id} className="bedida-item">
                <span className="bedida-name">{item.name}</span>
                <span className="bedida-price">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default BedidasOptions;