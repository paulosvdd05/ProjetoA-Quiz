import React, { Component } from 'react'
import { animacaoClick } from '../scripts/animations.js';
import { withRouter } from 'react-router-dom';
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
    respostas: []
}

export default class Respostas extends Component {

    state = {
        ...initialState,
        perguntaNumero: this.props.perguntaNumero,
        pergunta: this.props.pergunta,
        respostas: this.props.respostas,
        respostaCorreta: this.props.respostaCorreta[0].resposta,
    }


    componentDidUpdate(prevProps) {
        if (this.props.pergunta !== prevProps.pergunta ||
            this.props.respostas !== prevProps.respostas ||
            this.props.respostaCorreta !== prevProps.respostaCorreta) {
            this.setState({
                pergunta: this.props.pergunta,
                respostas: this.props.respostas,
                respostaCorreta: this.props.respostaCorreta[0].resposta,
            });
        }
    }



    animacaoClick = (indexClicado) => {
        this.setState(prevState => ({
            respostas: prevState.respostas.map(
                (resposta, index) => indexClicado == index ? { ...resposta, selecionada: true } : { ...resposta, selecionada: false }
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
            console.log();
            if (this.state.respostas.filter(resposta => resposta.selecionada)[0].resposta == this.state.respostaCorreta) {

                this.setState({ acertou: true }, () => {
                    this.setState({ modal: { visivel: true, titulo: 'Parabéns!', mensagem: 'Resposta correta.', color: '#00e800', type: 'correct' } })
                });
            } else {
                this.setState({ modal: { visivel: true, titulo: 'Você errou!', mensagem: 'Resposta incorreta.', color: '#dd0000', type: 'incorrect' } })
            }

        }
    }

    onClose = () => {
        this.setState({ modal: { visivel: false } },
            () => {
                const respostaSelecionada = this.state.respostas.filter(resposta => resposta.selecionada)[0].resposta
                this.props.proximaPergunta(this.state.acertou, respostaSelecionada);
                this.setState(initialState)

            }
        )
    }

    verificaCorrecaoResposta = () => {

    }

    renderizarRespostas = () => {
        if (!this.props.correcaoResposta) {
            return this.state.respostas.map((resposta, index) => {
                return (
                    <div onClick={() => this.animacaoClick(index)} key={index} className={`container container-resposta ${resposta.selecionada ? 'animacao-click clicked' : ''}`} id={`resposta${resposta.id}`}>
                        <h2>{resposta.resposta}</h2>
                    </div>
                )
            })
        } else {
            return this.state.respostas.map((resposta, index) => {
                if (resposta.resposta == this.state.respostaCorreta ) {
                    return (

                        <div key={index} className={`noEvents container container-resposta container-resposta-correta animacao-click clicked`} id={`resposta${resposta.id}`}>
                            <h2>{resposta.resposta}</h2>
                        </div>
                    )
                } else {
                    return (

                        <div key={index} className={`noEvents container container-resposta ${this.props.respostaSelecionada != this.state.respostaCorreta && resposta.resposta == this.props.respostaSelecionada  ? 'animacao-click clicked container-resposta-incorreta' : ''}`} id={`resposta${resposta.id}`}>
                            <h2>{resposta.resposta}</h2>
                        </div>
                    )
                }
            })
        }

    }

    render() {
        return (
            <div className='container'>
                <Modal open={this.state.modal.visivel} onClose={this.onClose} title={this.state.modal.titulo} message={this.state.modal.mensagem} color={this.state.modal.color} type={this.state.modal.type} questaoCorreta={this.state.respostaCorreta} />
                {this.renderizarRespostas()}
                <button className={this.state.btnHabilitado || this.props.correcaoResposta ? "button button-habilitado" : "button"} onClick={this.props.correcaoResposta ? () => this.props.navigate(-1) :  this.confirmarResposta}>
                    {this.props.correcaoResposta ? <p>Voltar</p> : <p>Confirmar</p>}
                </button>

            </div>
        )
    }
}