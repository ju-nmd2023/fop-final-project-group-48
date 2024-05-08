export default class MegaProjectile {
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
