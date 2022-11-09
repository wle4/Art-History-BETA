let bx;
let by;
let boxSize = 150;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let bed;
function preload() {
  bed = loadImage('CHAIR1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bx = width / 5.0;
  by = height / 5.0;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(500);
if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
    }
  } else {
    overBox = false;
  }

  // Draw the box
  image(bed, bx, by, boxSize, boxSize);
}

function mousePressed() {
  if (overBox) {
    locked = true;
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (xOffset < 130)
  if (xOffset > 20) 
  if (yOffset > 20)
  if (yOffset < 130){
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;

}
