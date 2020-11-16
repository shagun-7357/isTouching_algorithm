var mrect
var frect
function setup() {
  createCanvas(800,400);
  mrect=createSprite(250, 200, 50, 50);
  frect=createSprite(300,350,65,70);
  mrect.shapeColor="red"
  frect.shapeColor="red"
  mrect.debug=true;
  frect.debug=true;
}

function draw() {
  background("blue");  
  mrect.x=mouseX
  mrect.y=mouseY
  if(mrect.x-frect.x<mrect.width/2+frect.width/2 
  &&
  frect.x-mrect.x<mrect.width/2+frect.width/2
  &&
  frect.y-mrect.y<mrect.height/2+frect.height/2 
  &&
  mrect.y-frect.y<mrect.height/2+frect.height/2){
  mrect.shapeColor="white"
  frect.shapeColor="white" 
  }
  else{ 
  mrect.shapeColor="red"
  frect.shapeColor="red"
}

  drawSprites();
}