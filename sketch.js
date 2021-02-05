//Create variables here
var dog, happyDog, database, foodS, foodStock, dogIMG, happpyDogIMG; 
function preload()
{
  //load images here
  dogIMG= loadImage("Dog.png")
  happpyDogIMG= loadImage("happydog.png")
}

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  dog= createSprite(300,250,20,20);
  dog.addImage(dogIMG);
  dog.scale= 0.2;
}


function draw() {  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happpyDogIMG);
  }
  drawSprites();
  //add styles here
  textSize(10);
  fill("green");
  stroke(3);
  text("Note: Press UP_ARROW To Feed Drago Milk");
}

function readStock(data){
  foodS= data.val();
}

function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x+1;
  }
  database.ref('/').update({
    Food:x
  })
}