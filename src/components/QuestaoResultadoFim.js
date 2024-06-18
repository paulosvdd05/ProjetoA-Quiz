import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Cancel, CheckCircle } from '@mui/icons-material';


function QuestaoResultadoFim(props) {

    const navigate = useNavigate();

    const irParaQuestao = () => {
        navigate('/app', {state: {questaoNavegacao: props.questao, questaoNumero: props.questaoNumero}})
    }

    useEffect(() => {
        
    }, [])


    return (
        <div onClick={() => irParaQuestao()} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '30%' }}>
            <div className={`container container-questaoResultado ${props.questao.acertou ? 'acerto' : 'erro'}`}>
                <h2>Questão {props.questaoNumero}</h2>
                {console.log(props.questao)}
            </div>
            <div style={{ marginLeft: 5 }}>
                {props.questao.acertou ? <CheckCircle width='100%' style={{ fontSize: 30, color: '#7ED321' }} /> : <Cancel width='100%' style={{ fontSize: 30, color: '#dd0000' }} />}
            </div>
        </div>
    )
}

export default QuestaoResultadoFim;