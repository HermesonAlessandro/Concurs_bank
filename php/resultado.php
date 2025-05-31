<?php
session_start(); // Inicia uma sessão PHP para armazenar informações do usuário
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // Configura o MySQLi para exibir erros e usar exceções
include_once "conexao.php"; // Inclui o arquivo de conexão com o banco de dados

// Verifica se há erro na conexão e encerra a execução do script caso necessário
if (!$mysqli) {
    die("Erro ao conectar ao banco de dados: " . $mysqli->connect_error);
}

// Verifica se o usuário está logado antes de acessar os resultados
if(!isset($_SESSION['email'])){
    echo "<script>alert('Você precisa estar logado para acessar os resultados.'); window.location.href = 'tela_login.html';</script>";
    exit();
}

// Obtém o email do usuário que está logado
$email = $_SESSION['email'];

// Consulta os dados do usuário na tabela 'estudante'
$sql_usuario = "SELECT cpf, nome_completo FROM estudante WHERE email = ?";
$stmt_usuario = $mysqli->prepare($sql_usuario);
$stmt_usuario->bind_param("s", $email);
$stmt_usuario->execute();
$resultado_usuario = $stmt_usuario->get_result();

// Se o usuário existe, recupera suas informações
if($resultado_usuario->num_rows > 0){
    $dados_usuario = $resultado_usuario->fetch_assoc();
    $cpf = $dados_usuario['cpf'];
    $nome = $dados_usuario['nome_completo'];
}else{
    // Se o usuário não for encontrado, redireciona para a tela de login
    echo "<script>alert('Usuário não encontrado!'); window.location.href = 'tela_login.html';</script>";
    exit();
}

// Gabaritos das questões por tema
$gabaritos = [
    "Banco de dados" => ["questao01" => "D", "questao02" => "C", "questao03" => "C", "questao04" => "A", "questao05" => "A", "questao06" => "A", "questao07" => "B", "questao08" => "A", "questao09" => "A", "questao10" => "C"],
    "Redes de computadores" => ["questao01" => "C", "questao02" => "C", "questao03" => "D", "questao04" => "C", "questao05" => "A", "questao06" => "B", "questao07" => "B", "questao08" => "C", "questao09" => "E", "questao10" => "C"],
    "Segurança da informação" => ["questao01" => "C", "questao02" => "C", "questao03" => "B", "questao04" => "E", "questao05" => "A", "questao06" => "D", "questao07" => "D", "questao08" => "B", "questao09" => "A", "questao10" => "C"],
    "Desenvolvimento de software" => ["questao01" => "C", "questao02" => "C", "questao03" => "B", "questao04" => "B", "questao05" => "C", "questao06" => "B", "questao07" => "B", "questao08" => "A", "questao09" => "B", "questao10" => "C"],
    "Sistemas operacionais" => ["questao01" => "A", "questao02" => "C", "questao03" => "B", "questao04" => "A", "questao05" => "C", "questao06" => "B", "questao07" => "C", "questao08" => "D", "questao09" => "C", "questao10" => "C"],
    "Governança de TI" => ["questao01" => "A", "questao02" => "E", "questao03" => "B", "questao04" => "B", "questao05" => "C", "questao06" => "D", "questao07" => "A", "questao08" => "B", "questao09" => "D", "questao10" => "B"],
    "Ia e big data" => ["questao01" => "A", "questao02" => "C", "questao03" => "D", "questao04" => "E", "questao05" => "C", "questao06" => "A", "questao07" => "B", "questao08" => "E", "questao09" => "A", "questao10" => "D"],
    "Computação em  nuvem" => ["questao01" => "D", "questao02" => "A", "questao03" => "A", "questao04" => "A", "questao05" => "A", "questao06" => "B", "questao07" => "C", "questao08" => "E", "questao09" => "C", "questao10" => "B"],
    "Pacote office" => ["questao01" => "C", "questao02" => "B", "questao03" => "C", "questao04" => "C", "questao05" => "C", "questao06" => "A", "questao07" => "E", "questao08" => "A", "questao09" => "D", "questao10" => "A"],
    "Internet das coisas e blockchain" => ["questao01" => "E", "questao02" => "E", "questao03" => "C", "questao04" => "B", "questao05" => "B", "questao06" => "C", "questao07" => "B", "questao08" => "C", "questao09" => "D", "questao10" => "B"],
];

