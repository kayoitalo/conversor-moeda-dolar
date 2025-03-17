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

function converter() {
    let cotacaoDolar = 4.80;
    let valorDolar = document.getElementById("valorDolar").value;
    let resultado = document.getElementById("resultado");
    let infoCotacao = document.getElementById("info-cotacao");

    if (valorDolar) {
        let valorReais = (valorDolar * cotacaoDolar).toFixed(2);
        resultado.textContent = `R$ ${valorReais}`;
        
        // Mostra a seção de informações com animação
        infoCotacao.classList.add("visible");

        // Rola suavemente até a seção de informações
        infoCotacao.scrollIntoView({ behavior: "smooth" });
    } else {
        resultado.textContent = "Por favor, insira um valor válido.";
    }
}
