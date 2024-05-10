export default class Comet {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  updatePosition() {
    this.x += this.speed;
    this.y += this.speed;

    if (this.y > windowHeight + 100) {
      this.x = random(windowWidth);
      this.y = 0;
    }
  }

  draw() {
    push();
    stroke(255, 255, 255, 40);
    strokeWeight(10);
    line(this.x, this.y, this.x - 100, this.y - 100);
    pop();

    fill(255, 196, 94);
    noStroke();
    ellipse(this.x, this.y, 15, 15);
  }
}
