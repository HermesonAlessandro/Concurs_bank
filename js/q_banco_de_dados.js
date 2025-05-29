// Array contendo as questões do quiz
const questoes = [
        {
            id: "questao01", 
            pergunta: "(CESPE - 2021) Qual comando SQL é utilizado para recuperar dados de uma tabela?",
            alternativas:{
                A: "Insert",
                B: "Update",
                C: "Delete",
                D: "Select",
                E: "Create"
            },
            correta: "D",
            explicacoes:{
                A: "'INSERT' insere novos dados.",
                B: "'UPDATE' modifica dados existentes.",
                C: "'DELETE' remove registros.",
                D: "'SELECT' consulta e recupera dados.",
                E: "'CREATE' cria tabelas ou bancos."
            }
        },

        {
            id: "questao02", 
            pergunta: "(FCC - 2020) O que é uma chave primária(PRIMARY KEY) em uma tabela de banco de dados?",
            alternativas:{
                A: "Uma coluna que pode conter valores duplicados",
                B: "Um índice que permite busca rápida",
                C: "Uma coluna que identifica unicamente cada registro",
                D: "Uma coluna que aceita valores nulos",
                E: "Um conjunto de tabelas relacionadas"
            },
            correta: "C",
            explicacoes:{
                A: "A chave primária não pode ter valores duplicados.",
                B: "Índices melhoram performance, mas não são a chave primária em si.",
                C: "A chave primária identifica unicamente cada registro e não pode ter valores nulos.",
                D: "Aceitar valores nulos não é permitido em chave primária.",
                E: "Chave primária é uma coluna, não um conjunto de tabelas."
            }
        },

        {
            id: "questao03", 
            pergunta: "(CESPE - 2019) Qual a função do comando SQL 'JOIN'?",
            alternativas:{
                A: "Inserir dados em uma tabela",
                B: "Atualizar dados de uma tabela",
                C: "Combinar registros de duas ou mais tabelas",
                D: "Excluir registros de uma tabela",
                E: "Criar uma nova tabela"
            },
            correta: "C",
            explicacoes:{
                A: "Inserir dados é a função do comando INSERT.",
                B: "Atualizar dados é função do comando UPDATE.",
                C: "JOIN combina registros de tabelas diferentes com base em uma condição comum.",
                D: "Excluir registros é função do comando DELETE.",
                E: "Criar tabelas é função do comando CREATE."
            }
        },

        {
            id: "questao04", 
            pergunta: "(CESPE - 2018) O que faz o comando SQL 'DROP TABLE'?",
            alternativas:{
                A: "Exclui uma tabela e todos os seus dados",
                B: "Cria uma nova tabela",
                C: "Insere novos dados em uma tabela",
                D: "Atualiza dados existentes em uma tabela",
                E: "Exclui registros de uma tabela"
            },
            correta: "A",
            explicacoes:{
                A: "'DROP TABLE' exclui a tabela inteira e todos os seus dados permanentemente.",
                B: "Criar tabela é função do comando CREATE TABLE.",
                C: "Inserir dados é função do comando INSERT.",
                D: "Atualizar dados é função do comando UPDATE.",
                E: "Excluir registros é função do comando DELETE, não DROP TABLE."
            }
        },

        {
            id: "questao05", 
            pergunta: "(CESPE - 2017) Qual comando SQL é utilizado para modificar a estrutura de uma tabela?",
            alternativas:{
                A: "ALTER TABLE",
                B: "UPDATE TABLE",
                C: "MODIFY TABLE",
                D: "CHANGE TABLE",
                E: "CREATE TABLE"
            },
            correta: "A",
            explicacoes:{
                A: "ALTER TABLE é usado para modificar a estrutura da tabela, como adicionar ou remover colunas.",
                B: "UPDATE altera dados dentro da tabela, não sua estrutura.",
                C: "Não existe comando 'MODIFY TABLE'.",
                D: "Não existe comando 'CHANGE TABLE'.",
                E: "CREATE TABLE cria uma tabela nova, não modifica a existente."
            }
        },

        {
            id: "questao06", 
            pergunta: "(CESPE - 2020) Qual comando SQL é utilizado para criar uma nova tabela?",
            alternativas:{
                A: "CREATE TABLE",
                B: "INSERT TABLE",
                C: "UPDATE TABLE",
                D: "DELETE TABLE",
                E: "DROP TABLE"
            },
            correta: "A",
            explicacoes:{
                A: "CREATE TABLE cria uma nova tabela no banco de dados.",
                B: "INSERT insere dados, não cria tabela.",
                C: "UPDATE altera dados, não cria tabela.",
                D: "DELETE remove registros, não cria tabela.",
                E: "DROP TABLE exclui uma tabela, não cria."
            }
        },

        {
            id: "questao07", 
            pergunta: "(CESPE - 2016) Qual o comando SQL usado para remover dados de uma tabela?",
            alternativas:{
                A: "INSERT",
                B: "DELETE",
                C: "UPDATE",
                D: "SELECT",
                E: "DROP"
            },
            correta: "B",
            explicacoes:{
                A: "'INSERT' insere dados, não remove.",
                B: "'DELETE' remove dados da tabela.",
                C: "'UPDATE' modifica dados, não remove.",
                D: "'SELECT' consulta dados, não remove.",
                E: "'DROP' exclui tabela ou banco, não só dados."
            }
        },

        {
            id: "questao08", 
            pergunta: "(CESPE - 2015) Qual comando SQL é usado para recuperar dados específicos de uma tabela?",
            alternativas:{
                A: "SELECT",
                B: "INSERT",
                C: "DELETE",
                D: "UPDATE",
                E: "CREATE"
            },
            correta: "A",
            explicacoes:{
                A: "'SELECT' recupera dados específicos de uma tabela.",
                B: "'INSERT' insere novos dados.",
                C: "'DELETE' remove dados.",
                D: "'UPDATE' modifica dados existentes.",
                E: "'CREATE' cria tabelas ou bancos de dados."
            }
        },

        {
            id: "questao09", 
            pergunta: "(CESPE - 2018) Qual comando SQL é utilizado para remover registros de uma tabela?",
            alternativas:{
                A: "Delete",
                B: "Drop",
                C: "Truncate",
                D: "Remove",
                E: "Erase"
            },
            correta: "A",
            explicacoes:{
                A: "DELETE remove registros específicos de uma tabela, podendo usar condição WHERE.",
                B: "DROP remove a tabela inteira, não só registros.",
                C: "TRUNCATE remove todos os registros rapidamente, mas não é DELETE.",
                D: "REMOVE não é comando SQL válido.",
                E: "ERASE não é comando SQL válido."
            }
        },

        {
            id: "questao10", 
            pergunta: "(FCC - 2019) O que é um índice em banco de dados?",
            alternativas:{
                A: "Um tipo de tabela",
                B: "Um arquivo de backup",
                C: "Uma estrutura que acelera a busca de registros",
                D: "Um comando SQL",
                E: "Um tipo de relacionamento"
            },
            correta: "C",
            explicacoes:{
                A: "Índice não é tabela.",
                B: "Índice não é backup.",
                C: "Índices são usados para melhorar a velocidade de consultas, criando ponteiros para dados.",
                D: "Índice não é comando SQL, mas estrutura.",
                E: "Índice não é relacionamento."
            }
        }
    ];

