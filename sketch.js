var myImage01;
var myImage02;
var myImage03;

var myImage01N;
var myImage02N;
var myImage03N;

var myImage01A;
var myImage02A;
var myImage03A;
var v = 1;
var value;

var mic;



function preload(){
  myImage01 = loadImage('./assets/monster01.png');
  myImage02 = loadImage('./assets/monster02.png');
  myImage03 = loadImage('./assets/monster03.png');

  myImage01N = loadImage('./assets/monster01Nausea.png');
  myImage02N = loadImage('./assets/monster02Nausea.png');
  myImage03N = loadImage('./assets/monster03Nausea.png');

  myImage01A = loadImage('./assets/monster01Anger.png');
  myImage02A = loadImage('./assets/monster02Anger.png');
  myImage03A = loadImage('./assets/monster03Anger.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('orange');
  imageMode(CENTER);
  image(myImage01, width/2, height/2, 378, 579);
  setShakeThreshold(10);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var speedY = 10 * random(-20,20);
  var speedX = 10 * random(-20,20);
  var yDir = 1;
  var xDir = 1;
  var y = speedY * yDir;
  var x = speedX * xDir;

var  vol = mic.getLevel() * 10000;
if(vol > 10 && v==1){
  background('orange');
  image(myImage01A,x + width/2, y + height/2, 378, 579);
} else if(vol > 10 && v == 3){
  background('lightblue');
  image(myImage02A,x + width/2, y + height/2, 378, 579);
} else if(vol > 10 && v == 2){
  background('lightgreen');
  image(myImage03A,x + width/2, y + height/2, 378, 579);
}


  if(y > height || y < 0){
    yDir = yDir * -1;
  }

  if(x > width || x < 0){
    xDir = xDir * -1;
  }

}

function deviceTurned(){
  if(v == 1 && turnAxis === 'X'){
    background('lightblue');
    image(myImage02, width/2, height/2, 378, 579);
    v = 3;
  } else if(v == 2 && turnAxis === 'X'){
    background('orange');
    image(myImage01, width/2, height/2, 378, 579);
    v = 1;
  } else if(v == 3 && turnAxis === 'X'){
    background('lightgreen');
    image(myImage03, width/2, height/2, 378, 579);
    v = 2;
  }

  if(v == 3 && turnAxis === 'Z'){
    background('lightblue');
    image(myImage02, width/2, height/2, 378, 579);
  } else if(v == 1 && turnAxis === 'Z'){
    background('orange');
    image(myImage01, width/2, height/2, 378, 579);
  } else if(v == 2 && turnAxis === 'Z'){
    background('lightgreen');
    image(myImage03, width/2, height/2, 378, 579);
  }
}

function deviceShaken(){
  if(v == 3){
    background('lightblue');
    image(myImage02N, width/2, height/2, 378, 579);
  } else if(v == 1){
    background('orange');
    image(myImage01N, width/2, height/2, 378, 579);
  } else if(v == 2){
    background('lightgreen');
    image(myImage03N, width/2, height/2, 378, 579);
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
