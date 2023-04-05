import './style.css'

const Botao = (props) => {
    console.log(props.children)
    return (
        
        <button className='botao'> {props.children} </button>
    )
}

export default Botao
