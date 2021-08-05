var astronaut;
var bath,brush,drink,eat,gym,move,sleep;
var bg,bgImg;

function preload() {
  bgImg = loadImage("iss.png");
  bath = loadAnimation("bath1.png","bath2.png");
  brush = loadAnimation("brush.png");
  drink = loadAnimation("drink1.png","drink2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  move = loadAnimation("move.png");
  sleep = loadAnimation("sleep.png");
}

function setup() {
  
  createCanvas(1000, 600);
  
  bg=createSprite(500,300)
  bg.addImage("iss",bgImg);
  bg.scale=0.2;

  astronaut = createSprite(500,300);
  astronaut.addAnimation("sleep",sleep);
  astronaut.scale=0.15;
}

function draw() {
  
  background(220);
  
  drawSprites();

  textSize(40);
  fill("yellow");
  text("Instructions:",15,35);
  textSize(28);
  text("Up Arrow = Brushing",15,60);
  text("Down Arrow = Gymming",15,90);
  text("Left Arrow = Eating",15,120);
  text("Right Arrow = Drinking",15,150);
  text("B Key = Bathing",15,180);
  text("M Key = Moving",15,210);
  text("S key = Sleeping",15,240);

  edges= createEdgeSprites();
  astronaut.bounceOff(edges);

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brush",brush);
    astronaut.changeAnimation("brush",brush);
    astronaut.y = 350;
    astronaut.x = 500;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym",gym);
    astronaut.changeAnimation("gym",gym);
    astronaut.y = 350;
    astronaut.x = 500;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eat",eat);
    astronaut.changeAnimation("eat",eat);
    astronaut.y = 350;
    astronaut.velocityX=3;
    astronaut.velocityY=3;
  }
  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("drink",drink);
    astronaut.changeAnimation("drink",drink);
    astronaut.y = 350;
    astronaut.x = 500;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if (keyDown("b")){
    astronaut.addAnimation("bath",bath);
    astronaut.changeAnimation("bath",bath);
    astronaut.y = 350;
    astronaut.x = 500;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if (keyDown("m")){
    astronaut.addAnimation("move",move);
    astronaut.changeAnimation("move",move);
    astronaut.y = 350;
    astronaut.x = 500;
    astronaut.velocityX=3;
    astronaut.velocityY=3;
  }
  if (keyDown("s")){
    astronaut.addAnimation("sleep",sleep);
    astronaut.changeAnimation("sleep",sleep);
    astronaut.y = 350;
    astronaut.x = 500;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
}