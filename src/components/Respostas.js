import React, { Component } from 'react'
import { animacaoClick } from '../scripts/animations.js';


const initialState = {
    btnHabilitado: false,
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
        if(this.state.respostas.filter(resposta => resposta.selecionada).length === 1){
            this.setState({btnHabilitado: true})
        } else {
            this.setState({btnHabilitado: false})
        }
    }

    confirmarResposta = () => {
        if(this.state.btnHabilitado){
            console.log("resposta confirmada")
        }
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
                {this.renderizarRespostas()}
                <button className={this.state.btnHabilitado ? "button button-habilitado" : "button"} onClick={this.confirmarResposta}>
                    <p>Confirmar</p>
                </button>

            </div>
        )
    }
}