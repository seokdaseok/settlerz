
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
