<?php
session_start(); // Inicia uma sessão PHP para armazenar informações do usuário
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // Configura o MySQLi para exibir erros e usar exceções
include_once "conexao.php"; // Inclui o arquivo de conexão com o banco de dados

if (!$mysqli) {
    die("Erro ao conectar ao banco de dados: " . $mysqli->connect_error); // Verifica se há erro na conexão e encerra a execução do script
}

// Exibe o conteúdo da variável $_POST para fins de depuração
var_dump($_POST);

// Obtém os dados enviados pelo formulário via método POST
$cpf = $_POST['cpf'];
$nome_completo = $_POST['nome_completo'];
$idade = $_POST['idade'];
$sexo = $_POST['sexo'];
$email = $_POST['email'];
$senha = $_POST['senha'];

// Validação da senha no servidor
if(strlen($senha) < 8 || !preg_match('/[A-Z]/', $senha) || !preg_match('/[a-z]/', $senha) || !preg_match('/[0-9]/', $senha) || !preg_match('/[!@#$%^&*(),.?":{}|<>]/', $senha)){
    echo "";
    exit();
}

// Criptografa a senha antes de armazenar
$senha_hash = password_hash($senha, PASSWORD_DEFAULT);

// Primeiro, verifica se o CPF já está cadastrado
$sql_verifica = "SELECT cpf FROM estudante WHERE cpf = ?";
$stmt_verifica = $mysqli->prepare($sql_verifica);
$stmt_verifica->bind_param("s", $cpf);
$stmt_verifica->execute();
$resultado_verifica = $stmt_verifica->get_result();

if($resultado_verifica->num_rows > 0){
    // Se o CPF já existir, exibe um alerta e interrompe o fluxo
    echo "<script>
            alert('CPF já cadastrado! Por favor, use um CPF diferente.');
            window.history.back(); // Retorna para a página anterior
          </script>";
    exit();
}

// Cria a instrução SQL para inserir um novo estudante na tabela 'estudante'
$sql = "INSERT INTO estudante (cpf, nome_completo, idade, sexo, email, senha) VALUES (?, ?, ?, ?, ?, ?)";

// Prepara a consulta SQL usando mysqli para evitar SQL Injection
$stmt = $mysqli->prepare($sql);

// Verifica se houve erro ao preparar a consulta
if(!$stmt){
    die("Error ao preparar a consulta: ".$mysqli->error);
}

// Associa os valores das variáveis aos parâmetros da consulta SQL
$stmt->bind_param("ssisss", $cpf, $nome_completo, $idade, $sexo, $email, $senha_hash);

// Executa a consulta SQL para inserir os dados no banco de dados
if($stmt->execute()){
    // Se a inserção foi bem-sucedida, redireciona o usuário para a tela de login
    echo "<script>
            alert('Cadastro realizado com sucesso!');
            window.location.href = '../html/tela_login.html';
          </script>";
    exit();
}else{
    // Se houve erro na inserção, exibe uma mensagem de erro
    echo "<script>alert('Erro ao cadastrar o estudante! Tente novamente.'); window.history.back();</script>";
}

// Fecha a consulta preparada
$stmt->close();
// Fecha a conexão com o banco de dados
$mysqli->close();
?>