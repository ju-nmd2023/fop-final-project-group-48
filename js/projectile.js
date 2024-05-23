export default class Projectile {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 160;
    this.height = 55;
    this.diameter = 50;
  }

  updatePosition() {
    this.x -= this.speed;

    if (this.x < 0) {
      this.x = windowWidth;
      this.y = windowHeight / 2 + random(-480, 480);
    }
  }

  draw() {
    push();
    translate(50, 0);
    push();
    stroke(181, 51, 88, 90);
    strokeWeight(50);
    line(this.x - 50, this.y, this.x + 50, this.y);
    pop();
    fill(255, 0, 116);
    noStroke();
    ellipse(this.x - 50, this.y, 30, 30);
    pop();

    //HITBOX
    //fill(0, 0, 255, 80);
    //ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
