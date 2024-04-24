/* HOW TO WORK WITH MODULES???
import {
  Ufo,
  Moon,
  HealthBuff,
  ShieldBuff,
  Projectile,
  MegaProjectile,
} from "./classes.js";

// Imported Classes
let ufo = new Ufo(100, 100);
let moon = new Moon();
let healthBuff = new HealthBuff(200, 200, 50);
let shieldBuff = new ShieldBuff(300, 300, 60);
let projectile = new Projectile(400, 400);
let megaProjectile = new MegaProjectile(500, 500);
*/

//Check-console
import { Aura } from "./classes.js";
let aura = new Aura();

let state = "title";

// game physics etc
let y = 450;
let x = 500;
let ufoVertSpeed = 0;
let ufoHoriSpeed = 0;
let gravityStrength = 1.01;
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
  if (state === "start") {
    startState();
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
function keyPressed() {
  showTitle = false; // Hide the title when any key is pressed
}
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
function moon() {
  noStroke();
  fill(117, 117, 117);
  ellipse(width - 50, height / 2, 800, 800);
  // Nose
  beginShape();
  vertex(width - 400, height / 3);
  bezierVertex(
    width - 400,
    height / 3,
    width - 440,
    height / 2,
    width - 640,
    height / 1.95
  );
  bezierVertex(
    width - 640,
    height / 1.95,
    width - 560,
    height / 1.7,
    width - 400,
    height / 1.8
  );
  endShape();
  //Eye
  fill(198, 198, 198);
  ellipse(width - 280, height / 2.4, 190, 290);
  fill(255, 0, 116);
  ellipse(width - 305, height / 2.4, 130, 200);
  fill(54, 49, 68);
  ellipse(width - 335, height / 2.4, 40, 110);
  fill(255, 255, 255, 150);
  ellipse(width - 280, height / 2.7, 100, 130);

  // Craters
  fill(54, 49, 68);
  ellipse(width - 40, height / 5, 150, 120);
  ellipse(width - 70, height / 3.3, 50, 40);
  ellipse(width - 30, height / 3.5, 20, 15);
  ellipse(width - 60, height / 1.24, 80, 60);
  ellipse(width - 120, height / 1.28, 40, 30);
  ellipse(width - 280, height / 1.25, 10, 8);
  ellipse(width - 280, height / 1.28, 23, 18);
  ellipse(width - 260, height / 1.26, 15, 10);

  // Eyelid
  fill(117, 117, 117);
  beginShape();
  vertex(width - 240, height / 4);
  bezierVertex(
    width - 240,
    height / 4,
    width - 340,
    height / 2.7,
    width - 370,
    height / 3
  );
  bezierVertex(
    width - 370,
    height / 3,
    width - 340,
    height / 4,
    width - 240,
    height / 4
  );
  endShape();
  // Eye-Brow
  stroke(54, 49, 68);
  strokeWeight(18);
  fill(117, 117, 117);
  beginShape();
  vertex(width - 240, height / 4);
  bezierVertex(
    width - 240,
    height / 4,
    width - 340,
    height / 2.7,
    width - 370,
    height / 3
  );
  endShape();
  // Mouth
  stroke(54, 49, 68);
  noFill();
  strokeWeight(18);
  beginShape();
  vertex(width - 410, height / 1.45);
  bezierVertex(
    width - 410,
    height / 1.45,
    width - 160,
    height / 1.35,
    width - 100,
    height / 2
  );
  endShape();
  beginShape();
  vertex(width - 135, height / 2.15);
  bezierVertex(
    width - 135,
    height / 2.15,
    width - 135,
    height / 2,
    width - 95,
    height / 2
  );
  bezierVertex(
    width - 95,
    height / 2,
    width - 65,
    height / 2,
    width - 65,
    height / 2.15
  );
  endShape();

  // Nose Details
  fill(54, 49, 68);
  noStroke();
  ellipse(width - 485, height / 1.83, 50, 15);
  stroke(54, 49, 68);
  noFill();
  strokeWeight(18);
  beginShape();
  vertex(width - 440, height / 1.77);
  bezierVertex(
    width - 440,
    height / 1.77,
    width - 400,
    height / 1.85,
    width - 450,
    height / 1.95
  );
  endShape();
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
  function healthBuffObject() {
    //stroke(102, 255, 153, 100);
    //strokeWeight(2);
    fill(102, 255, 153, 80);
    ellipse(x + 300, y, diameter, diameter);
    noStroke();
    fill(179, 255, 179);
    beginShape();
    vertex(x + 292.5, y - 21);
    vertex(x + 307.5, y - 21);
    vertex(x + 307.5, y - 7);
    vertex(x + 322, y - 7);
    vertex(x + 322, y + 7);
    vertex(x + 307.5, y + 7);
    vertex(x + 307.5, y + 21);
    vertex(x + 292.5, y + 21);
    vertex(x + 292.5, y + 7);
    vertex(x + 278, y + 7);
    vertex(x + 278, y - 7);
    vertex(x + 292.5, y - 7);
    endShape();
  }
  // live-bubble effect
  let diameter = 80;
  let dsize = diameter * Math.sin(frameCount * 0.09);
  diameter += dsize / 18;
  healthBuffObject();
}
function drawShieldBuff() {
  function shieldBuffObject() {
    //stroke(102, 255, 255, 100);
    //strokeWeight(2);
    fill(102, 255, 255, 80);
    ellipse(x + 200, y, diameter, diameter);
    noStroke();
    fill(102, 255, 255);
    beginShape();
    vertex(x + 178, y - 20);
    vertex(x + 190, y - 12);
    vertex(x + 200, y - 20);
    vertex(x + 210, y - 12);
    vertex(x + 223, y - 20);
    bezierVertex(x + 223, y - 20, x + 230, y + 15, x + 200, y + 27);
    bezierVertex(x + 200, y + 27, x + 170, y + 15, x + 178, y - 20);
    endShape();
  }
  // live-bubble effect
  let diameter = 80;
  let dsize = diameter * Math.sin(frameCount * 0.09);
  diameter += dsize / 18;
  shieldBuffObject();
}
function ufo(x, y) {
  // >>> Pulse <<<
  function pulse(x, y) {
    fill(97, 255, 115, 110);
    noStroke();
    beginShape();
    vertex(x - 40, y + 5);
    bezierVertex(x - 40, y + 5, x, y + 150, x + 40, y + 5);
    endShape();

    beginShape();
    vertex(x - 60, y + 5);
    bezierVertex(x - 60, y + 5, x, y + 230, x + 60, y + 5);
    endShape();

    beginShape();
    vertex(x - 70, y + 5);
    bezierVertex(x - 70, y + 5, x, y + 280, x + 70, y + 5);
    endShape();
  }
  // pulse(x, y);

  // >>> UFO <<<
  noStroke();
  fill(94, 255, 215);
  //ship
  ellipse(x + 2, y + 2, 215, 82);

  //cockpit
  fill(107, 136, 153);
  ellipse(x + 2, y - 20, 120, 30);

  //cat
  push();
  fill(71, 71, 71);
  noStroke();
  rect(x - 30, y - 65, 60, 40, 9);

  //ear-right
  beginShape();
  vertex(x + 2 + 30, y - 59);
  bezierVertex(x + 22, y - 91, x + 2 + 14, y - 60, x + 2 + 10, y - 65);
  endShape();

  //ear-left
  beginShape();
  vertex(x - 30, y - 59);
  bezierVertex(x - 22, y - 91, x - 14, y - 60, x - 10, y - 65);
  endShape();

  //cheek-left
  beginShape();
  vertex(x - 30, y - 48);
  bezierVertex(x - 32, y - 47, x - 38, y - 45, x - 28, y - 28);
  endShape();

  //cheek-right
  beginShape();
  vertex(x + 30, y - 48);
  bezierVertex(x + 32, y - 47, x + 38, y - 45, x + 28, y - 28);
  endShape();

  //eye-left
  fill(255);
  noStroke();
  ellipse(x - 12, y - 50, 16, 14);
  fill(204, 153, 255);
  noStroke();
  ellipse(x - 11, y - 50, 11);
  fill(255);
  ellipse(x - 9, y - 52, 4);

  //eye-right
  noStroke();
  ellipse(x + 12, y - 50, 16, 14);
  fill(204, 153, 255);
  noStroke();
  ellipse(x + 11, y - 50, 11);
  fill(255);
  ellipse(x + 13, y - 52, 4);

  //mouth
  noFill();
  stroke(255, 255, 204);
  strokeWeight(1);
  beginShape();
  vertex(x - 5, y - 39);
  bezierVertex(x - 5, y - 39, x - 3, y - 36, x, y - 39);
  endShape();
  beginShape();
  vertex(x, y - 39);
  bezierVertex(x, y - 39, x + 3, y - 36, x + 5, y - 39);
  endShape();

  //scarf
  fill(247, 147, 30);
  noStroke();
  rect(x - 28.5, y - 25, 58, 19, 8);
  pop();

  //Paws
  fill(50, 50, 50);
  ellipse(x + 13, y - 12.5, 17, 15);
  ellipse(x - 11, y - 12.5, 17, 15);
  fill(223, 159, 191);
  //toe-beans-right
  ellipse(x + 13.5, y - 9, 6, 4);
  ellipse(x + 16, y - 14, 3.5, 3.3);
  ellipse(x + 12, y - 15, 3.5, 3.3);
  ellipse(x + 8.8, y - 12, 3.5, 3.3);
  //toe-beans-left
  ellipse(x - 11.5, y - 9, 6, 4);
  ellipse(x - 15, y - 14, 3.5, 3.3);
  ellipse(x - 11, y - 15, 3.5, 3.3);
  ellipse(x - 7, y - 13, 3.5, 3.3);
  //glass
  fill(169, 196, 195, 50);
  noStroke();
  beginShape();
  vertex(x - 60, y - 10);
  bezierVertex(x - 53, y - 110, x + 47, y - 110, x + 60, y - 20);
  bezierVertex(x + 60, y, x - 60, y, x - 60, y - 20);
  endShape();

  //reflection
  fill(255, 254, 217, 50);
  beginShape();
  vertex(x - 25, y - 25);
  bezierVertex(x - 30, y - 100, x + 40, y - 90, x + 53, y - 30);
  bezierVertex(x + 55, y + 5, x - 30, y - 10, x - 10, y);
  endShape();
}
function levitatingUfo() {
  let levitationdistance = 1;
  let levitate = levitationdistance * Math.sin(frameCount * 0.05);
  y += levitate;
  ufo(x, y);

  function drawShield() {
    push();
    stroke(102, 255, 255, 30);
    strokeWeight(30);
    fill(102, 255, 255, 70);
    ellipse(x, y - 15, diameter, diameter / 1);
    pop();
  }
  // live-bubble effect
  let diameter = 225;
  let dsize = diameter * Math.sin(frameCount * 0.09);
  diameter += dsize / 18;

  drawShield();
}
function drawProjectile() {
  push();
  stroke(181, 51, 88, 90);
  strokeWeight(50);
  line(1000, 800, 1100, 800);
  pop();
  fill(255, 0, 116);
  noStroke();
  ellipse(1000, 800, 30, 30);
}
function drawMegaProjectile() {
  push();
  stroke(255, 151, 0, 90);
  strokeWeight(120);
  line(1000, 500, 1100, 500);
  pop();
  fill(250, 218, 0);
  noStroke();
  ellipse(1000, 500, 80, 80);
}

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

function gameState() {
  drawGeneral();
  drawStars();
  drawCommencecommet();
  drawAura();
  moon();
  drawHealthbar();
  ufo(x, y);
  drawProjectile();
  drawMegaProjectile();

  movement();
  borderCheck();
}

function startState() {
  drawGeneral();
  drawStars();
  drawCommencecommet();
  drawAura();
  moon();
  drawHealthbar();
  levitatingUfo();
  aura.draw();
  //projectile.draw();
  //megaProjectile.draw();
}

function movement() {
  if (keyIsDown(38) || keyIsDown(32) || keyIsDown(87) || mouseIsPressed) {
    ufoVertSpeed = ufoVertSpeed - boosterStrength - 1;
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

  gravity();
  slowDown();
  borderCheck();
}

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

function gravity() {
  y *= gravityStrength;
}
