// Array contendo as questões do quiz
const questoes = [
        {
            id: "questao01", 
            pergunta: "(FCC/2025) Com respeito à renegociação de valores do IPTU ocorrida na esfera municipal de uma grande cidade, a técnica de machine learning mais adequada para detectar uma possível fraude aplicada por cidadãos é:",
            alternativas:{
                A: "Análise de cluster: Agrupar as transações em clusters e Identificar aqueles com características atípicas.",
                B: "Regressão linear: Modelar a relação entre as variáveis para prever o valor de uma transação potencialmente fraudulenta e identificar desvios.",
                C: "Análise de componentes principais (PCA): Reduzir a dimensionalidade dos dados para visualizar padrões e anomalias características de fraudes.",
                D: "Redes neurais artificiais: Construir um modelo capaz de aprender padrões complexos nas transações e identificar aquelas com alto risco de fraude.",
                E: "Análise de sentimento: Aplicar Regard Review on ML (R2ML) nos textos dos processos impetrados por cidadãos supostamente envolvidos em fraudes do IPTU, para identificar possíveis características sentimentais indicativas de fraudulência."
            },
            correta: "A",
            explicacoes:{
                A: "A análise de cluster é adequada para detectar fraudes porque permite agrupar transações semelhantes e destacar aquelas que apresentam características incomuns, facilitando a identificação de possíveis fraudes.",
                B: "Regressão linear é usada para prever valores contínuos, não para detectar anomalias.",
                C: "PCA reduz dimensionalidade, mas não identifica diretamente fraudes.",
                D: "Redes neurais precisam de dados rotulados e são mais complexas para detecção sem supervisão.",
                E: "Análise de sentimento é aplicada a textos, não a dados financeiros para fraude."
            }
        },

        {
            id: "questao02", 
            pergunta: "(FCC/2025) A equipe de TI de uma prefeitura está desenvolvendo um painel para monitoramento de indicadores de serviços públicos, como saúde, educação e segurança. O objetivo é disponibilizar um dashboard que integre múltiplas fontes de dados, permita atualizações em tempo real e possibilite a criação de alertas para situações criticas. Como a equipe optou pelo uso da ferramenta Grafana, a configuração que atende aos requisitos de atualização em tempo real e criação de alertas é:",
            alternativas:{
                A: "conectar o Grafana a uma base de dados relacional (como MySQL) e configurar atualizações e criação de alertas a cada 5 minutos.",
                B: "configurar o Grafana para importar relatórios gerados no Tableau e emitir alertas em intervalos regulares.",
                C: "utilizar o Grafana com uma fonte de dados, como o Prometheus, para habilitar atualização em tempo real e criar alertas.",
                D: "usar o Grafana para se conectar diretamente a arquivos CSV, permitindo atualizações manuais dos dashboards com base nos dados obtidos em tempo real.",
                E: "configurar o Grafana para trabalhar com o Power Bl Embedded para emitir alertas e atualizações em tempo real."
            },
            correta: "C",
            explicacoes:{
                A: "MySQL pode ser usado com Grafana, mas não é ideal para dados em tempo real nem para alertas altamente responsivos.",
                B: "Tableau e Grafana são ferramentas distintas, e a integração direta entre elas para alertas não é nativa nem eficiente.",
                C: "O Grafana integra-se nativamente com ferramentas como o Prometheus, que coleta e armazena métricas em tempo real. Essa combinação permite a visualização em tempo real e a configuração de alertas automáticos, exatamente como exige o cenário da prefeitura.",
                D: "Arquivos CSV exigem atualizações manuais e não suportam alertas ou atualização em tempo real.",
                E: "Power BI Embedded é uma solução da Microsoft não integrada ao Grafana. A união das duas não atende nativamente aos requisitos descritos."
            }
        },

        {
            id: "questao03", 
            pergunta: "(CETAP/2025) Que tipo de análise utiliza Big Data para prever comportamentos futuros com base em padrões históricos e tendências, ajudando as organizações a tomar decisões mais informadas e de forma mais assertiva. todavia, sem gerar recomendações de ações ou soluções automaticamente?",
            alternativas:{
                A: "Descritiva.",
                B: "Diagnóstica.",
                C: "Prescritiva.",
                D: "Preditiva.",
                E: "Cognitiva."
            },
            correta: "D",
            explicacoes:{
                A: "Apenas resume ou relata o que aconteceu no passado, sem prever.",
                B: "Foca em entender por que algo aconteceu, não prevê o futuro.",
                C: "Vai além da preditiva, pois sugere ações com base nas previsões.",
                D: "A análise preditiva utiliza Big Data e modelos estatísticos ou de machine learning para identificar padrões históricos e tendências, com o objetivo de prever comportamentos futuros. No entanto, não recomenda ações automaticamente, isso seria função da análise prescritiva.",
                E: "Utiliza IA avançada para simular o raciocínio humano e pode tomar decisões autônomas, o que não se aplica à descrição da questão."
            }
        },

        {
            id: "questao04", 
            pergunta: "(FUNIVERSA/2009) Um sistema de processamento de dados é composto, basicamente, por três etapas: (1) entrada de dados, (2) processamento ou tratamento da informação e (3) saída. Em um computador, essas tarefas são realizadas por partes diversas que o compõem, como teclado, mouse, microprocessador, memória etc. Levando-se em conta as tarefas de processamento de dados realizadas por um computador, é correto afirmar que",
            alternativas:{
                A: "dispositivos de hardware como teclado e mouse são responsáveis pela saída de dados, uma vez que escrevem ou apontam o resultado esperado em uma operação realizada pelo computador.",
                B: "acessórios modernos como webcams, bluetooth e leitores biométricos são dispositivos de saída de dados incorporados a alguns computadores como acessórios de fábrica.",
                C: "a tela (ou monitor) de um computador comporta-se como um dispositivo de entrada de dados, quando se trabalha em sistemas de janelas, com botões a serem “clicados” pelo usuário.",
                D: "as impressoras multifuncionais são dispositivos mistos, de entrada, processamento e saída de dados, pois podem ler (scanner), processar (memória interna) e imprimir informações.",
                E: "a entrada de dados é tarefa realizada pela pessoa (ou por um programa de computador) responsável por alimentar o sistema com dados necessários para atingir o resultado esperado."
            },
            correta: "E",
            explicacoes:{
                A: "Teclado e mouse são dispositivos de entrada, não de saída.",
                B: "Webcams e leitores biométricos são dispositivos de entrada, não de saída. Bluetooth é um meio de comunicação, não de entrada ou saída propriamente dita.",
                C: "O monitor é um dispositivo de saída. Mesmo ao clicar em botões, a entrada ocorre via mouse ou touchscreen, não pela tela em si.",
                D: "Mesmo que multifuncionais, impressoras não processam informações no sentido computacional do processamento de dados (como CPU faz). São classificadas como entrada (scanner) e saída (impressora), mas não como processadores.",
                E: "A entrada de dados ocorre quando um usuário (ou software) alimenta o sistema com informações que serão processadas. Isso está diretamente relacionado à primeira etapa do ciclo de processamento de dados."
            }
        },

        {
            id: "questao05", 
            pergunta: "(FGV/2025) Em um problema de classificação binária com aprendizado de máquina, a técnica geralmente mais adequada para ajustar o modelo e evitar o overfitting é:",
            alternativas:{
                A: "reduzir a quantidade de dados no conjunto de teste.",
                B: "diminuir o número de dados de treinamento.",
                C: "utilizar regularização, como L1 ou L2.",
                D: "aumentar a complexidade do modelo.",
                E: "evitar o uso de validação cruzada."
            },
            correta: "C",
            explicacoes:{
                A: "Não resolve o overfitting; pode até prejudicar a avaliação do modelo.",
                B: "Agrava o overfitting, pois o modelo aprende com menos exemplos.",
                C: "A regularização (L1 ou L2) é uma técnica eficaz para evitar o overfitting, pois ela penaliza coeficientes muito altos no modelo, ajudando a reduzir a complexidade e melhorar a generalização para novos dados.",
                D: "Isso piora o overfitting, tornando o modelo ainda mais sensível aos dados de treino.",
                E: "Validação cruzada ajuda a evitar o overfitting, não o contrário."
            }
        },

        {
            id: "questao06", 
            pergunta: "(FCPC/2025) Aprendizado de máquina é um objeto da inteligência artificial que desenvolve técnicas capazes de reconhecer padrões a partir de dados. Algumas abordagens se destacam, como o aprendizado supervisionado e o não supervisionado, bem como o aprendizado por reforço. Com base nessas três abordagens, assinale a alternativa que contenha algoritmos de aprendizado supervisionado, aprendizado não supervisionado e aprendizado por reforço, respectivamente.",
            alternativas:{
                A: "RNN, DBScan e Q-learning",
                B: "LSTM, CNN e Monte Carlo",
                C: "K-Means, RNN e Monte Carlo",
                D: "MLP, SVM e Árvores de decisão"
                
            },
            correta: "A",
            explicacoes:{
                A: "Aprendizado supervisionado usa algoritmos como RNN para aprender com dados rotulados. Aprendizado não supervisionado, como DBScan, encontra padrões sem rótulos. Aprendizado por reforço, como Q-learning, ensina agentes por tentativa e erro com recompensas. A alternativa A lista um exemplo de cada um nessa ordem.",
                B: "Monte Carlo não é um algoritmo de aprendizado por reforço específico.",
                C: "RNN é supervisionado. Monte Carlo não é um algoritmo de aprendizado por reforço específico.",
                D: "MLP, SVM e Árvores de Decisão são todos algoritmos de aprendizado supervisionado.",
                
            }
        },

        {
            id: "questao07", 
            pergunta: "(FGV/2025) O Big Data é implementado por equipes multidisciplinares, especializadas em suas respectivas áreas. O nome do perfil profissional que trabalha na definição de padrões, frameworks e protocolos e indica as disposições necessárias para os projetos, desde CPU, storages, licenças de software, se chama",
            alternativas:{
                A: "controlador de infraestrutura.",
                B: "arquiteto de soluções.",
                C: "minerador de dados.",
                D: "analista de negócios.",
                E: "designer de dados."
            },
            correta: "B",
            explicacoes:{
                A: "Este profissional geralmente se concentra na gestão e manutenção da infraestrutura de TI existente, não necessariamente na definição da arquitetura para novos projetos de Big Data.",
                B: "O arquiteto de soluções é o profissional responsável por definir os padrões, frameworks e protocolos necessários para projetos de Big Data. Ele indica as disposições de infraestrutura, como CPU, storages e licenças de software, garantindo que a solução técnica atenda aos requisitos do negócio e seja escalável e eficiente.",
                C: "O minerador de dados (data miner) é especializado em descobrir padrões e insights em grandes volumes de dados, mas não na definição da arquitetura da infraestrutura.",
                D: "O analista de negócios foca na compreensão das necessidades do negócio e na tradução dessas necessidades em requisitos para projetos de TI, mas não na arquitetura técnica da solução.",
                E: "O designer de dados se concentra na estrutura, organização e modelagem dos dados em si, visando a eficiência e a usabilidade, mas não necessariamente na arquitetura completa da infraestrutura de Big Data."
            }
        },

        {
            id: "questao08", 
            pergunta: "(FGV/2025) As organizações públicas podem se beneficiar do uso de Big Data para auditar grandes volumes de informações de maneira eficiente.Sobre os 5Vs que caracterizam o Big Data, assinale a afirmativa correta.",
            alternativas:{
                A: "O “volume” refere-se à diversidade de fontes de dados utilizadas no Big Data.",
                B: "A “veracidade” refere-se à necessidade de adaptar sistemas para processar dados provenientes de fontes variadas.",
                C: "A “variedade” está associada à dificuldade em lidar com o grande volume de dados gerados em um curto período.",
                D: "Os 5Vs de Big Data são: volume, variedade, validade, valor e verificação.",
                E: "O “valor” de um conjunto de dados está diretamente ligado à capacidade de extrair informações úteis e significativas."
            },
            correta: "E",
            explicacoes:{
                A: "O “volume” refere-se à diversidade de fontes de dados utilizadas no Big Data. Incorreta. O 'volume' refere-se à enorme quantidade de dados gerados e processados no Big Data. A diversidade de fontes de dados está relacionada à 'variedade'.",
                B: "A “veracidade” refere-se à necessidade de adaptar sistemas para processar dados provenientes de fontes variadas. Incorreta. A 'veracidade' se refere à confiabilidade e qualidade dos dados, incluindo a necessidade de lidar com inconsistências e incertezas. A adaptação de sistemas para diferentes fontes está ligada à 'variedade'.",
                C: "A 'variedade' está associada à dificuldade em lidar com o grande volume de dados gerados em um curto período. Incorreta. A 'variedade' se refere aos diferentes tipos de dados (estruturados, não estruturados, semiestruturados) e suas diversas fontes. A velocidade com que os dados são gerados está associada à 'velocidade'",
                D: "Os 5Vs de Big Data são: volume, variedade, validade, valor e verificação. Incorreta. Os 5Vs mais comumente aceitos são: Volume, Velocidade, Variedade, Veracidade e Valor. 'Validade' e 'verificação' podem ser aspectos importantes, mas não são os 5Vs fundamentais",
                E: "O 'valor' (Value) é um dos 5Vs do Big Data e se refere à capacidade de transformar o grande volume e variedade de dados em insights acionáveis e benefícios tangíveis para a organização, como melhor tomada de decisão, otimização de processos ou identificação de novas oportunidades."
            }
        },

        {
            id: "questao09", 
            pergunta: "(Instituto Verbena/2024) O pré-processamento é um conjunto de atividades que envolvem preparação, organização e estruturação de dados, sendo fundamental no desempenho do modelo de aprendizagem de máquina. Tais atividades contemplam métodos e técnicas de limpeza, transformação, integração e redução de dimensionalidade. Os métodos que podem ser utilizados para o tratamento de dados faltantes são:",
            alternativas:{
                A: "interpolação de vizinhos mais próximos, valor médio do atributo, valor modal.",
                B: "validação estratificada, k-fold, divisão do conjunto de dados.",
                C: "validação cruzada, leave-one-out (deixando um de fora), valor mediano do atributo.",
                D: "divisão do conjunto de dados, gradiente descendente, valor médio do atributo."
            },
            correta: "A",
            explicacoes:{
                A: "apresenta métodos comuns e eficazes para o tratamento de dados faltantes interpolação de vizinhos mais próximos estima o valor faltante com base nos valores de instâncias semelhantes vizinhos no conjunto de dados valor médio do atributo substitui os valores faltantes pela média dos valores existentes para aquela coluna atributo valor modal para atributos categóricos substitui os valores faltantes pela moda ou seja o valor mais frequente naquela coluna.",
                B: "Esses são métodos de avaliação de modelos (validação cruzada e divisão de dados), não técnicas para tratamento de dados faltantes.",
                C: "Validação cruzada e leave-one-out são técnicas de avaliação. O valor mediano do atributo é um método válido para imputar dados faltantes numéricos, mas a presença das técnicas de avaliação torna a alternativa incorreta no contexto da pergunta.",
                D: "Divisão do conjunto de dados é para separar treino e teste, e gradiente descendente é um algoritmo de otimização de modelos. Apenas o valor médio do atributo é uma técnica de tratamento de dados faltantes."
            }
        },

        {
            id: "questao10", 
            pergunta: "(Instituto Verbena/2024) Máquinas de vetores de suporte (do inglês, Support Vector Machine - SVM) são algoritmos de aprendizado de máquina que possibilitam a implementação de classificadores. Os modelos implementados a partir desses algoritmos utilizam funções kernel, conferindo como vantagem:",
            alternativas:{
                A: "ausência da necessidade de pré-processamento.",
                B: "minimização da margem entre as classes.",
                C: "aumento do grau de especialização no aprendizado.",
                D: "capacidade de lidar com dados não lineares."
            },
            correta: "D",
            explicacoes:{
                A: "As SVMs geralmente se beneficiam do pré-processamento de dados como escalonamento de features para um melhor desempenho e convergência Portanto essa afirmação é incorreta.",
                B: "O objetivo principal do SVM é maximizar a margem entre as classes o que contribui para uma melhor generalização A minimização da margem levaria a um classificador menos robusto.",
                C: "Embora as SVMs possam criar fronteiras de decisão complexas o objetivo é encontrar um equilíbrio entre a complexidade do modelo e a capacidade de generalização Um aumento excessivo na especialização pode levar ao overfitting.",
                D: "As funções kernel utilizadas em SVM permitem que o algoritmo trabalhe em um espaço de características de maior dimensão onde os dados que não são linearmente separáveis em sua dimensão original podem se tornar linearmente separáveis essa é uma das principais vantagens das SVMs",
                E: ""
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
