var wall,thickness;
var bullet,speed,weight;

function setup(){
  thickness = random(23,83)
  wall = createsprite(1200,200,thickness,heigtht/2);
  wall.shapecolour("orange")
  speed = random(223,321)
  weight = random(30,52)
  bullet.shapecolour("blue")
}

function draw(){
  background(0,0,0)
  if(isTouching(bullet,wall)){
    bullet.shapecolour = ("green")
    wall.shapecolour = ("purple")
  }
  else{
    bullet.shapecolour("blue")
    bullet.shapecolour("orange")
  }
  drawsprits();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftedge = wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
if(hasCollidedd(bullet,wall)){
  bullet.velocityX (0) ;
  var damage = 0.5 *weight *speed*(thickness*thickness*thickness);
  if(damage>10){
    wall.shapecolour=colour(255,0,0);

  }
  if(damage<10){
    wall.shapecolour=colour(0,255,0);
  }
}