//Modules
import { Aura } from "./classes.js";
let aura = new Aura();

import MegaProjectile from "./megaprojectile.js";
let megaprojectile = new MegaProjectile();

import Projectile from "./projectile.js";
let projectile = new Projectile();

import Ufo from "./ufo.js";
let ufox = new Ufo();

import SheilfBuff from "./shieldbuff.js";
let shieldbuff = new SheilfBuff();

import HealthBuff from "./healthbuff.js";
let healthbuff = new HealthBuff();

import Moon from "./moon.js";
let moonx = new Moon();

let state = "game";

// game physics etc
let y = 450;
let x = 500;
let ufoVertSpeed = 0;
let ufoHoriSpeed = 0;
//let gravityStrength = 1.01;
let boosterStrength = 0.8;
const speedLimit = 6;
const slowDownStrength = 0.95;

let showTitle = true;
let title;

// COMET
let commetOne = {
  x: 200,
  y: 200,
  speed: 1,
};
let commetTwo = {
  x: 600,
  y: 300,
  speed: 1.8,
};
let commetThree = {
  x: 1000,
  y: 800,
  speed: 0.7,
};
//STARRY SKY INSPIRATION FROM LECTURES
let stars = [];

let auraMove = 1800;
let direction = "forward";

// menu button elements
const difficultyBtn = document.getElementById("difficulty-bttn");
const infiniteBtn = document.getElementById("infinite-bttn");
const controlsBtn = document.getElementById("controls-bttn");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-bttn");

function preload() {
  title = loadImage("../img/titledark.png", () =>
    console.log("Image loaded successfully")
  );
}
window.preload = preload;

function setup() {
  createCanvas(windowWidth, windowHeight);
  window.addEventListener("resize", windowResized); //checking if window is resized

  // Initialize stars
  for (let i = 0; i < 300; i++) {
    const star = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      alpha: Math.random(),
    };
    stars.push(star);
  }
}
window.setup = setup;

function draw() {
  if (state === "pause") {
    pauseState();
  }
  if (state === "game") {
    gameState();
  }
  if (state === "title") {
    titleState();
  }
  drawTitle();
  drawCursor();
}
window.draw = draw;

function mouseClicked() {
  showTitle = false; // Hide the title when the mouse is clicked
}
window.mouseClicked = mouseClicked;
function keyPressed() {
  showTitle = false; // Hide the title when any key is pressed
}
window.keyPressed = keyPressed;
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); //resize the window
}
function drawGeneral() {
  noStroke();
  clear();
  background(30, 30, 70);
}
function drawStars() {
  noStroke();
  for (let star of stars) {
    fill(255, 255, 255, Math.abs(Math.sin(star.alpha)) * 200);
    ellipse(star.x, star.y, 3);
    star.alpha = star.alpha + 0.01;
  }
}
function drawAura() {
  aura.draw();
}
function drawCursor() {
  paw(mouseX, mouseY);
}
function drawCommencecommet() {
  commetshower(commetOne);
  commetshower(commetTwo);
  commetshower(commetThree);
}
function commetshower(comet) {
  comet.x += comet.speed;
  comet.y += comet.speed;

  if (comet.y > windowHeight) {
    comet.x = random(windowWidth);
    comet.y = 0;
  }
  commet(comet.x, comet.y);
}

// START TITLE
function drawTitle() {
  if (showTitle) {
    let maxWidth = 850;
    let maxHeight = 850;
    let scale = min(maxWidth / title.width, maxHeight / title.height);

    // Center IT
    let imageX = (windowWidth - title.width * 0.6) / 2;
    let imageY = (windowHeight - title.height * 0.6) / 1.8;

    // Draw the image with the calculated position and scaled dimensions
    image(title, imageX, imageY, title.width * 0.6, title.height * 0.6);
  }
}
window.drawTitle = drawTitle;

