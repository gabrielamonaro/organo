import { useState } from 'react';
import Banner from './Components/Banner';
import Formulario from './Components/Formulario';
import Time from './Components/Time';
import Rodape from './Components/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const deletarColaborador = () => {
    console.log("Deletando colaborador")
  }

  const mudarCor = (cor, id) => {
        setTimes(times.map(time => {
            if(time.id === id) {
              time.cor = cor;
            }
            return time;
      }))

  }

  const [times, setTimes] = useState ([{
    id: uuidv4(),
    nome:'Programação',
    cor: '#57C278',
 },
  {
    id: uuidv4(),
    nome:'Front-End',
    cor: '#82CFFA',
  },
  {
    id: uuidv4(),
    nome:'Data Science',
    cor: '#A6D157',
  },
  {
    id: uuidv4(),
    nome:'Devops',
    cor: '#E06B69',
 },
  {
    id: uuidv4(),
    nome:'UX e Design',
    cor: '#DB6EBF',
  },
  {
    id: uuidv4(),
    nome:'Mobile',
    cor: '#FFBA05',
 },{
  id: uuidv4(),
    nome:'Inovação e Gestão',
    cor: '#FF8A29',
  },
])

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
      times={times.map(time => time.nome)}
      aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}
      ></Formulario>

      {times.map(time => 
      <Time 
        key={time.nome}
        nome={time.nome} 
        cor={time.cor} 
        id={time.id}
        colaboradores = 
        {colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        mudarCor={mudarCor}
        > 
      </Time>)
      }
      <Rodape></Rodape>
      </div>
    
  );
}

export default App;
