

var bullet,wall;
var speed, weight,thickness; 


function setup() {
  createCanvas(1600, 400);
	speed=random(223,321)
	weight=random(30,50)
	thickness=random(22,83)
	bullet=createSprite(50, 200, 50,50);   
	bullet.velocityX = speed;
	bullet.shapeColor="white";
	wall=createSprite(1500,200, 60, 200);
	
}


function draw() {
  background("black");

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
	if(damage>10)
	{
		wall.shapeColor="red";
	}

	if(damage<10 )
	{
		wall.shapeColor="green";
	}

  }
  drawSprites();
 
}


