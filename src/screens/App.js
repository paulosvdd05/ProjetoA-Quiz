import React, { useEffect, useState } from 'react';
import '../styles/css/style.css';
import transicao from '../components/Transicao';
import { useNavigate } from 'react-router-dom';
import { m, motion } from 'framer-motion';
import perguntas from '../data/perguntas';
import Respostas from '../components/Respostas';

function App() {

  const [maxQuestoes, setMaxQuestoes] = useState(4);
  const [numeroQuestao, setNumeroQuestao] = useState(1);
  const [questao, setQuestao] = useState(Math.floor(Math.random() * perguntas.length));
  const [questoesRespondidas, setQuestoesRespondidas] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (questoesRespondidas.length === 0) {
      setQuestao(questao);
    } else {
      let numeroRandom;
      do {
        numeroRandom = Math.floor(Math.random() * perguntas.length);
      } while (questoesRespondidas.map(q => q.questao).includes(numeroRandom) && questoesRespondidas.length < perguntas.length);

      if (questoesRespondidas.length < perguntas.length) {
        setQuestao(numeroRandom);
      } else {
        console.log('Todas questões disponiveis ja foram respondidas.');
      }
    }


  }, [questoesRespondidas]);

  const proximaPergunta = (acertou) => {
    setQuestoesRespondidas(prevQuestoes => {
      const novasQuestoes = [...prevQuestoes, { questao: questao, acertou: acertou }];
      if (novasQuestoes.length == maxQuestoes) {
        navigate('/fim', { state: { questoesRespondidas: novasQuestoes } });
      } else {
        setNumeroQuestao(prevState => prevState + 1);
      }
      return novasQuestoes;
    });
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

          <main>
            <div className="container" style={{ flex: 1, margin: '10px 0' }}>
              <div className="quiz">
                <p><b>Questão {numeroQuestao}</b></p>
              </div>
              <div className="pergunta">
                <p>{perguntas[questao].pergunta}</p>
              </div>
            </div>
            <Respostas pergunta={perguntas[questao].pergunta} respostas={perguntas[questao].respostas} proximaPergunta={proximaPergunta} respostaCorreta={perguntas[questao].respostas.filter(resposta => resposta.correta)} style={{ margin: '10px 0' }} />
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