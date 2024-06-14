import React, { Component } from 'react'
import { animacaoClick } from '../scripts/animations.js';
import Modal from './Modal.js';


const initialState = {
    btnHabilitado: false,
    perguntaNumero: 1,
    pergunta: "Qual é a capital do Brasil?",
    respostaCorreta: "Brasília",
    acertou: false,
    modal: {
        visivel: false,
        titulo: null,
        mensagem: null,
        color: null,
        type: null
    },
    respostas: [
        { id: 0, resposta: "São Paulo", correta: false, selecionada: false },
        { id: 1, resposta: "Rio de Janeiro", correta: false, selecionada: false },
        { id: 2, resposta: "Brasília", correta: true, selecionada: false },
        { id: 3, resposta: "Curitiba", correta: false, selecionada: false },
    ]
}

export default class Respostas extends Component {

    state = { ...initialState }

    animacaoClick = (id) => {
        this.setState(prevState => ({
            respostas: prevState.respostas.map(
                resposta => resposta.id === id ? { ...resposta, selecionada: true } : { ...resposta, selecionada: false }
            )
        }), () => {
            console.warn(this.state.respostas)
            this.verificarBotaoHabilitado();
        });
    }

    verificarBotaoHabilitado = () => {
        if (this.state.respostas.filter(resposta => resposta.selecionada).length === 1) {
            this.setState({ btnHabilitado: true })
        } else {
            this.setState({ btnHabilitado: false })
        }
    }

    confirmarResposta = () => {

        if (this.state.btnHabilitado) {
            if (this.state.respostas.filter(resposta => resposta.selecionada)[0].resposta == this.state.respostaCorreta) {
                this.setState({ acertou: true }, () => {
                    this.setState({ modal: { visivel: true, titulo: 'Parabéns!', mensagem: 'Resposta correta!', color: '#00e800', type: 'correct' } })
                });
            }else {
                this.setState({ modal: { visivel: true, titulo: 'Você errou!', mensagem: 'tente novamente...', color: '#FF0000', type: 'incorrect' } })
            }

        }
    }

    onClose = () => {
        this.setState({ modal: { visivel: false } },
            () => {
                if(this.state.acertou){
                    this.props.proximaPergunta();
                }
            }
        )
    }

    renderizarRespostas = () => {
        return this.state.respostas.map((resposta, index) => {
            return (
                <div onClick={() => this.animacaoClick(resposta.id)} key={index} className={`container container-resposta ${resposta.selecionada ? 'animacao-click clicked' : ''}`} id={`resposta${resposta.id}`}>
                    <h2>{resposta.resposta}</h2>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='container'>
                <Modal open={this.state.modal.visivel} onClose={this.onClose} title={this.state.modal.titulo} message={this.state.modal.mensagem} color={this.state.modal.color} type={this.state.modal.type} />
                {this.renderizarRespostas()}
                <button className={this.state.btnHabilitado ? "button button-habilitado" : "button"} onClick={this.confirmarResposta}>
                    <p>Confirmar</p>
                </button>

            </div>
        )
    }
}