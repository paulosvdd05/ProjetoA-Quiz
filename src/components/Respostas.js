import React, {Component} from 'react'
import { animacaoClick } from '../scripts/animations.js';

const initialState = {
    respostas: [
        {id:0, resposta: "São Paulo", correta: false, selecionada:false},
        {id:1, resposta: "Rio de Janeiro", correta: false, selecionada:false},
        {id:2, resposta: "Brasília", correta: true, selecionada:false},
        {id:3, resposta: "Curitiba", correta: false, selecionada:false},
    ]
}

export default class Respostas extends Component {

    state = {...initialState}

    renderizarRespostas = () => {
        return this.state.respostas.map((resposta, index) => {
            return (
                <div key={index} className="container container-resposta" id={`resposta${resposta.id}`}>
                    <h2>{resposta.resposta}</h2>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderizarRespostas()}
        
            </div>
        )
    }
}