
var playerX = 100;
var playerY = 100;
var obstacleY = 0;
var vsp = 20;
var hsp = 10;
var onGround = false;
var youWon = false;
var obPlaced = false;
var placeX = 0;
var placeY = 0;

function setup(){
	createCanvas(1280, 1000);
}
function draw(){
	background(0,255,255);
  
  fill(255,0,0);
  
	circle(playerX, playerY, 50);
  
  fill(0,255,0)
  
  rect(0,625,1280,500);
  rect(600,100 + obstacleY, 50, 100)
  rect(200,100 + obstacleY, 50, 100)
  fill(100,0,255);
  rect(1100,525,100,100);
  obstacleY = obstacleY + 10;
  if(obstacleY >= 890){
  	obstacleY = -200;
  }
  playerY = playerY + vsp;
	if(playerY >= 600){
		playerY = 599;
    	onGround = true;
	}
  if(vsp < 20){
    vsp++; 
  }
  if(keyIsDown(68) && (playerX + hsp) < 1255 && !youWon){
    playerX = playerX + hsp;
  }
  if(keyIsDown(65) && (playerX - hsp) > 25 && !youWon){
    playerX = playerX - hsp;
  }
  if(playerX >= 1100 && playerY >= 525 && playerX <= 1200){
  	youWon = true;
  }
  if(youWon){
  	fill(255,0,0);
  	textSize(32);
  	text("CONGRATURATIONS, YOU DA WINNER", 640, 500)
  }
  if(obPlaced){
  	fill(0,0,255);
  	circle(placeX,placeY,100);
  }
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
