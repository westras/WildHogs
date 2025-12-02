document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');
  const body = document.body;

  // hover / focus handlers (befintlig logik)
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

  
  const STORAGE_KEY = 'wildhogs_cart_count';
  let count = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10) || 0;


  let counterEl = document.getElementById('cart-count');
  if (!counterEl) {
    counterEl = document.createElement('div');
    counterEl.id = 'cart-count';
    Object.assign(counterEl.style, {
      position: 'fixed',
      right: '18px',
      bottom: '18px',
      background: '#111',
      color: '#fff',
      padding: '6px 10px',
      borderRadius: '8px',
      zIndex: '100000',
      fontWeight: '700',
      fontFamily: 'inherit'
    });
    document.body.appendChild(counterEl);
  }
  counterEl.textContent = String(count);

 
  cards.forEach(card => {
    card.addEventListener('click', () => {
      count += 1;
      localStorage.setItem(STORAGE_KEY, String(count));
      counterEl.textContent = String(count);
      card.classList.add('added');
      setTimeout(() => card.classList.remove('added'), 300);
    });
  });
});