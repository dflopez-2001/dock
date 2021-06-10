var spaceship, spaceshipimg;
var spaceshipleft, spaceshipright, spaceshipup;
var dockImg;
var dock;
var dockspot;
var hasDocked;
function preload() {
    spaceshipimg = loadImage("spacecraft1.png");
    spaceshipup = loadImage("spacecraft2.png");
    spaceshipleft = loadImage("spacecraft3.png");
    spaceshipright = loadImage("spacecraft4.png");
    dockImg = loadImage("iss.png");
    hasDocked = 0;
}
function setup() {
  createCanvas(800,400);

  dockspot = createSprite(400,100,45,45);
  spaceship = createSprite(150, 350, 50, 50);
  spaceship.addImage(spaceshipimg);
  spaceship.scale = 0.1
  dock = createSprite(400,100,45,45);
  dock.addImage(dockImg);

}

function draw() {  

  background(0,0,0);  

  if(keyDown("up_arrow")){
    spaceship.velocityY = spaceship.velocityY-0.1
    spaceship.addImage(spaceshipup);
  }

  if(keyDown("down_arrow")){
    spaceship.velocityY = spaceship.velocityY+0.1
    spaceship.addImage(spaceshipimg);
  }

  if(keyDown("left_arrow")){
    spaceship.velocityX = spaceship.velocityX-0.1
    spaceship.addImage(spaceshipright);
  }
  if(keyDown("right_arrow")){
    spaceship.velocityX = spaceship.velocityX+0.1
    spaceship.addImage(spaceshipleft);
  }
  if(spaceship.isTouching(dockspot)){
    hasDocked = true
  }

 if(hasDocked === true){
   text("Docking Successful!",400,250,100,100)
   spaceship.velocityY =0
   spaceship.velocityX = 0
 }



  drawSprites();
}
