<?php
session_start(); // Inicia uma sessão PHP para armazenar informações do usuário
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); 
// Configura o MySQLi para exibir erros como exceções, facilitando a depuração
include_once "conexao.php"; // Inclui o arquivo de conexão com o banco de dados

// Verifica se a conexão com o banco de dados foi bem-sucedida
if(!$mysqli){
    die("Erro ao conectar ao banco de dados: ".$mysqli->connect_error); // Se houver erro, encerra o script
}

// Exibe os dados recebidos via POST para depuração
var_dump($_POST); 

// Captura os valores do formulário enviados pelo método POST
$email = $_POST['email']; // Obtém o e-mail digitado pelo usuário
$novasenha = $_POST['novasenha']; // Obtém a nova senha
$confirmarsenha = $_POST['confirmarsenha']; // Obtém a senha de confirmação

$email = filter_var($email, FILTER_SANITIZE_EMAIL); 
// Sanitiza o e-mail para evitar injeções de código malicioso ou ataques

// Verifica se o e-mail existe na tabela `sessao`
$sql_verifica = "SELECT email FROM sessao WHERE email = ?";
$stmt_verifica = $mysqli->prepare($sql_verifica); // Prepara a consulta SQL para evitar SQL Injection
$stmt_verifica->bind_param("s", $email); // Associa o e-mail recebido ao parâmetro da consulta
$stmt_verifica->execute(); // Executa a consulta SQL
$resultado_verifica = $stmt_verifica->get_result(); // Obtém o resultado da consulta

// Se o e-mail não for encontrado, exibe um alerta e interrompe o processo
if($resultado_verifica->num_rows === 0){
    echo "<script>alert('E-mail não encontrado!'); window.history.back();</script>";
    exit();
}

// Cria um hash seguro da nova senha antes de armazená-la no banco de dados
$senha_hash = password_hash($novasenha, PASSWORD_DEFAULT); 

// Prepara a consulta para atualizar a senha no banco de dados
$sql_update = "UPDATE sessao SET senha = ? WHERE email = ?";
$stmt_update = $mysqli->prepare($sql_update); // Prepara a consulta SQL
$stmt_update->bind_param("ss", $senha_hash, $email); // Associa os valores aos parâmetros da consulta

// Executa a atualização da senha no banco de dados
if($stmt_update->execute()){
    echo "<script>
            alert('Senha alterada com sucesso!');
            window.location.href = '../html/tela_login.html'; // Redireciona para a tela de login após alteração bem-sucedida
          </script>";
    exit();
} else {
    echo "<script>alert('Erro ao alterar senha! Tente novamente.'); window.history.back();</script>";
}

// Fecha as conexões com o banco de dados para liberar recursos
$stmt_verifica->close();
$stmt_update->close();
$mysqli->close();
?>