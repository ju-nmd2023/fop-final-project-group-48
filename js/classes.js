class Aura {
  constructor() {
    this.auraMove = 1800;
    this.direction = "forward";
  }

  bgcolor() {
    noStroke();
    fill(153, 0, 51, 30);
    ellipse(this.auraMove, height / 2, 1100, 1100);
    fill(153, 0, 51, 20);
    ellipse(this.auraMove - 80, height / 2, 1300, 1300);
    fill(153, 0, 51, 15);
    ellipse(this.auraMove - 150, height / 2, 1800, 1800);
  }

  drawAura() {
    this.bgcolor();
    if (this.direction === "forward") {
      if (this.auraMove < 1830) {
        this.auraMove += 0.3;
      } else {
        this.direction = "backwards";
      }
    } else if (this.direction === "backwards") {
      if (this.auraMove > 1780) {
        this.auraMove -= 0.2;
      } else {
        this.direction = "forward";
      }
    }
  }
}

class Ufo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.levitationdistance = 15;
    this.diameter = 225; // Initial diameter for shield
  }

  draw() {
    this.levitate();
    this.pulse();
    this.drawUFO();
    this.drawShield();
  }

  levitate() {
    let levitate = this.levitationdistance * Math.sin(frameCount * 0.05);
    this.y += levitate;
  }

  pulse() {
    let x = this.x;
    let y = this.y;

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

  drawUFO() {
    let x = this.x;
    let y = this.y;

    noStroke();
    fill(94, 255, 215);
    // Ship
    ellipse(x + 2, y + 2, 215, 82);
    // Cockpit
    fill(107, 136, 153);
    ellipse(x + 2, y - 20, 120, 30);
    // Cat
    push();
    fill(71, 71, 71);
    noStroke();
    rect(x - 30, y - 65, 60, 40, 9);
    // Ears
    beginShape();
    vertex(x + 2 + 30, y - 59);
    bezierVertex(x + 22, y - 91, x + 2 + 14, y - 60, x + 2 + 10, y - 65);
    endShape();
    beginShape();
    vertex(x - 30, y - 59);
    bezierVertex(x - 22, y - 91, x - 14, y - 60, x - 10, y - 65);
    endShape();
    // Cheeks
    beginShape();
    vertex(x - 30, y - 48);
    bezierVertex(x - 32, y - 47, x - 38, y - 45, x - 28, y - 28);
    endShape();
    beginShape();
    vertex(x + 30, y - 48);
    bezierVertex(x + 32, y - 47, x + 38, y - 45, x + 28, y - 28);
    endShape();
    // Eyes
    fill(255);
    noStroke();
    ellipse(x - 12, y - 50, 16, 14);
    fill(204, 153, 255);
    ellipse(x - 11, y - 50, 11);
    fill(255);
    ellipse(x - 9, y - 52, 4);
    noStroke();
    ellipse(x + 12, y - 50, 16, 14);
    fill(204, 153, 255);
    ellipse(x + 11, y - 50, 11);
    fill(255);
    ellipse(x + 13, y - 52, 4);
    // Mouth
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
    // Scarf
    fill(247, 147, 30);
    noStroke();
    rect(x - 28.5, y - 25, 58, 19, 8);
    pop();
    // Paws
    fill(50, 50, 50);
    ellipse(x + 13, y - 12.5, 17, 15);
    ellipse(x - 11, y - 12.5, 17, 15);
    fill(223, 159, 191);
    // Toe beans - right
    ellipse(x + 13.5, y - 9, 6, 4);
    ellipse(x + 16, y - 14, 3.5, 3.3);
    ellipse(x + 12, y - 15, 3.5, 3.3);
    ellipse(x + 8.8, y - 12, 3.5, 3.3);
    // Toe beans - left
    ellipse(x - 11.5, y - 9, 6, 4);
    ellipse(x - 15, y - 14, 3.5, 3.3);
    ellipse(x - 11, y - 15, 3.5, 3.3);
    ellipse(x - 7, y - 13, 3.5, 3.3);
  }

  drawShield() {
    let x = this.x;
    let y = this.y;
    push();
    stroke(102, 255, 255, 30);
    strokeWeight(30);
    fill(102, 255, 255, 70);
    ellipse(x, y - 15, this.diameter, this.diameter / 1);
    pop();
  }
}

class Moon {
  constructor() {}

  drawMoon() {
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

    // Eye
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
}

class HealthBuff {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
  }

  draw() {
    this.healthBuffObject();
  }

  healthBuffObject() {
    fill(102, 255, 153, 80);
    ellipse(this.x + 300, this.y, this.diameter, this.diameter);
    noStroke();
    fill(179, 255, 179);
    beginShape();
    vertex(this.x + 292.5, this.y - 21);
    vertex(this.x + 307.5, this.y - 21);
    vertex(this.x + 307.5, this.y - 7);
    vertex(this.x + 322, this.y - 7);
    vertex(this.x + 322, this.y + 7);
    vertex(this.x + 307.5, this.y + 7);
    vertex(this.x + 307.5, this.y + 21);
    vertex(this.x + 292.5, this.y + 21);
    vertex(this.x + 292.5, this.y + 7);
    vertex(this.x + 278, this.y + 7);
    vertex(this.x + 278, this.y - 7);
    vertex(this.x + 292.5, this.y - 7);
    endShape();
  }
}

class ShieldBuff {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
  }

  draw() {
    this.shieldBuffObject();
  }

  shieldBuffObject() {
    fill(102, 255, 255, 80);
    ellipse(this.x + 200, this.y, this.diameter, this.diameter);
    noStroke();
    fill(102, 255, 255);
    beginShape();
    vertex(this.x + 178, this.y - 20);
    vertex(this.x + 190, this.y - 12);
    vertex(this.x + 200, this.y - 20);
    vertex(this.x + 210, this.y - 12);
    vertex(this.x + 223, this.y - 20);
    bezierVertex(
      this.x + 223,
      this.y - 20,
      this.x + 230,
      this.y + 15,
      this.x + 200,
      this.y + 27
    );
    bezierVertex(
      this.x + 200,
      this.y + 27,
      this.x + 170,
      this.y + 15,
      this.x + 178,
      this.y - 20
    );
    endShape();
  }
}

class Projectile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    push();
    stroke(181, 51, 88, 90);
    strokeWeight(50);
    line(this.x, this.y, this.x + 100, this.y);
    pop();
    fill(255, 0, 116);
    noStroke();
    ellipse(this.x, this.y, 30, 30);
  }
}

class MegaProjectile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    push();
    stroke(255, 151, 0, 90);
    strokeWeight(120);
    line(this.x, this.y, this.x + 100, this.y);
    pop();
    fill(250, 218, 0);
    noStroke();
    ellipse(this.x, this.y, 80, 80);
  }
}

//export { Aura, Ufo, Moon, HealthBuff, ShieldBuff, Projectile, MegaProjectile };
export { Aura };
