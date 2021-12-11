/* Gotta say, Javascript has been an EXPIRIENCE to code in. This language has no object/class usage, no instancing, 
and no collision handling. I really took these things for granted! */


var playerX = 100;
var playerY = 100;
var obstacleY = 0;
var obstacleX = 0;
var vsp = 20;
var hsp = 10;
var onGround = false;
var youWon = false;
var obPlaced = false;
var placeX = 0;
var placeY = 0;
var obX = [];
var obY = [];
var obD = [];
var sinX = 0;

//hatred hatred the syntax for this language is so loose i feel like im writing POETRY
//Anyways heres some code

//This code generates the player object using input variables (usually the playerX and playerY generated through input)
function playerObject(playerXinput, playerYinput, size){
    fill(255,0,0);
    circle(playerXinput, playerYinput, size);
}

//This code generates an obstacle object. The object has no collision, because this hell language API has no collision checks and i am too tired to write my own.
function obstacleObject( obstacleXin,obstacleYin, sizeX, sizeY){
  rect(obstacleXin + obstacleX, obstacleYin + obstacleY, sizeX, sizeY)
}

//Moves obstacles with a constant speed and checks their collision with the edge of the screen.
function obstacleMove(){
  obstacleX = obstacleX + 10;
  obstacleY = obstacleY + 10;
  if(obstacleY >= 890){
    obstacleY = -200;
  }
  if(obstacleX >= 1200){
    obstacleX = -200;
  }
}

//Wrote my own input handler. Hated the entire process. This isn't a problem with Javascript, I hate doing this in C++ too
function keyInput(){
  if(keyIsDown(68) && (playerX + hsp) < 1255 && !youWon){
    playerX = playerX + hsp;
  }
  if(keyIsDown(65) && (playerX - hsp) > 25 && !youWon){
    playerX = playerX - hsp;
  }
}

//Handles gravity and collision with the ground. Again, this isn't true collision but it works to make a pseudo-platformer
function gravityHandler(){
  playerY = playerY + vsp;
  if(playerY >= 600){
    playerY = 599;
      onGround = true;
  }
  if(vsp < 20){
    vsp++; 
  }
}

//Generates the win text
function winGenerate(){
  if(youWon){
    fill(255,0,0);
    textSize(32);
    text("CONGRATURATIONS, YOU DA WINNER", 640, 500)
  }
}

function winCheck(){
  if(playerX >= 1100 && playerY >= 525 && playerX <= 1200){
    youWon = true;
  }
}

//Generates all level obstacles and decorations. The title is a bit repetitive, but it works all the same.
function levelDraw(){
  fill(0,255,0)
  rect(0,625,1280,500);
  obstacleObject(200, 100, 50, 100)
  fill(0,240,100)
  obstacleObject(600, 100, 25, 200)
  fill(100,0,255);
  rect(1100,525,100,100);
}

//Handles placing objects using the mouse.
function placedObject(){
  if(obPlaced){
    fill(0,0,255);
    circle(placeX,placeY,100);
  }
}

function setup(){
  createCanvas(1280, 1000);
  for(var i =0; i < 65; i++){
    obX[i] = 10 * Math.max((2 * i),1);
    obY[i] = 200;
    obD[i] = 10; //* (2 * Math.sin(i));
  }
}

function draw(){
  background(0,255,255);
  playerObject(playerX, playerY, 50)
  levelDraw()
  keyInput()
  gravityHandler()
  obstacleMove()
  winCheck()
  for(var i = 0; i < obX.length; i++){
    fill(255,0,0);
    circle(obX[i], obY[i] + (20 * Math.sin(i + sinX)), obD[i]);
  }
  sinX = sinX + 0.1;
}

function keyPressed(){
  if(key == 'w' && onGround && !youWon){
    vsp = -20;
    onGround = false;
  }
}
function mouseClicked() 
{  
      obPlaced = true;
      placeX = mouseX;
      placeY = mouseY;
}





