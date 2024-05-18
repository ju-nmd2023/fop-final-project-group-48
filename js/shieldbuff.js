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
  }

  shieldBuffObject() {
    fill(102, 255, 255, 80);
    ellipse(this.x + 190, this.y - 10, this.diameter, this.diameter);
    noStroke();
    fill(102, 255, 255);
    beginShape();
    vertex(this.x + 170, this.y - 30);
    vertex(this.x + 180, this.y - 20);
    vertex(this.x + 190, this.y - 30);
    vertex(this.x + 200, this.y - 20);
    vertex(this.x + 210, this.y - 30);
    bezierVertex(
      this.x + 210,
      this.y - 30,
      this.x + 220,
      this.y + 0,
      this.x + 190,
      this.y + 17
    );
    bezierVertex(
      this.x + 190,
      this.y + 17,
      this.x + 160,
      this.y + 0,
      this.x + 170,
      this.y - 30
    );
    endShape();
  }

  liveshieldBuff() {
    let dsize = this.diameter * Math.sin(frameCount * 0.07);
    this.diameter += dsize / 150;
  }
}
