import Banner from './Components/Banner';
import CampoTexto from './Components/CampoTexto';


function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <CampoTexto label="Nome"  placeholder="Digite seu nome"></CampoTexto>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>
    </div>
    
  );
}

export default App;
