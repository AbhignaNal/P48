var dog1, dog2;
var dog2Image;
var dog1Image;
var ballImage;
var ball;
var edges;
function preload(){
  dog2Image = loadImage("image-removebg-preview.png");
  dog1Image = loadImage("dog2.png");
  ballImage = loadImage("ball.png.png");
}
function setup() {
  createCanvas(800,400);
  dog1 = createSprite(100, 200, 50, 50);
  dog1.addImage(dog1Image);
  dog1.scale = 0.5;
  dog2 = createSprite(700, 200, 50, 50);
  dog2.addImage(dog2Image);
  dog2.scale = 0.4;
}

function draw() {
  background(255,255,255);  
  if(keyWentDown("space")){
    balls();
  }
  edges = createEdgeSprites();
  ball.bounceOff(edges);
  if(keyDown(RIGHT_ARROW)){
    dog1.velocityX = 4;
  }
  if(keyDown(LEFT_ARROW)){
    dog1.velocityX = -4;
  }
  if(keyWentUp(RIGHT_ARROW)){
    dog1.velocityX = 0;
  }
  if(keyWentUp(LEFT_ARROW)){
    dog1.velocityX = 0;
  }
  if(keyDown("d")){
    dog2.velocityX = 4;
  }
  if(keyDown("a")){
    dog2.velocityX = -4;
  }
  if(keyWentUp("d")){
    dog2.velocityX = 0;
  }
  if(keyWentUp("a")){
    dog2.velocityX = 0;
  }
  drawSprites();
}

function balls(){
  background(255);
  ball = createSprite(400, 150, 50, 50);
  ball.addImage(ballImage);
  ball.scale = 0.2;
  ball.velocityY = Math.round(random(4, -4));
  ball.velocityX = Math.round(random(4, -4));
}