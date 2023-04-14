import './style.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';


function Formulario (props)  {
function aoSalvar(evento)
{
    evento.preventDefault()

    props.aoColaboradorCadastrado({
        nome,
        cargo, 
        imagem, 
        time
    })
    // console.log(`Form foi submetido =>  ${nome} + ${cargo}  ${imagem} ${time}`)
}


    const [nome, setNome] = useState('Nome')
    const [cargo, setCargo] = useState('Cargo')
    const [imagem, setImagem] = useState('Imagem')

    const [time, setTime] = useState('Time')

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto 
            obrigatorio={true} 
            label="Nome"  
            valor = {nome}
            aoAlterado = {setNome}
            placeholder="Digite seu nome">
            </CampoTexto>

            <CampoTexto  
            obrigatorio={true} 
            label="Cargo" 
            valor = {cargo}
            aoAlterado = {setCargo}
            placeholder="Digite seu cargo">
            </CampoTexto>

            <CampoTexto 
            label="Imagem" 
            valor = {imagem}
            aoAlterado = {setImagem}
            placeholder="Digite o endereço da imagem">
            </CampoTexto>

            <ListaSuspensa 
            label="Time" 
            itens={props.times}
            valor = {time}
            aoAlterado = {setTime}
            >

            </ListaSuspensa>
            <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario 