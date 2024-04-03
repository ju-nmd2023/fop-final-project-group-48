let y = 450;
let x = 500;

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

let bgY = 800;
let direction = "forward";

function preload() {
  //title = loadImage("js/title.png");
  //titletwo = loadImage("js/titletwo.png");
} // Load the image before canvas was draw for smooth game

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
  drawShield();
  drawHealthbar();
  moon();
  cyanBttn();
  ufo(x, y);
  drawCursor();
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
  bgcolor(bgY);
  if (direction === "forward") {
    if (bgY < 850) {
      bgY = bgY + 0.5;
    } else {
      direction = "backwards";
    }
  } else if (direction === "backwards") {
    if (bgY > 750) {
      bgY = bgY - 0.4;
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

function bgcolor(bgY) {
  noStroke();
  fill(153, 0, 51, 30);
  ellipse(width - 50, height / 2, 1100, 1100);
  ellipse(width - 50, height / 2, 1300, 1300);
  ellipse(width - 50, height / 2, 1800, 1800);
}

function moon() {
  noStroke();
  fill(117, 117, 117);
  ellipse(width - 50, height / 2, 800, 800);
  // Nose
  beginShape();
  vertex(width - 400, height / 2.5);
  bezierVertex(
    width - 400,
    height / 2.8,
    width - 480,
    height / 2,
    width - 650,
    height / 1.9
  );
  bezierVertex(
    width - 650,
    height / 1.9,
    width - 600,
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
  // Wrinkles
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
}

function pulse(y) {
  fill(97, 255, 115, 110);
  noStroke();
  beginShape();
  vertex(width / 2 - 40, y + 5);
  bezierVertex(
    width / 2 - 40,
    y + 5,
    width / 2,
    y + 150,
    width / 2 + 40,
    y + 5
  );
  endShape();

  beginShape();
  vertex(width / 2 - 60, y + 5);
  bezierVertex(
    width / 2 - 60,
    y + 5,
    width / 2,
    y + 230,
    width / 2 + 60,
    y + 5
  );
  endShape();

  beginShape();
  vertex(width / 2 - 70, y + 5);
  bezierVertex(
    width / 2 - 70,
    y + 5,
    width / 2,
    y + 280,
    width / 2 + 70,
    y + 5
  );
  endShape();
}

function cyanBttn() {
  push();
  fill(94, 255, 215);
  //stroke(0, 204, 153);
  noStroke();
  strokeWeight(3);
  ellipse(windowWidth / 10, windowHeight / 5, 60, 60, 15);
  pop();
}

function drawShield() {
  noStroke();
  fill(102, 255, 255, 40);
  ellipse(x, y, 200, 200);
  fill(102, 255, 255, 20);
  ellipse(x, y, 250, 250);
}

function drawHealthbar() {
  strokeWeight(40);
  stroke(255, 255, 255, 80);
  line(900, 60, 600, 60);
  stroke(153, 255, 51);
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

function ufo(x, y) {
  noStroke();
  fill(0, 255, 255);

  let levitationdistance = 15;
  let levitate = levitationdistance * Math.sin(frameCount * 0.05);
  y += levitate;

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
