var particles =[];
var plinkos = [];
var division = [];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground = new Ground(600,height,1200,20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  for(var k = 0; k <=width; k = k+80){
    division.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }
  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  ground.display();
}