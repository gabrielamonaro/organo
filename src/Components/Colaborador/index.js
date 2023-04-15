import {AiFillCloseCircle} from 'react-icons/ai'
import './style.css'


const Colaborador = ({nome, imagem, cargo, corDeFundo, aoDeletar, id}) => {

console.log(`1: ${id}`)
    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className='delete' 
                onClick={() => aoDeletar(id)}
            />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador