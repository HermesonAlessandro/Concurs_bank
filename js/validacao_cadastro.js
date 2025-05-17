// Seleciona o formulário que possui o id 'validacao_cadastro' e adiciona um evento para quando for submetido
document.querySelector('#validacao_cadastro').addEventListener('submit', function(e) {
    // Previne o envio padrão do formulário para permitir validações antes de submeter
    e.preventDefault();
    
    // Obtém os valores inseridos nos campos de entrada do formulário
    const cpf = document.getElementById('cpf').value;      // CPF digitado pelo usuário
    const nome = document.getElementById('nome').value;    // Nome digitado pelo usuário
    const idade = document.getElementById('idade').value;  // Idade digitada pelo usuário
    const email = document.getElementById('email').value;  // Email digitado pelo usuário
    const senha = document.getElementById('senha').value;  // Senha digitada pelo usuário

    // Verifica se algum campo está vazio
    if(!cpf || !nome || !idade || !email || !senha){
        alert('Todos os campos devem ser preechidos!');
        return; // Interrompe o processamento do formulário
    }
    
    // Validação do CPF: deve conter exatamente 11 dígitos numéricos (desconsiderando pontos e hífen)
    if (!/^\d{11}$/.test(cpf.replace(/\D/g, ''))) { // Remove caracteres não numéricos e verifica se restam 11 dígitos
        alert('CPF deve ter 11 dígitos numéricos');
        return; // Interrompe o processamento do formulário
    }
    
    // Validação do nome: deve ter pelo menos 2 caracteres
    if (nome.trim().length < 2) { // Remove espaços em branco do início e fim e verifica o tamanho mínimo
        alert('Nome deve ter pelo menos 2 caracteres');
        return; // Interrompe o processamento do formulário
    }
    
    // Validação da idade: deve ser um número inteiro maior que 1
    if (!/^\d+$/.test(idade) || parseInt(idade) < 1) { // Confere se é um número inteiro e maior que 1
        alert('Idade deve ser um número maior que 1');
        return; // Interrompe o processamento do formulário
    }
    
    // Validação do email: deve seguir o formato padrão de e-mails (com @ e domínio)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { // Usa expressão regular para validar estrutura do email
        alert('Email inválido (deve conter @ e domínio)');
        return; // Interrompe o processamento do formulário
    }
    
    // Validação da senha: deve ter pelo menos 8 caracteres, incluindo letras maiúsculas e minúsculas
    if (senha.length < 8 || !/[A-Z]/.test(senha) || !/[a-z]/.test(senha)) { // Confere tamanho mínimo e presença de maiúsculas/minúsculas
        alert('Senha deve ter 8+ caracteres com maiúsculas e minúsculas');
        return; // Interrompe o processamento do formulário
    }
    
    this.submit(); // Submete o formulário após validação bem-sucedida
});

// Seleciona o campo de CPF e adiciona um evento para formatar o valor enquanto o usuário digita
const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', function(e) {
    let value = e.target.value; // Obtém o valor atual do campo CPF

    // Remove todos os caracteres que não são números
    value = value.replace(/\D/g, '');

    // Aplica a máscara de CPF: 000.000.000-00
    if (value.length <= 11) { // Garante que só formate até 11 números
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Insere o primeiro ponto
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); // Insere o segundo ponto
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Insere o hífen
    }

    // Atualiza o valor do campo com a máscara aplicada
    e.target.value = value;
});