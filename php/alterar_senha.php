<?php
session_start(); // Inicia uma sessão PHP para armazenar informações do usuário
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // Configura o MySQLi para exibir erros e usar exceções
include_once "conexao.php"; // Inclui o arquivo de conexão com o banco de dados

if(!$mysqli){
    die("Erro ao conectar ao banco de dados: ".$mysqli->connect_error); // Verifica se há erro na conexão e encerra a execução do script
}

// Função para validar a senha
function validarSenha($senha){
    return strlen($senha) >=8 && preg_match('/[A-Z]/', $senha) && preg_match('/[a-z]/', $senha) && preg_match('/[0-9]/', $senha) && preg_match('/[!@#$%^&*(),.?":{}|<>]/', $senha);
}

// Exibe o conteúdo da variável $_POST para fins de depuração
var_dump($_POST);

$email = $_POST['email']; // Obtém o e-mail enviado pelo formulário
$novasenha = $_POST['novasenha']; // Obtém o novasenha enviado pelo formulário
$confirmarsenha = $_POST['confirmarsenha']; // Obtém a confirmação da senha enviada pelo formulário
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitiza o e-mail para evitar injeções maliciosas

// Verifica se as senhas coincidem
if($novasenha !== $confirmarsenha){
    echo "<script>alert('As senhas não coincidem!'); history.back();</script>";
    exit();
}

// Criptografa a nova senha
$senha_hash = password_hash($novasenha, PASSWORD_DEFAULT);

try{
    // Inicia a transação
    $mysqli->begin_transaction();

    // Atualiza a senha na tabela `estudante`
    $sql_uptade_estudante = "UPDATE estudante SET senha = ? WHERE email = ?";
    $stmt_estudante = $mysqli->prepare($sql_uptade_estudante);
    $stmt_estudante->bind_param("ss", $senha_hash, $email);
    $stmt_estudante->execute();

    // Atualiza a senha na tabela `sessao`
    $sql_uptade_sessao = "UPDATE sessao SET senha = ? WHERE email = ?";
    $stmt_sessao = $mysqli->prepare($sql_uptade_sessao);
    $stmt_sessao->bind_param("ss", $senha_hash, $email);
    $stmt_sessao->execute();

    // Se ambas as consultas forem bem-sucedidas, confirma a transação
    $mysqli->commit();

    echo "<script>
            alert('Senha alterada com sucesso!');
            window.location.href = '../html/tela_login.html';
          </script>";
    exit();
}catch(Exception $e){
    // Se houver erro, desfaz todas as alterações no banco de dados
    $mysqli->rollback();
    echo "<script>alert('Erro ao alterar senha! Tente novamente.'); history.back();</script>";
}

// Fecha as conexões
$stmt_estudante->close();
$stmt_sessao->close();
$mysqli->close();
?>