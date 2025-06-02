// src/App.jsx
import React from 'react';
import './App.css'; // Estilos globais e para .app-container
import Cardapio from './components/Cardapio';

function App() {
  return (
    <div className="app-container"> 
      <Cardapio />
    </div>
  );
}

export default App;