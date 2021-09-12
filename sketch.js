var bg, spc, spc2, spc3, spc4, issimg;
var iss, spacecraft, hasDocked = false;

function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285,350,50,50);
  spacecraft.addImage(spc);
  spacecraft.scale = 0.15;

  iss = createSprite(330, 130);
  iss.addImage(issimg)
  iss.scale = 0.55;

}

function preload() {
bg = loadImage("spacebg.jpg");
spc = loadImage("spacecraft1.png");
spc2 = loadImage("spacecraft2.png");
spc3 = loadImage("spacecraft3.png");
spc4 = loadImage("spacecraft4.png");
issimg = loadImage("iss.png");

}

function draw() {
  background(bg);  
spacecraft.addImage(spc);
if(!hasDocked) {
  spacecraft.x = spacecraft.x + random(-1,1);

  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y - 2;
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spc2);
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(spc4);
    spacecraft.x = spacecraft.x - 2;
  }
 
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spc3)
    spacecraft.x = spacecraft.x + 2;
  }
}

 if(spacecraft.y<=(iss.y + 70) && spacecraft.x<=(iss.x - 10)){
hasDocked=true;

textSize(25);
fill("white");
text("Docking Successful", 200,300)

 }
  drawSprites();
}