// Função responsável por criar dinamicamente as questões do quiz na página
function criarQuestoes() {
    // Obtém o elemento onde as questões serão adicionadas dinamicamente
    const container = document.getElementById("quiz-container");

    // Recupera o tema do quiz a partir de um atributo ou variável global, garantindo que um tema padrão seja usado caso nenhum seja definido
    const temaAtual = document.getElementById("quiz-container").getAttribute("data-tema") || "Banco de dados"; 

    // Exibe no console o tema carregado para fins de depuração
    console.log("Tema carregado:", temaAtual);

    // Percorre o array de questões e cria os elementos HTML para cada uma delas
    questoes.forEach((questao, index) => {
        // Cria um elemento <div> para estruturar a questão
        const div = document.createElement("div"); 

        // Define o conteúdo interno do <div> com a estrutura da questão
        div.innerHTML = `
            <h3>Questão ${index + 1}</h3> <!-- Exibe o número da questão -->
            <form id="${questao.id}"> <!-- Cria um formulário identificável para cada questão -->
                <p>${questao.pergunta}</p> <!-- Exibe a pergunta da questão -->

                <!-- Gera dinamicamente as alternativas disponíveis -->
                ${Object.entries(questao.alternativas)
                    .map(([key, value]) => `<label><input type="radio" name="${questao.id}" value="${key}"> ${key}) ${value}</label><br>`)
                    .join("") 
                }
                <br>
                <button type="submit">Responder</button> <!-- Botão para enviar a resposta -->
                <button type="button" class="limpar-btn" data-questao="${questao.id}">Limpar</button> <!-- Botão para limpar a seleção -->
            </form>
            <p id="resultado${questao.id}"></p> <!-- Local onde será exibido o resultado da resposta -->
        `;

        // Adiciona o elemento criado ao contêiner principal
        container.appendChild(div); 

        // Adiciona evento de validação da resposta ao submeter o formulário
        validarResposta(questao.id, questao.correta, questao.explicacoes);
    });

    // Adiciona funcionalidade ao botão de limpar seleção
    document.querySelectorAll(".limpar-btn").forEach(botao => {
        botao.addEventListener("click", function () {
            // Obtém o identificador da questão correspondente ao botão pressionado
            const questaoId = this.getAttribute("data-questao");

            // Limpa o resultado da resposta exibido na página
            document.getElementById(`resultado${questaoId}`).textContent = ""; 
        });
    });

    // Criação do botão para finalizar o quiz
    const botaoFinalizar = document.createElement("button"); 
    botaoFinalizar.textContent = "Finalizar"; // Define o texto do botão
    botaoFinalizar.style.display = "block"; // Exibe o botão como bloco
    botaoFinalizar.style.margin = "20px auto"; // Centraliza o botão na página

    // Evento de clique para coletar respostas e enviar ao PHP
    botaoFinalizar.addEventListener("click", function () {
        let respostas = {}; // Inicializa um objeto para armazenar as respostas selecionadas pelo usuário

        // Percorre todas as questões e registra as respostas do usuário
        questoes.forEach(questao => {
            // Obtém a alternativa escolhida pelo usuário para cada questão
            const respostaSelecionada = document.querySelector(`input[name="${questao.id}"]:checked`);
            respostas[questao.id] = respostaSelecionada ? respostaSelecionada.value : null; // Registra a alternativa escolhida ou define como null caso não tenha sido selecionada
        });

        // Exibe no console as respostas coletadas antes de serem enviadas ao servidor (debugging)
        console.log("Respostas coletadas:", respostas);

        // Verifica se todas as questões foram respondidas antes de prosseguir
        if(Object.values(respostas).includes(null)){
            alert("Por favor, responda todas as questões antes de finalizar.");
            return;
        }

        // Criação de um formulário invisível para envio das respostas ao PHP
        const form = document.createElement("form");
        form.method = "POST"; // Define o método de envio como POST
        form.action = "../php/resultado.php"; // Define o script PHP que processará os resultados

        // Adiciona cada resposta como um campo oculto dentro do formulário
        Object.entries(respostas).forEach(([key, value]) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = value;
            form.appendChild(input);
        });

        // Adiciona o tema ao envio para garantir que o PHP o receba corretamente
        const inputTema = document.createElement("input");
        inputTema.type = "hidden";
        inputTema.name = "tema";
        inputTema.value = temaAtual;
        form.appendChild(inputTema);

        // Exibe no console o tema enviado para depuração
        console.log("Tema enviado:", temaAtual);

        // Adiciona o formulário ao corpo da página e submete os dados ao servidor
        document.body.appendChild(form);
        form.submit();
    });

    // Adiciona o botão de finalização ao contêiner principal
    container.appendChild(botaoFinalizar);
}

