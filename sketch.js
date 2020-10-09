
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground

var score

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("white");
  
  if(keyDown("space")&&monkey.y >= 300) {
        monkey.velocityY = -15;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
   monkey.collide(ground);
  
  if(ground.x < 0) {
    ground.x = ground.width/2;
  }
  
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: ", + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100, 50);
  
  food();
  obstacles();
  
  drawSprites();
}

function food() {
  if(frameCount % 80 === 0) {
    var banana = createSprite(300, 165, 20, 20);
    banana.y = Math.round(random(150, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
    banana.lifetime = 80;
    
    FoodGroup.add(banana);
  }
}
function obstacles() {
  if(frameCount % 300 === 0) {
    var obstacles = createSprite(300, 315, 20, 20);
    obstacles.addImage(obstaceImage);
    obstacles.velocityX = -4;
    obstacles.scale = 0.15;
    
    obstacles.lifetime = 80;
    
    obstacleGroup.add(obstacles);
  }
}