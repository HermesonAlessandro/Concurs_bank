// Array contendo as questões do quiz
const questoes = [
        {
            id: "questao01", 
            pergunta: "(IBFC/2024) A computação em nuvem oferece uma série de benefícios para a organização e gerenciamento de informações, arquivos, pastas e programas, além de fornecer uma solução flexível e escalável para o armazenamento de dados. É correto afirmar que:",
            alternativas:{
                A: "Na computação em nuvem, os conceitos de arquivos, pastas e programas são diferentes dos usados em sistemas locais",
                B: "Os dados armazenados na nuvem não podem ser acessados de qualquer lugar com conexão à internet, pois depende do tipo de tecnologia de acesso utilizada pela rede e de políticas de Segurança da Informação",
                C: "Um dos principais benefícios do backup na nuvem é a facilidade de recuperação de dados em caso de falha ou perda de dados, porém é necessário um hardware físico específico",
                D: "A criptografia desempenha um papel crucial no armazenamento de dados na nuvem, pois é uma das principais medidas de segurança para proteger informações sensíveis contra acesso não autorizado",
                E: "IA (inteligência artificial) substitui completamente os sistemas de armazenamento em nuvem"
            },
            correta: "D",
            explicacoes:{
                A: "Os conceitos de arquivos, pastas e programas são fundamentalmente os mesmos na nuvem e em sistemas locais. A diferença reside em onde esses elementos estão armazenados e como são acessados.",
                B: "Uma das principais vantagens da computação em nuvem é a acessibilidade dos dados de qualquer lugar com conexão à internet, desde que o usuário tenha as credenciais corretas e a política de segurança da informação da organização permita esse acesso.",
                C: "O backup na nuvem elimina a necessidade de hardware físico específico para o armazenamento das cópias de segurança. Os dados são armazenados na infraestrutura do provedor de serviços de nuvem.",
                D: "A criptografia é essencial para garantir a confidencialidade dos dados armazenados na nuvem. Ao criptografar as informações, elas se tornam ilegíveis para qualquer pessoa que não possua a chave de descriptografia correta, protegendo contra acessos não autorizados e violações de segurança.",
                E: "Inteligência artificial e armazenamento em nuvem são tecnologias distintas, embora possam ser usadas em conjunto. A IA pode ser utilizada para otimizar o armazenamento e o gerenciamento de dados na nuvem, mas não a substitui completamente."
            }
        },

        {
            id: "questao02", 
            pergunta: "(FGV/2025) Elton é um técnico de informática recém-contratado pela Prefeitura, o qual precisa usar serviços de armazenamento e recuperação de qualquer quantidade de dados em nuvem. Assinale a opção que indica os serviços que podem ser usados a qualquer momento e de qualquer lugar na web.",
            alternativas:{
                A: "s3 e dropbox",
                B: "pass e icloud",
                C: "saas e github",
                D: "b64 e onedrive",
                E: "iass e google drive"
            },
            correta: "A",
            explicacoes:{
                A: "Tanto o Amazon S3 (Simple Storage Service) quanto o Dropbox são serviços de armazenamento de dados em nuvem que permitem o armazenamento e a recuperação de qualquer quantidade de dados a qualquer momento e de qualquer lugar com acesso à internet O S3 é um serviço altamente escalável e durável geralmente usado para armazenamento de objetos enquanto o Dropbox é popular para sincronização de arquivos e compartilhamento entre usuários.",
                B: "PaaS (Platform as a Service) é um modelo de serviço de nuvem que fornece uma plataforma para desenvolvimento, execução e gerenciamento de aplicativos. O iCloud é um serviço de armazenamento e sincronização da Apple focado principalmente em seus dispositivos.",
                C: "SaaS (Software as a Service) é um modelo de serviço de nuvem que fornece aplicativos de software pela internet O GitHub é uma plataforma de hospedagem de código para controle de versão usando Git.",
                D: "B64 (Base64) é um esquema de codificação para representar dados binários em formato de texto O OneDrive é um serviço de armazenamento em nuvem da Microsoft.",
                E: "IaaS (Infrastructure as a Service) é um modelo de serviço de nuvem que fornece recursos de computação virtualizados pela internet O Google Drive é um serviço de armazenamento e sincronização de arquivos do Google."
            }
        },

        {
            id: "questao03", 
            pergunta: "(IGEDUC/2025) Uma empresa optou por implementar o armazenamento dos seus arquivos estratégicos em serviços de cloud storage (armazenamento em nuvem). Durante uma reunião com a equipe de TI e gestores, foi discutido um dos principais benefícios dessa tecnologia, destacando corretamente que ela possibilita:",
            alternativas:{
                A: "Acessar, editar e compartilhar documentos simultaneamente entre diversos usuários autorizados, em tempo real e a partir de múltiplos dispositivos conectados à internet",
                B: "Gerar automaticamente cópias físicas em papel sempre que documentos forem salvos digitalmente na nuvem",
                C: "Garantir proteção integral automática dos arquivos armazenados, eliminando totalmente a necessidade de antivírus ou firewall",
                D: "Editar documentos exclusivamente nos computadores cadastrados previamente pela equipe técnica da empresa"
                
            },
            correta: "A",
            explicacoes:{
                A: "Esse é um dos principais benefícios do armazenamento em nuvem. Ele permite colaboração em tempo real, mobilidade e acesso remoto de forma segura e eficiente.",
                B: "Não há geração automática de cópias físicas em papel.",
                C: "A nuvem não elimina a necessidade de antivírus ou firewall; segurança continua sendo responsabilidade compartilhada.",
                D: "O acesso não é limitado exclusivamente a computadores cadastrados, desde que o usuário esteja autorizado e tenha conexão à internet."
                
            }
        },

        {
            id: "questao04", 
            pergunta: "(IGEDUC/2025) Uma funcionária precisa realizar uma cópia de segurança (backup) dos arquivos importantes da empresa na nuvem (cloud storage). Entre as ferramentas abaixo, qual é indicada especificamente para essa atividade?",
            alternativas:{
                A: "Google Drive",
                B: "Windows Defender",
                C: "Mozilla Thunderbird",
                D: "Microsoft Edge"
                
            },
            correta: "A",
            explicacoes:{
                A: "O Google Drive é uma ferramenta de armazenamento em nuvem, ideal para salvar, acessar e compartilhar arquivos com segurança. É amplamente utilizada para realizar backups, pois permite armazenar cópias de documentos importantes na internet, garantindo acesso remoto e recuperação em caso de perda dos arquivos locais.",
                B: " é um antivírus, usado para proteção contra malware, e não para backup.",
                C: "é um cliente de e-mail, não serve para backup de arquivos em nuvem.",
                D: "é um navegador de internet, não uma ferramenta de armazenamento ou backup."
            
            }
        },

        {
            id: "questao05", 
            pergunta: "(IVIN/2025) Ferramentas colaborativas são aplicativos e plataformas que permitem o trabalho em equipe, facilitando a comunicação e troca de informações online. Desta feita, assinale a opção contém o nome do conjunto de ferramentas online do Google que ajuda na comunicação e produtividade.",
            alternativas:{
                A: "Google Workspace",
                B: "Google Trello",
                C: "Google Teams",
                D: "Google Slack",
                E: "Google Basecamp"
            },
            correta: "A",
            explicacoes:{
                A: "O Google Workspace é o conjunto de ferramentas colaborativas online do Google, voltado para comunicação, produtividade e trabalho em equipe. Ele inclui aplicativos como Gmail, Google Drive, Google Docs, Google Meet, Google Calendar, entre outros, que permitem colaboração em tempo real e integração entre equipes.",
                B: "Google Trello: Trello é uma ferramenta de gerenciamento de tarefas, mas não pertence ao Google.",
                C: "Google Teams: O nome correto é apenas Microsoft Teams, que pertence à Microsoft, não ao Google.",
                D: "Google Slack: Slack é uma ferramenta de comunicação empresarial, mas também não é do Google.",
                E: "Google Basecamp: Basecamp é uma plataforma de gerenciamento de projetos, independente do Google."
            }
        },

        {
            id: "questao06", 
            pergunta: "(IDCAP/2025) Um profissional está utilizando serviços de armazenamento em nuvem para compartilhar documentos e colaborar com sua equipe de forma eficiente. Ele precisa configurar permissões de acesso e escolher o melhor serviço para sincronizar automaticamente os arquivos entre dispositivos. Considerando as funcionalidades do Google Drive e OneDrive, assinale a alternativa correta.",
            alternativas:{
                A: "O Google Drive oferece armazenamento ilimitado gratuito para qualquer tipo de conta, independentemente do espaço ocupado pelos arquivos",
                B: "O Google Drive permite configurar permissões específicas, como visualização, edição ou comentários, para usuários com quem os arquivos foram compartilhados",
                C: "O OneDrive não permite sincronizar arquivos automaticamente entre dispositivos, exigindo o upload manual em cada alteração",
                D: "O OneDrive exige que os arquivos estejam sempre conectados à internet para serem acessados, mesmo que estejam marcados para uso offline"
                
            },
            correta: "B",
            explicacoes:{
                A: "O Google Drive não oferece armazenamento ilimitado gratuito; o espaço gratuito padrão é de 15 GB, e planos com mais espaço são pagos.",
                B: "O Google Drive permite um controle detalhado de compartilhamento de arquivos, oferecendo opções como 'visualizar', 'comentar' ou 'editar', o que é ideal para colaboração em equipe de forma segura e organizada.",
                C: "O OneDrive permite sim sincronização automática de arquivos entre dispositivos por meio de seu aplicativo, facilitando o trabalho em diferentes plataformas.",
                D: "O OneDrive permite acesso offline a arquivos que foram previamente marcados para esse fim, sem a necessidade de conexão constante à internet."
                
            }
        },

        {
            id: "questao07", 
            pergunta: "(AEVSF/2025) Qual das seguintes opções descreve um benefício da compactação de arquivos no contexto do armazenamento em nuvem?",
            alternativas:{
                A: "A compactação de arquivos permite acessar os arquivos de qualquer dispositivo",
                B: "A compactação de arquivos facilita o acesso aos arquivos ocultos",
                C: "A compactação de arquivos reduz o tempo de upload e download de arquivos na nuvem",
                D: "A compactação de arquivos protege os arquivos contra perda de dados na nuvem",
                E: "A compactação de arquivos permite editar os arquivos diretamente na nuvem"
            },
            correta: "C",
            explicacoes:{
                A: "Acessar arquivos de qualquer dispositivo é uma função do armazenamento em nuvem, não da compactação.",
                B: "A compactação não tem relação direta com arquivos ocultos.",
                C: " A compactação de arquivos reduz o tamanho dos dados, o que acelera o envio (upload) e o recebimento (download) dos arquivos nos serviços de armazenamento em nuvem. Isso é especialmente útil quando se trabalha com conexões lentas ou arquivos grandes.",
                D: "Compactar arquivos não garante proteção contra perda de dados, isso depende de backups e políticas de segurança da nuvem.",
                E: "Compactação não permite edição direta; geralmente, é preciso descompactar primeiro para editar."
            }
        },

        {
            id: "questao08", 
            pergunta: "(FUNDATEC/2025)Fazer backup é importante para evitar a perda de arquivos do computador. Há diversas formas de realizar backup de arquivos de um computador, sendo uma delas por meio dos serviços de armazenamento em nuvem. Assinale a alternativa que apresenta apenas serviços de armazenamento em nuvem.",
            alternativas:{
                A: "Amazon iBox, Google OneDrive e Microsoft BoxDrive",
                B: "Amazon OneDrive, Apple iDrive e Google BoxDrive",
                C: "Amazon BoxDrive, Apple OneDrive e Google iDrive",
                D: "Apple Drive, Google CloudDrive e Microsoft Drive",
                E: "Apple iCloud, Google Drive e Microsoft OneDrive"
            },
            correta: "E",
            explicacoes:{
                A: "Mistura serviços da Amazon (Amazon Drive/S3), Microsoft (OneDrive) e Box (BoxDrive) de forma incorreta.",
                B: "Mistura serviços da Amazon, Apple (iCloud) e Box (BoxDrive) de forma incorreta.",
                C: "Mistura serviços da Amazon, Apple (iCloud) e Google (Google Drive) de forma incorreta.",
                D: "Usa nomes incorretos para os serviços da Apple (iCloud), Google (Google Drive) e Microsoft (OneDrive).",
                E: "Esses são serviços legítimos e amplamente utilizados de armazenamento em nuvem, oferecidos por grandes empresas de tecnologia."
            }
        },

        {
            id: "questao09", 
            pergunta: "(SELECON/2024) Um administrador de arquivos no Google Drive, em um ambiente com MS Windows em português, precisa criar um novo item do tipo planilha, usando teclas de atalho. Nesse caso, as teclas de atalho a serem digitadas são:",
            alternativas:{
                A: "Alt + D",
                B: "Alt + P",
                C: "Shift + S",
                D: "Shift + T"
                
            },
            correta: "C",
            explicacoes:{
                A: "Este atalho seleciona a barra de endereço (omnibox) do navegador Chrome.",
                B: "Este atalho não possui uma função padrão definida no Google Drive.",
                C: "No Google Drive, ao pressionar as teclas Shift + S (com o Drive aberto e ativo no navegador), é criada uma nova planilha do Google Sheets.",
                D: "Este atalho abre o menu 'Novo' do Google Drive e seleciona a opção 'Documentos Google'."

            }
        },

        {
            id: "questao10", 
            pergunta: "(FCC/2023) Um Técnico criou um arquivo no Google Drive chamado tribunal.txt. Em seguida, clicou na opção para compartilhar o arquivo e uma janela de configurações de compartilhamento foi aberta. Nessa janela, ao clicar no simbolo da engrenagem é possível:",
            alternativas:{
                A: "gerar e copiar link para compartilhamento",
                B: "definir se os editores podem alterar permissões e compartilhar",
                C: "Adicionar as permissões de leitura, escrita e gravação",
                D: "transferir a propriedade do arquivo",
                E: "remover acesso ao arquivo de usuários de fora do Tribunal"
            },
            correta: "B",
            explicacoes:{
                A: "A opção para gerar e copiar o link de compartilhamento fica disponível em outras áreas da janela de compartilhamento, não no símbolo da engrenagem.",
                B: "Ao clicar no símbolo da engrenagem na janela de configurações de compartilhamento do Google Drive, é possível ajustar as permissões para os editores do arquivo, como definir se eles podem ou não alterar permissões e compartilhar o arquivo com outras pessoas.",
                C: "As permissões de leitura, escrita e gravação são definidas diretamente na interface principal de compartilhamento, e não na engrenagem.",
                D: "A transferência de propriedade de um arquivo não está relacionada diretamente à engrenagem, mas pode ser feita na seção de compartilhamento.",
                E: "A remoção de acessos de usuários fora de um grupo específico (como 'de fora do Tribunal') também não é feita pela engrenagem, mas sim nas configurações gerais de compartilhamento."
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