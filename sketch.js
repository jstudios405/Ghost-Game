var doorsGroup

var ghostImage
var climberImage 
var doorImage
var towerImage

var ghost
var climber
var door
var tower
 
var play = 1
var end = 0
var gameState = play

function preload(){
  ghostImage = loadImage("ghost-standing.png")
  climberImage = loadImage("climber.png")
  doorImage = loadImage("door.png")
  towerImage = loadImage("tower.png")
}


function setup() {
  createCanvas(800,600);
   tower = createSprite(300,50,800,900);
  tower.addImage(towerImage);
  tower.velocityY = 1
  
  ghost = createSprite(50,50,50,50);
  ghost.addImage(ghostImage);
  ghost.scale = 0.5
  
 doorsGroup = new Group ();
}

function draw() {
if (gameState == play){
  spawnDoors();
  if (tower.y > 600){
    tower.y = tower.height / 2
  }
  if (keyDown("space")){
    ghost.velocityY = -15
  }
  if(keyDown("right")){
    ghost.velocityX = 3
  }
  else if(keyDown("left")){
    ghost.velocityX = -3
  }
  else{
    ghost.velocityX = 0
  }
  ghost.velocityY = ghost.velocityY + 1
  if (doorsGroup.isTouching(ghost)){
    gameState = end
  }
  drawSprites();
}
  else if (gameState == end){
    background("black")
    fill("yellow")
    stroke("yellow")
    textSize(30)
    text("Game Over",350,280)
    
  }
}

function spawnDoors() {
  if(frameCount % 100 === 0) {
    door = createSprite (400,0,10,10);
    door.x = Math.round(random(40,550));
    door.addImage(doorImage);
    door.velocityY = 1
    climber = createSprite (400,door.y + 50,10,10);
    climber.x = door.x
    climber.addImage(climberImage);
    climber.velocityY = 1
    doorsGroup.add(door);
  }
}