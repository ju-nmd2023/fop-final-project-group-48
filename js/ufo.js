export default class Ufo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 225; // Initial diameter for shield
    this.width = 150;
    this.height = 82;
    this.levitationdistance = 1;
    //this.shieldActive = false;
  }

  draw() {
    this.levitate();
    this.drawUfo();
    //HITBOX
    //fill(255, 0, 0, 90);
    //ellipse(this.x, this.y, 150, 82);
  }

  drawUfo() {
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
    noStroke();
    ellipse(x - 11, y - 50, 11);
    fill(255);
    ellipse(x - 9, y - 52, 4);
    noStroke();
    ellipse(x + 12, y - 50, 16, 14);
    fill(204, 153, 255);
    noStroke();
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
    // Glass
    fill(169, 196, 195, 50);
    noStroke();
    beginShape();
    vertex(x - 60, y - 10);
    bezierVertex(x - 53, y - 110, x + 47, y - 110, x + 60, y - 20);
    bezierVertex(x + 60, y, x - 60, y, x - 60, y - 20);
    endShape();
    // Reflection
    fill(255, 254, 217, 50);
    beginShape();
    vertex(x - 25, y - 25);
    bezierVertex(x - 30, y - 100, x + 40, y - 90, x + 53, y - 30);
    bezierVertex(x + 55, y + 5, x - 30, y - 10, x - 10, y);
    endShape();
  }

  levitate() {
    let levitate = this.levitationdistance * Math.sin(frameCount * 0.05);
    this.y += levitate;
  }

  /*
  drawShield() {
    push();
    stroke(102, 255, 255, 30);
    strokeWeight(30);
    fill(102, 255, 255, 70);
    ellipse(this.x, this.y - 15, this.diameter + 5, this.diameter + 5);
    pop();
  }

  liveShield() {
    let dsize = this.diameter * Math.sin(frameCount * 0.07);
    this.diameter += dsize / 180; // Adjust the divisor to reduce the effect
  }
  */

  toggleShield() {
    this.shieldActive = !this.shieldActive;
  }
}
