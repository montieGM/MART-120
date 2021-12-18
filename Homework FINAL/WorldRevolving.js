var sinX = 640;
var xIn = 0;
var xIn2 = 1;
var sinY = 500;
var yIn = 0;

var backgroundX = 0;
var backgroundY = 100;

function setup(){
  createCanvas(1280, 1000);
}

function draw(){
  background(0,0,0);


  //This creates the "inner ring" of red circles that rotate slowly
  fill(255,0,0);
  for(i = 0; i < 10; i++){
    sinX = 400 * Math.sin(xIn + i) + 600;
    sinY = 300 * Math.cos(yIn + i) + 500;
    circle(sinX, sinY, 50);
  }

  //This code creates the central text. Unfortuantely I couldn't align it automatically, so all of these values are hand-adjusted
  fill(255,255,255);
  textSize(30);
  text("CREATIVE CODING",500,500);
  text("It revolves around you!",485,550);

  //By offsetting the in value for this set of circles, it creates a 3d "revolving" effect
  fill(200,100,0);
  for(i = 0; i < 20; i++){
    sinX = 400 * Math.sin(xIn2 + i) + 600;
    sinY = 300 * Math.cos(yIn + i) + 500;
    circle(sinX, sinY, 20);
  }

  //This accomplishes something similar to the last for loop, but it instead counter-rotates to create an orbit-like rotating shape with the other circle
  fill(100,200,0);
  for(i = 0; i < 20; i++){
    sinX = 400 * (-1 * Math.sin(xIn2 + i)) + 600;
    sinY = 300 * Math.cos(yIn + i) + 500;
    circle(sinX, sinY, 20);
  }

  //By inverting the Cosine, it creates a 3d shape that seems to "tumble" through space
  fill(100,0,100);
  for(i = 0; i < 15; i++){
    sinX = 600 * Math.sin(xIn + i) + 600;
    sinY = 500 * (-1 * Math.cos(xIn2 + i)) + 500;
    circle(sinX, sinY, 50);
  }

  //This code accomplishes the same as the previous loop, but it also counter-Rotates to complete the shape.
  fill(0,0,255);
  for(i = 0; i < 15; i++){
    sinX = 600 * (-1 * Math.sin(xIn + i)) + 600;
    sinY = 500 * (-1 * Math.cos(xIn2 + i)) + 500;
    circle(sinX, sinY, 50);
  }

  //This increments the various In values
  xIn = xIn + 0.01;
  xIn2 = xIn2 + 0.05;
  yIn = yIn + 0.01;
}
