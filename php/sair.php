<?php
session_start(); // Inicia uma sessão PHP para armazenar informações do usuário
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // Configura o MySQLi para exibir erros e usar exceções
include_once "conexao.php"; // Inclui o arquivo de conexão com o banco de dados

// Verifica se há erro na conexão e encerra a execução do script caso necessário
if (!$mysqli) {
    die("Erro ao conectar ao banco de dados: " . $mysqli->connect_error);
}

// Exibe o conteúdo da variável $_POST para fins de depuração (remova em produção)
var_dump($_POST);

// Obtém o email da sessão antes de destruí-la
$email = $_SESSION['email'] ?? null;

if($email){
    // Remove apenas a sessão ativa do usuário no banco de dados
    $sql = "DELETE FROM sessao WHERE email = ?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->close();
}

// Apaga todas as variáveis de sessão e destrói a sessão no PHP
$_SESSION = array();
session_destroy();

// Exibe um alerta antes de redirecionar para o login
echo "<script>
        alert('Você saiu do sistema com sucesso!');
        window.location.href = '../html/tela_login.html';
      </script>";
exit();
?>