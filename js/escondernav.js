// Armazena a posição inicial da rolagem da página
var prevScrollpos = window.pageYOffset;

// Adiciona um evento que detecta quando o usuário rola a página
window.addEventListener('scroll', function() {
  // Obtém o elemento da barra de navegação pelo ID
  var navbar = document.getElementById('navbar');

  // Verifica se a página está no topo (sem rolagem)
  if (window.pageYOffset === 0) {
    navbar.style.top = '0'; // Mantém a barra de navegação visível
  } else {
    navbar.style.top = '-200px'; // Esconde a barra de navegação ao rolar para baixo
  }
});