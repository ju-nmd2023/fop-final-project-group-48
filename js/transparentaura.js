export default class transparentAura {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 800;
    this.height = 800;
  }

  draw() {
    noStroke();
    fill(0, 255, 0, 0);
    rect(this.x, this.y, 800, windowHeight);
  }
}
