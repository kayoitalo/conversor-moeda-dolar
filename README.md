

# Conversor de Moeda - Dólar para Real

Este projeto é um **Conversor de Moeda** que permite ao usuário converter valores de **dólares (USD)** para **reais (BRL)** com a cotação do dólar sendo atualizada dinamicamente a partir de uma API. O site é responsivo, moderno e inclui animações para melhorar a experiência do usuário.

## Funcionalidades

- **Conversão de Dólar para Real**: O usuário insere um valor em dólares e a conversão é realizada com base na cotação atual do dólar.
- **Cotação Atualizada**: A cotação do dólar é obtida de uma API externa e atualizada automaticamente quando o usuário faz a conversão.
- **Animação e Interatividade**: O site possui animações, como **fade-in** na tela inicial e animações de deslize para mostrar informações adicionais sobre a cotação.
- **Responsividade**: O design do site é adaptável a diferentes tamanhos de tela, funcionando bem tanto em dispositivos móveis quanto desktop.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página.
- **CSS**: Estilização moderna com animações e efeitos responsivos.
- **JavaScript**: Lógica para conversão de moeda e integração com a API de cotação.
- **API**: Utiliza a API `AwesomeAPI` para buscar a cotação do dólar em tempo real.

## Como Funciona

1. O usuário insere o valor em dólares no campo de entrada.
2. Ao clicar em **"Converter"**, o JavaScript busca a cotação atual do dólar através de uma API externa.
3. A conversão é realizada multiplicando o valor em dólares pela cotação obtida.
4. O resultado é exibido na tela, e a página rola suavemente para mostrar informações sobre a cotação.
5. O valor da cotação é atualizado em tempo real, garantindo que o usuário sempre tenha acesso à informação mais recente.

## Como Rodar o Projeto Localmente

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até a pasta do projeto:

   cd nome-do-repositorio

3. Abra o arquivo `index.html` em seu navegador.

   Ou, se você preferir, pode rodar um servidor local simples usando o Python:

   Para Python 3.x:

   python -m http.server

   E abra o navegador em [http://localhost:8000](http://localhost:8000).

## Como Contribuir

1. Fork este repositório.
2. Crie uma nova branch (`git checkout -b feature/nome-da-feature`).
3. Faça as mudanças necessárias e commit com uma mensagem clara (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request no GitHub.
