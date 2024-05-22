export default class Projectile {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 160;
    this.height = 55;
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
    translate(80, 27);
    push();
    stroke(181, 51, 88, 90);
    strokeWeight(50);
    line(this.x - 50, this.y, this.x + 50, this.y);
    pop();
    fill(255, 0, 116);
    noStroke();
    ellipse(this.x - 50, this.y, 30, 30);
    //HITBOX
    // fill(0, 0, 255, 80);
    //rect(this.x, this.y, 160, 55);
    pop();
  }
}
