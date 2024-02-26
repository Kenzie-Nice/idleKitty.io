var myImageObject, myImageObject,myImageObject2,myImageObject3,myImageObject4,myImageObject5,myImageObject6,myImageObject7,myImageObject8,myImageObject9,myImageObject10;

var myImageArray = [] 

var i = 0;
function setup() {
  createCanvas(400, 400);
  myImageObject1 = new myImages("images/Idle (1).png", 100, 100, 640, 472);
  myImageObject2 = new myImages("images/Idle (2).png", 100, 100, 640, 472);
  myImageObject3 = new myImages("images/Idle (3).png", 100, 100, 640, 472);
  myImageObject4 = new myImages("images/Idle (4).png", 100, 100, 640, 472);
  myImageObject5 = new myImages("images/Idle (5).png", 100, 100, 640, 472);
  myImageObject6 = new myImages("images/Idle (6).png", 100, 100, 640, 472);
  myImageObject7 = new myImages("images/Idle (7).png", 100, 100, 640, 472);
  myImageObject8 = new myImages("images/Idle (8).png", 100, 100, 640, 472);
  myImageObject9 = new myImages("images/Idle (9).png", 100, 100, 640, 472);
  myImageObject10 = new myImages("images/Idle (10).png", 100, 100, 640, 472);
  
  myImageArray['0'] = myImageObject;
  myImageArray['1'] = myImageObject2;
  myImageArray['2'] = myImageObject3;
  myImageArray['3'] = myImageObject4;
  myImageArray['4'] = myImageObject5;
  myImageArray['5'] = myImageObject6;
  myImageArray['6'] = myImageObject7;
  myImageArray['7'] = myImageObject8;
  myImageArray['8'] = myImageObject9;
  myImageArray['9'] = myImageObject10;

  setInterval1(updateImage, 50);
}

function draw() {
  background(220);
  
  
  myImageArray[i].draw();
}
function updateImage()
{
  i++;
  if(i > myImageArray.length-1)
  {
    i = 0;
  }
}