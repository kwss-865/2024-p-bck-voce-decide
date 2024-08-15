const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "texto01",
        alternativas: [ {
            texto:"Alternativas01",
            afirmacao: "afirmação01"
        },
        {
            texto:"Alternativas02",
            afirmacao:"afirmção02"
        }
        ]
    },
    {
        enunciado: "texto02",
        alternativas: [ {
            texto:"Alternativas03",
            afirmacao:"afirmação03"
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

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAternativas();
}

function mostraAternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click',function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}
mostraPergunta();
