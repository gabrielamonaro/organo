import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import './style.css'



const Colaborador = ({favorito, nome, imagem, cargo, corDeFundo, aoDeletar, id, aoFavoritar}) => {

    function favoritar()
    {
        aoFavoritar(id)
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

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
            <div className='favoritar'> 
                {favorito 
                    ? <AiFillHeart  {...propsfavorito} color='red'/> 
                    : <AiOutlineHeart {...propsfavorito} /> 
                }
            </div>
            </div>
        </div>
    )
}

export default Colaborador