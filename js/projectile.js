export default class Projectile {
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
