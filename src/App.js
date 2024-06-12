
import './styles/css/style.css';
import { animacaoClick } from './scripts/animations';

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

        <div className="respostas">
          <div className="container container-resposta" id="resposta1">
            <h2>São Paulo</h2>
          </div>
          <div className="container container-resposta" id="resposta2">
            <h2>Rio de Janeiro</h2>
          </div>
          <div className="container container-resposta" id="resposta3">
            <h2>Brasília</h2>
          </div>
          <div className="container container-resposta" id="resposta4">
            <h2>Curitiba</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
