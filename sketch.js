var speed = Math.random(55,90);
var weight = Math.random(400, 1500);
var deformation = (0.5 * weight * speed * speed) /22500
var car, wall;

function setup() {
  createCanvas(600,300);
  car = createSprite(100, 150, 30, 30);
  wall = createSprite(400,150, 20,70);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  
  if (car.x - wall.x < car.width/2 + wall.width/2 &&
    wall.x - car.x < car.width/2 + wall.width/2 &&
    car.y - wall.y < car.height/2 + wall.height/2 &&
    wall.x - car.x < car.height/2 + wall.height/2 )
    {
      car.velocityX = 0;

      if(deformation < 100)
      {
        car.shapeColor = color(0,255,0)
      } else if(deformation >=  100 && deformation < 180)
      {
        car.shapeColor = color(230,230,0)
      } else if(deformation > 180)
      {
        car.shapeColor = color(255,0,0)
      }
    }
  drawSprites();
}