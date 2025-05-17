<?php   
session_start();
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
include_once "conexao.php";

if (!$mysqli) {
    die("Erro ao conectar ao banco de dados: " . $mysqli->connect_error);
}

// Obtém os dados do formulário enviados via método POST
$email = $_POST['email'];
$senha = $_POST['senha'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Inicializa a variável de tentativas de login corretamente
if (!isset($_SESSION['tentativas_login'])) {
    $_SESSION['tentativas_login'] = 0;
}

// Verifica se o usuário atingiu 3 tentativas antes de permitir nova tentativa
if ($_SESSION['tentativas_login'] >= 3) {
    $_SESSION['tentativas_login'] = 0; // Reseta contagem para evitar loop
    echo "<script>
            alert('Você atingiu 3 tentativas! Redirecionando para redefinição de senha.');
            window.location.href = '../html/tela_alterar_senha.html';
          </script>";
    exit();
}

// Prepara a consulta para buscar a senha do usuário
$sql = "SELECT senha FROM estudante WHERE email = ?";
$stmt = $mysqli->prepare($sql);
if (!$stmt) {
    die("Erro ao preparar a consulta: " . $mysqli->error);
}

$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $usuario = $result->fetch_assoc();
    
    // Verifica se a senha informada corresponde à armazenada no banco
    if (password_verify($senha, $usuario['senha'])) {
        $_SESSION['tentativas_login'] = 0; // Reseta tentativas ao acertar
        $_SESSION['email'] = $email;

        echo "<script>
                alert('Login bem-sucedido!');
                window.location.href = '../html/tela_assuntos.html';
              </script>";
        exit();
    } else {
        $_SESSION['tentativas_login']++; // Incrementa contador corretamente

        echo "<script>
                alert('Senha incorreta! Você tem mais " . (3 - $_SESSION['tentativas_login']) . " tentativas restantes.');
                history.back(); // Mantém na tela de login sem recarregar
              </script>";
    }
} else {
    echo "<script>alert('Usuário não encontrado!'); history.back();</script>";
}

$stmt->close();
$mysqli->close();
?>