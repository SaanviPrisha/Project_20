var car, wall;
var speed,wight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  wight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.debug = true;

  wall = createSprite(1500, 200, 60, height/2);
  wall.debug = true;

}

function draw() {
  background(0, 0, 0);  

  car.velocityX = speed;


  drawSprites();
}