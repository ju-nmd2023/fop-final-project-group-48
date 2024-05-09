export default class Aura {
  constructor() {
    this.auraMove = 1800;
    this.direction = "forward";
  }

  bgcolor() {
    let scaleFactor = min(width, height) / 950; // Scale factor based on canvas size

    noStroke();
    fill(153, 0, 51, 30);
    ellipse(
      this.auraMove * scaleFactor,
      height / 2,
      1100 * scaleFactor,
      1100 * scaleFactor
    );
    fill(153, 0, 51, 20);
    ellipse(
      (this.auraMove - 80) * scaleFactor,
      height / 2,
      1300 * scaleFactor,
      1300 * scaleFactor
    );
    fill(153, 0, 51, 15);
    ellipse(
      (this.auraMove - 150) * scaleFactor,
      height / 2,
      1800 * scaleFactor,
      1800 * scaleFactor
    );
  }

  draw() {
    this.bgcolor();
    if (this.direction === "forward") {
      if (this.auraMove < 1830) {
        this.auraMove += 0.3;
      } else {
        this.direction = "backwards";
      }
    } else if (this.direction === "backwards") {
      if (this.auraMove > 1780) {
        this.auraMove -= 0.2;
      } else {
        this.direction = "forward";
      }
    }
  }
}
