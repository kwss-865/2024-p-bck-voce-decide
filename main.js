const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você lê uma notícia sobre vagas para um reformatorio de música",
        alternativas: [ {
            texto:"Interresante, meu sonho de infância sempre foi ser musicista",
            afirmacao: "Você tem esperanças e expectativas de conseguir concilhar a musica com sua vida profissional,"
        },
        {
            texto:"Iria ser incrivel mas não tenho a segurança de uma carreira estavél",
            afirmacao:"Você é mais pesimista em relação a focar na musica e conseguir bons resultados,"
        }
        ]
    },
    {
        enunciado: "Recebeu a notícia que foi aceito no curso superior de engenharia de software ",
        alternativas: [ {
            texto:"Agora estou divido se sigo na área de TI ou persigo meu sonho de ser musicista",
            afirmacao:"Tenta encontrar um jeito de juntar seus dois objetivos, mas toma a descisão de aceitar a vaga,"
        },
        {
            texto:"Vou continuar na área, pois preciso de estabilidade",
            afirmacao:"Está cursando engenharia de software"
        }
        ]  
    },
    {
        enunciado: "Você descobre que a áreas da tecnologia que conversam com a música",
        alternativas: [ {
            texto:"Estou muito estusiasmado em saber que a possibilidade de trabalhar com as duas coisas",
            afirmacao:"Começa a se aprofundar mais sobre o assunto durante a faculdade"
        },
        {
            texto:"Não vejo um futuro seguindo essa área do TI",
            afirmacao:"Durante a faculdade foca em gerenciamneto de projeto,"
        }
        ]  
    },
    {
        enunciado: "Um colega da faculdade descobre que você entende de música e pede ajuda em seu projeto, de um software de com um metronomo e afinador digital",
        alternativas: [ {
            texto:"Estou super interrasado no projeto, não podia ser uma hora melhor era oque eu estava procurando",
            afirmacao:"Você inicia o projeto com seu colega de faculdade e pretende usar no seu TCC,"
        },
        {
            texto:"Uma ótima ideia, porém estou concluindo um projeto e não terei tempo",
            afirmacao:"Você se está seguro em seu projeto de gerenciamento de software,"
        }
        ]  
    },
    {
        enunciado: "Você conseguiiu e concluiu a faculdade, O que irá fazer depois?",
        alternativas: [ {
            texto:"Vou seguir no campo de criação de software para músicos",
            afirmacao:"Cria uma software de afinação de instrumentos músicais que revolucinou o mercado "
        },
        {
            texto:"Vou seguir o ramo de gerenciamento de projetos e focar em trabalhar no exterior",
            afirmacao:"consegue um emprego de sênior, em um banco renomado da frança"
        }
        ]  
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraresultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostraAternativas();
}

function mostraAternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click',() => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " "
    atual++;
    mostraPergunta();
}

function mostraresultado(){
    caixaPerguntas.textContent = "Inicio do texto...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
