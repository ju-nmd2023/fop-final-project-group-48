import { Ufo, Moon, HealthBuff, ShieldBuff } from "classes.js";

let ufo = new Ufo(x, y);
let moon = new Moon();
let healthBuff = new HealthBuff();
let shieldBuff = new ShieldBuff();

// game physics etc
let y = 450;
let x = 500;
let ufoSpeed = 0;
let gravityStrength = 0.1;
let boosterStrength = 0.25;

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
commetThree = {
  x: 1000,
  y: 800,
  speed: 0.7,
};
//STARRY SKY INSPIRATION FROM LECTURES
let stars = [];

let auraMove = 1800;
let direction = "forward";

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

function draw() {
  drawGeneral();
  drawStars();
  drawCommencecommet();
  drawAura();
  drawHealthbar();
  drawCursor();

  if (state === "start") {
    startState();
  } else if (state === "easy") {
    gameState();
  } else if (state === "normal") {
    gameState();
  } else if (state === "hard") {
    gameState();
  }

  if (state === "easy") {
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); //resize the window
}

// NON-Movable OBJECTS
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
  bgcolor(auraMove);
  if (direction === "forward") {
    if (auraMove < 1830) {
      auraMove = auraMove + 0.3;
    } else {
      direction = "backwards";
    }
  } else if (direction === "backwards") {
    if (auraMove > 1780) {
      auraMove = auraMove - 0.2;
    } else {
      direction = "forward";
    }
  }
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
}
function bgcolor(auraMove) {
  noStroke();
  fill(153, 0, 51, 30);
  ellipse(auraMove, height / 2, 1100, 1100);
  fill(153, 0, 51, 20);
  ellipse(auraMove - 80, height / 2, 1300, 1300);
  fill(153, 0, 51, 15);
  ellipse(auraMove - 150, height / 2, 1800, 1800);
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

function gameState() {
  draw;
  if (keyIsDown(38)) {
    ufoSpeed = ufoSpeed - boosterStrength;
  }

  y = y + ufoSpeed;
}
