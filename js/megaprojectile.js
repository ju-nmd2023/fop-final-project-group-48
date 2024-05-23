export default class MegaProjectile {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 200;
    this.height = 150;
    this.diameter = 150;
  }

  updatePosition() {
    this.x -= this.speed;

    if (this.x < 0) {
      this.x = windowWidth;
      this.y = windowHeight / 2 + random(-350, 350);
    }
  }

  draw() {
    push();
    translate(20, 0);
    push();
    stroke(255, 151, 0, 90);
    strokeWeight(150);
    line(this.x - 25, this.y, this.x + 75, this.y);
    pop();
    fill(250, 218, 0);
    noStroke();
    ellipse(this.x - 25, this.y, 100, 100);
    pop();

    //HITBOX
    //fill(0, 0, 255, 80);
    //ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
