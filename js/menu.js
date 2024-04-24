const difficultyBtn = document.getElementById("difficulty-bttn");
const infiniteBtn = document.getElementById("infinite-bttn");
const controlsBtn = document.getElementById("controls-bttn");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-bttn");

difficultyBtn.addEventListener("click", function (event) {
  console.log("Difficulty Button Clicked!");

  menu.style.display = "none";
  state = "game";
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

  state = "start";
  menu.style.display = "block";
});
