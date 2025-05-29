import './App.css'; // Pode manter ou ajustar conforme necessário
import Menu from './components/Menu'; // Importa o novo componente Menu

function App() {
  // const [count, setCount] = useState(0) // Comentado ou removido

  return (
    <>
      <Menu /> {/* Adiciona o componente Menu aqui */}

      {/* Conteúdo da página abaixo do menu */}
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Bem-vindo ao Mamamia Massas!</h1>
        <p>
          Navegue pelas opções do menu para descobrir nossos deliciosos pratos.
        </p>
      </div>
 
    </>
  );
}

export default App;