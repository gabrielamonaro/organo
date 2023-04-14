import Colaborador from '../Colaborador'
import './style.css'

const Time = (props) => {

const css = {backgroundColor: props.corSecundaria}

    return (
        <section 
        className='time' 
        style={css}>
            <h3 style={{borderBottomColor: props.corPrimaria}}> {props.nome} </h3>
            <Colaborador></Colaborador>
        </section>
    )
}

export default Time