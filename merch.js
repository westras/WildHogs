document.addEventListener('DOMContentLoaded', function () {
  const cards = Array.from(document.querySelectorAll('.card'));
  const counterEl = document.getElementById('cart-count');
  const STORAGE_KEY = 'wildhogs_cart_total';

  
  let total = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10) || 0;

  const parsePrice = s => {
    if (!s) return 0;
    const digits = String(s).replace(/[^\d]/g, ''); 
    return parseInt(digits || '0', 10);
  };
  const formatPrice = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' kr';

  const updateUI = () => {
    if (counterEl) counterEl.textContent = formatPrice(total);
  };

  updateUI();

  cards.forEach(card => {
    card.addEventListener('click', () => {
     
      const priceStr = card.dataset.price || card.querySelector('.price')?.textContent || '0';
      const value = parsePrice(priceStr);
      if (value <= 0) return; 

      total += value;
      localStorage.setItem(STORAGE_KEY, String(total));
      updateUI();

      card.classList.add('added');
      setTimeout(() => card.classList.remove('added'), 300);
    });
  });
});