<?php
session_start();

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

include_once "conexao.php";

if(!$mysqli){
    die("Error ao conectar ao banco de dados: ".$mysqli->connection_error);
}

$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = "SELECT senha FROM estudante WHERE email = ?";
$stmt = $mysqli->prepare($sql);

if(!$stmt){
    die("Error ao preparar a consulta: ".$mysqli->error);
}

$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if($result->num_rows > 0){
    $usuario = $result->fetch_assoc();
    if(password_verify($senha, $usuario['senha'])){
        $_SESSION['email'] = $email;
        $sql_verifica = "SELECT id FROM sessao WHERE email = ?";
        $stmt_verifica = $mysqli->prepare($sql_verifica);
        $stmt_verifica->bind_param("s", $email);
        $stmt_verifica->execute();
        $resultado_verifica = $stmt_verifica->get_result();
        if($resultado_verifica->num_rows == 0){
            $sql_sessao = "INSERT INTO sessao (email, senha) VALUES (?, ?)";
            $stmt_sessao = $mysqli->prepare($sql_sessao);
            if(!$stmt_sessao){
                die("Erro ao preparar consulta de sessão: " . $mysqli->error);
            }
            $stmt_sessao->bind_param("ss", $email, $senha);
            $stmt_sessao->execute();
        }
        echo "Login bem-sucedido!";
        header("location: ../html/tela_assuntos.html");
        exit();
    }else{
        echo "Senha incorreta!";
    }
}else{
    echo "Usuario não encontrado!";
}

$stmt->close();
$mysqli->close();
?>