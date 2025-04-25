document.querySelector('validacao').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obter valores
    const cpf = document.getElementById('cpf').value;
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    
    // Cpf validacao
    if (!/^\d{11}$/.test(cpf.replace(/\D/g, ''))) {
        alert('CPF deve ter 11 dígitos numéricos');
        return;
    }
    
    if (nome.trim().length < 2) {
        alert('Nome deve ter pelo menos 2 caracter');
        return;
    }
    
    if (!/^\d+$/.test(idade) || parseInt(idade) < 1) {
        alert('Idade deve ser numero maior que 1);
        return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Email inválido (deve conter @ e domínio)');
        return;
    }
    
    if (senha.length < 8 || !/[A-Z]/.test(senha) || !/[a-z]/.test(senha)) {
        alert('Senha deve ter 8+ caracteres com maiúsculas e minúsculas');
        return;
    }
    
    // Se passarem
    alert('Cadastro realizado com sucesso!');
    this.submit();
});