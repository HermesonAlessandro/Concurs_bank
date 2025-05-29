// Array que armazenará todas as questões do quiz
const questoes = [
        {
            id: "questao01", 
                    pergunta: "(FGV - TCE-RJ - 2022) No contexto dos pilares da segurança da informação, qual alternativa descreve corretamente o conceito de Confidencialidade?",
                    alternativas:{
                        A: " Assegurar que os dados estejam acessíveis sempre que necessário",
                        B: " Garantir que os dados não sejam alterados sem autorização",
                        C: " Impedir que usuários não autorizados acessem as informações",
                        D: " Garantir que os dados não sejam perdidos, independentemente da causa",
                        E: " Impedir que usuários neguem a realização de uma ação"
                    },
                    correta: "C",
                    explicacoes:{
                        A: "Isso é disponibilidade.",
                        B: " Isso é integridade.",
                        C: "Isso é confidencialidade, proteção contra acesso não autorizado.",
                        D: "Relaciona-se à disponibilidade.",
                        E: "Isso se refere ao não repúdio."
                    }
                },

                {
                    id: "questao02", 
                    pergunta: "(CESPE - Ministério da Economia - 2023) Sobre os tipos de malware, assinale a alternativa correta",
                    alternativas:{
                        A: "Ransomware é um malware que coleta dados bancários de forma silenciosa.",
                        B: "Worm é um malware que precisa de um programa hospedeiro para se propagar.",
                        C: "Cavalo de Troia (Trojan) aparenta ser legítimo, mas executa ações maliciosas.",
                        D: "Spyware impede o acesso aos arquivos criptografando-os.",
                        E: "Rootkit é um antivírus disfarçado de programa malicioso."
                    },
                    correta: "C",
                    explicacoes:{
                        A: "Isso descreve um spyware.",
                        B: "Isso descreve vírus; worm se propaga sozinho.",
                        C: "Trojan se disfarça de programa legítimo, mas executa funções maliciosas.",
                        D: "Quem faz isso é o ransomware.",
                        E: "Rootkit oculta ameaças, não é antivírus."
                    }
                },

                {
                    id: "questao03", 
                    pergunta: " (VUNESP - TJ-SP - 2024) Sobre o conceito de Engenharia Social, assinale a alternativa correta",
                    alternativas:{
                        A: "É uma técnica para descobrir falhas em hardware.",
                        B: "Consiste na manipulação de pessoas para obter informações confidenciais.",
                        C: "Está relacionada à análise de códigos maliciosos.",
                        D: "Envolve o teste de desempenho de servidores.",
                        E: "Refere-se a atualizações automáticas de software."
                    },
                    correta: "B",
                    explicacoes:{
                        A: "Não tem relação com hardware.",
                        B: "A essência da engenharia social é explorar o fator humano.",
                        C: "Isso é análise de malware.",
                        D: "Isso é stress test.",
                        E: "Atualização não tem relação com engenharia social."
                    }
                },

                {
                    id: "questao04", 
                    pergunta: " (FGV - SEFAZ-RJ - 2022) O conceito de disponibilidade na segurança da informação está corretamente descrito em:",
                    alternativas:{
                        A: "Assegurar que informações sejam acessadas apenas por pessoas autorizadas.",
                        B: "Proteger os dados contra alterações não autorizadas.",
                        C: "Ocultar a origem dos dados transmitidos na rede.",
                        D: "Impedir que uma pessoa negue ter realizado uma ação.",
                        E: "Garantir que os dados estejam acessíveis e utilizáveis sempre que necessários."
                    },
                    correta: "E",
                    explicacoes:{
                        A: "Isso é confidencialidade.",
                        B: "Isso é integridade.",
                        C: "Isso se refere à anonimização.",
                        D: "Isso é não repúdio.",
                        E: "Isso define disponibilidade."
                    }
                },

                {
                    id: "questao05", 
                    pergunta: "(AOCP - TRT - 2023) Assinale a alternativa que representa uma ameaça de segurança.",
                    alternativas:{
                        A: "Vírus de computador.",
                        B: "Backup automático.",
                        C: "Firewall configurado.",
                        D: " Política de senhas fortes.",
                        E: "Criptografia dos dados."
                    },
                    correta: "A",
                    explicacoes:{
                        A: "Vírus é uma ameaça ativa.",
                        B: "Backup é contingência.",
                        C: "Firewall é uma medida de proteção.",
                        D: "Senha forte é medida preventiva.",
                        E: "Criptografia é contramedida."
                    }
                },

                {
                    id: "questao06", 
                    pergunta: "(FGV - ALERJ - 2024) A utilização de senhas fortes contribui principalmente para qual princípio da segurança da informação?",
                    alternativas:{
                        A: "Disponibilidade.",
                        B: "Não repúdio.",
                        C: "Integridade.",
                        D: "Confidencialidade.",
                        E: "Auditoria."
                    },
                    correta: "D",
                    explicacoes:{
                        A: "Disponibilidade é acesso contínuo.",
                        B: "Não repúdio é comprovação de autoria.",
                        C: "Integridade é proteção contra alteração.",
                        D: "Senhas protegem a confidencialidade.",
                        E: "Auditoria é registro e monitoramento."
                    }
                },

                {
                    id: "questao07", 
                    pergunta: " (CESPE - IBAMA - 2023) Assinale a alternativa que representa uma medida corretiva nasegurança da informação.'?",
                    alternativas:{
                        A: "Instalação de firewall",
                        B: "Política de senhas",
                        C: "Atualização de antivírus",
                        D: "Restauração de dados a partir de backup após falha",
                        E: "Criptografia dos dados sensíveis"
                    },
                    correta: "D",
                    explicacoes:{
                        A: "Firewall é medida preventiva.",
                        B: "Restauração é uma medida corretiva.",
                        C: "Atualização de antivírus é preventiva.",
                        D: "Documento de requisitos não é sprint.",
                        E: "Criptografia é preventiva."
                    }
                },

                {
                    id: "questao08", 
                    pergunta: "(Quadrix - CREFITO - 2023) Sobre backups, assinale a alternativa que melhor define backup diferencial",
                    alternativas:{
                        A: "Copia todos os dados, independentemente de alteração",
                        B: "Copia apenas os dados alterados desde o último backup completo",
                        C: "Copia apenas os dados alterados desde o último backup diferencial",
                        D: "Copia os dados em tempo real, de forma contínua",
                        E: "Copia arquivos aleatórios, conforme a necessidade do usuário"
                    },
                    correta: "B",
                    explicacoes:{
                        A: "Isso é backup completo.",
                        B: "Backup diferencial copia desde o último completo.",
                        C: "Isso é backup incremental.",
                        D: "Isso é backup contínuo (CDP).",
                        E: "Backup aleatório não existe."
                    }
                },

                {
                    id: "questao09", 
                    pergunta: "(CESPE - Ministério da Justiça - 2024) O conceito de não repúdio na segurança da informação assegura que:?",
                    alternativas:{
                        A: "Um usuário não possa negar a autoria de uma ação realizada",
                        B: "A informação não sofra alterações não autorizadas",
                        C: "A informação seja sempre acessíve",
                        D: "As informações sejam acessíveis apenas a quem tem permissão",
                        E: "A informação esteja protegida contra perda física"
                    },
                    correta: "A",
                    explicacoes:{
                        A: "Correto. Isso é não repúdio.",
                        B: "Isso é integridade.",
                        C: "Isso é disponibilidade.",
                        D: "Isso é confidencialidade.",
                        E: "Isso é disponibilidade e backup."
                    }
                },

                {
                    id: "questao10", 
                    pergunta: "(IBADE - PC-RJ - 2023) O firewall pode ser corretamente definido como:",
                    alternativas:{
                        A: "Um software que detecta e remove vírus.",
                        B: "Uma ferramenta que garante a disponibilidade dos dados",
                        C: "Um sistema que controla o tráfego de entrada e saída da rede.",
                        D: "Um programa que criptografa arquivos sensíveis",
                        E: "Um backup automático contra falhas"
                    },
                    correta: "C",
                    explicacoes:{
                        A: "Isso é função do antivírus.",
                        B: "Firewall não garante disponibilidade.",
                        C: "Firewall controla o tráfego da rede.",
                        D: "isso é função da criptografia.",
                        E: "Backup não é função do firewall."
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