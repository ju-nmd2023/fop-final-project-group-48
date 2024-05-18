//MODULES
import MegaProjectile from "./megaprojectile.js";
let megaprojectiles = [];

import Projectile from "./projectile.js";
let projectiles = [];

import Ufo from "./ufo.js";
let ufox = new Ufo(450, 500);

import ShieldBuff from "./shieldbuff.js";
let shieldbuffs = [];

import HealthBuff from "./healthbuff.js";
let healthbuffs = [];

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

let boosterStrength = 0.6;
const slowDownStrength = 0.95;

let health = 6;

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
  for (let i = 0; i < 4; i++) {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);
    let speed = random(0.3, 1.5);
    comets.push(new Comet(x, y, speed));
  }

  // Initialize stars
  for (let i = 0; i < 400; i++) {
    const star = {
      x: Math.random() * width,
      y: Math.random() * height,
      alpha: Math.random(0.1, 5),
    };
    stars.push(star);
  }

  //commenceArrowProjectiles();
  commenceShieldWallProjectiles();
  setInterval(commenceShieldWallProjectiles, 9000); //120000
  setInterval(commenceArrowProjectiles, 6000); //6000
  setInterval(commenceMegaProjectiles, 15000); //10000
  setInterval(commenceHealthBuffs, 1000); //20000
  setInterval(commenceShieldBuffs, 1000); //30000

  // Create an audio element // HELP BY AI - used from Lunar Lander
  const bgMusic = new Audio("js/retrogamesambience.mp3");

  bgMusic.loop = true;
  bgMusic.volume = 0.5;
  bgMusic.preload = "auto";
  bgMusic.addEventListener("error", function (err) {
    console.error("Error loading audio:", err);
  });

  // Function to play the music and remove event listeners
  function playMusic() {
    // Play the music
    bgMusic.play().catch(function (error) {
      console.warn("Audio play failed:", error);
    });
    window.removeEventListener("mousedown", playMusic);
    window.removeEventListener("keydown", playMusic);
  }

  window.addEventListener("mousedown", playMusic);
  window.addEventListener("keydown", playMusic);
}
window.setup = setup;

function draw() {
  // Set current state and draw based of said state
  if (state === "pause") {
    pauseState();
  }
  if (state === "game") {
    gameState();
  }
  if (state === "title") {
    titleState();
  }
  if (state === "gameOver") {
    gameOverState();
    drawGameOver();
  }
  drawTitle();
  drawCursor();
}
window.draw = draw;

function removeTitle(event) {
  if (
    event.type === "click" ||
    (event.type === "keydown" && (event.key === " " || event.key === "Enter"))
  ) {
    showTitle = false;
  }
}
window.addEventListener("click", removeTitle);
window.addEventListener("keydown", removeTitle);
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

function drawGameOver() {
  textAlign(CENTER, CENTER);
  textSize(128);
  fill(255, 196, 94);
  textFont("pain-de-mie, sans-serif");
  text("GAME MEOWER", width / 2, height / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); //resize the window
}

