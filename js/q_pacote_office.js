// Array contendo as questões do quiz
const questoes = [
        {
            id: "questao01", 
            pergunta: "(IBAM/2025) Em uma sociedade cada vez mais conectada, a internet se tornou uma ferramenta indispensável para a comunicação e o compartilhamento de informações. Através dela, podemos acessar um universo de conteúdos, colaborar com pessoas de diferentes partes do mundo e realizar tarefas de forma rápida e eficiente. As ferramentas do Microsoft Office, como o Word, Excel e PowerPoint, integradas ao ambiente online, potencializam ainda mais as possibilidades de trabalho e interação. Um grupo de estudantes de diferentes universidades precisa colaborar em tempo real na elaboração de um trabalho acadêmico. Eles desejam editar um documento do Word simultaneamente, inserindo e revisando trechos de texto, além de debater ideias e sugestões. Qual ferramenta do Microsoft Office 365 oferece a melhor solução para essa colaboração online?",
            alternativas:{
                A: "OneDrive.",
                B: "SharePoint Online.",
                C: "Word Online.",
                D: "Skype for Business."
            },
            correta: "C",
            explicacoes:{
                A: "É o serviço de armazenamento em nuvem da Microsoft. Embora permita compartilhar arquivos, ele não é a ferramenta usada diretamente para edição colaborativa.",
                B: "É uma plataforma mais ampla de colaboração e gestão de conteúdo corporativo. Pode-se hospedar documentos, mas a edição simultânea ocorre dentro do Word Online.",
                C: "O Word Online permite que múltiplos usuários editem um mesmo documento simultaneamente, em tempo real, com salvamento automático e recursos de revisão colaborativa. É a ferramenta ideal para o cenário descrito, em que estudantes precisam trabalhar juntos na elaboração de um texto acadêmico, revisando e inserindo conteúdo ao mesmo tempo.",
                D: "Foca na comunicação via chat, áudio e vídeo, e não na edição de documentos. Pode ser usado para debater ideias, mas não para editar textos em conjunto."
            }
        },

        {
            id: "questao02", 
            pergunta: "(COTEC FADENOR/2025) No Microsoft Office, a aba em que são agrupadas as ferramentas responsáveis por configurar a página, como “Margens”, “Orientação” e “Colunas”, é denominada:",
            alternativas:{
                A: "Revisão.",
                B: "Layout.",
                C: "Inserir.",
                D: "Exibir.",
                E: "Design."
            },
            correta: "B",
            explicacoes:{
                A: "Contém ferramentas relacionadas à correção gramatical, controle de alterações e comentários, não à formatação da página.",
                B: "A aba Layout no Microsoft Word reúne as ferramentas responsáveis por configurar a página, como “Margens”, “Orientação”, “Tamanho” e “Colunas”. É nesta aba que o usuário define o layout físico do documento, como será impresso ou exibido.",
                C: "Agrupa comandos para adicionar elementos ao documento, como imagens, tabelas, gráficos e links.",
                D: "Permite alterar o modo de visualização do documento, como modo de leitura ou exibição de régua, mas não configura a página em si.",
                E: "Relaciona-se à aparência do documento, como temas e estilos, mas não às configurações estruturais da página."
            }
        },

        {
            id: "questao03", 
            pergunta: "(FAU/2025)No Excel, para contar o número de células que contêm números, utiliza-se a função:",
            alternativas:{
                A: "=CONTARVALORES()",
                B: "=CONT.SE()",
                C: "=CONT.NÚM()",
                D: "=CONTAR.TEXTO()",
                E: "=VALOR()"
            },
            correta: "C",
            explicacoes:{
                A: "Esta função conta o número de células não vazias em um intervalo, incluindo números, textos, datas e erros.",
                B: "Esta função conta o número de células dentro de um intervalo que atendem a uma determinada condição especificada.",
                C: "A função =CONT.NÚM() no Excel é especificamente utilizada para contar o número de células dentro de um intervalo que contêm valores numéricos.",
                D: "Não existe uma função padrão no Excel com o nome =CONTAR.TEXTO(). Para contar células com texto, geralmente se utiliza =CONT.SE() com um critério apropriado ou outras combinações de funções.",
                E: "Esta função converte uma cadeia de texto que representa um número em um valor numérico. Ela não serve para contar células."
            }
        },

        {
            id: "questao04", 
            pergunta: "(Quadrix/2025) Assinale a opção que apresenta um exemplo de software de planilha eletrônica frequentemente utilizado em empresas.",
            alternativas:{
                A: "Microsoft Word",
                B: "Adobe Photoshop",
                C: "Microsoft Excel",
                D: "Mozilla Firefox",
                E: "Google Drive"
            },
            correta: "C",
            explicacoes:{
                A: "É um processador de texto usado para criação e edição de documentos, não uma planilha eletrônica.",
                B: "É um software de edição de imagens, utilizado principalmente por profissionais de design e fotografia.",
                C: "O Microsoft Excel é um software de planilha eletrônica amplamente utilizado em empresas para organizar dados, realizar cálculos, criar gráficos e aplicar fórmulas. Sua versatilidade o torna uma ferramenta essencial para áreas como finanças, contabilidade, administração e análise de dados.",
                D: "É um navegador de internet, usado para acessar sites e conteúdos online, não para manipulação de dados em planilhas.",
                E: "É um serviço de armazenamento em nuvem. Embora possa conter arquivos de planilhas (como os do Google Sheets), ele em si não é uma planilha eletrônica."
            }
        },

        {
            id: "questao05", 
            pergunta: "(DEIP/2024) Ricardo está editando um relatório no Word e precisa inserir uma tabela complexa. Ele quer utilizar uma funcionalidade que facilite a manipulação de dados. Que recurso do Word é mais apropriado para Ricardo?",
            alternativas:{
                A: "Inserir gráficos.",
                B: "Usar modelos de documento.",
                C: "Inserir tabelas e utilizar fórmulas dentro delas.",
                D: "Adicionar SmartArt.",
                E: "Utilizar WordArt para destacar títulos."
            },
            correta: "C",
            explicacoes:{
                A: "É útil para representar visualmente dados, mas não é indicado para editar ou manipular os dados diretamente.",
                B: "Facilita a padronização do layout, mas não oferece recursos específicos para lidar com tabelas complexas.",
                C: "O recurso de inserir tabelas com fórmulas no Microsoft Word permite a criação e manipulação de dados organizados em colunas e linhas, facilitando cálculos automáticos como soma, média e outras funções básicas. É ideal para o cenário descrito, em que Ricardo precisa lidar com uma tabela complexa dentro do relatório.",
                D: "Serve para criar diagramas e representações visuais de processos ou hierarquias, não para manipular dados em tabela.",
                E: "É usado para estilizar texto decorativo, sem nenhuma funcionalidade de manipulação de dados.    "
            }
        },

        {
            id: "questao06", 
            pergunta: "(DEIP/2024) Pedro usa o Excel para acompanhar as despesas mensais. Ele quer criar um resumo visual desses dados. Que recurso do Excel ele deve usa:",
            alternativas:{
                A: "Gráficos e minigráficos.",
                B: "WordArt.",
                C: "SmartArt.",
                D: "Clip-Art.",
                E: "Modelos de página."
            },
            correta: "A",
            explicacoes:{
                A: "O Excel oferece os recursos de gráficos e minigráficos para criar representações visuais dos dados. Esses elementos ajudam Pedro a visualizar rapidamente as tendências, variações e comparações nas despesas mensais, tornando a análise muito mais eficiente e intuitiva.",
                B: "É usado para aplicar efeitos decorativos ao texto, sem utilidade para análise ou visualização de dados numéricos.",
                C: "É indicado para representar fluxos, hierarquias e processos, não para resumir dados financeiros.",
                D: "Refere-se a imagens e ilustrações decorativas, não úteis para análises numéricas",
                E: "Estão relacionados ao layout do documento, não à criação de resumos visuais de dados."
            }
        },

        {
            id: "questao07", 
            pergunta: "(Avanca SP/2024) No Excel 2016, como uma fórmula deve ser iniciada para realizar cálculos dentro de uma célula?",
            alternativas:{
                A: "Com o sinal #",
                B: "Com o sinal &",
                C: "Com o sinal @",
                D: "Com o sinal %",
                E: "Com o sinal ="
            },
            correta: "E",
            explicacoes:{
                A: "Não é usado para iniciar fórmulas no Excel. Esse símbolo pode ser visto em outros contextos (como referência de erro), mas não em fórmulas.",
                B: "Esse sinal é usado para concatenar (unir) textos no Excel, não para cálculos.",
                C: "Não é utilizado para iniciar fórmulas no Excel. Ele pode ser visto em algumas fórmulas relacionadas a tabelas dinâmicas e funções, mas não serve para cálculos gerais.",
                D: "O sinal de porcentagem é usado para formatar números como porcentagens, mas não para iniciar uma fórmula.",
                E: "No Excel 2016, todas as fórmulas devem ser iniciadas com o sinal igual (=). Isso indica que o que vem a seguir é uma expressão que será calculada. Por exemplo, para somar dois números, você começaria a fórmula com =A1 + B1."
            }
        },

        {
            id: "questao08", 
            pergunta: "(Funatec/2024) Assinale corretamente o atalho do Word para desfazer alguma edição",
            alternativas:{
                A: "Ctrl + Z",
                B: "Ctrl + V",
                C: "Ctrl + E",
                D: "Ctrl + D"
            },
            correta: "A",
            explicacoes:{
                A: "O atalho Ctrl + Z no Microsoft Word é utilizado para desfazer a última edição ou ação realizada no documento. É uma função essencial para corrigir erros rapidamente.",
                B: "Este atalho é utilizado para colar conteúdo que foi copiado ou cortado.",
                C: "Serve para centralizar o texto no documento.",
                D: "Abre a caixa de formatação de fonte no Word, mas não desfaz as edições."
            }
        },

        {
            id: "questao09", 
            pergunta: "(Prefeitura de Bauru - SP/2025) A maioria dos programas utilizam o atalho CTRL + F para buscar informação. Porém no Microsoft Word do pacote Microsoft 365 o atalho é diferente. Qual é o atalho para buscar informação no Microsoft Word?",
            alternativas:{
                A: "CTRL + B.",
                B: "CTRL + L.",
                C: "CTRL + E.",
                D: "No Microsoft Word do pacote Microsoft 365 é utilizado o atalho CTRL + F para buscar informação."
            },
            correta: "D",
            explicacoes:{
                A: "CTRL + B é o atalho para aplicar ou remover a formatação de negrito no texto selecionado.",
                B: "CTRL + L é o atalho para alinhar o parágrafo à esquerda.",
                C: "CTRL + E é o atalho para centralizar o parágrafo.",
                D: "No Microsoft Word do pacote Microsoft 365 é utilizado o atalho CTRL + F para buscar informação."
            }
        },

        {
            id: "questao10", 
            pergunta: "(LJ Assessoria e Planejamento Administrativo Limitada/2024) Assinale a alternativa que não apresenta um programa que compõe o pacote do Microsoft Office.",
            alternativas:{
                A: "Chrome.",
                B: "Word.",
                C: "Excel.",
                D: "Power Point.",
                E: "OneDrive."
            },
            correta: "A",
            explicacoes:{
                A: "Chrome é um navegador de internet desenvolvido pelo Google, não faz parte do pacote Microsoft Office. O pacote do Microsoft Office é composto por programas como Word, Excel, PowerPoint e OneDrive, que são ferramentas de produtividade e armazenamento.",
                B: "É um processador de texto incluído no Microsoft Office.",
                C: "É uma planilha eletrônica, também parte do Microsoft Office.",
                D: "Programa utilizado para criar apresentações, integrante do pacote Office.",
                E: "É um serviço de armazenamento em nuvem da Microsoft, frequentemente utilizado em conjunto com os outros programas do Office."
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
