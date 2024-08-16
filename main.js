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
            afirmacao:"Tenta encontrar um jeito de juntar seus dois objetivos"
        },
        {
            texto:"Alternativas04",
            afirmacao:"afirmação04"
        }
        ]  
    },
    {
        enunciado: "texto03",
        alternativas: [ {
            texto:"Alternativas05",
            afirmacao:"afirmção05"
        },
        {
            texto:"Alternativas06",
            afirmacao:"afirmação06"
        }
        ]  
    },
    {
        enunciado: "texto04",
        alternativas: [ {
            texto:"Alternativas07",
            afirmacao:"afirmação07"
        },
        {
            texto:"Alternativas08",
            afirmacao:"afirmação08"
        }
        ]  
    },
    {
        enunciado: "texto05",
        alternativas: [ {
            texto:"Alternativas09",
            afirmacao:"afirmação09"
        },
        {
            texto:"Alternativas10",
            afirmacao:"afirmação10"
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
