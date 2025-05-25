// Array contendo as questões do quiz
const questoes = [
        {
            id: "questao01", 
            pergunta: "(CESPE/2021) A Internet das Coisas promete uma revolução na indústria, em diversos aspectos. Essa tecnologia",
            alternativas:{
                A: "traz avanços, porém gera um aumento do retrabalho, pela imprevisibilidade dos problemas na linha de produção.",
                B: "busca interligar sites para uma navegação mais rápida em comércio eletrônico.",
                C: "tem como limitação a impossibilidade de utilização de identificação por radiofrequência.",
                D: "enseja maior participação da mão de obra humana nos processos produtivos.",
                E: "permite uma rápida adaptação da produção, para que esta esteja em compasso com o mercado."
            },
            correta: "E",
            explicacoes:{
                A: "A IoT, na verdade, reduz o retrabalho ao permitir monitoramento em tempo real e antecipação de problemas.",
                B: "A IoT não se refere a interligar sites, mas sim a dispositivos e máquinas em diferentes setores.",
                C: "A identificação por radiofrequência (RFID) é amplamente usada dentro da IoT para rastreamento e controle de ativos, portanto, não é uma limitação.",
                D: "A IoT tende a automatizar processos e reduzir a necessidade de intervenção humana, não aumentar a participação da mão de obra.",
                E: "A Internet das Coisas (IoT) possibilita a conexão de dispositivos e máquinas em tempo real, permitindo a coleta de dados e a comunicação entre sistemas. Isso leva a uma maior flexibilidade e adaptação rápida dos processos produtivos, o que ajuda as empresas a ajustarem sua produção de acordo com as necessidades e mudanças do mercado, tornando a cadeia produtiva mais ágil e eficiente."
            }
        },

        {
            id: "questao02", 
            pergunta: "(VUNESP/2019) Segundo Leandro Pereira Morais (www.ipea.gov.br), “o momento atual é marcado pelo avanço expansivo, permanente e irreversível da CT&I, caracterizando o que especialistas no tema chamam, por exemplo, de “indústria 4.0”. Os principais pilares dessa “indústria” são",
            alternativas:{
                A: "Compartilhamento de tecnologias, Big Data Analytics e Segurança.",
                B: "Internet das coisas, Big Data Analytics e Compartilhamento de dados.",
                C: "Internet das coisas, Compartilhamento de dados e Segurança.",
                D: "Compartilhamento de Tecnologias, Compartilhamento de dados e Segurança.",
                E: "Internet das coisas, Big Data Analytics e Segurança."
            },
            correta: "E",
            explicacoes:{
                A: "Embora o compartilhamento de tecnologias seja importante, ele não é reconhecido como um pilar central da Indústria 4.0.",
                B: "O compartilhamento de dados é uma prática facilitada pela IoT e Big Data, mas não é um pilar fundamental por si só.",
                C: "O compartilhamento de dados, embora relevante, não é considerado um pilar central da Indústria 4.0.",
                D: "Esta combinação não reflete os pilares reconhecidos da Indústria 4.0.",
                E: "A Indústria 4.0 é caracterizada pela integração de tecnologias digitais avançadas nos processos industriais. Os três pilares centrais dessa revolução tecnológica são: Internet das Coisas (IoT), Big Data Analytics e Cibersegurança."
            }
        },

        {
            id: "questao03", 
            pergunta: "(CESGRANRIO/2023) Atualmente é comum a integração de dispositivos físicos, sensores, software e outras tecnologias para criar uma rede de objetos conectados que podem trocar dados e informações entre si, permitindo a coleta, análise e tomada de decisões baseadas em dados.",
            alternativas:{
                A: "blockchain",
                B: "inteligência artificial",
                C: "internet das coisas",
                D: "processamento paralelo",
                E: "realidade aumentada"
            },
            correta: "C",
            explicacoes:{
                A: "Blockchain é uma tecnologia de registro distribuído usada principalmente para registrar transações de forma segura e transparente. Não está diretamente relacionado à integração de dispositivos físicos para troca de dados.",
                B: "A inteligência artificial envolve análise de dados e aprendizado automático, mas não descreve a integração de dispositivos conectados como a IoT.",
                C: "O conceito de Internet das Coisas (IoT) refere-se à integração de dispositivos físicos, sensores, software e outras tecnologias para formar uma rede de objetos interconectados. Esses dispositivos podem trocar dados e informações entre si, permitindo a coleta e análise desses dados para tomada de decisões. A IoT é a tecnologia central para a criação de ambientes inteligentes e a automação de processos.",
                D: "Refere-se a uma técnica de computação onde múltiplos processadores trabalham simultaneamente para resolver problemas. Não está diretamente relacionado à interconexão de objetos físicos.",
                E: "A realidade aumentada mistura o mundo real com elementos digitais, mas não se refere à rede de dispositivos conectados e troca de dados como a IoT."
            }
        },

        {
            id: "questao04", 
            pergunta: "(IBFC/2022) Um dos legados que a internet trouxe foi o investimento em novas tecnologias. Ela fez com que aparelhos eletrônicos, como TVs, notebooks, celulares e até aplicações surgissem de maneira rápida e frenética. No entanto, a tecnologia por si só não fez da internet o que ela é e representa em nossas vidas. Neste contexto, e com base nas afirmações de Claudio Torres, assinale a alternativa que apresenta em relação ao que fez a internet se tornar o meio que é nos dias atuais.",
            alternativas:{
                A: "A ciência dos dados",
                B: "A participação ativa e engajada das pessoas",
                C: "O surgimento das empresas focadas neste mercado",
                D: "A facilidade que ela proporciona para todos"
            },
            correta: "B",
            explicacoes:{
                A: "A ciência dos dados é importante para a análise da informação na internet, mas não foi o principal fator que a fez crescer e se popularizar.",
                B: "Segundo Claudio Torres, o que fez a internet se tornar o meio que é nos dias atuais foi a participação ativa e engajada das pessoas. A interação constante dos usuários, a criação de conteúdos, a colaboração online e o engajamento nas redes sociais foram fatores fundamentais para o crescimento e evolução da internet. Ou seja, a internet não se tornou o que é apenas pela tecnologia, mas pela contribuição e participação das pessoas que a utilizam.",
                C: "Embora as empresas de tecnologia tenham sido cruciais, a verdadeira transformação veio com o uso que as pessoas passaram a fazer da internet, e não apenas com a criação de empresas.",
                D: "A facilidade é um benefício importante, mas a participação ativa das pessoas foi o que impulsionou realmente o sucesso da internet."
            }
        },

        {
            id: "questao05", 
            pergunta: "(IBFC/2020) A interatividade é uma necessidade para se atingir mais consumidores exigentes e ávidos por novidades no mercado. A respeito disso, assinale a alternativa correta.",
            alternativas:{
                A: "Os games não são considerados ferramentas interativas para treinamentos empresariais",
                B: "A gamificação é uma poderosa ferramenta de engajamento nas redes sociais",
                C: "O uso de aplicativos não mudou desde 1990",
                D: "O uso de aplicativos não é algo relevante para a estratégia de marketing de uma empresa",
                E: "As redes sociais não são canais interativos"
            },
            correta: "B",
            explicacoes:{
                A: "Os games têm se mostrado muito eficazes para treinamentos e educação corporativa, tornando-se uma ferramenta importante para engajamento e aprendizado.",
                B: "A gamificação consiste na aplicação de elementos de jogos (como pontuação, desafios, recompensas, etc.) em contextos não relacionados a jogos, como nas redes sociais. Essa técnica tem se mostrado uma ferramenta poderosa de engajamento, incentivando os usuários a interagir de forma mais ativa e contínua, o que é altamente eficaz para as empresas atraírem e manterem consumidores.",
                C: "Isso está incorreto, pois os aplicativos evoluíram significativamente desde 1990, se tornando ferramentas essenciais na comunicação, marketing e no funcionamento de diversos serviços.",
                D: "Na verdade, os aplicativos são extremamente relevantes nas estratégias de marketing, ajudando a empresa a se conectar diretamente com os consumidores.",
                E: "As redes sociais são, por definição, canais interativos, permitindo comunicação e engajamento entre empresas e consumidores."
            }
        },

        {
            id: "questao06", 
            pergunta: "(VUNESP/2019) O termo interatividade surgiu nos anos 60 como um neologismo do termo interactivity. A interatividade consiste na capacidade de um sistema de comunicação transmitir ou receber informação e, a partir da informação recebida, transformar, evoluir ou até criar novos ambientes virtuais. Segundo os estudiosos da área, existem vários tipos de interatividade. A interatividade",
            alternativas:{
                A: "linear permite ao utilizador da mensagem escolher uma entre várias opções.",
                B: "hierárquica dá ao utilizador o sentido da sequência das ações com a possibilidade de concordar com o passo seguinte ou precedente.",
                C: "de suporte corresponde à possibilidade de um utilizador ser apoiado para utilizar o sistema a que está conectado por meio de mensagens e ajuda de tutoriais.",
                D: "reflexiva corresponde à possibilidade de o sistema gerar conteúdos atualizados em resposta às ações do utilizador.",
                E: "de hiperligação permite ao utilizador comparar respostas e criar relação entre elas e os seus objetivos de consulta."
            },
            correta: "C",
            explicacoes:{
                A: "A interatividade linear se refere a conteúdos que seguem uma sequência fixa, sem que o usuário possa modificar a ordem. Não envolve escolha entre várias opções, como afirma a alternativa",
                B: "Esse tipo de interatividade está relacionado à organização dos conteúdos em níveis (como menus e submenus). A descrição da alternativa está mal formulada e não corresponde ao conceito.",
                C: "A interatividade de suporte diz respeito à assistência que o sistema oferece ao usuário durante sua navegação. Isso inclui mensagens de ajuda, tutoriais e guias interativos que facilitam o uso das ferramentas e recursos disponíveis. O objetivo é garantir que o usuário compreenda e utilize corretamente o sistema.",
                D: "Embora esteja conceitualmente próxima, a definição apresentada não está diretamente relacionada ao foco da questão. A reflexiva envolve resposta do sistema com base nas ações do usuário, mas não se trata de suporte direto ao uso.",
                E: "Trata da navegação entre conteúdos por meio de links. A alternativa está mal definida ao mencionar “comparar respostas e criar relação entre elas”, o que não é o foco principal da interatividade por hiperligação."
            }
        },

        {
            id: "questao07", 
            pergunta: "(CESGRANRIO/2021) A blockchain é um tipo específico de banco de dados distribuído, no qual há uma cadeia de blocos ordenados e interligados, com garantia de ordem cronológica. Os dados registrados nos blocos podem variar de transações financeiras a contratos inteligentes. Na blockchain da bitcoin, as entidades que registram novos blocos na cadeia são chamadas de",
            alternativas:{
                A: "registradores",
                B: "mineradores",
                C: "trabalhadores",
                D: "gerenciadores",
                E: "conectores"
            },
            correta: "B",
            explicacoes:{
                A: "O termo não é usado na arquitetura do Bitcoin. Embora descreva a ideia de quem registra algo, não é o termo técnico correto.",
                B: "Na blockchain do Bitcoin, os responsáveis por registrar novos blocos na cadeia são chamados de mineradores. Eles utilizam poder computacional para resolver problemas matemáticos complexos que validam as transações e, ao conseguirem resolver o problema, têm o direito de adicionar um novo bloco à cadeia, recebendo uma recompensa em bitcoins.",
                C: "Termo genérico que não representa nenhuma função específica dentro da rede blockchain.",
                D: "Na blockchain, não há uma entidade central que gerencia os blocos. É um sistema descentralizado.",
                E: "Também não é um termo utilizado no contexto técnico da blockchain. Não existe esse papel na rede."
            }
        },

        {
            id: "questao08", 
            pergunta: "(FGV/2024) Em sistemas de blockchain que interagem com o mundo real, uma questão fundamental surge quando contratos inteligentes necessitam de dados externos para executar suas funções. Essa questão representa um desafio significativo na integração confiável de informações fora da blockchain. O nome dado ao problema que descreve a dificuldade inerente em acessar informações verídicas e atualizadas do mundo externo, sem comprometer a segurança e a descentralização do sistema blockchain é",
            alternativas:{
                A: "dupla despesa.",
                B: "ataque de 51%.",
                C: "oráculo.",
                D: "volatilidade.",
                E: "escalabilidade."
            },
            correta: "C",
            explicacoes:{
                A: "Refere-se ao problema de gastar a mesma unidade de moeda digital mais de uma vez, um problema que a blockchain visa resolver.",
                B: "Ocorre quando uma única entidade ou grupo controla mais da metade do poder de mineração ou staking de uma rede blockchain, podendo manipular transações.",
                C: "O 'problema do oráculo' em sistemas de blockchain refere-se à dificuldade de acessar dados confiáveis e atualizados do mundo real (fora da blockchain) para serem utilizados por contratos inteligentes, sem comprometer a segurança e a descentralização inerentes à tecnologia blockchain. Os oráculos são as entidades que fornecem esses dados externos, e garantir sua integridade e veracidade é o cerne desse desafio.",
                D: "Refere-se à alta variação de preço de alguns criptoativos.",
                E: "Diz respeito à capacidade de uma rede blockchain de processar um grande volume de transações de forma eficiente."
            }
        },

        {
            id: "questao09", 
            pergunta: "(IADES/2019) Com base nas características e nas possíveis aplicações para a blockchain, assinale a alternativa correta.",
            alternativas:{
                A: "A blockchain é uma lista de tamanho fixo de registros interligados a partir de criptografia, em que cada bloco contém dados relativos à transação, um timestamp e um hash criptográfico do próximo bloco.",
                B: "A blockchain é uma espécie de base de dados pública e centralizada, que é usada para registrar transações na nuvem, de forma que qualquer registro envolvido não possa ser alterado retroativamente sem a alteração de todos os blocos subsequentes.",
                C: "Mesmo que fosse possível atacar e controlar mais de 50% de uma rede verificadora de transações blockchain, não seria possível reverter transações já realizadas ou realizar gastos duplos.",
                D: "A invenção da blockchain para uso no bitcoin tornou-o a primeira moeda digital a resolver o problema do gasto duplo sem a necessidade de envolver uma autoridade confiável ou servidor central como mediador. A blockchain remove a característica de reprodutibilidade infinita de um ativo digital.",
                E: "A blockchain demonstrou potencial apenas como base tecnológica para as criptomoedas, sendo, portanto, improvável que outras indústrias encontrem novas aplicações em razão das diversas limitações que apresentam."
            },
            correta: "D",
            explicacoes:{
                A: "A blockchain não tem tamanho fixo, ela cresce continuamente conforme novos blocos são adicionados. Além disso, cada bloco contém o hash do bloco anterior, e não do próximo.",
                B: "A blockchain é uma base de dados descentralizada, exatamente para eliminar a necessidade de um único ponto de controle.",
                C: "Se uma entidade controlar mais de 50% da rede, ela pode sim reverter transações recentes e realizar gastos duplos, contrariando o que a alternativa afirma.",
                D: "A blockchain foi criada originalmente para permitir o funcionamento do Bitcoin sem a necessidade de um terceiro confiável (como bancos ou servidores centrais). A tecnologia resolve o chamado problema do gasto duplo, que consiste na possibilidade de um ativo digital ser copiado e gasto mais de uma vez. Com a blockchain, cada transação é registrada de forma imutável, distribuída e transparente, impedindo que a mesma moeda seja usada mais de uma vez. Assim, ela garante escassez digital, o que é essencial para qualquer moeda ou ativo digital.",
                E: "Isso é incorreto. A blockchain já tem diversas aplicações fora do setor financeiro, como na logística, saúde, propriedade intelectual, cadeias de suprimento, entre outras."
            }
        },

        {
            id: "questao10", 
            pergunta: "(IESES/2017) Analise as seguintes definições e assinale a INCORRETA:",
            alternativas:{
                A: "A computação em nuvem refere-se a um modelo de computação que fornece acesso a um pool compartilhado de recursos de computação (computadores, armazenamento, aplicativos e serviços) em uma rede.",
                B: "Moedas virtuais, como o Bitcoin, são moedas criptografadas. Trata-se de uma forma de dinheiro que existe apenas digitalmente. O Banco Mundial define as regras e efetua o monitoramento do comércio deste tipo de moeda.",
                C: "A Deep Web refere-se ao conteúdo da World Wide Web que não é indexada pelos mecanismos de busca padrão, ou seja, não faz parte da Surface Web.",
                D: "A Dark Web é uma parte não indexada e restrita da Deep Web e é normalmente utilizada para comércio ilegal e pornografia infantil."
            },
            correta: "B",
            explicacoes:{
                A: "Define bem o conceito de cloud computing: acesso sob demanda a recursos de computação compartilhados por meio da internet.",
                B: "A alternativa B está incorreta porque afirma que o Banco Mundial define as regras e monitora o comércio de moedas virtuais como o Bitcoin, o que não é verdade. O Bitcoin é uma criptomoeda descentralizada, ou seja, não é controlada por nenhuma instituição financeira, governo ou órgão internacional, como o Banco Mundial. Suas regras estão embutidas no código do protocolo e são mantidas por consenso entre os participantes da rede.",
                C: "Refere-se à parte da internet que não é indexada por buscadores tradicionais, como conteúdo de bancos, intranets, páginas protegidas por senha, etc.",
                D: "É uma subparte da Deep Web, acessível somente por softwares específicos como o Tor, frequentemente associada a atividades ilegais, embora nem todo seu uso seja necessariamente criminoso."
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