var bedX = 0;
var bedY = 0;
let s = 'Ambrogio Lorenzetti made this panel in part of a series of panels to demonstrate the government during this time. It shows a polar contrast of different. This panel shows good government, whereas another panel shows bad government. The other painting shows lots of crime, whereas this painting shows less.';

function preload() {
  img = loadImage("12.png");
  base = loadImage("kingdom.jpg")
}

function mouseDragged() {
  if ((mouseX > bedX - 200) && (mouseX < bedX + 200)) {
  if ((mouseY > bedY - 200) && (mouseY < bedY + 200)) {
      bedX = mouseX-40;
      bedY = mouseY-40
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(190);

  image(img, bedX, bedY, 150, 150);
  rect(260, 200, 100, 100)
  fill(100); 
  fill(100,50); 
  fill(0,0,255);
  fill(0,0,255,50);
  
  {if (bedX > 260 && bedY > 200 && bedX < 310 && bedY < 250)
    background(base); }
  {if (bedX > 260 && bedY > 200 && bedX < 310 && bedY < 250)
    fill(240,248,255)
  {if (bedX > 260 && bedY > 200 && bedX < 310 && bedY < 250)
    text(s, windowWidth/5, windowHeight/3, 350, 450); 
    textFont('Georgia');
    textSize(15)
    textStyle(BOLD);
  }

   
  }

  
}
//https://www.britannica.com/biography/Tutankhamun
