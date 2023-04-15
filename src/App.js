import { useState } from 'react';
import Banner from './Components/Banner';
import Formulario from './Components/Formulario';
import Time from './Components/Time';
import Rodape from './Components/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id != id))

  }
  
  function cadastrarTime(novoTime)
  {
    setTimes([ ...times, {...novoTime, id: uuidv4()}])
  }

  const mudarCor = (cor, id) => {
        setTimes(times.map(time => {
            if(time.id === id) {
              time.cor = cor;
            }
            return time;
      }))

  }

  function resolverFavorito(id)
  {    
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
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
  }



  return (
    <div className="App">
      <Banner></Banner>
      <Formulario
      cadastrarTime={cadastrarTime}
      times={times.map(time => time.nome)}
      aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}
      ></Formulario>

      {times.map(time => 
      <Time 
        aoFavoritar={resolverFavorito}
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
