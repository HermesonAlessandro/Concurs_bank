// Array contendo as questões do quiz
const questoes = [
        {
            id: "questao01", 
            pergunta: "(FGV/2025) O analista Mário está utilizando a Biblioteca ITIL para melhorar a prestação de serviços de tecnologia da informação do MPU, começando pelo atendimento ao usuário. De acordo com a Biblioteca ITIL versão 4, para que haja um ponto de comunicação entre o provedor de serviço e todos os seus usuários, deve-se implementar um service:",
            alternativas:{
                A: "desk;",
                B: "request;",
                C: "portfolio;",
                D: "value system (SVS);",
                E: "level agreement (SLA)."
            },
            correta: "A",
            explicacoes:{
                A: "o Service Desk é a porta de entrada oficial para o atendimento ao usuário, exatamente o que o analista Mário está procurando ao iniciar a melhoria no atendimento.",
                B: "É uma solicitação feita ao Service Desk, não o canal em si.",
                C: "Trata dos serviços oferecidos, não do atendimento.",
                D: "Estrutura geral da ITIL, não é um ponto de contato.",
                E: "É um contrato de nível de serviço, não um canal de atendimento."
            }
        },

        {
            id: "questao02", 
            pergunta: "(FGV/2025) O framework COBIT 2019 faz uma distinção clara entre governança e gestão. O domínio BAI – Build, Acquire and Implement (Construir, Adquirir e Implementar) trata da definição, aquisição e implementação de soluções de Informação e Tecnologia (I&T) e sua integração em processos de negócios. Uma prática de gerenciamento aderente aos objetivos de gerenciamento do domínio BAI pode ser executada pela(s) atividade(s):",
            alternativas:{
                A: "compreender a visão, direção e estratégia da organização, bem como seu contexto e desafios atuais.",
                B: "estabelecer uma função responsável por gerenciar atividades que dão suporte aos objetivos de gerenciamento de dados.",
                C: "desenvolver e manter procedimentos operacionais e atividades relacionadas para dar suporte a todos os serviços prestados.",
                D: "criar um plano de inovação que inclua grau de tolerância a riscos, com orçamento proposto para iniciativas de inovação e objetivos de inovação",
                E: "especificar e priorizar informações, requisitos funcionais e técnicos, com base na experiência do usuário e nos requisitos confirmados das partes interessadas."
            },
            correta: "E",
            explicacoes:{
                A: "Relaciona-se à definição estratégica, mais alinhada ao domínio EDM (Evaluate, Direct and Monitor).",
                B: "Trata de governança de dados, mais próximo do domínio APO (Align, Plan and Organize).",
                C: "Refere-se à operação de serviços, associado ao domínio DSS (Deliver, Service and Support).",
                D: "Relaciona-se à gestão da inovação, mais vinculada ao domínio APO.",
                E: "Essa atividade está diretamente ligada ao domínio BAI (Build, Acquire and Implement), pois trata do levantamento e especificação de requisitos para soluções de I&T, passo essencial na construção e implementação de sistemas."
            }
        },

        {
            id: "questao03", 
            pergunta: "(CESPE/2025) Em uma organização, o plano diretor de tecnologia da informação e comunicação (PDTIC) deve estar alinhado ao:",
            alternativas:{
                A: "processo de resposta a incidente.",
                B: "plano estratégico de TI.",
                C: "ciclo PDCA (plan-do-check-act).",
                D: "método 5W2H.",
                E: "modelo de acessibilidade em governo eletrônico."
            },
            correta: "B",
            explicacoes:{
                A: "É uma ação operacional de segurança, não relacionada ao planejamento estratégico.",
                B: "O PDTIC é um instrumento de planejamento que deve estar alinhado ao plano estratégico de TI, garantindo que os investimentos, recursos e ações de tecnologia apoiem os objetivos organizacionais.",
                C: "O PDCA é uma ferramenta de melhoria contínua, não de alinhamento estratégico.",
                D: "O 5W2H é uma ferramenta de planejamento tático, não substitui o plano estratégico.",
                E: "O modelo de acessibilidade trata de inclusão digital, não do planejamento da TI como um todo."
            }
        },

        {
            id: "questao04", 
            pergunta: "(FUNDATEC/2024) O software Bizagi Modeler, em sua versão 3.0, utiliza o padrão de modelagem de processos de negócio conhecido como:",
            alternativas:{
                A: "EPC (Event-Driven Process Chain).",
                B: "BPMN (Business Process Model and Notation).",
                C: "UML (Unified Modeling Language).",
                D: "Value Stream Mapping.",
                E: "IDEF (Integrated Definition Language)."
            },
            correta: "B",
            explicacoes:{
                A: "EPC é outra metodologia de modelagem de processos de negócio, com sua própria notação, distinta do BPMN utilizado pelo Bizagi Modeler.",
                B: "O software Bizagi Modeler, em sua versão 3.0, é amplamente conhecido por utilizar o padrão de modelagem de processos de negócio BPMN (Business Process Model and Notation). BPMN é uma notação gráfica padronizada para a criação de diagramas de processos de negócio, facilitando o entendimento e a comunicação entre as partes interessadas.",
                C: "UML é uma linguagem de modelagem utilizada principalmente no desenvolvimento de software para representar a estrutura e o comportamento de sistemas orientados a objetos, não sendo o foco principal para a modelagem de processos de negócio no Bizagi Modeler.",
                D: "Value Stream Mapping é uma ferramenta utilizada para analisar e melhorar o fluxo de materiais e informações necessários para entregar um produto ou serviço ao cliente, com uma notação visual específica diferente do BPMN.",
                E: "IDEF é uma família de linguagens de modelagem, sendo IDEF0 utilizado para modelagem funcional e IDEF1X para modelagem de dados. Embora possa ser usado em contextos de negócios, o Bizagi Modeler se concentra no padrão BPMN para modelagem de processos."
            }
        },

        {
            id: "questao05", 
            pergunta: "A governança da informação envolve a gestão e proteção dos dados e das informações dentro de uma organização. Assinale a alternativa que apresenta uma prática recomendada na governança da informação.",
            alternativas:{
                A: "Armazenar todos os dados sem critérios definidos, garantindo que todas as informações estejam disponíveis para os funcionários em qualquer momento.",
                B: "Permitir que os dados sejam compartilhados livremente entre departamentos sem quaisquer restrições, para promover uma maior colaboração.",
                C: "Estabelecer políticas claras de acesso e controle, garantindo que apenas usuários autorizados possam acessar dados sensíveis e críticos para a organização.",
                D: "Eliminar completamente a análise e o monitoramento de dados em tempo real, já que a análise de dados deve ser feita apenas periodicamente."
                
            },
            correta: "C",
            explicacoes:{
                A: "Essa prática dificulta a organização, a segurança e a conformidade dos dados, além de poder levar à sobrecarga de informações e acessos indevidos.",
                B: "Embora a colaboração seja importante, o compartilhamento irrestrito de dados pode expor informações confidenciais e comprometer a segurança e a conformidade regulatória.",
                C: "Estabelecer políticas claras de acesso e controle é uma prática fundamental na governança da informação. Isso garante que os dados sensíveis e críticos da organização sejam protegidos contra acessos não autorizados, mantendo a confidencialidade, integridade e disponibilidade das informações para quem realmente precisa delas.",
                D: "A análise e o monitoramento contínuos são importantes para identificar riscos, anomalias e oportunidades, complementando as análises periódicas na governança da informação."
                
            }
        },

        {
            id: "questao06", 
            pergunta: "Assinale a alternativa que corresponde a um processo do estágio de Desenho de Serviço da ITIL v.3.",
            alternativas:{
                A: "Gerenciamento do Relacionamento com o Negócio.",
                B: "Gerenciamento de Mudanças.",
                C: "Gerenciamento da Liberação e Distribuição.",
                D: "Gerenciamento do Catálogo de Serviços.",
                E: "Gerenciamento de Eventos."
            },
            correta: "D",
            explicacoes:{
                A: "Este processo pertence ao estágio de Estratégia de Serviço da ITIL V3, focando na compreensão das necessidades do negócio e na identificação de oportunidades para os serviços de TI.",
                B: "Este processo pertence ao estágio de Transição de Serviço da ITIL V3, sendo responsável por controlar a implementação de mudanças de forma eficiente e com o mínimo de interrupção possível.",
                C: "Este processo também pertence ao estágio de Transição de Serviço da ITIL V3, focando na disponibilização de novas ou alteradas funcionalidades de serviço para o ambiente operacional.",
                D: "O Gerenciamento do Catálogo de Serviços é um processo fundamental do estágio de Desenho de Serviço da ITIL V3. Este processo é responsável por fornecer e manter um ponto único de informação sobre todos os serviços de TI que a organização oferece, incluindo detalhes sobre seus pacotes de nível de serviço, status e como acessá-los.",
                E: "Este processo pertence ao estágio de Operação de Serviço da ITIL V3, sendo responsável por monitorar e responder a eventos que ocorrem na infraestrutura de TI e nos serviços."
            }
        },

        {
            id: "questao07", 
            pergunta: "(IBFC/2024) A Computação Verde, também conhecida como 'Green Computing' ou 'Tecnologia Sustentável'. Em termos de Computação Verde, o que caracteriza a gestão responsável de resíduos eletrônicos é: ",
            alternativas:{
                A: "Reciclagem apropriada de componentes eletrônicos no final de sua vida útil",
                B: "Aumento deliberado da produção de resíduos eletrônicos para estimular a indústria de reciclagem",
                C: "Reutilização de hardware antigo sem avaliação de eficiência energética",
                D: "Descarte inadequado de equipamentos sem considerar impactos ambientais"
                
            },
            correta: "A",
            explicacoes:{
                A: "A gestão responsável de resíduos eletrônicos na Computação Verde envolve o descarte adequado e a reciclagem correta dos equipamentos, reduzindo o impacto ambiental.",
                B: "Aumentar resíduos de forma deliberada vai contra os princípios da sustentabilidade.",
                C: "Reutilizar sem considerar eficiência energética pode aumentar o consumo e impactos ambientais.",
                D: "Descarte inadequado é exatamente o que a gestão responsável busca evitar."
                
            }
        },

        {
            id: "questao08", 
            pergunta: "(FADESP/2025) Considerando o COBIT 2019, é correto afirmar que são processos do domínio Entregar, Servir e Suportar (DSS):",
            alternativas:{
                A: "Sistema de Controle Interno Gerenciado, Garantia Gerenciada e Monitoração do Desempenho e da Conformidade Gerenciado.",
                B: "Estratégia Gerenciada, Recursos Humanos Gerenciados e Qualidade Gerenciada.",
                C: "Definição de Requisitos Gerenciada, Definição de Requisitos Gerenciada e Projetos Gerenciados",
                D: "Problemas Gerenciados, Serviços de Segurança Gerenciados e Continuidade Gerenciada.",
                E: "Inovação Gerenciada, Construção de Soluções Gerenciadas e Dados Gerenciados."
            },
            correta: "D",
            explicacoes:{
                A: "Relaciona-se ao domínio ME (Monitorar, Avaliar e Analisar).",
                B: "Refere-se ao domínio APO (Alinhar, Planejar e Organizar).",
                C: "Processos ligados ao domínio BAI (Construir, Adquirir e Implementar).",
                D: "Esses são processos do domínio DSS (Deliver, Service and Support) do COBIT 2019, que foca na entrega de serviços, suporte ao usuário, segurança e continuidade.",
                E: "Inovação e construção de soluções pertencem ao BAI, e dados estão em APO."
            }
        },

        {
            id: "questao09", 
            pergunta: "(FCC/2025) Uma Analista de uma Prefeitura Municipal constatou que o órgão necessitava assegurar a continuidade dos serviços durante e após um evento disruptivo e que isso deveria ser assegurado por meio da aplicação de práticas de Gerenciamento de Continuidade do Serviço (Service Continuity Management) do ITIL V4, cuja relação com os SLAs estabelecidos são: ",
            alternativas:{
                A: "monitorar e revisar o desempenho do serviço em relação aos SLAs acordados, manter um catálogo de serviços atualizado, incluindo as definições de SLAs, e estabelecer SLAs claros, mensuráveis e alinhados às necessidades de negócio.",
                B: "garantir que os tempos de resposta e resolução definidos nos SLAs sejam cumpridos; e priorizar incidentes com base nos acordos estabelecidos com o cliente, como tempo de resolução critica versus não crítica.",
                C: "monitorar e garantir que os serviços estejam disponíveis conforme definido nos SLAs, como uma disponibilidade de 99,9% durante horário comercial, e realizar análises para identificar áreas de melhoria relacionadas à disponibilidade.",
                D: "definir e implementar SLAs em situações de contingência, como tempos de recuperação após falhas e níveis mínimos de serviço; e planejar estratégias para manter os compromissos estabelecidos nos SLAs mesmo em situações adversas.",
                E: "monitorar os níveis de desempenho estabelecidos nos SLAs, como tempo de resposta máximo para transações ou acessos a sistemas, e prever demandas futuras e ajustar recursos para cumprir os SLAs acordados."
            },
            correta: "D",
            explicacoes:{
                A: "Refere-se à gestão de níveis de serviço em situações normais, não em eventos disruptivos.",
                B: "Está relacionado à gestão de incidentes, não à continuidade de serviço.",
                C: "Trata da disponibilidade do serviço, que é um processo distinto da continuidade.",
                D: "O Gerenciamento da Continuidade do Serviço (Service Continuity Management) no ITIL v4 foca em garantir que os serviços essenciais continuem operando durante e após eventos disruptivos, respeitando os SLAs mínimos acordados, especialmente em situações de contingência.",
                E: "Foca em capacidade e desempenho, não em continuidade em situações adversas."
            }
        },

        {
            id: "questao10", 
            pergunta: "(FADESP/2025) No contexto da governança de TI, é correto afirmar que:",
            alternativas:{
                A: "o escopo do framework COBIT é menor do que o escopo do framework ITIL",
                B: "o escopo do framework COBIT abrange toda a organização e o escopo do framework ITIL concentra-se nas atividades operacionais do departamento de TI.",
                C: "o framework ITIL define os objetivos estratégicos e as responsabilidades da alta gerência",
                D: "não distinguir a governança de gestão é um princípio do framework COBIT.",
                E: "aplicar um modelo único integrado é um princípio do framework ITIL."
            },
            correta: "B",
            explicacoes:{
                A: "Inverso: o COBIT tem escopo mais amplo, não menor.",
                B: "O COBIT é um framework de governança e gestão corporativa de TI, com foco estratégico e organizacional. Já o ITIL é voltado à gestão de serviços de TI, com ênfase em operações e entrega de serviços.",
                C: "Isso é atribuição do COBIT, não do ITIL",
                D: "COBIT distingue claramente governança e gestão.",
                E: "'Modelo único integrado' é um princípio do COBIT, não do ITIL."
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