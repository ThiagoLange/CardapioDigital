import React from 'react';
import './Menu.css'; // Arquivo CSS para estilização do menu

function Menu() {
  return (
    <nav className="menu-container">
      <div className="restaurant-name">Mamamia Massas</div>
      <ul className="menu-items">
        <li><a href="/">Início</a></li>
        <li><a href="/gnocchi">Gnocchi</a></li>
        <li><a href="/pastas">Pastas</a></li>
        <li><a href="/bedidas">Bedidas</a></li>
      </ul>
    </nav>
  );
}

export default Menu;