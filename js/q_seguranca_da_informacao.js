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

// Função que cria dinamicamente as questões do quiz na página
function criarQuestoes() {
    const container = document.getElementById("quiz-container"); // Obtém o contêiner onde as questões serão inseridas

    // Percorre o array de questões e cria cada uma delas
    questoes.forEach((questao, index) => {
        const div = document.createElement("div"); // Cria um elemento <div> para cada questão
        div.innerHTML = `
            <h3>Questão ${index + 1}</h3> <!-- Exibe o número da questão -->
            <form id="${questao.id}"> <!-- Cria um formulário identificável para cada questão -->
                <p>${questao.pergunta}</p> <!-- Exibe a pergunta da questão -->

                <!-- Gera dinamicamente as alternativas da questão -->
                ${Object.entries(questao.alternativas)
                    .map(([key, value]) => `<label><input type="radio" name="${questao.id}" value="${key}"> ${key}) ${value}</label><br>`)
                    .join("")
                }
                <br>
                <button type="submit">Responder</button> <!-- Botão de envio da resposta -->
                <button type="button" class="limpar-btn" data-questao="${questao.id}">Limpar</button> <!-- Botão de limpar seleção -->
            </form>
            <p id="resultado${questao.id}"></p> <!-- Elemento onde será exibido o resultado da resposta -->
        `;
        container.appendChild(div); // Adiciona a questão ao contêiner principal

        // Adiciona evento para validar resposta quando o usuário submeter o formulário
        validarResposta(questao.id, questao.correta, questao.explicacoes);
    });

    // Adiciona funcionalidade ao botão de limpar seleção
    document.querySelectorAll(".limpar-btn").forEach(botao => {
        botao.addEventListener("click", function () {
            const questaoId = this.getAttribute("data-questao"); // Obtém o id da questão
            document.getElementById(`resultado${questaoId}`).textContent = ""; // Limpa o texto do resultado

            // Desabilita o botão "Responder" após a seleção para impedir novas tentativas
            document.querySelector(`#${questaoId} button[type="submit"]`).disabled = true;
        });
    });

    // Criando e adicionando o botão de finalizar ao final das questões
    const botaoFinalizar = document.createElement("button"); // Cria um botão de finalizar
    botaoFinalizar.textContent = "Finalizar"; // Define o texto do botão
    botaoFinalizar.style.display = "block"; // Ajusta a exibição do botão para ser visível como um bloco
    botaoFinalizar.style.margin = "20px auto"; // Centraliza o botão na tela

    botaoFinalizar.addEventListener("click", function () {
        alert("Questões finalizadas!"); // Exibe um alerta ao finalizar
    });

    container.appendChild(botaoFinalizar); // Adiciona o botão ao contêiner do quiz
}

// Função para validar respostas do usuário
function validarResposta(questaoId, respostaCorreta, explicacoes) {
    document.getElementById(questaoId).addEventListener("submit", function (event) {
        event.preventDefault(); // Impede a recarga da página ao submeter o formulário

        // Obtém a alternativa selecionada pelo usuário
        const respostaSelecionada = document.querySelector(`input[name="${questaoId}"]:checked`);
        const resultado = document.getElementById(`resultado${questaoId}`); // Obtém o elemento onde será exibido o resultado

        if (respostaSelecionada) {
            const valor = respostaSelecionada.value; // Obtém o valor da alternativa selecionada
            const correto = valor == respostaCorreta; // Compara com a resposta correta

            // Exibe mensagem de acerto ou erro
            resultado.innerHTML = correto 
                ? "<strong>Resposta correta!</strong><br>" 
                : "<strong>Resposta errada.</strong><br>";

            // Exibe todas as alternativas e destaca a correta
            Object.entries(explicacoes).forEach(([key, value]) => {
                resultado.innerHTML += `${key}) ${value} ${key == respostaCorreta ? "(Correta)" : ""} <br>`;
            });

            // Bloqueia a mudança da resposta desabilitando os inputs
            document.querySelectorAll(`input[name="${questaoId}"]`).forEach(input => {
                input.disabled = true;
            });

            // Desabilita o botão de responder para impedir múltiplas submissões
            document.querySelector(`#${questaoId} button[type="submit"]`).disabled = true;
        } else {
            resultado.textContent = "Por favor, selecione uma alternativa."; // Exibe um aviso se nenhuma alternativa for escolhida
        }
    });
}

// Aguarda o carregamento completo da página antes de executar a função para criar as questões
document.addEventListener("DOMContentLoaded", criarQuestoes);