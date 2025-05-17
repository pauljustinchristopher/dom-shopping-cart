// Helper to update the total price
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

// Handle plus and minus buttons
document.querySelectorAll('.card-body').forEach(cardBody => {
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

// Handle delete (trash) buttons
document.querySelectorAll('.fa-trash-alt').forEach(trashBtn => {
  trashBtn.addEventListener('click', () => {
    // Remove the whole product card (outer .card-body)
    const outerCardBody = trashBtn.closest('.list-products > .card-body');
    if (outerCardBody) {
      outerCardBody.remove();
      updateTotal();
    }
  });
});

// Handle like (heart) buttons
document.querySelectorAll('.fa-heart').forEach(heartBtn => {
  heartBtn.addEventListener('click', () => {
    heartBtn.classList.toggle('liked');
    // Toggle color: red if liked, default otherwise
    if (heartBtn.classList.contains('liked')) {
      heartBtn.style.color = 'red';
    } else {
      heartBtn.style.color = '';
    }
  });
});

// Initial total
updateTotal();