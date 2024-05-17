export default class ShieldBuff {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.diameter = 90;
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

  liveshieldBuff() {
    let dsize = this.diameter * Math.sin(frameCount * 0.07);
    this.diameter += dsize / 150;
  }
}
