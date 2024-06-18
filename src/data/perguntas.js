const misturarRespostas = (respostas) => {
    for (let i = respostas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [respostas[i], respostas[j]] = [respostas[j], respostas[i]];
    }
    return respostas;
}

const perguntas = [
    {
        pergunta: 'Qual é o principal mercado de atuação da NewM?',
        respostas: misturarRespostas([
            { resposta: 'Serviços financeiros e consórcios', correta: true },
            { resposta: 'Varejo e e-commerce', correta: false },
            { resposta: 'Saúde e bem-estar', correta: false },
            { resposta: 'Educação e treinamento', correta: false }
        ])
    },
    {
        pergunta: 'Qual é uma das principais soluções oferecidas pela NewM?',
        respostas: misturarRespostas([
            { resposta: 'Tecnologia para vendas de consórcio', correta: true },
            { resposta: 'Plataforma de e-commerce', correta: false },
            { resposta: 'Aplicações de telemedicina', correta: false },
            { resposta: 'Sistemas de gestão escolar', correta: false }
        ])
    },
    {
        pergunta: 'Em que ano a NewM foi fundada?',
        respostas: misturarRespostas([
            { resposta: '2012', correta: true },
            { resposta: '2010', correta: false },
            { resposta: '2015', correta: false },
            { resposta: '2008', correta: false }
        ])
    },
    {
        pergunta: 'Qual grupo adquiriu participação majoritária da NewM em 2022?',
        respostas: misturarRespostas([
            { resposta: 'Grupo Stefanini', correta: true },
            { resposta: 'Grupo Globo', correta: false },
            { resposta: 'Grupo Santander', correta: false },
            { resposta: 'Grupo Votorantim', correta: false }
        ])
    },
    {
        pergunta: 'Qual é uma das tecnologias fornecidas pela NewM?',
        respostas: misturarRespostas([
            { resposta: 'Aplicativo de força de vendas para o mercado de serviços financeiros', correta: true },
            { resposta: 'Aplicativo de delivery de comida', correta: false },
            { resposta: 'Aplicativo de streaming de música', correta: false },
            { resposta: 'Aplicativo de transporte particular', correta: false }
        ])
    },
    {
        pergunta: 'Onde está localizado o escritório da NewM?',
        respostas: misturarRespostas([
            { resposta: 'São José do Rio Preto, SP', correta: true },
            { resposta: 'São Paulo, SP', correta: false },
            { resposta: 'Rio de Janeiro, RJ', correta: false },
            { resposta: 'Belo Horizonte, MG', correta: false }
        ])
    }
    
    
];

export default perguntas;
