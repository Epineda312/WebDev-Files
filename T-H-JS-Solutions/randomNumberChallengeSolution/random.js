 // Collect input from a user
let inputHigh = prompt("Give me a number to work with");

// Convert the input to a number
let highNumber = parseInt(inputHigh);

// Use Math.random() and the user's number to generate a random number
let ranNum = Math.floor(Math.random() * highNumber) + 1;

// Create a message displaying the random number
console.log(`your random number is ${ranNum}. Picked between 1 and ${highNumber}`);
