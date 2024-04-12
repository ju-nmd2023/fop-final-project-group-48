const difficultyBtn = document.getElementById("difficulty-bttn");
const infiniteBtn = document.getElementById("infinite-bttn");
const controlsBtn = document.getElementById("controls-bttn");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-bttn");

difficultyBtn.addEventListener("click", function (event) {
  console.log("Difficulty Button Clicked!");

  state = "easy";
  console.log(state);
});

infiniteBtn.addEventListener("click", function (event) {
  console.log("Infinite Button Clicked!");

  menu.style.display = "none";
});

controlsBtn.addEventListener("click", function (event) {
  console.log("Controls Button Clicked!");

  menu.style.display = "none";
});

menuBtn.addEventListener("click", function (event) {
  console.log("Menu Button Clicked!");

  menu.style.display = "block";
});

let state = "easy";

/*if (state === "start") {
  startState();
} else if (state === "easy") {
  gameState();
} else if (state === "normal") {
  gameState();
} else if (state === "hard") {
  gameState();
}*/
