// Seleciona o formulário que possui o id 'validacao_alterar_senha' e adiciona um evento para quando for submetido
document.querySelector('#validacao_alterar_senha').addEventListener('submit', function(e) {
    // Previne o envio padrão do formulário para permitir validações antes de submeter
    e.preventDefault();
    
    // Obtém os valores inseridos nos campos de entrada do formulário
    const email = document.getElementById('email').value;  // Email digitado pelo usuário
    const novasenha = document.getElementById('novasenha').value;  // Senha digitada pelo usuário
    const confirmarsenha = document.getElementById('confirmarsenha').value;  // Confirmação da senha digitada pelo usuário

    // Verifica se algum campo está vazio
    if(!email || !novasenha || !confirmarsenha){
        alert('Todos os campos devem ser preechidos!');
        return; // Interrompe o processamento do formulário
    }

    // Validação do email: deve seguir o formato padrão de e-mails (com @ e domínio)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // Usa expressão regular para validar estrutura do email
        alert('Email inválido (deve conter @ e domínio)');
        return; // Interrompe o processamento do formulário
    }
    
    // Validação da senha: deve ter pelo menos 8 caracteres, incluindo letras maiúsculas e minúsculas
    if (novasenha.length < 8 || !/[A-Z]/.test(novasenha) || !/[a-z]/.test(novasenha)) { // Confere tamanho mínimo e presença de maiúsculas/minúsculas
        alert('Senha deve ter 8+ caracteres com maiúsculas e minúsculas');
        return; // Interrompe o processamento do formulário
    }

    // Confirmação da senha digitada: deve ter pelo menos 8 caracteres, incluindo letras maiúsculas e minúsculas
    if (confirmarsenha.length < 8 || !/[A-Z]/.test(confirmarsenha) || !/[a-z]/.test(confirmarsenha)) { // Confere tamanho mínimo e presença de maiúsculas/minúsculas
        alert('Senhas não coincidem, senha deve ter 8+ caracteres com maiúsculas e minúsculas');
        return; // Interrompe o processamento do formulário
    }
    
    // Se todas as validações forem aprovadas, exibe uma mensagem de sucesso e submete o formulário
    this.submit(); // Submete o formulário após validação bem-sucedida
});