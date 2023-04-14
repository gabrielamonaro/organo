import './style.css'

const Colaborador = ({nome, imagem, cargo}) => {


    return (
        <div className='colaborador'>
            <div className='cabeçalho'>
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