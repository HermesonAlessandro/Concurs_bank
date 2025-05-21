// Array que armazenará todas as questões do quiz
const questoes = [
    // As questões devem ser adicionadas neste array, cada uma com sua estrutura de pergunta, alternativas e resposta correta.
];

// Função para criar as questões dinamicamente e adicioná-las ao HTML
function criarQuestoes() {
    const container = document.getElementById("quiz-container"); // Obtém o elemento onde as questões serão exibidas

    questoes.forEach((questao, index) => {
        const div = document.createElement("div"); // Cria um novo elemento <div> para cada questão
        div.innerHTML = `
            <h3>Questão ${index + 1}</h3> <!-- Exibe o número da questão -->
            <form id="${questao.id}"> <!-- Cria um formulário identificável para cada questão -->
                <p>${questao.pergunta}</p> <!-- Exibe a pergunta da questão -->

                <!-- Gera as alternativas dinamicamente e cria botões de rádio para seleção -->
                ${Object.entries(questao.alternativas)
                    .map(([key, value]) => `<label><input type="radio" name="${questao.id}" value="${key}"> ${key}) ${value}</label><br>`)
                    .join("")
                }
                <br>
                <button type="submit">Resposta</button> <!-- Botão para enviar a resposta -->
            </form>
            <p id="resultado${questao.id}"></p> <!-- Elemento onde o resultado será exibido -->
        `;
        
        container.appendChild(div); // Adiciona a questão ao contêiner principal

        // Adiciona evento para validar a resposta quando o usuário submeter o formulário
        validarResposta(questao.id, questao.correta, questao.explicacoes);
    });
}

// Função para validar respostas dos usuários
function validarResposta(questaoId, respostaCorreta, explicacoes){
    document.getElementById(questaoId).addEventListener("submit", function(event){
        event.preventDefault(); // Impede o recarregamento da página ao submeter o formulário

        // Obtém a alternativa selecionada pelo usuário
        const respostaSelecionada = document.querySelector(`input[name="${questaoId}"]:checked`);
        const resultado = document.getElementById(`resultado${questaoId}`); // Obtém o elemento onde o resultado será exibido

        if(respostaSelecionada){
            const valor = respostaSelecionada.value; // Obtém o valor da alternativa selecionada
            const correto = valor == respostaCorreta; // Compara com a resposta correta

            // Exibe a mensagem correspondente à resposta do usuário
            resultado.innerHTML = (correto ? "<strong>Resposta correta!</strong><br>" : "<strong>Resposta errada.</strong><br>") +
                explicacoes[valor]; // Mostra a explicação para cada resposta
        } else {
            resultado.textContent = "Por favor, selecione uma alternativa."; // Exibe um aviso se nenhuma alternativa for escolhida
        }
    });
}

// Aguarda o carregamento completo da página antes de executar a função para criar as questões
document.addEventListener("DOMContentLoaded", criarQuestoes);