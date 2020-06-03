// var n = Math.random();
// n = n * 3;
// var x = Math.random();
// x = x * 3
// var playerOne = Math.floor(n + 1);
// var playerTwo = Math.floor(x + 1);
//
// document.querySelector("img").setAttribute("src", "images/rps" + playerOne + ".png")
// document.querySelectorAll("img")[1].setAttribute("src", "images/rps" + playerTwo + ".png")
//
// if (playerOne === playerTwo) {
//   document.querySelector("h1").innerHTML = "Draw!"
// } else if (playerOne === 3 && playerTwo === 1) {
//   document.querySelector("h1").innerHTML = "Player 1 wins!"
// } else if (playerOne === 1 && playerTwo === 2) {
//   document.querySelector("h1").innerHTML = "Player 1 wins!"
// } else if (playerOne === 2 && playerTwo === 3) {
//   document.querySelector("h1").innerHTML = "Player 1 wins!"
// } else if (playerTwo === 3 && playerOne === 1) {
//   document.querySelector("h1").innerHTML = "Player 2 wins!"
// } else if (playerTwo === 1 && playerOne === 2) {
//   document.querySelector("h1").innerHTML = "Player 2 wins!"
// } else if (playerTwo === 2 && playerOne === 3) {
//   document.querySelector("h1").innerHTML = "Player 2 wins!"
// }

var playerOne = prompt("Player one, choose. Remember, type all lower case and spell correctly. (rock, paper, scissors)")
var playerTwo = prompt("Player two, choose. Remember, type all lower case and spell correctly. (rock, paper, scissors)")

document.querySelector("img").setAttribute("src", "images/" + playerOne + ".png")
document.querySelectorAll("img")[1].setAttribute("src", "images/" + playerTwo + ".png")

if (playerOne === "paper" && playerTwo === "rock") {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (playerOne === "rock" && playerTwo === "scissors") {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (playerOne === "scissors" && playerTwo === "paper") {
  document.querySelector("h1").innerHTML = "Player 1 wins!"
} else if (playerTwo === "rock" && playerOne === "scissors") {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
} else if (playerTwo === "scissors" && playerOne === "paper") {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
} else if (playerTwo === "paper" && playerOne === "rock") {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
} else if (playerOne === playerTwo) {
  document.querySelector("h1").innerHTML = "Draw!"
} else {
  alert("error, invalid entry.")
  document.querySelector("h1").innerHTML = "Oops, something went wrong."
}
