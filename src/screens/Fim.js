import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import transicao from '../components/Transicao'
import '../styles/css/style.css';


function Fim() {

    const location = useLocation();

    useEffect(() => {
        console.log(location.state.questoesRespondidas)
    }, [])

    const verificaQuestoes = () => {
        return {numeroAcertos: location.state.questoesRespondidas.map(questao => questao.acertou).filter(acertou => acertou).length, numeroQuestoes: location.state.questoesRespondidas.length}
    }

    return (
        <div className='appContainer'>
            <header>
                <div>
                    <h1>Quiz</h1>
                </div>
            </header>
            <main style={{width:'80%'}}>
                <div className="container">
                    <h2>Parabéns!</h2>
                    <p>Você respondeu todas as perguntas :)</p>
                </div>
                <div className="container">
                    <h2>Resultado</h2>
                    <h3>Acertos: {verificaQuestoes().numeroAcertos} de {verificaQuestoes().numeroQuestoes}</h3>
                </div>
            </main>
        </div>

        
    )
}

export default transicao(Fim);