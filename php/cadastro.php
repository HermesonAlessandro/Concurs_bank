<?php
// Inclui o arquivo de conexão com o banco de dados
include_once "conexao.php";

// Exibe o conteúdo da variável $_POST para fins de depuração
var_dump($_POST);

// Obtém os dados enviados pelo formulário via método POST
$cpf = $_POST['cpf'];
$nome_completo = $_POST['nome_completo'];
$idade = $_POST['idade'];
$sexo = $_POST['sexo'];
$email = $_POST['email'];
$senha = $_POST['senha'];

// Cria a instrução SQL para inserir um novo estudante na tabela 'estudante'
$sql = "INSERT INTO estudante (cpf, nome_completo, idade, sexo, email, senha) VALUES (?, ?, ?, ?, ?, ?)";

// Prepara a consulta SQL usando mysqli para evitar SQL Injection
$stmt = $mysqli->prepare($sql);

// Verifica se houve erro ao preparar a consulta
if(!$stmt){
    die("Error ao preparar a consulta: ".$mysqli->error);
}

// Associa os valores das variáveis aos parâmetros da consulta SQL
$stmt->bind_param("ssisss", $cpf, $nome_completo, $idade, $sexo, $email, $senha);

// Executa a consulta SQL para inserir os dados no banco de dados
if($stmt->execute()){
    // Se a inserção foi bem-sucedida, redireciona o usuário para a tela de login
    header("location: ../html/tela_login.html");
}else{
    // Se houve erro na inserção, exibe uma mensagem de erro
    echo "Error ao cadastrar o estudante!".$stmt->error;
}

// Fecha a consulta preparada
$stmt->close();

// Fecha a conexão com o banco de dados
$mysqli->close();
?>