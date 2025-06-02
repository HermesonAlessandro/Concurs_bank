<?php   
session_start(); // Inicia uma sessão PHP para armazenar informações do usuário
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // Configura o MySQLi para exibir erros e usar exceções
include_once "conexao.php"; // Inclui o arquivo de conexão com o banco de dados

// Verifica se há erro na conexão e encerra a execução do script caso necessário
if (!$mysqli) {
    die("Erro ao conectar ao banco de dados: " . $mysqli->connect_error);
}

$email = $_POST['email']; // Obtém o e-mail enviado pelo formulário
$senha = $_POST['senha']; // Obtém a senha enviada pelo formulário

// Sanitiza o e-mail para evitar injeções maliciosas
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Validação da senha no servidor: verifica comprimento e presença de caracteres especiais
if(strlen($senha) < 8 || !preg_match('/[A-Z]/', $senha) || !preg_match('/[a-z]/', $senha) || 
   !preg_match('/[0-9]/', $senha) || !preg_match('/[!@#$%^&*(),.?":{}|<>]/', $senha)){
    echo "<script>alert('Senha não atende aos requisitos mínimos!');</script>";
    exit();
}

// Inicializa a variável de tentativas de login, caso ainda não tenha sido definida
if (!isset($_SESSION['tentativas_login'])) {
    $_SESSION['tentativas_login'] = 0;
}

// Verifica se o usuário atingiu o limite de 3 tentativas antes de permitir nova tentativa
if ($_SESSION['tentativas_login'] >= 3) {
    $_SESSION['tentativas_login'] = 0; // Reseta a contagem após atingir 3 tentativas
    echo "<script>
            alert('Você atingiu 3 tentativas! Redirecionando para redefinição de senha!');
            window.location.href = '../html/tela_alterar_senha.html'; // Redireciona para página de recuperação de senha
          </script>";
    exit();
}

// Prepara a consulta para buscar a senha do usuário no banco de dados
$sql = "SELECT senha FROM estudante WHERE email = ?";
$stmt = $mysqli->prepare($sql);
if (!$stmt) {
    die("Erro ao preparar a consulta: " . $mysqli->error);
}

$stmt->bind_param("s", $email); // Associa o parâmetro do e-mail à consulta SQL
$stmt->execute();
$result = $stmt->get_result(); // Executa a consulta e obtém o resultado

// Verifica se o usuário foi encontrado no banco de dados
if ($result->num_rows > 0) {
    $usuario = $result->fetch_assoc(); // Obtém os dados do usuário
    
    // Verifica se a senha informada corresponde à armazenada no banco
    if (password_verify($senha, $usuario['senha'])) {
        $_SESSION['tentativas_login'] = 0; // Reseta tentativas ao acertar a senha
        $_SESSION['email'] = $email; // Armazena o e-mail do usuário na sessão

        // Consulta para verificar se já existe uma sessão registrada para o usuário
        $sql_verifica_sessao = "SELECT id FROM sessao WHERE email = ?";
        $stmt_verifica_sessao = $mysqli->prepare($sql_verifica_sessao);
        $stmt_verifica_sessao->bind_param("s", $email);
        $stmt_verifica_sessao->execute();
        $resultado_sessao = $stmt_verifica_sessao->get_result();

        if($resultado_sessao->num_rows == 0){ // Se não houver sessão existente
            $senha_hash = password_hash($senha, PASSWORD_DEFAULT); // Gera um hash seguro da senha
            $sql_log = "INSERT INTO sessao (email, senha) VALUES (?, ?)"; // Insere nova sessão no banco
            $stmt_log = $mysqli->prepare($sql_log);
            $stmt_log->bind_param("ss", $email, $senha_hash);
            $stmt_log->execute();
        } else { // Se já houver uma sessão, apenas atualiza a senha
            $senha_hash = password_hash($senha, PASSWORD_DEFAULT);
            $sql_update = "UPDATE sessao SET senha = ? WHERE email = ?";
            $stmt_update = $mysqli->prepare($sql_update);
            $stmt_update->bind_param("ss", $senha_hash, $email);
            $stmt_update->execute();
        }

        // Exibe alerta e redireciona para a tela de assuntos
        echo "<script>
                alert('Login bem-sucedido!');
                window.location.href = '../html/tela_assuntos.html';
              </script>";
        exit();
    } else {
        $_SESSION['tentativas_login']++; // Incrementa contador de tentativas

        // Exibe alerta informando erro na senha e quantidade de tentativas restantes
        echo "<script>
                alert('Senha incorreta! Você tem mais " . (3 - $_SESSION['tentativas_login']) . " tentativas restantes.');
                history.back();
              </script>";
    }
} else {
    echo "<script>alert('Usuário não encontrado!'); history.back();</script>"; // Exibe alerta caso o e-mail não seja encontrado
}

// Fecha as consultas preparadas e a conexão com o banco de dados
$stmt->close();
$mysqli->close();
?>