// Função para validar a resposta do usuário ao submeter o formulário
function validarResposta(questaoId, respostaCorreta, explicacoes) {
    // Adiciona um evento de submissão ao formulário da questão
    document.getElementById(questaoId).addEventListener("submit", function (event) {
        event.preventDefault(); // Impede a recarga da página ao enviar o formulário

        // Obtém a alternativa escolhida pelo usuário
        const respostaSelecionada = document.querySelector(`input[name="${questaoId}"]:checked`);
        const resultado = document.getElementById(`resultado${questaoId}`); // Elemento onde será exibido o resultado da resposta

        if (respostaSelecionada) {
            const valor = respostaSelecionada.value; // Obtém o valor da alternativa escolhida
            const correto = valor == respostaCorreta; // Verifica se a resposta está correta

            // Exibe mensagem de acerto ou erro ao usuário
            resultado.innerHTML = correto 
                ? "<strong>Resposta correta!</strong><br>" 
                : "<strong>Resposta errada.</strong><br>";

            // Exibe todas as alternativas, destacando a correta
            Object.entries(explicacoes).forEach(([key, value]) => {
                resultado.innerHTML += `${key}) ${value} ${key == respostaCorreta ? "(Correta)" : ""} <br>`;
            });

            // Desativa os botões de resposta para impedir mudanças após submissão
            document.querySelectorAll(`input[name="${questaoId}"]`).forEach(input => {
                input.disabled = true;
            });

            // Desativa o botão de envio para evitar múltiplas submissões
            document.querySelector(`#${questaoId} button[type="submit"]`).disabled = true;
        } else {
            // Exibe mensagem de aviso caso nenhuma alternativa tenha sido selecionada
            resultado.textContent = "Por favor, selecione uma alternativa."; 
        }
    });
}

// Aguarda o carregamento completo da página antes de criar as questões
document.addEventListener("DOMContentLoaded", criarQuestoes);