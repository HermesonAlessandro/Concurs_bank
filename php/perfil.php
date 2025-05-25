<?php
session_start(); // Inicia uma sessão PHP para armazenar informações do usuário
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // Configura o MySQLi para exibir erros e usar exceções
include_once "conexao.php"; // Inclui o arquivo de conexão com o banco de dados

// Verifica se há erro na conexão e encerra a execução do script caso necessário
if (!$mysqli) {
    die("Erro ao conectar ao banco de dados: " . $mysqli->connect_error);
}

// Obtém o e-mail do usuário da sessão
$email = $_SESSION['email'];

// Prepara uma consulta SQL para buscar as informações do usuário no banco de dados
$sql = "SELECT cpf, nome_completo, idade, sexo, email FROM estudante WHERE email = ?";
$stmt = $mysqli->prepare($sql);
$stmt->bind_param("s", $email); // Associa o e-mail ao parâmetro da consulta para evitar SQL Injection
$stmt->execute();
$resultado = $stmt->get_result(); // Obtém os resultados da consulta

// Verifica se o usuário foi encontrado no banco de dados
if($resultado->num_rows > 0){
    $usuario = $resultado->fetch_assoc(); // Obtém os dados do usuário e armazena em um array associativo
}else{
    die("Erro: Usuário não encontrado."); // Encerra a execução se o e-mail não estiver cadastrado
}

// Normaliza o valor do sexo removendo espaços e convertendo para a primeira letra para maiúscula
$sexo = ucfirst(trim(strtolower($usuario['sexo'])));

// Define a imagem do perfil com base no sexo do usuário
$imagem_perfil = ($sexo == "Masculino") ? "../img/silhueta_masculina.jpg" : "../img/silhueta_feminina.jpg";
?>

<!-- Estrutura do HTML -->
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <!-- Define a codificação de caracteres como UTF-8 para suportar caracteres especiais -->
    <meta charset="UTF-8">
    <!-- Torna a página responsiva para diferentes tamanhos de tela -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link para o arquivo CSS externo que contém os estilos da página -->
    <link rel="stylesheet" href="../css/tela_perfil.css">
    <!-- Define o título da página exibido na aba do navegador -->
    <title>Perfil</title>
</head>
<body>

    <!-- Link para retornar à tela inicial -->
    <a href="tela_inicial.html">
        <img src="../img/Logo(CB).png" alt="Logo do site" style="height: 120px;">
    </a>

    <!-- Link para voltar à página anterior -->
    <a href="../html/tela_assuntos.html">Voltar</a>

    <hr> <!-- Linha horizontal para separar o conteúdo -->

    <div class="perfil-container">
        <h2>Perfil do Usuário</h2>

        <!-- Exibe a imagem do perfil do usuário com base no sexo -->
        <img src="<?php echo htmlspecialchars($imagem_perfil); ?>" alt="Imagem do perfil" style="height: 150px;">

        <!-- Exibe as informações do usuário recuperadas do banco de dados -->
        <div class="info-usuario">
            <p><strong>CPF:</strong> <?php echo htmlspecialchars($usuario['cpf']); ?></p>
            <p><strong>Nome:</strong> <?php echo htmlspecialchars($usuario['nome_completo']); ?></p>
            <p><strong>Idade:</strong> <?php echo htmlspecialchars($usuario['idade']); ?></p>
            <p><strong>Sexo:</strong> <?php echo htmlspecialchars($usuario['sexo']); ?></p>
            <p><strong>Email:</strong> <?php echo htmlspecialchars($usuario['email']); ?></p>
        </div>
    </div>

</body>
</html>