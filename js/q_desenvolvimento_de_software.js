// Array que armazenará todas as questões do quiz
const questoes = [
        {
            id: "questao01", 
                    pergunta: "(CESPE - 2021) O que é o modelo de desenvolvimento ágil em software?",
                    alternativas:{
                        A: "Um modelo linear e sequencial",
                        B: "Um modelo baseado em documentação extensa",
                        C: "Um modelo que foca em entregas rápidas e iterativas",
                        D: "Um modelo que não permite mudanças durante o projeto",
                        E: "Um modelo que não envolve o cliente"
                    },
                    correta: "C",
                    explicacoes:{
                        A: "Modelo linear e sequencial é o modelo cascata.",
                        B: "Documentação extensa não é característica principal do ágil.",
                        C: "O desenvolvimento ágil prioriza entregas rápidas e incrementais com colaboração constante com o cliente.",
                        D: "Ágil permite e incentiva mudanças durante o projeto.",
                        E: "Cliente é parte fundamental no desenvolvimento ágil."
                    }
                },

                {
                    id: "questao02", 
                    pergunta: "(FCC - 2020) Qual das alternativas representa uma linguagem de programação orientada a objetos?",
                    alternativas:{
                        A: "HTML",
                        B: "CSS",
                        C: "Java",
                        D: "SQL",
                        E: "XML"
                    },
                    correta: "C",
                    explicacoes:{
                        A: "HTML é linguagem de marcação para páginas web",
                        B: "CSS é linguagem de estilo para páginas web.",
                        C: "Java é uma linguagem de programação orientada a objetos, suportando conceitos como classes e herança.",
                        D: "SQL é linguagem de consulta para banco de dados.",
                        E: "XML é linguagem de marcação para dados."
                    }
                },

                {
                    id: "questao03", 
                    pergunta: "(CESPE - 2019) Qual a finalidade dos testes unitários no desenvolvimento de software?",
                    alternativas:{
                        A: "Testar a integração entre módulos",
                        B: "Testar unidades individuais de código",
                        C: "Testar a interface do usuário",
                        D: "Testar o desempenho do sistema",
                        E: "Testar o sistema em ambiente de produção"
                    },
                    correta: "B",
                    explicacoes:{
                        A: "Testar integração é teste de integração.",
                        B: "Testes unitários verificam se pequenas partes do código funcionam isoladamente.",
                        C: "Testar interface é teste de interface ou funcional.",
                        D: "Testar desempenho é teste de performance.",
                        E: "Testar em produção não é teste unitário."
                    }
                },

                {
                    id: "questao04", 
                    pergunta: "(FGV - 2018) O que significa o conceito de 'versionamento' em desenvolvimento de software?",
                    alternativas:{
                        A: "Processo de documentação do código",
                        B: "Controle e gerenciamento das mudanças no código",
                        C: "Processo de teste do software",
                        D: "Criação de backups do sistema",
                        E: "Descrição das funcionalidades do sistema"
                    },
                    correta: "B",
                    explicacoes:{
                        A: "Documentação é importante, mas não é versionamento",
                        B: "Versionamento gerencia alterações no código, permitindo controle e recuperação de versões anteriores.",
                        C: "Testes são processos diferentes.",
                        D: "Backup não é a definição de versionamento.",
                        E: "Descrição das funcionalidades é documentação."
                    }
                },

                {
                    id: "questao05", 
                    pergunta: "(CESPE - 2020) O que é uma API no contexto de desenvolvimento de software?",
                    alternativas:{
                        A: "Um banco de dados",
                        B: "Um sistema operacional",
                        C: "Um conjunto de funções e rotinas para interação entre sistemas",
                        D: "Um tipo de linguagem de programação",
                        E: "Um servidor web"
                    },
                    correta: "C",
                    explicacoes:{
                        A: "API não é banco de dados.",
                        B: "API não é sistema operacional.",
                        C: "API (Application Programming Interface) permite que diferentes softwares se comuniquem entre si.",
                        D: "API não é linguagem de programação.",
                        E: "API não é servidor web."
                    }
                },

                {
                    id: "questao06", 
                    pergunta: "(UFTech - 2025) Em um cenário de desenvolvimento moderno, uma equipe foi incumbida de criar um sistema web robusto, com prazos curtos e mudanças frequentes nos requisitos, vindas diretamente do cliente. O gerente do projeto decidiu adotar uma metodologia ágil para garantir entregas incrementais, comunicação constante com o cliente e flexibilidade para adaptar-se rapidamente às mudanças. Durante as primeiras semanas, o time organizou reuniões diárias curtas, onde cada membro relatava o que fez no dia anterior, o que pretendia fazer no dia e quais obstáculos enfrentava. Além disso, ao fim de cada ciclo de duas semanas, o time realizava uma entrega funcional do sistema, coletava feedback e planejava o próximo ciclo. Considerando esse cenário, analise as afirmativas a seguir: I. A metodologia adotada provavelmente foi o Scrum, que se caracteriza por ciclos chamados de Sprints e reuniões diárias chamadas de Daily Scrum. II. A prática de modificar o código para torná-lo mais compreensível, sem alterar seu comportamento externo, é conhecida como refatoração. III. O papel de facilitar as cerimônias, apoiar a equipe e remover impedimentos é atribuído ao Product Owner. IV. O uso de design patterns pode ajudar a resolver problemas recorrentes de forma eficiente e padronizada, promovendo reuso e manutenção do código.",
                    alternativas:{
                        A: "Apenas as afirmativas I, II e III estão corretas.",
                        B: "Apenas as afirmativas I, II e IV estão corretas.",
                        C: "Apenas as afirmativas I e II estão corretas.",
                        D: "Todas as afirmativas estão corretas.",
                        E: "Apenas as afirmativas II e IV estão corretas."
                    },
                    correta: "B",
                    explicacoes:{
                        A: "Errado. A afirmativa III está incorreta. O papel descrito é do Scrum Master, não do Product Owner.",
                        B: "Correto. I, II e IV estão corretas; apenas a III está errada.",
                        C: "Errado. Além de I e II, a IV também está correta e foi ignorada.",
                        D: "Errado. A III está errada porque descreve o Scrum Master, não o Product Owner.",
                        E: "Errado. I também está correta e foi ignorada aqui."
                    }
                },

                {
                    id: "questao07", 
                    pergunta: "(CESPE - 2019) Em desenvolvimento ágil, o que é uma 'Sprint'?",
                    alternativas:{
                        A: "Uma fase de planejamento inicial",
                        B: "Um ciclo curto de desenvolvimento com entregas incrementais",
                        C: "Uma reunião diária",
                        D: "Um documento de requisitos",
                        E: "Um tipo de teste"
                    },
                    correta: "B",
                    explicacoes:{
                        A: "Planejamento é uma atividade, não sprint.",
                        B: "Sprint é um período fixo em que um conjunto de funcionalidades é desenvolvido e entreguea.",
                        C: "Reunião diária é Daily Scrum.",
                        D: "Documento de requisitos não é sprint.",
                        E: "Teste não é sprint."
                    }
                },

                {
                    id: "questao08", 
                    pergunta: "(FGV - 2020) O que é refatoração de código?",
                    alternativas:{
                        A: "Modificar código para melhorar sua estrutura sem alterar seu comportamento",
                        B: "Corrigir bugs no código",
                        C: "Adicionar novas funcionalidades ao código",
                        D: "Excluir código obsoleto",
                        E: "Escrever documentação do código"
                    },
                    correta: "A",
                    explicacoes:{
                        A: "Refatoração visa deixar o código mais legível e manutenível sem mudar seu funcionamento.",
                        B: "Corrigir bugs é depuração.",
                        C: "Adicionar funcionalidades é desenvolvimento",
                        D: "Excluir código é limpeza, não refatoração.",
                        E: "Escrever documentação é diferente."
                    }
                },

                {
                    id: "questao09", 
                    pergunta: "(CESPE - 2018) Qual o papel do Scrum Master em uma equipe ágil?",
                    alternativas:{
                        A: "Gerenciar a equipe e tomar decisões técnicas",
                        B: "Facilitar processos e remover impedimentos",
                        C: "Escrever o código principal do projeto",
                        D: "Definir os requisitos do produto",
                        E: "Ser o cliente do projeto"
                    },
                    correta: "B",
                    explicacoes:{
                        A: "Gerenciamento técnico é papel do líder técnico.",
                        B: "Scrum Master ajuda a equipe a seguir práticas ágeis e resolve obstáculos no processo.",
                        C: "Escrever código não é função principal do Scrum Master.",
                        D: "Definir requisitos é papel do Product Owner.",
                        E: "Cliente é externo à equipe Scrum."
                    }
                },

                {
                    id: "questao10", 
                    pergunta: "(FCC - 2019) Qual é o principal benefício do uso de design patterns no desenvolvimento de software?",
                    alternativas:{
                        A: "Aumentar a complexidade do código",
                        B: "Garantir a segurança do software",
                        C: "Reutilizar soluções comprovadas para problemas comuns",
                        D: "Reduzir o tempo de execução do software",
                        E: "Eliminar bugs automaticamente"
                    },
                    correta: "C",
                    explicacoes:{
                        A: "Design patterns não visam aumentar complexidade.",
                        B: "Eles não garantem segurança diretamente.",
                        C: "Design patterns são modelos reutilizáveis que facilitam a solução de problemas recorrentes.",
                        D: "Não necessariamente reduzem tempo de execução.",
                        E: "Não eliminam bugs automaticamente."
            }
        }
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