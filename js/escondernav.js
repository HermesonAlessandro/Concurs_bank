var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.pageYOffset === 0) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-200px';
  }
});
