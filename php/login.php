<?php
session_start();
include_once "conexao.php";

$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = "SELECT id, senha FROM estudante WHERE email = ?";
$stmt = $mysqli->prepare($sql);

if (!$stmt) {
    die("Erro ao preparar consulta: " . $mysqli->error);
}

$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $usuario = $result->fetch_assoc();
    
    if (password_verify($senha, $usuario['senha'])) {
        $_SESSION['usuario_id'] = $usuario['id']; // Salva ID do estudante na sessão
        
        // Insere o ID do estudante na tabela `usuarios` sem precisar definir o campo `id`
        $sql_insert = "INSERT INTO usuarios (id_estudante) SELECT ? WHERE NOT EXISTS (SELECT 1 FROM usuarios WHERE id_estudante = ?)";
        $stmt_insert = $mysqli->prepare($sql_insert);

        if ($stmt_insert) {
            $stmt_insert->bind_param("ii", $usuario['id'], $usuario['id']);
            $stmt_insert->execute();
            $stmt_insert->close();
        }

        header("Location: ../html/dashboard.html"); // Redireciona após login bem-sucedido
    } else {
        echo "Senha incorreta!";
    }
} else {
    echo "Usuário não encontrado!";
}

$stmt->close();
$mysqli->close();
?>