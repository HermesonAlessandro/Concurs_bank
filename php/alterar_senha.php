<?php
session_start(); // Inicia uma sessão para armazenar informações do usuário durante a navegação
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // Configura o MySQLi para exibir erros e usar exceções
include_once "conexao.php"; // Inclui o arquivo de conexão com o banco de dados

// Verifica se a conexão com o banco de dados foi bem-sucedida
if(!$mysqli){
    die("Erro ao conectar ao banco de dados: ".$mysqli->connect_error); // Encerra o script caso haja erro na conexão
}

// Função para validar se a senha atende aos critérios de segurança
function validarSenha($senha){
    return strlen($senha) >= 8 && // Verifica se a senha tem pelo menos 8 caracteres
           preg_match('/[A-Z]/', $senha) && // Verifica se contém pelo menos uma letra maiúscula
           preg_match('/[a-z]/', $senha) && // Verifica se contém pelo menos uma letra minúscula
           preg_match('/[0-9]/', $senha) && // Verifica se contém pelo menos um número
           preg_match('/[!@#$%^&*(),.?":{}|<>]/', $senha); // Verifica se contém pelo menos um caractere especial
}

// Exibe os dados enviados pelo formulário para fins de depuração (remova em produção)
var_dump($_POST);

// Obtém os dados enviados pelo formulário via método POST
$email = $_POST['email']; // Obtém o e-mail enviado pelo formulário
$novasenha = $_POST['novasenha']; // Obtém a nova senha enviada pelo formulário
$confirmarsenha = $_POST['confirmarsenha']; // Obtém a confirmação da nova senha enviada pelo formulário

// Sanitiza o e-mail para evitar injeções maliciosas
$email = filter_var($email, FILTER_SANITIZE_EMAIL);

// Verifica se as senhas informadas coincidem
if($novasenha !== $confirmarsenha){
    echo "<script>alert('As senhas não coincidem!'); history.back();</script>"; // Exibe um alerta caso as senhas sejam diferentes
    exit(); // Encerra a execução do script
}

// Criptografa a senha temporariamente para verificação
$senha_hask_check = password_hash($novasenha, PASSWORD_DEFAULT);

// Recupera todas as senhas armazenadas para comparar
$sql_check_senha = "SELECT senha FROM estudante";
$result_check = $mysqli->query($sql_check_senha);

while($row = $result_check->fetch_assoc()){
    if(password_verify($novasenha, $row['senha'])){
        echo "<script>alert('Esta senha já está em uso por outro usuário! Escolha uma diferente.'); history.back();</script>";
        exit();
    }
}

// Criptografa a nova senha para armazenamento seguro no banco de dados
$senha_hash = password_hash($novasenha, PASSWORD_DEFAULT);

try {
    // Inicia uma transação para garantir que todas as alterações sejam aplicadas corretamente
    $mysqli->begin_transaction();

    // Atualiza a senha na tabela `estudante`
    $sql_update_estudante = "UPDATE estudante SET senha = ? WHERE email = ?";
    $stmt_estudante = $mysqli->prepare($sql_update_estudante);
    $stmt_estudante->bind_param("ss", $senha_hash, $email);
    $stmt_estudante->execute();

    // Atualiza a senha na tabela `sessao`
    $sql_update_sessao = "UPDATE sessao SET senha = ? WHERE email = ?";
    $stmt_sessao = $mysqli->prepare($sql_update_sessao);
    $stmt_sessao->bind_param("ss", $senha_hash, $email);
    $stmt_sessao->execute();

    // Confirma a transação caso ambas as atualizações tenham sido bem-sucedidas
    $mysqli->commit();

    // Exibe uma mensagem de sucesso e redireciona o usuário para a tela de login
    echo "<script>
            alert('Senha alterada com sucesso!');
            window.location.href = '../html/tela_login.html';
          </script>";
    exit(); // Encerra o script após a alteração da senha

} catch (Exception $e) {
    // Caso ocorra um erro, desfaz todas as alterações realizadas durante a transação
    $mysqli->rollback();
    echo "<script>alert('Erro ao alterar senha! Tente novamente.'); history.back();</script>";
}

// Fecha as conexões com o banco de dados para liberar recursos
$stmt_estudante->close();
$stmt_sessao->close();
$mysqli->close();
?>