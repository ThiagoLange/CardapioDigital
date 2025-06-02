// src/components/Molhos.jsx
import React from 'react';
import './Molhos.css'; // Seus estilos existentes + novos para o modo compacto

// Lista de todos os molhos, pode ser exportada se necessário em outros lugares
export const allSauceOptions = [
  "Alla Puttanesca",
  "Al Pesto di Basilico",
  "Cacio e Pepe",
  "Alla Matriciana"
];

function Molhos({ title, sauceList, compact = false }) {
  const saucesToDisplay = sauceList || []; // Se sauceList não for fornecido, usa um array vazio

  if (saucesToDisplay.length === 0 && compact) {
    return null; // Não renderiza nada no modo compacto se não houver molhos
  }
  if (saucesToDisplay.length === 0 && !compact) {
    return <p>Nenhum molho selecionado ou disponível.</p>;
  }

  if (compact) {
    // Modo compacto para ser usado dentro dos cards de massa
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

  // Modo de exibição original/completo (como uma seção)
  return (
    <div className="molhos-section"> {/* Mantém os estilos de .molhos-section */}
      <h3>{title || "Opções de Molhos"}</h3>
      <ul className="molhos-list"> {/* Mantém os estilos de .molhos-list */}
        {saucesToDisplay.map((molho, index) => (
          <li key={index} className="molho-item">{molho}</li> 
        ))}
      </ul>
    </div>
  );
}

export default Molhos;