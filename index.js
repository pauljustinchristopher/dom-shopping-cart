function updateTotal() {
  let total = 0;
  document.querySelectorAll('.card-body').forEach(cardBody => {
    const priceText = cardBody.querySelector('.unit-price');
    const quantitySpan = cardBody.querySelector('.quantity');
    if (priceText && quantitySpan) {
      const price = parseInt(priceText.textContent);
      const quantity = parseInt(quantitySpan.textContent);
      total += price * quantity;
    }
  });
  document.querySelector('.total').textContent = `${total} $`;
}

document.querySelectorAll('.list-products > .card-body').forEach(cardBody => {
  const plusBtn = cardBody.querySelector('.fa-plus-circle');
  const minusBtn = cardBody.querySelector('.fa-minus-circle');
  const quantitySpan = cardBody.querySelector('.quantity');

  if (plusBtn && quantitySpan) {
    plusBtn.addEventListener('click', () => {
      quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
      updateTotal();
    });
  }

  if (minusBtn && quantitySpan) {
    minusBtn.addEventListener('click', () => {
      if (parseInt(quantitySpan.textContent) > 0) {
        quantitySpan.textContent = parseInt(quantitySpan.textContent) - 1;
        updateTotal();
      }
    });
  }
});

document.querySelectorAll('.fa-trash-alt').forEach(trashBtn => {
  trashBtn.addEventListener('click', () => {
    const outerCardBody = trashBtn.closest('.list-products > .card-body');
    if (outerCardBody) {
      outerCardBody.remove();
      updateTotal();
    }
  });
});

document.querySelectorAll('.fa-heart').forEach(heartBtn => {
  heartBtn.addEventListener('click', () => {
    heartBtn.classList.toggle('liked');
    if (heartBtn.classList.contains('liked')) {
      heartBtn.style.color = 'red';
    } else {
      heartBtn.style.color = '';
    }
  });
});

updateTotal();