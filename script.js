// Função que executa a animação de carregamento
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let telaBoasVindas = document.getElementById("tela-boas-vindas");
        let conversor = document.getElementById("conversor");

        // Animação de fadeOut para a tela de boas-vindas
        telaBoasVindas.style.animation = "fadeOut 1.5s forwards";

        setTimeout(() => {
            telaBoasVindas.style.display = "none";
            conversor.style.visibility = "visible";
            conversor.style.opacity = "1";
        }, 1500);
    }, 3000);
});

// Função que chama a API para obter a cotação atual do dólar
async function atualizarCotacao() {
    try {
        // Realiza a requisição à API para pegar a cotação atual do dólar
        let resposta = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
        
        // Verifica se a resposta foi bem-sucedida
        if (!resposta.ok) {
            throw new Error("Erro ao buscar cotação");
        }

        let dados = await resposta.json();

        // Obtém a cotação atual e retorna como um número com duas casas decimais
        return parseFloat(dados.USDBRL.bid).toFixed(2);
    } catch (erro) {
        console.error("Erro ao buscar cotação:", erro);
        alert("Não foi possível obter a cotação atual. Tente novamente mais tarde.");
        return null; // Retorna null se ocorrer erro na requisição
    }
}

// Função de conversão de dólares para reais
async function converter() {
    const valorDolar = document.getElementById("valorDolar").value;
    const resultado = document.getElementById("resultado");
    const infoCotacao = document.getElementById("info-cotacao");

    if (valorDolar) {
        // Obtém a cotação atual ao chamar a função assíncrona
        const cotacaoAtual = await atualizarCotacao();

        if (cotacaoAtual) {
            // Converte o valor informado de dólares para reais
            const valorReais = (valorDolar * cotacaoAtual).toFixed(2);

            // Exibe o resultado da conversão
            resultado.textContent = `R$ ${valorReais}`;

            // Mostra a seção de informações com animação
            infoCotacao.classList.add("visible");

            // Rola suavemente até a seção de informações
            infoCotacao.scrollIntoView({ behavior: "smooth" });
        } else {
            // Caso a cotação não tenha sido obtida, exibe uma mensagem de erro
            resultado.textContent = "Erro ao obter a cotação atual.";
        }
    } else {
        resultado.textContent = "Por favor, insira um valor válido.";
    }
}

// Atualiza a cotação assim que a página carrega
document.addEventListener("DOMContentLoaded", () => {
    atualizarCotacao(); 
});
