// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const productInput = document.querySelector('#product');
const qtyInput = document.querySelector('#qty');
const groceryList = document.querySelector('#list');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const newList = document.createElement('li');
    newList.innerText = `${productInput.value} ${qtyInput.value}`;

    groceryList.appendChild(newList);

    productInput.value = '';
    qtyInput.value = '';
})
