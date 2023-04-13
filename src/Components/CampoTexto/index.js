import './style.css'

function CampoTexto (props)
{
    const mostra = (evento) =>
    {
         props.aoAlterado(evento.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input 
            value={props.valor}
            onChange={mostra}
            placeholder={props.placeholder}
            required={props.obrigatorio}
            />
        </div>
        
    )
}

export default CampoTexto