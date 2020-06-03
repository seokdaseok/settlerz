var randomNumber = Math.random();
randomNumber = Math.floor(randomNumber * 2 + 1)

var coin = document.querySelector("img").setAttribute("src", "images/coin" + randomNumber + ".png")

if (randomNumber === 1) {
  document.querySelector("h1").textContent = "It's Heads!"
} else if (randomNumber === 2) {
  document.querySelector("h1").textContent = "It's Tails!"
} else {
  alert("Something's wrong with the code, please try again")
}
