$(document).ready(function () {
  $('a.itens-menu').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      var target = document.querySelector(hash);

      var windowHeight = window.innerHeight;
      var navHeight = 60; // Altura da barra de navegação (ajuste conforme necessário)

      // Calcular o deslocamento para rolar até o meio da tela
      var offset = target.offsetTop - (windowHeight - navHeight - target.offsetHeight) / 2;

      animateScroll(offset, 600); // 800ms de duração
    }
  });

  function animateScroll(targetOffset, duration) {
    var currentScroll = $(window).scrollTop();
    var speed = 150;
    var stepOffset = (targetOffset - currentScroll) / (duration / speed);

    function step() {
      currentScroll += stepOffset;
      $(window).scrollTop(currentScroll);

      if (
        (stepOffset > 0 && currentScroll < targetOffset) ||
        (stepOffset < 0 && currentScroll > targetOffset)
      ) {
        requestAnimationFrame(step);
      } else {
        $(window).scrollTop(targetOffset);
        window.location.hash = hash;
      }
    }

    step();
  }
});