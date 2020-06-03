var n = Math.random();
n = n * 6
var x = Math.random();
x = x * 6
var randomNumber1 = Math.floor(n + 1);
var randomNumber2 = Math.floor(x + 1);

document.querySelector("img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
} else {
  document.querySelector("h1").textContent = "Draw!"
}
