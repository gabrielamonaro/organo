import './style.css'

function Campo (props)
{
    const mostra = (evento) =>
    {
         props.aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo-${props.type}`}>
            <label>{props.label}</label>
            <input 
            type={props.type}
            value={props.valor}
            onChange={mostra}
            placeholder={props.placeholder}
            required={props.obrigatorio}
            />
        </div>
        
    )
}

export default Campo