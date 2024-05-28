export default class Moon {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    let scaleFactor = min(width, height) / 1000; // Scale factor based on canvas size

    // No stroke for all shapes
    noStroke();

    // Gray circle
    fill(117, 117, 117);
    ellipse(
      width - 50 * scaleFactor,
      height / 2,
      800 * scaleFactor,
      800 * scaleFactor
    );

    // Nose
    beginShape();
    vertex(width - 400 * scaleFactor, height / 3);
    bezierVertex(
      width - 400 * scaleFactor,
      height / 3,
      width - 440 * scaleFactor,
      height / 2,
      width - 640 * scaleFactor,
      height / 1.95
    );
    bezierVertex(
      width - 640 * scaleFactor,
      height / 1.95,
      width - 560 * scaleFactor,
      height / 1.7,
      width - 400 * scaleFactor,
      height / 1.8
    );
    endShape();

    // Eye
    fill(198, 198, 198);
    ellipse(
      width - 280 * scaleFactor,
      height / 2.4,
      190 * scaleFactor,
      290 * scaleFactor
    );
    fill(255, 0, 116);
    ellipse(
      width - 305 * scaleFactor,
      height / 2.4,
      130 * scaleFactor,
      200 * scaleFactor
    );
    fill(54, 49, 68);
    ellipse(
      width - 335 * scaleFactor,
      height / 2.4,
      40 * scaleFactor,
      110 * scaleFactor
    );
    fill(255, 255, 255, 150);
    ellipse(
      width - 280 * scaleFactor,
      height / 2.7,
      100 * scaleFactor,
      130 * scaleFactor
    );

    // Craters
    fill(54, 49, 68);
    ellipse(
      width - 40 * scaleFactor,
      height / 5,
      150 * scaleFactor,
      120 * scaleFactor
    );
    ellipse(
      width - 70 * scaleFactor,
      height / 3.3,
      50 * scaleFactor,
      40 * scaleFactor
    );
    ellipse(
      width - 30 * scaleFactor,
      height / 3.5,
      20 * scaleFactor,
      15 * scaleFactor
    );
    ellipse(
      width - 60 * scaleFactor,
      height / 1.24,
      80 * scaleFactor,
      60 * scaleFactor
    );
    ellipse(
      width - 120 * scaleFactor,
      height / 1.28,
      40 * scaleFactor,
      30 * scaleFactor
    );
    ellipse(
      width - 280 * scaleFactor,
      height / 1.25,
      10 * scaleFactor,
      8 * scaleFactor
    );
    ellipse(
      width - 280 * scaleFactor,
      height / 1.28,
      23 * scaleFactor,
      18 * scaleFactor
    );
    ellipse(
      width - 260 * scaleFactor,
      height / 1.26,
      15 * scaleFactor,
      10 * scaleFactor
    );

    // Eyelid
    fill(117, 117, 117);
    beginShape();
    vertex(width - 240 * scaleFactor, height / 4);
    bezierVertex(
      width - 240 * scaleFactor,
      height / 4,
      width - 340 * scaleFactor,
      height / 2.7,
      width - 370 * scaleFactor,
      height / 3
    );
    bezierVertex(
      width - 370 * scaleFactor,
      height / 3,
      width - 340 * scaleFactor,
      height / 4,
      width - 240 * scaleFactor,
      height / 4
    );
    endShape();

    // Eye-Brow
    stroke(54, 49, 68);
    strokeWeight(18 * scaleFactor);
    fill(117, 117, 117);
    beginShape();
    vertex(width - 240 * scaleFactor, height / 4);
    bezierVertex(
      width - 240 * scaleFactor,
      height / 4,
      width - 340 * scaleFactor,
      height / 2.7,
      width - 370 * scaleFactor,
      height / 3
    );
    endShape();

    // Mouth
    stroke(54, 49, 68);
    noFill();
    strokeWeight(18 * scaleFactor);
    beginShape();
    vertex(width - 400 * scaleFactor, height / 1.45);
    bezierVertex(
      width - 400 * scaleFactor,
      height / 1.45,
      width - 160 * scaleFactor,
      height / 1.35,
      width - 100 * scaleFactor,
      height / 2
    );
    endShape();
    beginShape();
    vertex(width - 135 * scaleFactor, height / 2.15);
    bezierVertex(
      width - 135 * scaleFactor,
      height / 2.15,
      width - 135 * scaleFactor,
      height / 2,
      width - 95 * scaleFactor,
      height / 2
    );
    bezierVertex(
      width - 95 * scaleFactor,
      height / 2,
      width - 65 * scaleFactor,
      height / 2,
      width - 65 * scaleFactor,
      height / 2.15
    );
    endShape();

    // Nose Details
    fill(54, 49, 68);
    noStroke();
    ellipse(
      width - 485 * scaleFactor,
      height / 1.83,
      50 * scaleFactor,
      15 * scaleFactor
    );
    stroke(54, 49, 68);
    noFill();
    strokeWeight(18 * scaleFactor);
    beginShape();
    vertex(width - 440 * scaleFactor, height / 1.77);
    bezierVertex(
      width - 440 * scaleFactor,
      height / 1.77,
      width - 400 * scaleFactor,
      height / 1.85,
      width - 450 * scaleFactor,
      height / 1.95
    );
    endShape();
  }
}
