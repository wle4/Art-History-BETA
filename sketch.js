var bedX = 0;
var bedY = 0;
let s = 'Van Gogh made this painting to represent his bedroom. Although a bedroom should make a person feel comfort, the contrasting colors almost feel anxious and restless. The flatness of the painting was with intent. He was inspired by Japanese prints in this painting';

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
  rect(windowWidth/2, windowHeight/3, 200, 200)
  fill(100); 
  fill(100,50); 
  fill(0,0,255);
  fill(0,0,255,50);
  
  {if (bedX > windowWidth/3 && bedY > windowHeight/5)
    background(bedroom); }
  {if (bedX > windowWidth/3 && bedY > windowHeight/5)
    fill(0)
  {if (bedX > windowWidth/3 && bedY > windowHeight/5)
    text(s, windowWidth/5, windowHeight/1.5, 350, 500); 
    textFont('Georgia');
    textSize(15)
    textStyle(BOLD);
  }

   
  }

  
}
