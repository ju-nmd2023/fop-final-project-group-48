export default class Aura {
  constructor() {
    this.auraMove = 1800;
    this.direction = "forward";
  }

  bgcolor() {
    let scaleFactor = min(width, height) / 950; // Scale factor based on canvas size

    noStroke();
    fill(153, 0, 51, 35);
    stroke(255, 0, 116, 20);
    strokeWeight(80);
    ellipse(
      this.auraMove * scaleFactor,
      height / 2,
      1100 * scaleFactor,
      1100 * scaleFactor
    );
    noStroke();
    fill(153, 0, 51, 30);
    ellipse(
      (this.auraMove - 25) * scaleFactor,
      height / 2,
      1400 * scaleFactor,
      1400 * scaleFactor
    );
    fill(153, 0, 51, 30);
    ellipse(
      (this.auraMove - 150) * scaleFactor,
      height / 2,
      1600 * scaleFactor,
      1600 * scaleFactor
    );
  }

  draw() {
    this.bgcolor();
    if (this.direction === "forward") {
      if (this.auraMove < 1900) {
        this.auraMove += 0.3;
      } else {
        this.direction = "backwards";
      }
    } else if (this.direction === "backwards") {
      if (this.auraMove > 1800) {
        this.auraMove -= 0.2;
      } else {
        this.direction = "forward";
      }
    }
  }
}
