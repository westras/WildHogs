document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  const body = document.body;

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      body.classList.add('overlay-active');
      card.classList.add('active');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('active');
      body.classList.remove('overlay-active');
    });

    
    card.addEventListener('focus', () => {
      body.classList.add('overlay-active');
      card.classList.add('active');
    }, true);
    card.addEventListener('blur', () => {
      card.classList.remove('active');
      body.classList.remove('overlay-active');
    }, true);
  });
});