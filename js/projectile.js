export default class Projectile {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 150;
    this.height = 80;
  }

  updatePosition() {
    this.x -= this.speed;

    if (this.x < 0) {
      this.x = windowWidth;
      this.y = random(windowHeight);
    }
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
