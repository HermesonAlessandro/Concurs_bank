<?php
// Inicia a sessão para armazenar dados entre requisições
session_start();

// Configura o MySQLi para relatar erros e exceções detalhadas, facilitando a depuração
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

// Inclui o arquivo de conexão com o banco de dados
include_once "conexao.php";

// Verifica se a conexão com o banco foi estabelecida corretamente
if (!$mysqli) {
    die("Erro ao conectar ao banco de dados: " . $mysqli->connect_error);
}

// Obtém os dados do formulário enviados via método POST
$email = $_POST['email'];
$senha = $_POST['senha'];

// Sanitiza o email para evitar injeção de código malicioso
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Prepara a consulta SQL para buscar a senha do usuário pelo email
$sql = "SELECT senha FROM estudante WHERE email = ?";
$stmt = $mysqli->prepare($sql);

if (!$stmt) {
    die("Erro ao preparar a consulta: " . $mysqli->error);
}

// Associa a variável email ao parâmetro da consulta para evitar SQL Injection
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

// Verifica se o usuário existe no banco de dados
if ($result->num_rows > 0) {
    $usuario = $result->fetch_assoc();

    // Verifica se a senha informada corresponde à armazenada no banco
    if (password_verify($senha, $usuario['senha'])) {
        // Salva o email do usuário na sessão para controle de login
        $_SESSION['email'] = $email;

        // Verifica se já existe uma sessão ativa para esse usuário
        $sql_verifica = "SELECT id FROM sessao WHERE email = ?";
        $stmt_verifica = $mysqli->prepare($sql_verifica);
        $stmt_verifica->bind_param("s", $email);
        $stmt_verifica->execute();
        $resultado_verifica = $stmt_verifica->get_result();

        if ($resultado_verifica->num_rows == 0) {
            // Gera um identificador único de sessão
            $session_token = bin2hex(random_bytes(32));

            // Insere a sessão no banco sem armazenar a senha diretamente
            $sql_sessao = "INSERT INTO sessao (email, session_token) VALUES (?, ?)";
            $stmt_sessao = $mysqli->prepare($sql_sessao);

            if (!$stmt_sessao) {
                die("Erro ao preparar consulta de sessão: " . $mysqli->error);
            }

            // Associa os parâmetros ao comando SQL
            $stmt_sessao->bind_param("ss", $email, $session_token);
            $stmt_sessao->execute();
        }

        // Exibe mensagem de sucesso e redireciona para a página desejada
        echo "Login bem-sucedido!";
        header("Location: ../html/tela_assuntos.html");
        exit();
    } else {
        // Caso a senha seja incorreta, exibe uma mensagem de erro
        echo "Senha incorreta!";
    }
} else {
    // Caso o usuário não seja encontrado, exibe uma mensagem de erro
    echo "Usuário não encontrado!";
}

// Fecha as conexões e libera os recursos
$stmt->close();
$mysqli->close();
?>