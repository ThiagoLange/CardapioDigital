import './App.css';
import Menu from './components/Menu'; 
import HeroBanner from './components/HeroBanner';

function App() {
  // O componente App é o ponto de entrada da aplicação
  return (
    <>
      <Menu />
      <HeroBanner />

      {/* Conteúdo da página abaixo do menu e do banner */}
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ fontSize: '1.2em', color: '#333' }}>
          Navegue pelas opções do menu para descobrir nossos deliciosos pratos.
        </p>
    
      </div>
    </>
  );
}

export default App;