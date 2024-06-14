import React, { useState } from 'react';
import '../styles/css/style.css';
import transicao from '../components/Transicao';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Respostas from '../components/Respostas';

function App() {

  const [nQuestao, setNQuestao] = useState(1);
  const navigate = useNavigate();

  const proximaPergunta = () => {
    setNQuestao(prevState => prevState + 1);

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
  
          <main style={{width:'80%'}}>
            <div className="container">
              <div className="quiz">
                <p><b>Questão {nQuestao}</b></p>
              </div>
              <div className="pergunta">
                <p>Qual é a capital do Brasil?</p>
              </div>
            </div>
            <Respostas proximaPergunta={proximaPergunta}/>
          </main>
        </div>
        {
          <motion.div key={nQuestao}
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