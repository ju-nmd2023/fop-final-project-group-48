export default class Moon {
  constructor() {}

  drawMoon() {
    noStroke();
    fill(117, 117, 117);
    ellipse(width - 50, height / 2, 800, 800);

    // Nose
    beginShape();
    vertex(width - 400, height / 3);
    bezierVertex(
      width - 400,
      height / 3,
      width - 440,
      height / 2,
      width - 640,
      height / 1.95
    );
    bezierVertex(
      width - 640,
      height / 1.95,
      width - 560,
      height / 1.7,
      width - 400,
      height / 1.8
    );
    endShape();

    // Eye
    fill(198, 198, 198);
    ellipse(width - 280, height / 2.4, 190, 290);
    fill(255, 0, 116);
    ellipse(width - 305, height / 2.4, 130, 200);
    fill(54, 49, 68);
    ellipse(width - 335, height / 2.4, 40, 110);
    fill(255, 255, 255, 150);
    ellipse(width - 280, height / 2.7, 100, 130);

    // Craters
    fill(54, 49, 68);
    ellipse(width - 40, height / 5, 150, 120);
    ellipse(width - 70, height / 3.3, 50, 40);
    ellipse(width - 30, height / 3.5, 20, 15);
    ellipse(width - 60, height / 1.24, 80, 60);
    ellipse(width - 120, height / 1.28, 40, 30);
    ellipse(width - 280, height / 1.25, 10, 8);
    ellipse(width - 280, height / 1.28, 23, 18);
    ellipse(width - 260, height / 1.26, 15, 10);

    // Eyelid
    fill(117, 117, 117);
    beginShape();
    vertex(width - 240, height / 4);
    bezierVertex(
      width - 240,
      height / 4,
      width - 340,
      height / 2.7,
      width - 370,
      height / 3
    );
    bezierVertex(
      width - 370,
      height / 3,
      width - 340,
      height / 4,
      width - 240,
      height / 4
    );
    endShape();

    // Eye-Brow
    stroke(54, 49, 68);
    strokeWeight(18);
    fill(117, 117, 117);
    beginShape();
    vertex(width - 240, height / 4);
    bezierVertex(
      width - 240,
      height / 4,
      width - 340,
      height / 2.7,
      width - 370,
      height / 3
    );
    endShape();

    // Mouth
    stroke(54, 49, 68);
    noFill();
    strokeWeight(18);
    beginShape();
    vertex(width - 410, height / 1.45);
    bezierVertex(
      width - 410,
      height / 1.45,
      width - 160,
      height / 1.35,
      width - 100,
      height / 2
    );
    endShape();
    beginShape();
    vertex(width - 135, height / 2.15);
    bezierVertex(
      width - 135,
      height / 2.15,
      width - 135,
      height / 2,
      width - 95,
      height / 2
    );
    bezierVertex(
      width - 95,
      height / 2,
      width - 65,
      height / 2,
      width - 65,
      height / 2.15
    );
    endShape();

    // Nose Details
    fill(54, 49, 68);
    noStroke();
    ellipse(width - 485, height / 1.83, 50, 15);
    stroke(54, 49, 68);
    noFill();
    strokeWeight(18);
    beginShape();
    vertex(width - 440, height / 1.77);
    bezierVertex(
      width - 440,
      height / 1.77,
      width - 400,
      height / 1.85,
      width - 450,
      height / 1.95
    );
    endShape();
  }
}
