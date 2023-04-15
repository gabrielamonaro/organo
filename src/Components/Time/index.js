import Colaborador from '../Colaborador'
import './style.css'
import hexToRgba from 'hex-to-rgba';


const Time = (props) => {

const css = {backgroundColor: hexToRgba(props.cor, '0.5')}

    return (
        
        props.colaboradores.length > 0 && <section 
        className='time' 
        style={css}>
            <input 
            onChange={evento => props.mudarCor(evento.target.value, props.id)} 
            value={props.cor} 
            type='color'
            className='input-cor'/>
            
            <h3 style={{borderBottomColor: props.cor}}> {props.nome} </h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => 
                <Colaborador 
                    aoFavoritar={props.aoFavoritar}
                    corDeFundo={props.cor} 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    id = {colaborador.id}
                    imagem={colaborador.imagem}
                    aoDeletar={props.aoDeletar}
                    favorito={colaborador.favorito}
                    >
                </Colaborador>)}
        
            </div>
            </section>
    )
}

export default Time