//Initialize product list
const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];

//Prompt user to enter what product they are looking for
const search = prompt('Search for a product.');

//initalize variable to return with a message to display after product is searched
let message;

//Runs if block to display if we do or do not have that product
//Use .toLowerCase() on search to avoid issues with casing
if( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if ( inStock.includes(search.toLowerCase()) ) {
  message = `Yes, we have <strong> ${search}</strong>. It's #${inStock.indexOf(search.toLowerCase()) + 1} on the list!`;
  
} else {
  message = `Sorry, we do not have <strong>${search}</strong>. `; 
}

//Display message to webpage and tell user whether we have the product or not
document.querySelector('main').innerHTML = `<p>${message}</p>`;