import React, { useState } from 'react'; // Importar useState
import './App.css'; //
import Menu from './components/Menu';
import HeroBanner from './components/HeroBanner';
import GnocchiOptions from './components/GnocchiOptions';
import Molhos from './components/Molhos';

// Componentes de placeholder para outras seções
const PastasSection = () => (
  <div style={{ padding: '2rem', textAlign: 'center', minHeight: '300px' }}>
    <h2>Nossas Pastas Frescas</h2>
    <p>Em breve, deliciosas opções de pastas!</p>
  </div>
);

const BedidasSection = () => (
  <div style={{ padding: '2rem', textAlign: 'center', minHeight: '300px' }}>
    <h2>Nossas Bedidas</h2>
    <p>Uma seleção especial de bedidas para acompanhar sua refeição, em breve!</p>
  </div>
);

const InicioSection = () => (
  <>
    <HeroBanner />
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <p style={{ fontSize: '1.2em', color: '#333' }}>
        Bem-vindo ao Mamamia Massas! Navegue pelas opções do menu para descobrir nossos deliciosos pratos.
      </p>
    </div>
  </>
);


function App() {
  // Estado para controlar a seção ativa, 'inicio' é o padrão
  const [activeSection, setActiveSection] = useState('inicio');

  // Função para atualizar a seção ativa, passada para o Menu
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
            <Molhos />
          </>
        );
      case 'pastas':
        return <PastasSection />;
      case 'bedidas':
        return <BedidasSection />;
      default:
        return <InicioSection />; // Fallback para a seção inicial
    }
  };

  return (
    <>
      {/* Passa a função de navegação e a seção ativa para o Menu */}
      <Menu onNavigate={handleNavigation} activeSection={activeSection} />

      <main style={{ padding: '0 1rem', maxWidth: '1200px', margin: '2rem auto 0 auto' }}>
        {/* Renderiza a seção correta com base no estado */}
        {renderSection()}
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', marginTop: '4rem', borderTop: '1px solid #eee' }}>
        <p>&copy; {new Date().getFullYear()} Mamamia Massas. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default App;