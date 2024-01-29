
function preload(){

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
    drawSprites();

 
}
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png");
spriteName.addImage(seaImg);
 
if(sea.x < 0){
  sea.x = sea.width/2;
  }
