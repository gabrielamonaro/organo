import Colaborador from '../Colaborador'
import './style.css'

const Time = (props) => {

const css = {backgroundColor: props.corSecundaria}

    return (
        props.colaboradores.length > 0 && <section 
        className='time' 
        style={css}>
            <h3 style={{borderBottomColor: props.corPrimaria}}> {props.nome} </h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}></Colaborador>)}
        
            </div>
            </section>
    )
}

export default Time