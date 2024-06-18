import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { SentimentVerySatisfied, SentimentSatisfied, SentimentVeryDissatisfied } from '@mui/icons-material';
import QuestaoResultadoFim from '../components/QuestaoResultadoFim';
import Confetti from 'react-confetti';
import transicao from '../components/Transicao'
import '../styles/css/style.css';


function Fim() {

    const location = useLocation();
    const [confetti, setConfetti] = useState(true);

    useEffect(() => {
        console.log(location.state.questoesRespondidas)
    }, [])

    const verificaQuestoes = () => {
        return { numeroAcertos: location.state.questoesRespondidas.map(questao => questao.acertou).filter(acertou => acertou).length, numeroQuestoes: location.state.questoesRespondidas.length }
    }

    const gerarEmoji = () => {
        if (verificaQuestoes().numeroAcertos === verificaQuestoes().numeroQuestoes) {
            return (<div style={{ color: '#7ED321' }}>
                <SentimentVerySatisfied style={{ fontSize: 100 }} />
                <h2>Parabéns! Você acertou todas as questões.</h2>
            </div>)
        } else if (verificaQuestoes().numeroAcertos >= verificaQuestoes().numeroQuestoes / 2) {
            return (
                <div style={{ color: '#FFD700' }}>
                    <SentimentSatisfied style={{ fontSize: 100 }} />
                    <h2>Quase lá! Continue treinando.</h2>
                </div>)
        } else {
            return (
                <div style={{ color: '#dd0000' }}>
                    <SentimentVeryDissatisfied style={{ fontSize: 100 }} />
                    <h2>Que pena! Você pode melhorar.</h2>
                </div>)
        }

    }

    const gerarQuestoesResultado = () => {
        return location.state.questoesRespondidas.map((questao, index) => {
            
            return <QuestaoResultadoFim  key={index} questaoNumero={index + 1} questao={questao} respostaSelecionada={location.state.respostaSelecionada} />
        })
    }

    return (

        <div className='appContainer'>
            <Confetti style={{ width: '100%' }} numberOfPieces={200} gravity={0.4} recycle={false} />

            <header>
                <div>
                    <h1>Quiz</h1>
                </div>
            </header>
            <main>
                <div className="container">
                    <h2>Quiz concluído!</h2>
                    <p>Você respondeu todas as perguntas :)</p>
                </div>
                <div className="container">
                    <h2>Resultado</h2>
                    <h2>Acertos: {verificaQuestoes().numeroAcertos} de {verificaQuestoes().numeroQuestoes}</h2><br></br>
                    {gerarEmoji()}

                 
                    {gerarQuestoesResultado()}
                </div>
            </main>
        </div>


    )
}

export default transicao(Fim);