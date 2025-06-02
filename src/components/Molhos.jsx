import React from 'react';
import './Molhos.css';

const molhoItems = [
  "Alla Puttanesca",
  "Al Pesto di Basilico",
  "Cacio e Pepe",
  "Alla Matriciana"
];

function Molhos() {
  return (
    <div className="molhos-section">
      <h3>Opções de Molhos Tradicionais</h3>
      <ul className="molhos-list">
        {molhoItems.map((molho, index) => (
          <li key={index} className="molho-item">{molho}</li>
        ))}
      </ul>
    </div>
  );
}

export default Molhos;