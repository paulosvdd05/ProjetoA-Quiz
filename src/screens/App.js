
import '../styles/css/style.css';

import Respostas from '../components/Respostas';

function App() {
  return (

    <div>
      <header>
        <div>
          <h1>Quiz</h1>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="quiz">
            <p><b>Questão 1</b></p>
          </div>
          <div className="pergunta">
            <p>Qual é a capital do Brasil?</p>
          </div>
        </div>
        <Respostas />
      </main>
    </div>
  );
}

export default App;
