function setup()
    {
        createCanvas(400, 600);
    }

function draw()
    {
        background(200);
        textSize(15);
        fill(0,0,0);
        text("This is ME and definitley not Mario Jumpman Mario.", 10,80);
        
        //Body
        fill(255,0,0);
    triangle(100,500,300,500,200,200);
        fill(255,255,0);
        point(150,550);
        //Head
        fill(255, 239, 209);
        circle(200, 250 , 200);
        fill(255,0,0);
        rect(100,110,200,80);
        rect(200,170,150,20);
        fill(255);
        circle(250,150,60);
        circle(300,230,60);
        circle(220,230,60);
        fill(0);
        textSize(26);
        text("M",240,160);
        circle(310,230,20);
        circle(230,230,20);
        fill(0);
        ellipse(270,310,100,75)
        line(270,330,150,300);
        line(150,300,140,290);
        fill(255, 239, 209);
        ellipse(270,275,100,75)
        
        //name
        textSize(30);
        fill(200,100,0);
        text("Ivy 'Jumpman' Olson", 100, 550)
        
    }