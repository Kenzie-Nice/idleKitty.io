var myImageObject;


function setup()

{createCanvas(600, 700);
myImageObject = new myImage("images/Idle (1).png", 100, 100, 640, 472);

}

function draw()
{
background(120);
myImageObject.draw();

}