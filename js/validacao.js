// Seleciona o formulário que possui o id 'validacao' e adiciona um evento para quando for submetido
document.querySelector('#validacao').addEventListener('submit', function(e) {
    // Previne o envio padrão do formulário para permitir validações antes de submeter
    e.preventDefault();
    
    // Obtém os valores inseridos nos campos de entrada do formulário
    const cpf = document.getElementById('cpf').value;      // CPF digitado pelo usuário
    const nome = document.getElementById('nome').value;    // Nome digitado pelo usuário
    const idade = document.getElementById('idade').value;  // Idade digitada pelo usuário
    const email = document.getElementById('email').value;  // Email digitado pelo usuário
    const senha = document.getElementById('senha').value;  // Senha digitada pelo usuário
    
    // Validação do CPF: deve conter exatamente 11 dígitos numéricos
    if (!/^\d{11}$/.test(cpf.replace(/\D/g, ''))) { // Remove caracteres não numéricos e verifica se restam 11 dígitos
        alert('CPF deve ter 11 dígitos numéricos'); // Exibe alerta caso a validação falhe
        return; // Interrompe o processamento do formulário
    }
    
    // Validação do nome: deve ter pelo menos 2 caracteres
    if (nome.trim().length < 2) { // Remove espaços em branco do início e fim e verifica o tamanho mínimo
        alert('Nome deve ter pelo menos 2 caracteres'); // Exibe alerta caso a validação falhe
        return; // Interrompe o processamento do formulário
    }
    
    // Validação da idade: deve ser um número inteiro maior que 1
    if (!/^\d+$/.test(idade) || parseInt(idade) < 1) { // Confere se é um número inteiro e maior que 1
        alert('Idade deve ser um número maior que 1'); // Exibe alerta caso a validação falhe
        return; // Interrompe o processamento do formulário
    }
    
    // Validação do email: deve seguir o formato padrão de e-mails (com @ e domínio)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // Usa expressão regular para validar estrutura do email
        alert('Email inválido (deve conter @ e domínio)'); // Exibe alerta caso a validação falhe
        return; // Interrompe o processamento do formulário
    }
    
    // Validação da senha: deve ter pelo menos 8 caracteres, incluindo letras maiúsculas e minúsculas
    if (senha.length < 8 || !/[A-Z]/.test(senha) || !/[a-z]/.test(senha)) { // Confere tamanho mínimo e presença de maiúsculas/minúsculas
        alert('Senha deve ter 8+ caracteres com maiúsculas e minúsculas'); // Exibe alerta caso a validação falhe
        return; // Interrompe o processamento do formulário
    }
    
    // Se todas as validações forem aprovadas, exibe uma mensagem de sucesso e submete o formulário
    alert('Cadastro realizado com sucesso!'); // Mensagem de sucesso ao usuário
    this.submit(); // Submete o formulário após validação bem-sucedida
});// Fechamento da tag do js