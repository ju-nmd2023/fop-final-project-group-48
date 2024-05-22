export default class ShieldBuff {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.diameter = 80;
    this.speed = speed;
    this.width = 70;
    this.height = 70;
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
    //HITBOX
    //fill(255, 0, 0, 90);
    //rect(this.x, this.y, 70, 70);
  }

  shieldBuffObject() {
    noStroke();
    fill(102, 255, 255);
    beginShape();
    vertex(this.x - 20, this.y - 20);
    vertex(this.x - 10, this.y - 10);
    vertex(this.x + 0, this.y - 20);
    vertex(this.x + 10, this.y - 10);
    vertex(this.x + 20, this.y - 20);
    bezierVertex(
      this.x + 20,
      this.y - 20,
      this.x + 30,
      this.y + 10,
      this.x + 0,
      this.y + 27
    );
    bezierVertex(
      this.x + 0,
      this.y + 27,
      this.x - 30,
      this.y + 10,
      this.x - 20,
      this.y - 20
    );
    endShape();
  }

  liveshieldBuff() {
    let dsize = this.diameter * Math.sin(frameCount * 0.07);
    this.diameter += dsize / 160;
    fill(102, 255, 255, 80);
    square(this.x, this.y, this.diameter, this.diameter);
  }
}
