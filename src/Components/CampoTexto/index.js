import './style.css'

function CampoTexto (props)
{
    console.log(props.label)
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input 
            placeholder={props.placeholder}
            required={props.obrigatorio}
            />
        </div>
    )
}

export default CampoTexto