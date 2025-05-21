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
                A: "'A chave primária não pode ter valores duplicados.",
                B: "'Índices melhoram performance, mas não são a chave primária em si.",
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
                A: "'ALTER TABLE' é usado para modificar a estrutura da tabela, como adicionar ou remover colunas.",
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
                A: "'CREATE TABLE' cria uma nova tabela no banco de dados.",
                B: "INSERT insere dados, não cria tabela.",
                C: "UPDATE altera dados, não cria tabela.",
                D: "DELETE remove registros, não cria tabela.",
                E: "'DROP TABLE' exclui uma tabela, não cria."
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

    // Função para criar as questões dinamicamente
    function criarQuestoes() {
        const container = document.getElementById("quiz-container");

        questoes.forEach((questao, index) => {
            const div = document.createElement("div");
            div.innerHTML = `
                <h3>Questão ${index + 1}</h3>
                <form id="${questao.id}">
                    <p>${questao.pergunta}</p>
                    ${Object.entries(questao.alternativas)
                        .map(([key, value]) => `<label><input type="radio" name="${questao.id}" value="${key}"> ${key}) ${value}</label><br>`)
                        .join("")
                    }
                    <br>
                    <button type="submit">Resposta</button>
                </form>
                <p id="resultado${questao.id}"></p>
            `;
            container.appendChild(div);

            // Adicionando evento para validação
            validarResposta(questao.id, questao.correta, questao.explicacoes);
        });
    }

    // Função genérica para validar respostas
    function validarResposta(questaoId, respostaCorreta, explicacoes){
        document.getElementById(questaoId).addEventListener("submit", function(event){
            event.preventDefault();
            const respostaSelecionada = document.querySelector(`input[name="${questaoId}"]:checked`);
            const resultado = document.getElementById(`resultado${questaoId}`);

            if(respostaSelecionada){
                const valor = respostaSelecionada.value;
                const correto = valor == respostaCorreta;
                resultado.innerHTML = (correto ? "<strong>Resposta correta!</strong><br>" : "<strong>Resposta errada.</strong><br>") +
                    explicacoes[valor];
            }else{
                resultado.textContent = "Por favor, selecione uma alternativa.";
            }
        });
    }

    document.addEventListener("DOMContentLoaded", criarQuestoes);