// OBJECTS
function paw(x, y) {
  noStroke();
  if (mouseIsPressed || keyIsDown(32)) {
    fill(97, 255, 115, 80);
    ellipse(x - 5, y - 5, 45, 45);
    ellipse(x - 5, y - 5, 60, 60);
    ellipse(x - 5, y - 5, 75, 75);
    fill(0, 255, 204);
  } else {
    fill(255, 153, 51);
  }
  ellipse(x, y, 25, 25);

  function beans() {
    ellipse(x - 24, y - 5, 12, 12);
    ellipse(x - 15, y - 20, 12, 12);
    ellipse(x + 3, y - 23, 12, 12);
  }
  beans();
}
function commet(x, y) {
  push();
  stroke(255, 255, 255, 40);
  strokeWeight(10);
  line(x, y, x - 100, y - 100);
  pop();
  fill(255, 196, 94);
  noStroke();
  ellipse(x, y, 15, 15);
} /*
function bgcolor(auraMove) {
  noStroke();
  fill(153, 0, 51, 30);
  ellipse(auraMove, height / 2, 1100, 1100);
  fill(153, 0, 51, 20);
  ellipse(auraMove - 80, height / 2, 1300, 1300);
  fill(153, 0, 51, 15);
  ellipse(auraMove - 150, height / 2, 1800, 1800);
}*/
function moon() {
  moonx.draw();
}
function drawHealthbar() {
  // HP BAR Background
  strokeWeight(40);
  stroke(255, 255, 255, 80);

  // HP BAR
  line(900, 60, 600, 60);
  stroke(102, 255, 153);
  strokeWeight(20);

  //max
  line(900, 60, 600, 60);
  // Make the line shrink and grow as listed below depending on how much HP there is and morph colors vvv
  /*

  //medium
  stroke(255, 204, 0);
  line(790, 60, 600, 60);
  //low

  stroke(153, 0, 51);
  strokeWeight(20);
  line(690, 60, 600, 60);
  */

  //guides
  strokeWeight(2);
  stroke(0, 0, 0, 50);
  line(700, 54, 700, 67);
  line(800, 54, 800, 67);
}
function drawHealthBuff() {
  healthbuff.draw();
}
function drawShieldBuff() {
  shieldbuff.draw();
}
function ufo() {
  ufox.draw();
  ufox.x = windowWidth / 4.5;
  ufox.y = windowHeight / 2;
  ufox.callPulse = false;
  ufox.callShield = false;
}
function drawProjectile() {
  projectile.draw();
}
function drawMegaProjectile() {
  megaprojectile.draw();
}

// menu logic
difficultyBtn.addEventListener("click", function () {
  console.log("Start Button Clicked!");

  menu.style.display = "none";
  state = "game";
});

infiniteBtn.addEventListener("click", function () {
  console.log("Infinite Button Clicked!");

  menu.style.display = "none";
  state = "game";
});

controlsBtn.addEventListener("click", function () {
  console.log("Controls Button Clicked!");

  menu.style.display = "none";
  state = "game";
});

menuBtn.addEventListener("click", function () {
  console.log("Menu Button Clicked!");

  menu.style.display = "block";
  state = "pause";
});

// GAME
function titleState() {
  drawGeneral();
  drawStars();
  drawCommencecommet();
  drawAura();
  moon();
  drawTitle();
  drawCursor();

  if (showTitle === false) {
    state = "game";
  }
}
window.titleState = titleState;

function gameState() {
  drawGeneral();
  drawStars();
  drawCommencecommet();
  drawAura();
  moon();
  drawHealthbar();
  movement();
  ufo(x, y);
  drawProjectile();
  drawMegaProjectile();

  borderCheck();

  if (keyIsDown(27)) {
    console.log("Menu Button Clicked!");

    menu.style.display = "block";
    state = "pause";
  }
}
window.gameState = gameState;

function pauseState() {
  drawGeneral();
  drawStars();
  drawCommencecommet();
  drawAura();
  moon();
  drawHealthbar();
  levitatingUfo();
  drawProjectile();
  drawMegaProjectile();
}
window.pauseStateState = pauseState;

function movement() {
  if (keyIsDown(38) || keyIsDown(32) || keyIsDown(87)) {
    ufoVertSpeed = ufoVertSpeed - boosterStrength;
    pulse(x, y);
  }
  if (keyIsDown(40) || keyIsDown(83)) {
    ufoVertSpeed = ufoVertSpeed + boosterStrength;
  }

  if (keyIsDown(37) || keyIsDown(65)) {
    ufoHoriSpeed = ufoHoriSpeed - boosterStrength;
  }

  if (keyIsDown(39) || keyIsDown(68)) {
    ufoHoriSpeed = ufoHoriSpeed + boosterStrength;
  }

  y = y + ufoVertSpeed;
  x = x + ufoHoriSpeed;

  //gravity();
  slowDown();
}
window.movement = movement;

function slowDown() {
  if (ufoVertSpeed > 0) {
    ufoVertSpeed = ufoVertSpeed * slowDownStrength;
  }
  if (ufoVertSpeed < 0) {
    ufoVertSpeed = ufoVertSpeed * slowDownStrength;
  }

  if (ufoHoriSpeed > 0) {
    ufoHoriSpeed = ufoHoriSpeed * slowDownStrength;
  }

  if (ufoHoriSpeed < 0) {
    ufoHoriSpeed = ufoHoriSpeed * slowDownStrength;
  }
}
window.slowDown = slowDown;

function borderCheck() {
  if (x >= windowWidth - 100) {
    x = windowWidth - 100;
  }

  if (x <= 100) {
    x = 100;
  }

  if (y >= windowHeight - 40) {
    y = windowHeight - 40;
  }

  if (y <= 80) {
    y = 80;
  }
}
window.borderCheck = borderCheck;

//function gravity() {
//  y *= gravityStrength;
//}
//window.gravity = gravity;

setInterval(function () {
  console.log(state);
}, 1000);
