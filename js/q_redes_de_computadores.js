// Array contendo as questões do quiz
const questoes = [
        {
            id: "questao01", 
            pergunta: "(CESPE - 2020) Qual dos protocolos abaixo é utilizado para a resolução de nomes de domínios para endereços IP na Internet?",
            alternativas:{
                A: "HTTP",
                B: "FTP",
                C: "DNS",
                D: "SMTP",
                E: "DHCP"
            },
            correta: "C",
            explicacoes:{
                A: "HTTP é protocolo para transferência de páginas web.",
                B: "FTP é usado para transferência de arquivos.",
                C: "DNS (Domain Name System) é o protocolo responsável por traduzir nomes de domínio em endereços IP.",
                D: "SMTP é usado para envio de e-mails.",
                E: "DHCP é usado para atribuição automática de endereços IP."
            }
        },

        {
            id: "questao02", 
            pergunta: "(FCC - 2019) Qual é a função do protocolo TCP na comunicação em redes?",
            alternativas:{
                A: "Envio de e-mails",
                B: "Protocolo de camada física",
                C: "Controle de fluxo e confiabilidade na transmissão de dados",
                D: "Tradução de endereços IP",
                E: "Atribuição dinâmica de endereços IP"
            },
            correta: "C",
            explicacoes:{
                A: "Envio de e-mails é função do SMTP.",
                B: "TCP opera na camada de transporte, não na física.",
                C: "O TCP garante que os dados cheguem corretamente e em ordem, com controle de erros e fluxo.",
                D: "Tradução de endereços IP é função do DNS.",
                E: "Atribuição dinâmica é função do DHCP."
            }
        },

        {
            id: "questao03", 
            pergunta: "(CESPE - 2018) Assinale a alternativa que indica corretamente a faixa de endereços IPv4 reservada para redes privadas, conforme as normas da IETF",
            alternativas:{
                A: "10.0.0.0 a 10.255.255.255",
                B: "192.168.0.0 a 192.168.255.255",
                C: "172.16.0.0 a 172.31.255.255",
                D: "Todas as alternativas anteriores estão corretas",
                E: "Nenhuma das anteriores"
            },
            correta: "D",
            explicacoes:{
                A: ": As faixas  b) e c) estão corretas isoladamente.",
                B: ": As faixas a) e c) estão corretas isoladamente.",
                C: ": As faixas a) e  b)  estão corretas isoladamente.",
                D: "Todas as faixas mencionadas são endereços privados conforme RFC 1918, usados em redes internas.",
                E: "Errada porque as faixas privadas existem e são essas."
            }
        },

        {
            id: "questao04", 
            pergunta: "(FGV - 2021) No modelo OSI, em qual camada ocorre a comutação de pacotes?",
            alternativas:{
                A: "Física",
                B: "Enlace",
                C: "Rede",
                D: "Transporte",
                E: "Aplicação"
            },
            correta: "C",
            explicacoes:{
                A: "Física trata da transmissão de bits físicos.",
                B: "Enlace trata da comunicação entre dispositivos na mesma rede.",
                C: "A comutação de pacotes, ou roteamento, ocorre na camada de Rede (Camada 3 do modelo OSI).",
                D: "Transporte cuida da confiabilidade entre sistemas finais.",
                E: "Aplicação trata da interface com o usuário final."
            }
        },

        {
            id: "questao05", 
            pergunta: "Qual a função do protocolo DHCP em uma rede TCP/IP?",
            alternativas:{
                A: " Atribuir automaticamente endereços IP aos dispositivos da rede",
                B: "Controlar o fluxo de dados na camada de transporte",
                C: "Resolver nomes de host para endereços IP",
                D: " Garantir a entrega dos pacotes sem erros",
                E: "Gerenciar o acesso ao meio físico"
            },
            correta: "A",
            explicacoes:{
                A: "DHCP (Dynamic Host Configuration Protocol) facilita a configuração automática de endereços IP e outras configurações de rede.",
                B: "Controle de fluxo é função do TCP.",
                C: "Resolução de nomes é função do DNS.",
                D: "Garantia de entrega também é função do TCP.",
                E: "Gerenciamento do acesso ao meio é função da camada de enlace."
            }
        },

        {
            id: "questao06", 
            pergunta: "(FCC - 2017) Em uma rede local, qual dispositivo é responsável por segmentar o tráfego, enviando dados apenas para a máquina de destino, reduzindo colisões e aumentando a eficiência da rede?",
            alternativas:{
                A: "Hub",
                B: "Switch",
                C: "Repetidor",
                D: "Roteador",
                E: "Modem"
            },
            correta: "B",
            explicacoes:{
                A: "Hub retransmite o sinal para todas as portas, aumentando colisões.",
                B: "O switch cria domínios de colisão separados para cada porta, segmentando o tráfego e melhorando o desempenho da rede.",
                C: "Repetidor apenas amplifica o sinal, não segmenta.",
                D: "Roteador conecta redes diferentes, não é foco para segmentar colisões internas.",
                E: "Modem converte sinais para internet, não segmenta tráfego local."
            }
        },

        {
            id: "questao07", 
            pergunta: "(CESPE - 2020) Em redes TCP/IP, o protocolo ICMP é utilizado para:",
            alternativas:{
                A: "Transferência de arquivos.",
                B: "Gerenciamento e mensagens de erro e controle.",
                C: "Controle de acesso à rede.",
                D: "Criptografia de dados.",
                E: " Atribuição de endereços IP."
            },
            correta: "B",
            explicacoes:{
                A: "Transferência de arquivos é função do FTP.",
                B: "ICMP (Internet Control Message Protocol) é usado para enviar mensagens de erro e controle entre dispositivos de rede, como no comando ping.",
                C: "Controle de acesso é camada de enlace.",
                D: "Criptografia é feita por protocolos como SSL/TLS.",
                E: " Atribuição de IP é função do DHCP."
            }
        },

        {
            id: "questao08", 
            pergunta: "FGV - 2018) Qual a máscara de sub-rede padrão para um endereço IP Classe C?",
            alternativas:{
                A: "255.0.0.0",
                B: "255.255.0.0",
                C: "255.255.255.0",
                D: "255.255.255.255",
                E: "0.0.0.0"
            },
            correta: "C",
            explicacoes:{
                A: "255.0.0.0 é máscara classe A.",
                B: "255.255.0.0 é máscara classe B.",
                C: "A máscara padrão da classe C divide os primeiros três octetos para rede e o último para hosts.",
                D: "255.255.255.255 é máscara para endereço único (host).",
                E: "0.0.0.0 é endereço default, não máscara."
            }
        },

        {
            id: "questao09", 
            pergunta: "CESPE - 2017) No modelo TCP/IP, qual das camadas abaixo é equivalente à camada de enlace do modelo OSI?",
            alternativas:{
                A: " Rede",
                B: " Enlace",
                C: "Fisica",
                D: "Transporte",
                E: "Aplicação"
            },
            correta: "E",
            explicacoes:{
                A: "Rede corresponde à camada de Internet no TCP/IP.",
                B: "Enlace corresponde à camada de acesso à rede no TCP/IP.",
                C: "Física é a camada física no modelo OSI, que não existe explicitamente no TCP/IP.",
                D: "Transporte mantém sua função em ambos os modelos.",
                E: "No modelo TCP/IP, a camada de aplicação engloba as funções das camadas de aplicação, apresentação e sessão do modelo OSI."
            }
        },

        {
            id: "questao10", 
            pergunta: "(FCC - 2019) Qual das alternativas abaixo descreve corretamente a função de um firewall em uma rede de computadores?",
            alternativas:{
                A: "Aumentar a velocidade de conexão",
                B: "Converter sinais digitais em analógicos",
                C: "Controlar o tráfego de entrada e saída com base em regras de segurança",
                D: "Gerenciar endereços IP dinâmicos",
                E: "Roteamento de pacotes entre redes diferentes"
            },
            correta: "C",
            explicacoes:{
                A: "Firewall não aumenta velocidade, apenas protege.",
                B: "Conversão de sinais é função do modem.",
                C: "Firewall é um sistema que protege a rede, filtrando o tráfego conforme regras definidas.",
                D: "Gerenciamento de IP dinâmicos é função do DHCP.",
                E: "Roteamento é função do roteador."
            }
        }
    ];

// Função responsável por criar dinamicamente as questões do quiz na página
function criarQuestoes() {
    // Obtém o elemento onde as questões serão adicionadas dinamicamente
    const container = document.getElementById("quiz-container");

    // Recupera o tema do quiz a partir de um atributo ou variável global, garantindo que um tema padrão seja usado caso nenhum seja definido
    const temaAtual = document.getElementById("quiz-container").getAttribute("data-tema") || "Redes de computadores"; 

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
            alert("Por favor, responda todas as questões antes de finalizar!");
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
                : "<strong>Resposta errada!</strong><br>";

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
            resultado.textContent = "Por favor, selecione uma alternativa!"; 
        }
    });
}

// Aguarda o carregamento completo da página antes de criar as questões
document.addEventListener("DOMContentLoaded", criarQuestoes);