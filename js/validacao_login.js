// Seleciona o formulário que possui o id 'validacao_login' e adiciona um evento para quando for submetido
document.querySelector('#validacao_login').addEventListener('submit', function(e) {
    // Previne o envio padrão do formulário para permitir validações antes de submeter
    e.preventDefault();
    
    // Obtém os valores inseridos nos campos de entrada do formulário
    const email = document.getElementById('email').value;  // Email digitado pelo usuário
    const senha = document.getElementById('senha').value;  // Senha digitada pelo usuário

    // Verifica se algum campo está vazio
    if(!email || !senha){
        alert('Todos os campos devem ser preechidos!');
        return; // Interrompe o processamento do formulário
    }

    // Validação do email: deve seguir o formato padrão de e-mails (com @ e domínio)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // Usa expressão regular para validar estrutura do email
        alert('Email inválido (deve conter @ e domínio)');
        return; // Interrompe o processamento do formulário
    }
    
    // Validação da senha: deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, um numero e um caractere especial
    if (senha.length < 8 || !/[A-Z]/.test(senha) || !/[a-z]/.test(senha) || !/[0-9]/.test(email) || !/[!@#$%^&*(),.?":{}|<>]/.test(senha)) { // Confere tamanho mínimo e presença de maiúsculas/minúsculas/um numero e um caractere especial
        alert('Senha deve ter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, um número e um caractere especial');
        return; // Interrompe o processamento do formulário
    }
    
    // Se todas as validações forem aprovadas, exibe uma mensagem de sucesso e submete o formulário
    this.submit(); // Submete o formulário após validação bem-sucedida
});