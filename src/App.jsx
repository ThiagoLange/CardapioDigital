import React, { useState } from 'react';
import './App.css'; // Estilos globais do App e agora para .inicio-section-content e .welcome-message
import Menu from './components/Menu';
import HeroBanner from './components/HeroBanner';
import GnocchiOptions from './components/GnocchiOptions';
import Molhos, { allSauceOptions } from './components/Molhos'; // Importa o default e a lista de molhos
import PastasOptions from './components/PastasOptions';
import BedidasOptions from './components/BedidasOptions';

// Componente para a Seção Inicial, agora usando classes CSS
const InicioSection = () => (
  <>
    <HeroBanner />
    <div className="inicio-section-content"> {/* Classe para estilização via App.css */}
      <p className="welcome-message"> {/* Classe para estilização via App.css */}
        Bem-vindo ao Mamamia Massas! Navegue pelas opções do menu para descobrir nossos deliciosos pratos.
      </p>
    </div>
  </>
);

function App() {
  const [activeSection, setActiveSection] = useState('inicio'); // Seção inicial padrão

  // Função para mudar a seção ativa, passada para o componente Menu
  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  // Função para renderizar o conteúdo da seção ativa
  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <InicioSection />;
      case 'gnocchi':
        return (
          <>
            <GnocchiOptions />
            <Molhos 
              sauceList={allSauceOptions} // Mostra todos os molhos disponíveis
              title="Molhos Disponíveis para Acompanhar seu Gnocchi:"
              compact={false} // Usa o modo de exibição completo
            />
          </>
        );
      case 'pastas':
        return <PastasOptions />;
      case 'bedidas':
        return <BedidasOptions />;
      default:
        return <InicioSection />; // Seção padrão caso algo dê errado
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