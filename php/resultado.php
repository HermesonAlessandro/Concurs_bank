<?php
// Array que armazena as respostas corretas do quiz.
// Cada chave representa o identificador da questão, e o valor representa a alternativa correta.
$respostas_corretas = [
    "questao01" => "D",
    "questao02" => "C",
    "questao03" => "C",
    "questao04" => "A",
    "questao05" => "A",
    "questao06" => "A",
    "questao07" => "B",
    "questao08" => "A",
    "questao09" => "A",
    "questao10" => "C"
];

// Variável para contar o número de acertos do usuário.
$acertos = 0;

// Obtém o número total de questões do quiz.
$total_questoes = count($respostas_corretas);

// Percorre as respostas enviadas pelo usuário através do método POST.
foreach ($_POST as $questao_id => $resposta_usuario) {
    // Verifica se a questão existe no array de respostas corretas e compara a resposta enviada.
    if (isset($respostas_corretas[$questao_id]) && $respostas_corretas[$questao_id] === $resposta_usuario) {
        // Se a resposta estiver correta, incrementa o contador de acertos.
        $acertos++;
    }
}

// Calcula a porcentagem de acertos do usuário.
$porcentagem = ($acertos / $total_questoes) * 100;

// Exibe o resultado do quiz na tela.
echo "<h2>Resultado do Quiz</h2>";
echo "<p>Você acertou <strong>$acertos</strong> de <strong>$total_questoes</strong> questões.</p>";
echo "<p>Porcentagem de acertos: <strong>$porcentagem%</strong></p>";
?>