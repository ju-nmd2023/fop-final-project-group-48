export default class ShieldBuff {
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
    this.shieldBuffObject();
    this.liveshieldBuff();
  }

  shieldBuffObject() {
    noStroke();
    fill(102, 255, 255);
    beginShape();
    vertex(this.x - 20, this.y - 30);
    vertex(this.x - 10, this.y - 20);
    vertex(this.x + 0, this.y - 30);
    vertex(this.x + 10, this.y - 20);
    vertex(this.x + 20, this.y - 30);
    bezierVertex(
      this.x + 20,
      this.y - 30,
      this.x + 30,
      this.y + 0,
      this.x + 0,
      this.y + 17
    );
    bezierVertex(
      this.x + 0,
      this.y + 17,
      this.x - 30,
      this.y + 0,
      this.x - 20,
      this.y - 30
    );
    endShape();
  }

  liveshieldBuff() {
    let dsize = this.diameter * Math.sin(frameCount * 0.07);
    this.diameter += dsize / 150;
    fill(102, 255, 255, 80);
    ellipse(this.x, this.y - 10, this.diameter, this.diameter);
  }
}
