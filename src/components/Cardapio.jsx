// src/components/Cardapio.jsx
import React, { useState } from 'react';
// Não precisa de PropTypes aqui se ele não recebe props externas diretamente

import Menu from './Menu';
import HeroBanner from './HeroBanner';
import GnocchiOptions from './GnocchiOptions';
import Molhos, { allSauceOptions } from './Molhos';
import PastasOptions from './PastasOptions';
import BedidasOptions from './BedidasOptions';
import Footer from './Footer';

// --- Componente Funcional para a Seção Inicial ---
const InicioSection = () => (
  <>
    <HeroBanner />
    <div className="inicio-section-content"> 
      <p className="welcome-message">
        Bem-vindo ao Mamamia Massas! Navegue pelas opções do menu para descobrir nossos deliciosos pratos.
      </p>
    </div>
  </>
);
// InicioSection não recebe props, então não precisa de PropTypes aqui.

function Cardapio() {
  const [activeSection, setActiveSection] = useState('inicio');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <InicioSection />;
      case 'gnocchi':
        return (
          <>
            <GnocchiOptions />
            <Molhos
              sauceList={allSauceOptions} // Mostra todos os molhos na seção gnocchi
              title="Molhos Disponíveis para Acompanhar seu Gnocchi:"
              compact={false}
            />
          </>
        );
      case 'pastas':
        return <PastasOptions />;
      case 'bedidas':
        return <BedidasOptions />;
      default:
        return <InicioSection />;
    }
  };

  return (
    <> {/* React Fragment */}
      <Menu onNavigate={handleNavigation} activeSection={activeSection} />
      
      <main style={{ padding: '0 1rem', maxWidth: '1200px', margin: '2rem auto 0 auto', flexGrow: 1 }}>
        {renderSection()}
      </main>
      
      <Footer />
    </>
  );
}

export default Cardapio;