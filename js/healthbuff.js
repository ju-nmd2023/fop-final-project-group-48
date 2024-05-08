export default class HealthBuff {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
  }

  draw() {
    this.healthBuffObject();
  }

  healthBuffObject() {
    fill(102, 255, 153, 80);
    ellipse(this.x + 300, this.y, this.diameter, this.diameter);
    noStroke();
    fill(179, 255, 179);
    beginShape();
    vertex(this.x + 292.5, this.y - 21);
    vertex(this.x + 307.5, this.y - 21);
    vertex(this.x + 307.5, this.y - 7);
    vertex(this.x + 322, this.y - 7);
    vertex(this.x + 322, this.y + 7);
    vertex(this.x + 307.5, this.y + 7);
    vertex(this.x + 307.5, this.y + 21);
    vertex(this.x + 292.5, this.y + 21);
    vertex(this.x + 292.5, this.y + 7);
    vertex(this.x + 278, this.y + 7);
    vertex(this.x + 278, this.y - 7);
    vertex(this.x + 292.5, this.y - 7);
    endShape();
  }
}
