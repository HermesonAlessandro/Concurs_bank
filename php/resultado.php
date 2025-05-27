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

// ✅ Verifica se o usuário foi encontrado
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
    "Banco de Dados" => ["questao01" => "D", "questao02" => "C", "questao03" => "C", "questao04" => "A", "questao05" => "A", "questao06" => "A", "questao07" => "B", "questao08" => "A", "questao09" => "A", "questao10" => "C"],
    "Redes de Computadores" => ["questao01" => "C", "questao02" => "C", "questao03" => "D", "questao04" => "C", "questao05" => "A", "questao06" => "B", "questao07" => "B", "questao08" => "C", "questao09" => "E", "questao10" => "C"],
    // Adicione os demais temas aqui...
];

// ✅ Processa as respostas enviadas pelo formulário
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST)) {
    $tema = $_POST['tema'] ?? 'Banco de Dados';
    $questoes = $_POST;
    unset($questoes['tema']); 

    $total_questoes = count($questoes);
    $acertos = 0;

    // ✅ Seleciona o gabarito correto baseado no tema
    $respostas_corretas = $gabaritos[$tema] ?? [];

    // ✅ Calcula os acertos
    foreach ($questoes as $questao_id => $resposta_usuario) {
        if (isset($respostas_corretas[$questao_id]) && $respostas_corretas[$questao_id] === $resposta_usuario) {
            $acertos++;
        }
    }

    // ✅ Calcula o percentual de acertos
    $percentual_acerto = ($total_questoes > 0) ? ($acertos / $total_questoes) * 100 : 0;

    // ✅ Insere um novo registro sem sobrescrever anteriores
    $sql_insert = "INSERT INTO resultado (cpf, nome_completo, email, assunto, porcentagem) VALUES (?, ?, ?, ?, ?)";
    $stmt_insert = $mysqli->prepare($sql_insert);
    $stmt_insert->bind_param("ssssd", $cpf, $nome, $email, $tema, $percentual_acerto);
    $stmt_insert->execute();
    $stmt_insert->close();
}

// ✅ Recupera os resultados armazenados no banco
$sql_resultado = "SELECT assunto, porcentagem FROM resultado WHERE cpf = ?";
$stmt_resultado = $mysqli->prepare($sql_resultado);
$stmt_resultado->bind_param("s", $cpf);
$stmt_resultado->execute();
$resultado = $stmt_resultado->get_result();

// ✅ Organiza os resultados de todos os temas
$temas = array_keys($gabaritos);
$percentuais = array_fill_keys($temas, "Não resolvido");

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
    <title>Resultados do Quiz</title>
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
        <?php foreach ($temas as $tema): ?>
        <tr>
            <td><?php echo htmlspecialchars($tema); ?></td>
            <td><?php echo htmlspecialchars($percentuais[$tema]); ?></td>
        </tr>
        <?php endforeach; ?>
    </table>

    <a href="../html/tela_assuntos.html">Voltar para os Questionários</a>
</body>
</html>