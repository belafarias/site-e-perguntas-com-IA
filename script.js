const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a inteligência artificial pode melhorar o atendimento ao cliente em empresas?",
        alternativas: [
            {
                texto: "Reduzindo o tempo de espera com chatbots e assistentes virtuais.",
                afirmacao: "A inteligência artificial pode melhorar o atendimento ao cliente em empresas ao reduzir o tempo de espera com chatbots e assistentes virtuais. "
            },
            {
                texto: "Aumentando o número de funcionários necessários.",
                afirmacao: "Não é uma vantagem, pois a IA visa reduzir a necessidade de mais funcionários ao automatizar tarefas repetitivas."
            }
        ]
    },
    {
        enunciado: "Quais são os principais desafios na implementação de inteligência artificial em pequenas empresas?",
        alternativas: [
            {
                texto: "Alto custo de implementação e falta de integração com sistemas existentes.",
                afirmacao: "Os principais desafios na implementação de inteligência artificial em pequenas empresas incluem o alto custo de implementação e a falta de integração com sistemas existentes.


            },
            {
                texto: "Disponibilidade abundante de dados e simplicidade na gestão.",
                afirmacao: "Muitas pequenas empresas enfrentam a dificuldade de reunir dados suficientes e gerenciar a tecnologia de forma eficaz."
            }
        ]
    },
    {
        enunciado: "De que maneira a inteligência artificial está impactando o setor de saúde?",
        alternativas: [
            {
                texto: " Aumentando o número de erros médicos.",
                afirmacao: "A IA visa reduzir erros médicos ao fornecer diagnósticos e recomendações mais precisos e baseados em dados."
            },
            {
                texto: "Facilitando diagnósticos mais rápidos e precisos.",
                afirmacao: "A inteligência artificial está impactando o setor de saúde ao facilitar diagnósticos mais rápidos e precisos."
            }
        ]
    },

   
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
