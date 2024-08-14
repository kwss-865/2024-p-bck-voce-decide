const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('texto-resultado');

const perguntas = [
    {
        enunciado: "texto01",
        alternativas: [
            "Alternativas01",
            "Alternativas02"
        ]
    },
    {
        enunciado: "texto02",
        alternativas: [
            "Alternativas01",
            "Alternativas02"
        ]  
    },
    {
        enunciado: "texto03",
        alternativas: [
            "Alternativas01",
            "Alternativas02"
        ]  
    },
    {
        enunciado: "texto04",
        alternativas: [
            "Alternativas01",
            "Alternativas02"
        ]  
    },
    {
        enunciado: "texto05",
        alternativas: [
            "Alternativas01",
            "Alternativas02"
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
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}