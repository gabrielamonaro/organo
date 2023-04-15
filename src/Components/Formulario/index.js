import './style.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function Formulario (props)  {
function aoSalvar(evento)
{
    evento.preventDefault()

    props.aoColaboradorCadastrado({
        nome,
        cargo, 
        imagem, 
        time, 
        id: uuidv4()
    })
    setNome('')
    setImagem('')
    setCargo('')
    setTime('')
    // console.log(`Form foi submetido =>  ${nome} + ${cargo}  ${imagem} ${time}`)
}

function cadastrarTime(evento)
{
    evento.preventDefault()
    props.cadastrarTime({
        nome: nomeTime, 
        cor: corTime
    });
}


    const [nome, setNome] = useState('Nome')
    const [cargo, setCargo] = useState('Cargo')
    const [imagem, setImagem] = useState('Imagem')

    const [time, setTime] = useState('Time')

    const [nomeTime, setNomeTime] = useState('Nome')
    const [corTime, setCorTime] = useState('Cor')

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
            
            <form onSubmit={cadastrarTime}>
                <h2>Preencha os dados para criar um novo time</h2>
            <CampoTexto 
            obrigatorio
            label="Nome"  
            valor = {nomeTime}
            aoAlterado = {setNomeTime}
            placeholder="Digite o nome do time">
            </CampoTexto>

            <CampoTexto  
            obrigatorio
            label="Cargo" 
            valor = {corTime}
            aoAlterado = {setCorTime}
            placeholder="Digite a cor do time">
            </CampoTexto>

            <Botao>Criar um novo time</Botao>
            </form>
        </section>
    )
}

export default Formulario 