//DRAW
function drawGeneral() {
  noStroke();
  clear();
  background(30, 30, 70);
}
function drawStars() {
  noStroke();
  for (let star of stars) {
    fill(255, 255, 255, Math.abs(Math.sin(star.alpha)) * 100);
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

//BUFFS n STUFFS
function commenceHealthBuffs() {
  const healthBuffX = windowWidth + 100;
  const healthBuffY = random(windowHeight);

  if (healthbuffs.length < 1) {
    healthbuffs.push(new HealthBuff(healthBuffX, healthBuffY, 8));
  }
}
function drawHealthBuffs() {
  for (let healthbuff of healthbuffs) {
    healthbuff.updatePosition();
    healthbuff.draw();
    healthbuff.livehpBuff();
  }
}

function commenceShieldBuffs() {
  const shieldBuffX = windowWidth + 100;
  const shieldBuffY = random(windowHeight);

  if (shieldbuffs.length < 1) {
    shieldbuffs.push(new ShieldBuff(shieldBuffX, shieldBuffY, 8));
  }
}
function drawShieldBuffs() {
  for (let shieldbuff of shieldbuffs) {
    shieldbuff.updatePosition();
    shieldbuff.draw();
    shieldbuff.liveshieldBuff();
  }
}

function commenceArrowProjectiles() {
  const arrowX = windowWidth + 500;
  const arrowY = windowHeight / 2;
  const spacing = 150;

  if (projectiles.length < 5) {
    // Center
    projectiles.push(new Projectile(arrowX, arrowY, 11.8));
    // Upper right
    projectiles.push(
      new Projectile(arrowX + spacing, arrowY - spacing / 2, 11.6)
    );
    projectiles.push(
      new Projectile(arrowX + spacing, arrowY + spacing / 2, 11.6)
    );
    // Lower right
    projectiles.push(
      new Projectile(arrowX + spacing * 2, arrowY - spacing, 11.5)
    );
    projectiles.push(
      new Projectile(arrowX + spacing * 2, arrowY + spacing, 11.5)
    );
  }
}
function commenceShieldWallProjectiles() {
  const arrowX = windowWidth + 500;
  const arrowY = windowHeight / 2;
  const spacing = 350;

  if (projectiles.length < 5) {
    // Center
    projectiles.push(new Projectile(arrowX, arrowY, 11.8));
    // Upper right
    projectiles.push(
      new Projectile(arrowX - spacing - 200, arrowY - spacing / 2, 11.6)
    );
    projectiles.push(
      new Projectile(arrowX - spacing - 200, arrowY + spacing / 2, 11.6)
    );
    // Lower right
    projectiles.push(new Projectile(arrowX - spacing, arrowY - spacing, 11.5));
    projectiles.push(new Projectile(arrowX - spacing, arrowY + spacing, 11.5));
  }
}
function drawProjectiles() {
  for (let projectile of projectiles) {
    projectile.updatePosition();
    projectile.draw();
  }
}

function commenceMegaProjectiles() {
  const megaX = windowWidth + 500;
  const megaY = windowHeight / 2;

  const offsetY = random(-200, 200); // Randomly offset Y
  const spawnY = constrain(megaY + offsetY, 100, windowHeight - 100);

  if (megaprojectiles.length < 3) {
    megaprojectiles.push(new MegaProjectile(megaX, spawnY, 7));
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
function drawMegaProjectilesStationary() {
  for (let megaprojectile of megaprojectiles) {
    megaprojectile.draw();
  }
}

// OBJECTS
function drawAura() {
  aurax.draw();
}
function drawCursor() {
  paw(mouseX, mouseY);
}
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
function drawHealthbar6() {
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
function drawHealthbar5() {
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
  line(barX + (barWidth / 3) * 2.5 + barPadding, barY, barX - barPadding, barY);

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
function drawHealthbar4() {
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
  stroke(247, 213, 101);
  strokeWeight(barHeight);

  // Draw actual health bar
  line(barX + (barWidth / 3) * 2 + barPadding, barY, barX - barPadding, barY);

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
function drawHealthbar3() {
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
  stroke(247, 213, 101);
  strokeWeight(barHeight);

  // Draw actual health bar
  line(barX + (barWidth / 3) * 1.5 + barPadding, barY, barX - barPadding, barY);

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
function drawHealthbar2() {
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
  stroke(209, 51, 23);
  strokeWeight(barHeight);

  // Draw actual health bar
  line(barX + barWidth / 3 + barPadding, barY, barX - barPadding, barY);

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
function drawHealthbar1() {
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
  stroke(209, 51, 23);
  strokeWeight(barHeight);

  // Draw actual health bar
  line(barX + barWidth / 6 - 20 + barPadding, barY, barX - barPadding, barY);

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

function ufo() {
  ufox.draw();
  /*
  if (ufox.shieldActive) {
    ufox.liveShield();
  }*/
  movement();
}
function ufoStationary() {
  ufox.draw();
  ufox.callPulse = false;
  ufox.callShield = true;
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
  if (health === 6) {
    drawHealthbar6();
  } else if (health === 5) {
    drawHealthbar5();
  } else if (health === 4) {
    drawHealthbar4();
  } else if (health === 3) {
    drawHealthbar3();
  } else if (health === 2) {
    drawHealthbar2();
  } else if (health === 1) {
    drawHealthbar1();
  }
  ufo();
  drawProjectiles();
  drawMegaProjectiles();
  drawHealthBuffs();
  drawShieldBuffs();
  borderCheck();
  checkCollisions();

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
  if (health === 6) {
    drawHealthbar6();
  } else if (health === 5) {
    drawHealthbar5();
  } else if (health === 4) {
    drawHealthbar4();
  } else if (health === 3) {
    drawHealthbar3();
  } else if (health === 2) {
    drawHealthbar2();
  } else if (health === 1) {
    drawHealthbar1();
  }
  ufoStationary();
  drawProjectilesStationary();
  drawMegaProjectilesStationary();
  menu.style.display = "block";
}
window.pauseStateState = pauseState;

// GAME STATES --- GAMEOVER
function gameOverState() {
  drawGeneral();
  drawStars();
  drawCommenceComet();
  drawAura();
  moon();
  ufoStationary();
  drawTitle();
  drawCursor();
}
window.gameOverStateState = gameOverState;

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

// COLLISION FUNCTIONS
function checkCollisions() {
  // Check UFO collision with PROJETCILES
  for (let i = projectiles.length - 1; i >= 0; i--) {
    let projectile = projectiles[i];
    if (isColliding(ufox, projectile)) {
      projectiles.splice(i, 1); // Remove from array

      health -= 1; // decrease health by 1 when hit

      if (health <= 0) {
        state = "gameOver";
      }
    }
  }

  // Check UFO collision with MEGA PROJECTILES
  for (let i = megaprojectiles.length - 1; i >= 0; i--) {
    let megaprojectile = megaprojectiles[i];
    if (isColliding(ufox, megaprojectile)) {
      megaprojectiles.splice(i, 1); // Remove from array

      health -= 2; // decrease health by 2 when hit

      if (health <= 0) {
        state = "gameOver";
      }
    }
  }
}

function isColliding(objectufo, projectiles) {
  // Check for collision between objects
  return (
    objectufo.x < projectiles.x + projectiles.width &&
    objectufo.x + objectufo.width > projectiles.x &&
    objectufo.y < projectiles.y + projectiles.height &&
    objectufo.y + objectufo.height > projectiles.y
  );
}
