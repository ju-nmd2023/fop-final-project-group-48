export default class HealthBuff {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.diameter = 80;
    this.speed = speed;
    this.width = 50;
    this.height = 50;
  }

  updatePosition() {
    this.x -= this.speed;

    if (this.x < 0) {
      this.x = windowWidth;
      this.y = random(windowHeight);
    }
  }

  draw() {
    this.healthBuffObject();
  }

  healthBuffObject() {
    noStroke();
    fill(179, 255, 179);
    beginShape();
    vertex(this.x - 7.5, this.y - 21);
    vertex(this.x + 7.5, this.y - 21);
    vertex(this.x + 7.5, this.y - 7);
    vertex(this.x + 22, this.y - 7);
    vertex(this.x + 22, this.y + 7);
    vertex(this.x + 7.5, this.y + 7);
    vertex(this.x + 7.5, this.y + 21);
    vertex(this.x - 7.5, this.y + 21);
    vertex(this.x - 7.5, this.y + 7);
    vertex(this.x - 22, this.y + 7);
    vertex(this.x - 22, this.y - 7);
    vertex(this.x - 7.5, this.y - 7);
    endShape();
  }

  livehpBuff() {
    let dsize = this.diameter * Math.sin(frameCount * 0.07);
    this.diameter += dsize / 150;
    fill(102, 255, 153, 80);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
