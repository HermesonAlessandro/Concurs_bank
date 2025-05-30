<?php
session_start(); // Inicia uma sessão para armazenar informações do usuário durante a navegação
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // Configura o MySQLi para exibir erros e usar exceções
include_once "conexao.php"; // Inclui o arquivo de conexão com o banco de dados

// Verifica se a conexão com o banco de dados foi bem-sucedida
if (!$mysqli) {
    die("Erro ao conectar ao banco de dados: " . $mysqli->connect_error); // Encerra o script caso haja erro na conexão
}

// Exibe os dados enviados pelo formulário para fins de depuração (remova em produção)
var_dump($_POST);

// Obtém os dados enviados pelo formulário via método POST
$cpf = $_POST['cpf']; // CPF do usuário
$nome = $_POST['nome']; // Nome completo do usuário
$idade = $_POST['idade']; // Idade do usuário
$sexo = ucfirst(strtolower($_POST['sexo'])); // Sexo do usuário com a primeira letra maiúscula
$email = $_POST['email']; // E-mail do usuário
$senha = $_POST['senha']; // Senha do usuário

// Validação da senha no servidor: verifica comprimento e presença de caracteres especiais
if(strlen($senha) < 8 || !preg_match('/[A-Z]/', $senha) || !preg_match('/[a-z]/', $senha) || 
   !preg_match('/[0-9]/', $senha) || !preg_match('/[!@#$%^&*(),.?":{}|<>]/', $senha)){
    echo "<script>alert('Senha não atende aos requisitos mínimos.');</script>"; // Exibe alerta caso a senha seja inválida
    exit(); // Encerra a execução do script
}

// Primeiro, verifica se o CPF já está cadastrado no banco de dados
$sql_verifica = "SELECT cpf FROM estudante WHERE cpf = ?";
$stmt_verifica = $mysqli->prepare($sql_verifica); // Prepara a consulta para evitar SQL Injection
$stmt_verifica->bind_param("s", $cpf); // Associa o CPF ao parâmetro da consulta
$stmt_verifica->execute();
$resultado_verifica = $stmt_verifica->get_result(); // Obtém o resultado da consulta

if($resultado_verifica->num_rows > 0){
    // Se o CPF já existir, exibe um alerta e interrompe o fluxo de cadastro
    echo "<script>
            alert('CPF já cadastrado! Por favor, use um CPF diferente.');
            window.history.back(); // Retorna para a página anterior
          </script>";
    exit(); // Encerra o script
}

// Verifica se o e-mail já está cadastrado
$sql_verifica_email = "SELECT email FROM estudante WHERE email = ?";
$stmt_verifica_email = $mysqli->prepare($sql_verifica_email);
$stmt_verifica_email->bind_param("s", $email);
$stmt_verifica_email->execute();
$resultado_verifica_email = $stmt_verifica_email->get_result();

if($resultado_verifica_email->num_rows > 0){
    echo "<script>
            alert('E-mail já cadastrado! Por favor, use um e-mail diferente.');
            window.history.back();
          </script>";
    exit();
}

// Criptografa a senha antes de armazená-la no banco de dados
$senha_hash = password_hash($senha, PASSWORD_DEFAULT);

// Cria a instrução SQL para inserir um novo estudante na tabela 'estudante'
$sql = "INSERT INTO estudante (cpf, nome_completo, idade, sexo, email, senha) VALUES (?, ?, ?, ?, ?, ?)";

// Prepara a consulta SQL de inserção
$stmt = $mysqli->prepare($sql);

// Verifica se houve erro ao preparar a consulta
if(!$stmt){
    die("Erro ao preparar a consulta: " . $mysqli->error);
}

// Associa os valores das variáveis aos parâmetros da consulta SQL
$stmt->bind_param("ssisss", $cpf, $nome, $idade, $sexo, $email, $senha_hash);

// Executa a consulta SQL para inserir os dados no banco de dados
if($stmt->execute()){
    // Se a inserção for bem-sucedida, exibe um alerta e redireciona o usuário para a tela de login
    echo "<script>
            alert('Cadastro realizado com sucesso!');
            window.location.href = '../html/tela_login.html'; // Redireciona para a página de login
          </script>";
    exit(); // Encerra a execução do script
} else {
    // Se houver erro na inserção, exibe uma mensagem de erro
    echo "<script>alert('Erro ao cadastrar o estudante! Tente novamente.'); window.history.back();</script>";
}

// Fecha a consulta preparada
$stmt->close();

// Fecha a conexão com o banco de dados
$mysqli->close();
?>