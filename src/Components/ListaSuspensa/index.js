
import './style.css'

const ListaSuspensa = (props) => 
{
    function mostra(evento)
    {
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className="lista-suspensa">
            <label> {props.label} </label>
            <select 
            required={props.required}
            value={props.valor}
            onChange = {mostra}

            >
                {props.itens.map(item => <option key={item}> {item} </option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa