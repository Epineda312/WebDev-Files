/*
My Solution
// Collect input from a user
let inputHigh = prompt("Give me a number to work with");

// Convert the input to a number
let highNumber = parseInt(inputHigh);

// Use Math.random() and the user's number to generate a random number
let ranNum = Math.floor(Math.random() * highNumber) + 1;

// Create a message displaying the random number
console.log(`your random number is ${ranNum}. Picked between 1 and ${highNumber}`);
*/

/*
My Solution for second part of problem. Take two inputs, highest and lowest number, and generate a random number between the two values provided.
*/

 // Collect input from a user
let inputHigh = prompt("Give me the highest number you want to work with");
let inputLow = prompt("Give me the lowest number you want to work with");


// Convert the input to a number
let highNumber = parseInt(inputHigh);
let lowNumber = parseInt(inputLow);

if(highNumber && lowNumber){
// Use Math.random() and the user's number to generate a random number
let ranNum = Math.floor(Math.random() * (highNumber - lowNumber + 1) + lowNumber);

// Create a message displaying the random number
console.log(`your random number is ${ranNum}. Picked between ${lowNumber} and ${highNumber}`);  
} else {
  console.log('You need to provide two numbers. Try again.');
}
