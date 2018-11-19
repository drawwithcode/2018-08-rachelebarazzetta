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
var r = 1;

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
  background('#3891A6');
  imageMode(CENTER);
  setShakeThreshold(10);
  angleMode(DEGREES);

  mic = new p5.AudioIn();
  mic.start();

  textAlign(CENTER);
  textFont('Muli');
  fill('#D1D3D4');

  textStyle(BOLD);
  textSize(89);
  text('Tinder monster', width/2, height/2-400);
  textSize(30);
  text('Turn on X axis:', width/2, height/2-300);
  text('Turn on Z axis:', width/2, height/2-150);
  text('Shake the phone:', width/2, height/2-0);
  text('CLICK TO BEGIN', width/2, height/2+300);

  textStyle(NORMAL);
  text('to change the monster', width/2, height/2-260);
  text('to go back to normal', width/2, height/2-110)
  text('see what happen to the monster', width/2, height/2+40);
  text('Do not be too loud, monster do not like noises', width/2, height/2+150);
}

function draw() {

if(mouseIsPressed == true && r == 1){
    r = 0;
    background('#FE654F');
    image(myImage01, width/2, height/2, 378, 579);
  }

if(r==0){
  var speedY = 10 * random(-20,20);
  var speedX = 10 * random(-20,20);
  var yDir = 1;
  var xDir = 1;
  var y = speedY * yDir;
  var x = speedX * xDir;

  var  vol = mic.getLevel()*100;
  console.log(vol);

  if(vol > 40 && v==1){
    background('#FE654F');
    image(myImage01A,x + width/2, y + height/2, 378, 579);
  } else if(vol > 40 && v == 3){
    background('#8963BA');
    image(myImage02A,x + width/2, y + height/2, 378, 579);
  } else if(vol > 40 && v == 2){
    background('#8963BA');
    image(myImage03A,x + width/2, y + height/2, 378, 579);
  }
    if(y > height || y < 0){
      yDir = yDir * -1;
    }
    if(x > width || x < 0){
      xDir = xDir * -1;
    }
  }


}

function deviceTurned(){
  if(r==0){
  if(v == 1 && turnAxis === 'X'){
    background('#8963BA');
    image(myImage02, width/2, height/2, 378, 579);
    v = 3;
  } else if(v == 2 && turnAxis === 'X'){
    background('#FE654F');
    image(myImage01, width/2, height/2, 378, 579);
    v = 1;
  } else if(v == 3 && turnAxis === 'X'){
    background('#75F4F4');
    image(myImage03, width/2, height/2, 378, 579);
    v = 2;
  }

  if(v == 3 && turnAxis === 'Z'){
    background('#8963BA');
    image(myImage02, width/2, height/2, 378, 579);
  } else if(v == 1 && turnAxis === 'Z'){
    background('#FE654F');
    image(myImage01, width/2, height/2, 378, 579);
  } else if(v == 2 && turnAxis === 'Z'){
    background('#75F4F4');
    image(myImage03, width/2, height/2, 378, 579);
  }
}
}

function deviceShaken(){
  if(r==0){
  var speedY = 10 * random(-20,20);
  var speedX = 10 * random(-20,20);
  var yDir = 1;
  var xDir = 1;
  var y = speedY * yDir;
  var x = speedX * xDir;

  if(v == 3){
    background('#8963BA');
    image(myImage02N,width/2, y + height/2, 378, 579);
  } else if(v == 1){
    background('#FE654F');
    image(myImage01N, width/2, y + height/2, 378, 579);
  } else if(v == 2){
    background('#75F4F4');
    image(myImage03N, width/2, y + height/2, 378, 579);
  }
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
