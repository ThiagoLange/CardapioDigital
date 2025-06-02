// src/components/Molhos.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import './Molhos.css';

export const allSauceOptions = [
  "Alla Puttanesca",
  "Al Pesto di Basilico",
  "Cacio e Pepe",
  "Alla Matriciana"
];

function Molhos({ title, sauceList, compact }) {
  const saucesToDisplay = sauceList && sauceList.length > 0 ? sauceList : (compact ? [] : allSauceOptions);

  if (saucesToDisplay.length === 0 && compact) {
    return null; 
  }
  if (saucesToDisplay.length === 0 && !compact) {
    return <p style={{textAlign: 'center', padding: '1rem'}}>Nenhum molho selecionado ou disponível no momento.</p>;
  }

  if (compact) {
    return (
      <div className="molhos-compact-view">
        {title && <p className="molhos-compact-title">{title}</p>}
        <ul className="molhos-compact-list">
          {saucesToDisplay.map((sauce, index) => (
            <li key={index} className="molho-compact-item">{sauce}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="molhos-section">
      <h3>{title || "Opções de Molhos"}</h3>
      <ul className="molhos-list">
        {saucesToDisplay.map((molho, index) => (
          <li key={index} className="molho-item">{molho}</li>
        ))}
      </ul>
    </div>
  );
}

// Define PropTypes
Molhos.propTypes = {
  title: PropTypes.string,
  sauceList: PropTypes.arrayOf(PropTypes.string),
  compact: PropTypes.bool,
};

// Define defaultProps para props opcionais
Molhos.defaultProps = {
  title: '',
  sauceList: null, // Será tratado pela lógica do componente para usar allSauceOptions se !compact
  compact: false,
};

export default Molhos;