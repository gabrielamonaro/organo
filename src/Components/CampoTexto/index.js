import './style.css'

function CampoTexto (props)
{
    console.log(props.label)
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto