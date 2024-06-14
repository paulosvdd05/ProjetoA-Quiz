import React, { useEffect, useState } from 'react';
import '../styles/css/style.css';
import transicao from '../components/Transicao';
import { useNavigate } from 'react-router-dom';
import { m, motion } from 'framer-motion';
import perguntas from '../data/perguntas';

import Respostas from '../components/Respostas';

function App() {

  const questaoRandom = Math.floor(Math.random() * perguntas.length) + 1;
  const [numeroQuestao, setNumeroQuestao] = useState(1);
  const [questao, setQuestao] = useState(Math.floor(Math.random() * perguntas.length));
  const [questoesRespondidas, setQuestoesRespondidas] = useState([]);

  useEffect(() => {
    if (questoesRespondidas.length === 0) {
        setQuestao(questao);
        setQuestoesRespondidas([...questoesRespondidas, questao]);
    } else {
        let numeroRandom;
        do {
            numeroRandom = Math.floor(Math.random() * perguntas.length);
        } while (questoesRespondidas.includes(numeroRandom) && questoesRespondidas.length < perguntas.length);

        if (questoesRespondidas.length < perguntas.length) {
            setQuestao(numeroRandom);
            setQuestoesRespondidas([...questoesRespondidas, numeroRandom]);
        } else {
            console.log('All questions have been answered');
        }
    }

    console.log(questoesRespondidas);
}, [numeroQuestao]);

  const proximaPergunta = (acertou) => {
    setNumeroQuestao(prevState => prevState + 1);
  }

  const appContainer = () => {
    return (
      <>
        <div className='appContainer' >
          <header>
            <div>
              <h1>Quiz</h1>
            </div>
          </header>

          <main style={{ width: '80%' }}>
            <div className="container">
              <div className="quiz">
                <p><b>Questão {questao}</b></p>
              </div>
              <div className="pergunta">
                <p>{perguntas[questao].pergunta}</p>
              </div>
            </div>
            <Respostas pergunta={perguntas[questao].pergunta} respostas={perguntas[questao].respostas} proximaPergunta={proximaPergunta} respostaCorreta={perguntas[questao].respostas.filter(resposta => resposta.correta)} />
          </main>
        </div>
        {
          <motion.div key={numeroQuestao}
            className='slide-out'
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        }
      </>
    )
  }

  return appContainer();
}

export default transicao(App);