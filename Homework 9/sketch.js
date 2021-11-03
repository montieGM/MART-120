var x1 = 270;
var x2 = 200;
var y1 = 500;

var movespeed1 = Math.floor(Math.random() * 10) + 1;
var movespeed2 = Math.floor(Math.random() * 10) + 1;
var movespeed3 = Math.floor(Math.random() * 10) + 1;

var titleSize = 15;
var titleMax = 75
var titleMin = 3;
var scaleDir = 1;


function setup()
    {
        createCanvas(400, 600);
    }

function draw()
    {
        background(200);
        textSize(titleSize);
        fill(0,0,0);
        text("This is ME and definitley not Mario Jumpman Mario.", 10,80);
        titleSize += 5 * scaleDir;

        if(titleSize >= titleMax || titleSize <= titleMin){
            scaleDir *= -1;
        }
        var y1a = y1 - 300;

        //Body
        fill(255,0,0);
        triangle(100,y1,300,y1,200,y1a);
        fill(255,255,0);
        point(150,550);
        //Head
        fill(255, 239, 209);
        circle(x2, 250 , 200);
        fill(255,0,0);
        rect(100,110,200,80);
        rect(200,170,150,20);
        fill(255);
        circle(x1,150,60);
        circle(x1,230,60);
        circle(x1,230,60);
        fill(0);
        textSize(26);
        text("M",240,160);
        circle(x1,y1,20);
        circle(x2,y1,20);
        fill(0);
        ellipse(x1,310,100,75)
        line(270,330,150,300);
        line(150,300,140,290);
        fill(255, 239, 209);
        ellipse(270,275,100,75)
        
        //name
        textSize(30);
        fill(200,100,0);
        text("Ivy 'Jumpman' Olson", 100, 550)

        x1 += movespeed1;
        x2 += movespeed2;
        y1 += movespeed3;

        if(x1 > 350 || x1 < 50){
            movespeed1 *= -1;
        }
        if(x2 > 350 || x2 < 50){
            movespeed2 *= -1;
        }
        if(y1 > 550 || y1 < 50){
            movespeed3 *= -1;
        }
    }