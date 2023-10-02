
const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();
       
        botao.classList.add("selecionado");
        const personagens = document.querySelectorAll(".personagem");
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelcionado = document.querySelector(".personagem.selecionado");
    personagemSelcionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

