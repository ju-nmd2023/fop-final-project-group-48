//Modules
import MegaProjectile from "./megaprojectile.js";
let megaprojectiles = [];

import Projectile from "./projectile.js";
//let projectile = new Projectile(1200, 650);
let projectiles = [];

import Ufo from "./ufo.js";
let ufox = new Ufo(500, 450);

import SheilfBuff from "./shieldbuff.js";
let shieldbuff = new SheilfBuff();

import HealthBuff from "./healthbuff.js";
let healthbuff = new HealthBuff();

import Moon from "./moon.js";
let moonx = new Moon();

import Aura from "./aura.js";
let aurax = new Aura();

import Comet from "./comet.js";
let comets = [];

let state = "title";

// GAME PHYSICS ETC
let ufoVertSpeed = 0;
let ufoHoriSpeed = 0;
let y = 450;
let x = 500;

//let gravityStrength = 1.01;
let boosterStrength = 0.5;
const slowDownStrength = 0.95;

let showTitle = true;
let title;

//STARRY SKY INSPIRATION FROM LECTURES
let stars = [];

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
  window.addEventListener("resize", windowResized);

  // Initialize comets
  for (let i = 0; i < 3; i++) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    let speed = random(0.5, 2);
    comets.push(new Comet(x, y, speed));
  }

  // Initialize stars
  for (let i = 0; i < 300; i++) {
    const star = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
      alpha: Math.random(),
    };
    stars.push(star);
  }

  // Projectiles
  for (let i = 0; i < 10; i++) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    let speed = random(5, 10);
    projectiles.push(new Projectile(x, y, speed));
  }
  // MegaProejctiles
  for (let i = 0; i < 2; i++) {
    let x = random(windowWidth);
    let y = random(windowHeight);
    let speed = random(2, 5);
    megaprojectiles.push(new MegaProjectile(x, y, speed));
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
  showTitle = false;
}
window.mouseClicked = mouseClicked;

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
function drawCommenceComet() {
  for (let comet of comets) {
    comet.updatePosition();
    comet.draw();
  }
}
function drawProjectiles() {
  for (let projectile of projectiles) {
    projectile.updatePosition();
    projectile.draw();
  }
}
function drawMegaProjectiles() {
  for (let megaprojectile of megaprojectiles) {
    megaprojectile.updatePosition();
    megaprojectile.draw();
  }
}

function drawProjectilesStationary() {
  for (let projectile of projectiles) {
    projectile.draw();
  }
}

function drawAura() {
  aurax.draw();
}
function drawCursor() {
  paw(mouseX, mouseY);
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
function moon() {
  moonx.draw();
  moonx.x = windowWidth - 100;
  moonx.y = windowHeight / 2;
}
function drawHealthbar() {
  const barWidth = windowWidth * 0.2;
  const barHeight = 20;
  const barX = (windowWidth - barWidth) / 2;
  const barY = 60;
  const barPadding = 10;

  // HP BAR Background
  strokeWeight(barHeight + barPadding * 2);
  stroke(255, 255, 255, 80);

  // Draw background bar
  line(barX + barWidth + barPadding, barY, barX - barPadding, barY);

  // HP BAR
  stroke(102, 255, 153);
  strokeWeight(barHeight);

  // Draw actual health bar
  line(barX + barWidth + barPadding, barY, barX - barPadding, barY);

  // Guides
  strokeWeight(2);
  stroke(0, 0, 0, 50);
  // Guide lines
  line(barX + barWidth / 3, barY - 6, barX + barWidth / 3, barY + 7);
  line(
    barX + (barWidth * 2) / 3,
    barY - 6,
    barX + (barWidth * 2) / 3,
    barY + 7
  );
}
function drawHealthBuff() {
  healthbuff.draw();
}
function drawShieldBuff() {
  shieldbuff.draw();
}

function ufo() {
  ufox.draw();
  ufox.callPulse = false;
  ufox.callShield = false;
  movement();
}

function ufoStationary() {
  ufox.draw();
  ufox.callPulse = false;
  ufox.callShield = false;
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

// GAME STATES --- TITLE
function titleState() {
  drawGeneral();
  drawStars();
  drawCommenceComet();
  drawAura();
  moon();
  ufoStationary();
  drawProjectiles();
  drawMegaProjectiles();
  drawTitle();
  drawCursor();

  if (showTitle === false) {
    state = "game";
  }
}
window.titleState = titleState;

// GAME STATES --- GAME
function gameState() {
  drawGeneral();
  drawStars();
  drawCommenceComet();
  drawAura();
  moon();
  drawHealthbar();
  ufo();
  drawProjectiles();
  drawMegaProjectiles();

  borderCheck();

  if (keyIsDown(27)) {
    console.log("Menu Button Clicked!");

    menu.style.display = "block";
    state = "pause";
  }
}
window.gameState = gameState;

// GAME STATES --- PAUSE
function pauseState() {
  drawGeneral();
  drawStars();
  drawCommenceComet();
  drawAura();
  moon();
  drawHealthbar();
  ufoStationary();
  drawProjectilesStationary();

  drawMegaProjectiles();
}
window.pauseStateState = pauseState;

function movement() {
  if (keyIsDown(38) || keyIsDown(32) || keyIsDown(87)) {
    ufoVertSpeed -= boosterStrength;
  }
  if (keyIsDown(40) || keyIsDown(83)) {
    ufoVertSpeed += boosterStrength;
  }

  if (keyIsDown(37) || keyIsDown(65)) {
    ufoHoriSpeed -= boosterStrength;
  }

  if (keyIsDown(39) || keyIsDown(68)) {
    ufoHoriSpeed += boosterStrength;
  }

  ufox.y += ufoVertSpeed;
  ufox.x += ufoHoriSpeed;

  //gravity();
  slowDown();
}
window.movement = movement;

function slowDown() {
  ufoVertSpeed *= slowDownStrength;
  ufoHoriSpeed *= slowDownStrength;
}
window.slowDown = slowDown;

function borderCheck() {
  if (ufox.x >= windowWidth - 100) {
    ufox.x = windowWidth - 100;
  }

  if (ufox.x <= 100) {
    ufox.x = 100;
  }

  if (ufox.y >= windowHeight - 40) {
    ufox.y = windowHeight - 40;
  }

  if (ufox.y <= 80) {
    ufox.y = 80;
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

setInterval(function () {
  console.log(ufoHoriSpeed);
}, 1000);

setInterval(function () {
  console.log(ufoVertSpeed);
}, 1000);

setInterval(function () {
  console.log(ufox.x);
}, 1000);

setInterval(function () {
  console.log(ufox.y);
}, 1000);
