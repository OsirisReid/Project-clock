// Creating the seconds,miniutes, and hours.
let cx, cy;
let hr = hour();
let mn = minute();
let sc = second();
let clockDiameter;



function setup() {
  stroke(255);
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(230); 


  // Draw the clock background
  noStroke();
  fill(155, 155, 155);
  ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
  fill(237, 34, 93);
  ellipse(cx, cy, clockDiameter, clockDiameter);

  // Angles and half PI
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
  let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

  // Draw the hands of the clock
  stroke(255);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * sc, cy + sin(s) * sc);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * mn, cy + sin(m) * mn);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hr, cy + sin(h) * hr);

  // Draw the minute ticks
  strokeWeight(2);
  beginShape(POINTS);
  for (let a = 0; a < 360; a += 6) {
    let angle = radians(a);
    let x = cx + cos(angle) * sc;
    let y = cy + sin(angle) * sc;
    vertex(x, y);
  }
  endShape();


  drawSprites();
}