import { useState } from 'react';
import Banner from './Components/Banner';
import Formulario from './Components/Formulario';
import Time from './Components/Time';


function App() {


  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>
  {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario
      aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}
      ></Formulario>

      <Time nome="Programação"></Time>,
      <Time nome="Front-End"></Time>
      </div>
    
  );
}

export default App;