// Processa as respostas enviadas pelo usuário via formulário POST
if($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_POST)){
    $tema = trim($_POST['tema'] ?? '');
    $questoes = $_POST;
    unset($questoes['tema']); // Remove o campo 'tema' para focar apenas nas respostas das questões

    // Verifica se o tema informado é válido
    if(!isset($gabaritos[$tema])){
        echo "<script>alert('Tema inválido!'); window.location.href = 'tela_assuntos.html';</script>";
        exit();
    }

    $total_questoes = count($gabaritos[$tema]);
    $acertos = 0;

    // Compara as respostas do usuário com o gabarito correto
    foreach($gabaritos[$tema] as  $questao_id => $resposta_correta){
        if(isset($questoes[$questao_id]) && $questoes[$questao_id] === $resposta_correta){
            $acertos++;
        }
    }

    // Calcula o percentual de acerto
    $percentual_acerto = ($total_questoes > 0) ? round(($acertos / $total_questoes) * 100, 2) : 0;

    // Verifica se já existe um registro do mesmo tema no banco de dados
    $sql_verifica = "SELECT id FROM resultado WHERE cpf = ? AND assunto = ?";
    $stmt_verifica = $mysqli->prepare($sql_verifica);
    $stmt_verifica->bind_param("ss", $cpf, $tema);
    $stmt_verifica->execute();
    $stmt_verifica->store_result();

    if($stmt_verifica->num_rows > 0){
         // Atualiza o percentual de acerto para o mesmo tema já existente
         $sql_update = "UPDATE resultado SET porcentagem = ? WHERE cpf = ? AND assunto = ?";
         $stmt_update = $mysqli->prepare($sql_update);
         $stmt_update->bind_param("dss", $percentual_acerto, $cpf, $tema);
         $stmt_update->execute();
         $stmt_update->close();
    }else{
        // Insere um novo registro caso seja um tema diferente
        $sql_insert = "INSERT INTO resultado (cpf, nome_completo, email, assunto, porcentagem) VALUES (?, ?, ?, ?, ?)";
        $stmt_insert = $mysqli->prepare($sql_insert);
        $stmt_insert->bind_param("ssssd", $cpf, $nome, $email, $tema, $percentual_acerto);
        $stmt_insert->execute();
        $stmt_insert->close();
    }

    $stmt_verifica->close();
}

// Recupera todos os resultados do usuário
$sql_resultado = "SELECT assunto, porcentagem FROM resultado WHERE cpf = ? ORDER BY assunto";
$stmt_resultado = $mysqli->prepare($sql_resultado);
$stmt_resultado->bind_param("s", $cpf);
$stmt_resultado->execute();
$resultado = $stmt_resultado->get_result();

$percentuais = [];
while($linha = $resultado->fetch_assoc()){
    $percentuais[$linha['assunto']] = $linha['porcentagem'] . "%";
}

// Fecha a conexão com o banco de dados
$stmt_resultado->close();
$mysqli->close();
?>

<!DOCTYPE html>
<html lang="pt-br"> <!-- Define que o documento HTML segue o padrão HTML5 e está em português do Brasil -->
<head>
    <meta charset="UTF-8"> <!-- Define a codificação de caracteres como UTF-8, garantindo compatibilidade com caracteres acentuados -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Ajusta a visualização para dispositivos móveis -->
    <title>Resultado</title> <!-- Define o título da página que será exibido na aba do navegador -->
</head>
<body>

    <h2>Resultados das questões</h2> <!-- Exibe o título principal da página -->

    <!-- Exibe as informações pessoais do usuário, protegendo contra ataques XSS com htmlspecialchars -->
    <p><strong>Nome:</strong> <?php echo htmlspecialchars($nome); ?></p>
    <p><strong>Email:</strong> <?php echo htmlspecialchars($email); ?></p>
    <p><strong>CPF:</strong> <?php echo htmlspecialchars($cpf); ?></p>

    <!-- Criação de uma tabela para exibir os resultados do quiz -->
    <table border="1"> <!-- Cria uma tabela com bordas visíveis -->
        <tr>
            <th>Assunto</th> <!-- Cabeçalho da coluna para mostrar o tema das questões -->
            <th>Percentual de Acerto</th> <!-- Cabeçalho da coluna para exibir a porcentagem de acertos do usuário -->
        </tr>
        
        <!-- Loop para exibir os resultados do quiz -->
        <?php foreach ($percentuais as $tema => $percentual): ?>
        <tr>
            <td><?php echo htmlspecialchars($tema); ?></td> <!-- Exibe o nome do tema tratado no quiz -->
            <td><?php echo htmlspecialchars($percentual); ?></td> <!-- Exibe a porcentagem de acertos do usuário -->
        </tr>
        <?php endforeach; ?>
    </table>

    <!-- Link para retornar à página de questionários -->
    <a href="../html/tela_assuntos.html">Voltar para os Questionários</a>
    
</body>
</html>