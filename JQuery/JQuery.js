// $(document).ready(function() {
//   $("h1").css("color", "red");
// }); // changes h1 to red even if JQuery is declared in the head of the document

// $("h1").css("font-size"); //Gets the value

// $("h1").css("font-size", "5rem"); //Sets the value

// $("h1").addClass("big-title"); //adds class made in styles.css

// $("h1").addClass("big-title margin-50"); //adds two classes

// $("h1").text("Bye"); //Changes h1 text to "Bye"

// $("Button").text("Don't Click Me"); //Changes button text to "Don't click me"

// $("Button").html("<em>Hey</em>"); // Changes button to emphasized Hey

// $("Button").text("<em>Hey</em>") // changes button text to <em>Hey</em>

// console.log($("img").attr("src")); //diplays src of image in console

// $("a").attr("href", "https://www.yahoo.com"); //changes google link to yahoo

// $("h1").click(function(){
//   $("h1").css("color", "purple");
// }); //Changes h1 color to purple on click

// for(var i = 0; i<5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "purple";
//   });
// } //changes h1 color to purple when any buttons are clicked

// $("button").click(function() {
//     $("h1").css("color", "purple");
// }); //Changes hq color to purple when any buttons are clicked (Using JQuery over JS)

// $("input").keypress(function(){
//   console.log(event.key);
// }); //Detects what key is entered into text box (input)

// $(document).keypress(function(){
//   console.log(event.key);
// }); //Detects what key is entered on entire page

// $(document).keypress(function(){
//   $("h1").text(event.key);
// }); //Detects what key is pressed while on entire document and replaces h1 with said key

// $("h1").on("mouseover", function() {
//   $("h1").css("color", "purple");
// }); //When mouse is over h1 it changes to purple
//
// $("h1").on("click", function() {
//   $("h1").css("color", "purple");
// }); //When h1 is clicked it changes to purple

// $("h1").before("<button>New</button>"); //Makes a new button before opening tag of h1

// $("h1").after("<button>New</button>"); //Makes a new button after the opening tag of h1

// $("h1").prepend("<button>New</button>") //Adds button inside h1 but before content of h1

// $("h1").append("<button>New</button>") //Adds button inside h1 but after content of h1

// $("button").remove(); //Removes all buttons from document
