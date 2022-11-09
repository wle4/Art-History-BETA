var bedX = 0;
var bedY = 0;

function preload() {
  img = loadImage("BED.png");
  bedroom = loadImage("bedroomm.jpg")
}

function mouseDragged() {
  if ((mouseX > bedX - 200) && (mouseX < bedX + 200)) {
  if ((mouseY > bedY - 200) && (mouseY < bedY + 200)) {
      bedX = mouseX-50;
      bedY = mouseY-50
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  image(img, bedX, bedY, 330, 330);
  
  {if (bedX > windowWidth/3 && bedY > windowHeight/5)
      background(bedroom);
      
    }
  
}
