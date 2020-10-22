// 1. Declare variables and capture input.
const noun = prompt("What is your noun?");
console.log(noun);
const adj = prompt("What is your adjective?");
console.log(adj);
const verb = prompt("What is your verb?");
console.log(verb);


// 2. Combine the input with other words to create a story.
const message = `<p>There once was a ${adj} programmer who wanted to use JavaScript to ${verb} the ${noun}. </p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = message;