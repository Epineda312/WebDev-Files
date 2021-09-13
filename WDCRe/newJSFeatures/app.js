//----------------Default Params-----------------------------
// function rollDie(numSides) { //Old way of setting defaults
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }

// function multiply(a, b) {
//     b = typeof b !== 'undefined' ? b : 1;
//     return a * b;
// }
// multiply(7); //7
// multiply(7, 3); //21

// function multiply(a, b = 1) { // The new way
//     return a * b;
// }
// multiply(4); //4
// multiply(4, 5); //20

function rollDie(numsides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hey There", punc = '!') {
    console.log(`${msg}, ${person}${punc}`);
}