import './style.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';


function Formulario ()  {
    const times  = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

function aoSalvar(evento)
{
    evento.preventDefault()
    console.log("Form foi submetido")
}
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome"  placeholder="Digite seu nome"></CampoTexto>
            <CampoTexto  obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>
            <ListaSuspensa label="Time" itens={times}></ListaSuspensa>
            <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario 