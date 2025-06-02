// src/components/Menu.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import './Menu.css';

function Menu({ onNavigate, activeSection }) {
  const handleNavClick = (e, section) => {
    e.preventDefault();
    onNavigate(section);
  };

  return (
    <nav className="menu-container">
      <div className="restaurant-name">Mamamia Massas</div>
      <ul className="menu-items">
        <li className={activeSection === 'inicio' ? 'active-menu-item' : ''}>
          <a href="#" onClick={(e) => handleNavClick(e, 'inicio')}>Início</a>
        </li>
        <li className={activeSection === 'gnocchi' ? 'active-menu-item' : ''}>
          <a href="#" onClick={(e) => handleNavClick(e, 'gnocchi')}>Gnocchi</a>
        </li>
        <li className={activeSection === 'pastas' ? 'active-menu-item' : ''}>
          <a href="#" onClick={(e) => handleNavClick(e, 'pastas')}>Pastas</a>
        </li>
        <li className={activeSection === 'bedidas' ? 'active-menu-item' : ''}>
          <a href="#" onClick={(e) => handleNavClick(e, 'bedidas')}>Bedidas</a>
        </li>
      </ul>
    </nav>
  );
}

// Define PropTypes
Menu.propTypes = {
  onNavigate: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
};

export default Menu;