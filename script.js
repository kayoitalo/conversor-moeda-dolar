document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let telaBoasVindas = document.getElementById("tela-boas-vindas");
        let conversor = document.getElementById("conversor");

        telaBoasVindas.style.animation = "fadeOut 1.5s forwards";

        setTimeout(() => {
            telaBoasVindas.style.display = "none";
            conversor.style.visibility = "visible";
            conversor.style.opacity = "1";
        }, 1500);
    }, 3000);
});

async function atualizarCotacao() {
    try {
        let resposta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
        let dados = await resposta.json();
        let cotacaoDolar = parseFloat(dados.USDBRL.bid).toFixed(2);

        // Atualiza o valor da cotação na tela
        document.getElementById("cotacaoValor").textContent = cotacaoDolar;

        // Retorna o valor da cotação para ser usado no cálculo
        return cotacaoDolar;
    } catch (erro) {
        console.error("Erro ao buscar cotação:", erro);
        return 4.80; // Retorna um valor fixo caso a API falhe
    }
}

async function converter() {
    let valorDolar = document.getElementById("valorDolar").value;
    let resultado = document.getElementById("resultado");
    let infoCotacao = document.getElementById("info-cotacao");

    if (valorDolar) {
        let cotacaoAtual = await atualizarCotacao(); // Obtém a cotação mais recente da API
        let valorReais = (valorDolar * cotacaoAtual).toFixed(2);

        resultado.textContent = `R$ ${valorReais}`;

        // Mostra a seção de informações com animação
        infoCotacao.classList.add("visible");

        // Rola suavemente até a seção de informações
        infoCotacao.scrollIntoView({ behavior: "smooth" });
    } else {
        resultado.textContent = "Por favor, insira um valor válido.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    atualizarCotacao(); // Atualiza a cotação assim que a página carrega
});

