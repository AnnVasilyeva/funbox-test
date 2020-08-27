import '../css/style.css';

const cards = document.querySelectorAll('.product-item_container');
const buyLinks = document.querySelectorAll('.product-item_buy');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const productItem = card.closest('.product-item');

    if (!productItem.classList.contains('disabled')) {
      if (productItem.classList.contains('selected')) {
        productItem.classList.remove('selected');
        card.classList.remove('selected-hover');
        productItem.classList.add('default');
      } else {
        productItem.classList.remove('default');
        productItem.classList.add('selected');
      }
    }
  });

  card.addEventListener('mouseleave', () => {
    const productItem = card.closest('.product-item');
    if (productItem.classList.contains('selected')) {
      card.classList.add('selected-hover');
    } else {
      card.classList.remove('selected-hover');
    }
  });
});

buyLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const productItem = link.closest('.product-item');
    const card = productItem.querySelector('.product-item_container');
    productItem.classList.add('selected');
    card.classList.add('selected-hover');
  });
});
