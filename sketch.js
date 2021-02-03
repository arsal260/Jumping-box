var canvas;
var music;
var block1,block2,block3,block4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,400);
 //create 4 different surfaces
block1=createSprite(100,392,150,15);
block2=createSprite(300,392,150,15);
block3=createSprite(500,392,150,15);
block4=createSprite(700,392,150,15);

    //create box sprite and give velocity
    box=createSprite(400,200,50,50)
    box.velocityX=-4;
    box.velocityY=5;

    block1.shapeColor="green";
    block2.shapeColor="green";
    block3.shapeColor="green";
    block4.shapeColor="green";
    box.shapeColor="green"
    
}


function draw() {
    background(rgb(169,169,169));
   
  if(block1.isTouching(box)&&box.bounceOff(block1)){
      block1.shapeColor="blue";
      box.shapeColor="blue";
      box.velocityX=0;
     box.velocityY=0;
    }
  if(block2.isTouching(box)&&box.bounceOff(block2)){
    block2.shapeColor="orange";
    box.shapeColor="orange";
}
if(block3.isTouching(box)&&box.bounceOff(block3)){
    block3.shapeColor="red";
    box.shapeColor="red";

}
if(block4.isTouching(box)&&box.bounceOff(block4)){
    block4.shapeColor="green";
    box.shapeColor="green";
    music.play();
}




edges=createEdgeSprites();

 box.bounceOff(edges);   
    //add condition to check if box touching surface and make it box
   drawSprites();
}
