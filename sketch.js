var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 800, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingrRect = createSprite(400, 100,80,30);
  movingrRect.shapeColor = "green";
  movingrRect.debug = true;
  movingrRect.velocityY = 5;
  fixedRect.velocityY = -5;

}

function draw() {
  background(0,0,0);
  movingRect.x=mouseX;
  movingRect.y=mouseY;  

  if (isTouching(movingRect,fixedRect)) {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  bounceOff(movingrRect,fixedRect)
  
  drawSprites();
}

function isTouching (object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2
    ) {
  return true;
}else{
  return false;
}
}

function bounceOff (object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2
    ) {
      object1.velocityX = movingRect.velocityX * (-1);
      object2.velocityX = fixedRect.velocityX * (-1);
      object1.velocityY = movingRect.velocityY * (-1);
      object2.velocityY = fixedRect.velocityY * (-1);
    }
  }