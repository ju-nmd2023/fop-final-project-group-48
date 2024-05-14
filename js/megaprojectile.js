export default class MegaProjectile {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 120;
    this.height = 120;
  }

  updatePosition() {
    this.x -= this.speed;

    if (this.x < 0) {
      this.x = windowWidth;
      this.y = windowHeight / 2 + random(-200, 200);
    }
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
