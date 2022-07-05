var bk,bkImg

var ship1,ship1Img
var ship2,ship2Img
var evilShip2,evilShip2Img
var evilShip1,evilShip1Img
var level = 1


var bulletGroup 
var evilShipGroup


var bullet

function preload(){
  ship1Img = loadImage("Ship1.png")
  evilShip1Img = loadImage("Evilship1.png")
  evilShip2Img = loadImage("Evilship2.png")
  bkImg = loadImage("spaceImage.jpg")
  
}

function setup() {
  createCanvas(800,400);
  bk = createSprite(0,0,800,400)
  bk.addImage(bkImg)
  bk.velocityY = 1
 
  ship1 =  createSprite(400,375,25,25)
 ship1.addImage(ship1Img)
 ship1.scale = 2

evilShipGroup = createGroup()
bulletGroup = createGroup()
}

function draw() {
  background(0);  
 
  
  text(mouseX +","+mouseY,100,100)
 
  if(ship1.x < 25){
    ship1.x = 25
  }
  if(ship1.x > width - 25){
    ship1.x = width - 25
  }
 
 
  if(keyDown(RIGHT_ARROW)){
   ship1.x = ship1.x + 9
 }
 if(keyDown(LEFT_ARROW)){
  ship1.x = ship1.x - 9
}

 evilShipSpawn()

 bulletSpawn()
 
if(bulletGroup.isTouching(evilShipGroup)){
  evilShipGroup[0].destroy()

}





  drawSprites();
}

function bulletSpawn(){
  if(keyDown("space") && frameCount % 20 === 0 ){
  bullet = createSprite(ship1.x,ship1.y,3,15)
  bullet.velocityY += -14
  bullet.shapeColor = "blue"
  bulletGroup.add(bullet)
  bullet.lifetime = 100
  }
}
function evilShipSpawn(){
  if(frameCount % 100 === 0){
    evilShip1 = createSprite(0,0,25,25)
    evilShip1.x = Math.round(random(25,775))
    evilShip1.addImage(evilShip1Img)
    evilShip1.scale = 1.5
    evilShip1.velocityY = evilShip1.velocityY += 2
    evilShipGroup.add(evilShip1)
    evilShip1.lifetime = 500 
  }
  if(level = 2 && frameCount %130 === 0){
    evilShip2 = createSprite(0,0,25,25)
    evilShip2.x = Math.round(random(25,775))
    evilShip2.addImage(evilShip2Img)
    evilShip2.scale = 1.5
    evilShip2.velocityY = evilShip2.velocityY += 2
    evilShipGroup.add(evilShip2)
    evilShip2.lifetime = 500
  }
}