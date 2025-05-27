<?php
session_start();
include_once "conexao.php";

// ✅ Verifica se o usuário está logado
if (!isset($_SESSION['email'])) {
    echo "<script>alert('Você precisa estar logado para acessar os resultados.'); window.location.href = 'tela_login.html';</script>";
    exit();
}

$email = $_SESSION['email'];

// ✅ Recupera os dados do usuário na tabela estudante
$sql_usuario = "SELECT cpf, nome_completo FROM estudante WHERE email = ?";
$stmt_usuario = $mysqli->prepare($sql_usuario);
$stmt_usuario->bind_param("s", $email);
$stmt_usuario->execute();
$resultado_usuario = $stmt_usuario->get_result();

if ($resultado_usuario->num_rows > 0) {
    $dados_usuario = $resultado_usuario->fetch_assoc();
    $cpf = $dados_usuario['cpf'];
    $nome = $dados_usuario['nome_completo'];
} else {
    echo "<script>alert('Usuário não encontrado!'); window.location.href = 'tela_login.html';</script>";
    exit();
}

// ✅ Gabaritos de todos os temas
$gabaritos = [
    "Banco de dados" => ["questao01" => "D", "questao02" => "C", "questao03" => "C", "questao04" => "A", "questao05" => "A", "questao06" => "A", "questao07" => "B", "questao08" => "A", "questao09" => "A", "questao10" => "C"],
    "Redes de computadores" => ["questao01" => "C", "questao02" => "C", "questao03" => "D", "questao04" => "C", "questao05" => "A", "questao06" => "B", "questao07" => "B", "questao08" => "C", "questao09" => "E", "questao10" => "C"],
];

// ✅ Processa as respostas enviadas
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST)) {
    $tema = trim($_POST['tema'] ?? '');
    $questoes = $_POST;
    unset($questoes['tema']);

    // ✅ Verifica se o tema é válido
    if (!isset($gabaritos[$tema])) {
        echo "<script>alert('Tema inválido!'); window.location.href = 'tela_assuntos.html';</script>";
        exit();
    }

    $total_questoes = count($gabaritos[$tema]);
    $acertos = 0;

    // ✅ Comparação das respostas do usuário com o gabarito correto
    foreach ($gabaritos[$tema] as $questao_id => $resposta_correta) {
        if (isset($questoes[$questao_id]) && $questoes[$questao_id] === $resposta_correta) {
            $acertos++;
        }
    }

    // ✅ Correção do cálculo do percentual de acerto
    $percentual_acerto = ($total_questoes > 0) ? round(($acertos / $total_questoes) * 100, 2) : 0;

    // ✅ Verifica se já existe um registro para o mesmo tema
    $sql_verifica = "SELECT id FROM resultado WHERE cpf = ? AND assunto = ?";
    $stmt_verifica = $mysqli->prepare($sql_verifica);
    $stmt_verifica->bind_param("ss", $cpf, $tema);
    $stmt_verifica->execute();
    $stmt_verifica->store_result();

    if ($stmt_verifica->num_rows > 0) {
        // ✅ Atualiza o registro existente
        $sql_update = "UPDATE resultado SET porcentagem = ? WHERE cpf = ? AND assunto = ?";
        $stmt_update = $mysqli->prepare($sql_update);
        $stmt_update->bind_param("dss", $percentual_acerto, $cpf, $tema);
        $stmt_update->execute();
        $stmt_update->close();
    } else {
        // ✅ Insere um novo registro para um tema diferente
        $sql_insert = "INSERT INTO resultado (cpf, nome_completo, email, assunto, porcentagem) VALUES (?, ?, ?, ?, ?)";
        $stmt_insert = $mysqli->prepare($sql_insert);
        $stmt_insert->bind_param("ssssd", $cpf, $nome, $email, $tema, $percentual_acerto);
        $stmt_insert->execute();
        $stmt_insert->close();
    }

    $stmt_verifica->close();
}

// ✅ Recupera TODOS os resultados do usuário
$sql_resultado = "SELECT assunto, porcentagem FROM resultado WHERE cpf = ? ORDER BY assunto";
$stmt_resultado = $mysqli->prepare($sql_resultado);
$stmt_resultado->bind_param("s", $cpf);
$stmt_resultado->execute();
$resultado = $stmt_resultado->get_result();

$percentuais = [];
while ($linha = $resultado->fetch_assoc()) {
    $percentuais[$linha['assunto']] = $linha['porcentagem'] . "%";
}

$stmt_resultado->close();
$mysqli->close();
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados das questões</title>
</head>
<body>
    <h2>Resultados do Quiz</h2>
    <p><strong>Nome:</strong> <?php echo htmlspecialchars($nome); ?></p>
    <p><strong>Email:</strong> <?php echo htmlspecialchars($email); ?></p>
    <p><strong>CPF:</strong> <?php echo htmlspecialchars($cpf); ?></p>

    <table border="1">
        <tr>
            <th>Assunto</th>
            <th>Percentual de Acerto</th>
        </tr>
        <?php foreach ($percentuais as $tema => $percentual): ?>
        <tr>
            <td><?php echo htmlspecialchars($tema); ?></td>
            <td><?php echo htmlspecialchars($percentual); ?></td>
        </tr>
        <?php endforeach; ?>
    </table>

    <a href="../html/tela_assuntos.html">Voltar para os Questionários</a>
</body>
</html>