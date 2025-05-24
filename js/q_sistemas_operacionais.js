// Array contendo as questões do quiz
const questoes = [
        {
            id: "questao1", 
            pergunta: " (CESPE - 2022 - TCU) Acerca dos sistemas operacionais, julgue o item. Um dos principais objetivos de um sistema operacional é fornecer uma interface entre o hardware e o usuário, além de gerenciar recursos como memória, processador e dispositivos de entrada esaída.",
            alternativas:{
                A: "Verdadeiro",
                B: "Falso",
                C: "Depende do sistema operacional",
                D: "Apenas se for um sistema multiusuário",
                E: "Apenas em sistemas de tempo real"
            },
            correta: "A",
            explicacoes:{
                A: "O SO fornece uma interface entre hardware e usuário, além de gerenciar  recursos como memória, CPU e E/S. As demais estão incorretas pelos motivos descritos",
                B: "Um sistema operacional realmente faz isso, então essa alternativa está incorreta.",
                C: "Todos os sistemas operacionais modernos possuem essa função básica.",
                D: "Essa função é independente do número de usuários.",
                E: "Sistemas de tempo real têm requisitos específicos, mas todos os sistemas operacionais fazem esse gerenciamento."
            }
        },

        {
            id: "questao2", 
            pergunta: "(FCC - 2020 - TRT 2ª Região) No gerenciamento de processos, qual é o estado que indica que um processo está esperando por algum evento, como a conclusão de uma operação de E/S?",
            alternativas:{
                A: "Pronto",
                B: "Executando",
                C: "Bloqueado",
                D: "Finalizado",
                E: "Suspenso"
            },
            correta: "C",
            explicacoes:{
                A: "Indica que o processo está aguardando uso da CPU, não de E/S.",
                B: "O processo está em execução, não esperando.",
                C: " Estado Bloqueado significa que o processo está esperando por um evento externo. As demais representam outros estados do ciclo de vida do processo.",
                D: " O processo já terminou sua execução.",
                E: " Indica que o processo foi retirado da memória, não que está esperando evento."
            }
        },

        {
            id: "questao3", 
            pergunta: " (CESGRANRIO - 2021 - Petrobras) O sistema operacional utiliza uma área especial chamada de memória virtual. Assinale a alternativacorreta sobre esse conceito",
            alternativas:{
                A: "Impede o uso de disco como memória",
                B: "Permite executar processos maiores que a memória física",
                C: "Está presente apenas em SOs de tempo real",
                D: "É um tipo de cache",
                E: "Substitui a RAM"
            },
            correta: "B",
            explicacoes:{
                A: "Pelo contrário, a memória virtual usa o disco como extensão da RAM.",
                B: "Memória virtual permite que processos maiores que a RAM sejam executados, usando parte do disco como extensão",
                C: "Está presente em vários tipos de SOs, especialmente os de propósito geral.",
                D: "Cache é memória rápida entre o processador e a RAM. Memória virtual é outra coisa.",
                E: "Ela complementa, não substitui a RAM"
            }
        },

        {
            id: "questao4", 
            pergunta: " (IBFC - 2019 - TJ-MG) Qual técnica de gerenciamento de memória divide a memória em blocos fixos?",
            alternativas:{
                A: "Paginação",
                B: "Segmentação",
                C: "Swapping",
                D: "Multiprogramação",
                E: "Cacheamento"
            },
            correta: "A",
            explicacoes:{
                A: "A paginação divide a memória em blocos fixos chamados páginas. As demais técnicas têm outros propósitos.",
                B: "Divide a memória com base em lógica do programa, com blocos variáveis",
                C: "Move processos entre memória e disco, não divide a memória em blocos.",
                D: "Refere-se à execução de múltiplos processos, não à divisão de memória",
                E: "Relaciona-se com armazenamento temporário de dados, não com divisão da RAM"
            }
        },

        {
            id: "questao5", 
            pergunta: " (FGV - 2021 - SEFAZ-RJ)Em relação aos sistemas de arquivos, qual das opções abaixo representa um sistema de arquivos utilizado em sistemas Linux?",
            alternativas:{
                A: "NTFS",
                B: "FAT32",
                C: "ext4",
                D: "HFS+",
                E: "APFS"
            },
            correta: "C",
            explicacoes:{
                A: "Sistema de arquivos padrão do Windows.",
                B: "Sistema antigo usado em dispositivos removíveis e Windows.",
                C: " O ext4 é um sistema de arquivos padrão no Linux. As demais são de Windows ou MacOS",
                D: "Usado por sistemas macOS antigos.",
                E: "Sistema de arquivos usado por versões modernas do macOS."
            }
        },

        {
            id: "questao6", 
            pergunta: " (CESPE - 2022 - Polícia Federal) O comando chmod no Linux é utilizado para:",
            alternativas:{
                A: "Gerenciar usuários",
                B: "Alterar permissões de arquivos",
                C: "Listar processos",
                D: "Monitorar CPU",
                E: "Instalar pacotes"
            },
            correta: "B",
            explicacoes:{
                A: "Isso seria feito com useradd, usermod, entre outros",
                B: "chmod altera permissões de arquivos e diretórios no Linux.",
                C: "Isso é feito com ps, top, etc",
                D: "Comandos como top ou htop são usados para isso",
                E: " Usam-se apt, yum, dnf etc., dependendo da distribuição"
            }
        },

        {
            id: "questao7", 
            pergunta: " (IBFC - 2023 - PC-SP) No Windows, qual funcionalidade permite criar um ponto de restauração do sistema?",
            alternativas:{
                A: "Gerenciador de Tarefas",
                B: "Configurações de Rede",
                C: "Restauração do Sistema",
                D: "Gerenciamento de Disco",
                E: "Prompt de Comando"
            },
            correta: "C",
            explicacoes:{
                A: "Serve para visualizar e encerrar processos",
                B: "Gerencia conexões de rede.",
                C: "A Restauração do Sistema permite criar pontos para reverter alterações no Windows.",
                D: "Serve para particionar e formatar discos.",
                E: "Interface de linha de comando; não cria pontos de restauração diretamente."
            }
        },

        {
            id: "questao8", 
            pergunta: " (FCC - 2020 - TRF 3ª Região) A técnica que permite que vários processos compartilhem a CPU alternadamente é chamada de:",
            alternativas:{
                A: "Pipeline",
                B: "Multithreading",
                C: "Multiprogramação",
                D: "Multitarefa",
                E: "Swapping"
            },
            correta: "D",
            explicacoes:{
                A: "Relacionado ao paralelismo dentro da CPU.",
                B: "Refere-se à execução simultânea de múltiplas threads.",
                C: "Refere-se à presença de múltiplos programas na memória, não à alternância de execução.",
                D: "A multitarefa permite alternar rapidamente entre processos, simulando execução simultânea",
                E: "Técnica de troca de processos entre memória e disco."
            }
        },

        {
            id: "questao9", 
            pergunta: "(CESPE - 2021 - CGU)Em sistemas operacionais, deadlock ocorre quando:",
            alternativas:{
                A: "Um processo é finalizado abruptamente",
                B: "A CPU superaquece",
                C: "Processos ficam esperando indefinidamente recursos ocupados",
                D: "Processos ficam esperando indefinidamente recursos ocupados",
                E: "A memória RAM chega a 100%"
            },
            correta: "C",
            explicacoes:{
                A: "Isso é uma falha, não deadlock.",
                B: "Problema físico, não lógico.",
                C: "Deadlock ocorre quando processos ficam aguardando indefinidamente recursos ocupados entre eles.",
                D: "Também é uma falha de hardware, não deadlock.",
                E: "Pode causar lentidão, mas não configura deadlock."
            }
        },

        {
            id: "questao10", 
            pergunta: "(VUNESP - 2022 - Polícia Civil) Em relação ao ciclo de vida de um processo, quando ocorre o estado Pronto (Ready)?",
            alternativas:{
                A: "Aguardando E/S",
                B: "Usando a CPU",
                C: "Aguardando ser escalonado",
                D: "Processo terminado",
                E: "Processo movido para o disco"
            },
            correta: "C",
            explicacoes:{
                A: "Isso é o estado Bloqueado",
                B: "sso é o estado Executando",
                C: "O estado Pronto indica que o processo está pronto para ser executado, aguardando o processador",
                D: "Isso é o estado Finalizado",
                E: "Não é um estado padrão no ciclo de vida."
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
            </form>
            <p id="resultado${questao.id}"></p> <!-- Elemento onde será exibido o resultado da resposta -->
        `;
        container.appendChild(div); // Adiciona a questão ao contêiner principal

        // Adiciona evento para validar resposta quando o usuário submeter o formulário
        validarResposta(questao.id, questao.correta, questao.explicacoes);
    });
}

// Função para validar respostas do usuário
function validarResposta(questaoId, respostaCorreta, explicacoes){
    document.getElementById(questaoId).addEventListener("submit", function(event){
        event.preventDefault(); // Impede a recarga da página ao submeter o formulário

        // Obtém a alternativa selecionada pelo usuário
        const respostaSelecionada = document.querySelector(`input[name="${questaoId}"]:checked`);
        const resultado = document.getElementById(`resultado${questaoId}`); // Obtém o elemento onde será exibido o resultado

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