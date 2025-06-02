// src/App.jsx
import React, { useState } from 'react';
import './App.css'; //
import Menu from './components/Menu';
import HeroBanner from './components/HeroBanner';
import GnocchiOptions from './components/GnocchiOptions';
// Importe 'allSauceOptions' e o componente Molhos do arquivo Molhos.jsx
import Molhos, { allSauceOptions } from './components/Molhos'; 
import PastasOptions from './components/PastasOptions'; // Nova importação

// ... (Componentes InicioSection e BedidasSection permanecem os mesmos) ...
const InicioSection = () => ( /* ... seu código ... */ <>
    <HeroBanner />
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <p style={{ fontSize: '1.2em', color: '#333' }}>
        Bem-vindo ao Mamamia Massas! Navegue pelas opções do menu para descobrir nossos deliciosos pratos.
      </p>
    </div>
  </>);
const BedidasSection = () => ( /* ... seu código ... */ <div style={{ padding: '2rem', textAlign: 'center', minHeight: '300px' }}>
    <h2>Nossas Bedidas</h2>
    <p>Uma seleção especial de bedidas para acompanhar sua refeição, em breve!</p>
  </div>);


function App() {
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
            {/* Atualiza a chamada para Molhos para a seção de Gnocchi */}
            <Molhos 
              sauceList={allSauceOptions} 
              title="Molhos Disponíveis para Acompanhar seu Gnocchi:"
              compact={false} // Usa o modo de exibição completo/original
            />
          </>
        );
      case 'pastas': // Nova case para 'pastas'
        return <PastasOptions />;
      case 'bedidas':
        return <BedidasSection />;
      default:
        return <InicioSection />;
    }
  };

  return (
    <>
      <Menu onNavigate={handleNavigation} activeSection={activeSection} />
      <main style={{ padding: '0 1rem', maxWidth: '1200px', margin: '2rem auto 0 auto' }}>
        {renderSection()}
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', marginTop: '4rem', borderTop: '1px solid #eee' }}>
        <p>&copy; {new Date().getFullYear()} Mamamia Massas. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;