



document.getElementById('add-btn').addEventListener('click', function () {
     const quantityField = document.getElementById('quantity-input');

     const quantityAmountString = quantityField.value;
     const quantityAmount = parseFloat(quantityAmountString);

     const priceProductElement = document.getElementById('price');
     const priceProductString = priceProductElement.innerText;
     const pricePerProduct = parseFloat(priceProductString);

     const totalProductPrice = quantityAmount * pricePerProduct;

     const previousSubTotalElement = document.getElementById('sub-total');
     const previousSubTotalString = previousSubTotalElement.innerText;
     const previousSubTotal = parseFloat(previousSubTotalString);

     const currentSubTotal = totalProductPrice + previousSubTotal;
     previousSubTotalElement.innerText = currentSubTotal;
     quantityField.value = '';


})



