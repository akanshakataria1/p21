var bullet,wall,thickness;
var speed , weight;


function setup(){
createCanvas (1600,400);


bullet=createSprite(223,321);
weight=random(30,52);
bullet.velocityX=speed;
    
}

function draw(){
    background ("black");

if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
if (deformation>180){
    bullet.shapecolor="white";
}
if (deformation<180 && deformation >100){
    bullet.shapecolor="white";
}
}


if(hasCollided(bullet,wall))
{
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10)
    {
        wall.shapecolor="red";
    }
    if (damage<10)
    {
        wall.shapecolor="green";
    }
}
drawSprites();
}   

function hasCollided(1bullet,1wall){
    bulletRightEdge=1bullet.x+1bullet.width;
    w2allLeftEdge=1wall.x;
    if (bulletRightEdge>=wallLeftEdge){
        return true
    }      
    return false;===                                                                         
}











